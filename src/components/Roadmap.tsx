import Head from 'next/head'

import { useState, useRef } from 'react'
import toast from 'react-hot-toast'

import Item from '~/components/Item'
import LoadingSpinner from '~/components/LoadingSpinner'

export default function Roadmap({ features, ip }) {
  const [isCreateLoading, setCreateLoading] = useState(false)
  const [isEmailLoading, setEmailLoading] = useState(false)

  const featureInputRef = useRef<HTMLInputElement>(null)
  const subscribeInputRef = useRef<HTMLInputElement>(null)

  const { data, error } = useSWR('/api/features', fetcher, {
    initialData: { features },
  })

  if (error) {
    toast.error(error)
  }

  const addFeature = async (e) => {
    e.preventDefault()
    setCreateLoading(true)

    const res = await fetch('/api/create', {
      body: JSON.stringify({
        title: featureInputRef.current?.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()
    setCreateLoading(false)

    if (error) {
      toast.error(error)
      return
    }

    mutate('/api/features')
    featureInputRef.current?.value && featureInputRef.current.value = ''
  }

  const subscribe = async (e) => {
    e.preventDefault()
    setEmailLoading(true)

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: subscribeInputRef.current?.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()
    setEmailLoading(false)

    if (error) {
      return toast.error(error)
    }

    toast.success('You are now subscribed to feature updates!')
    subscribeInputRef.current.value = ''
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Roadmap – Next.js and Redis Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-4 text-center sm:px-20">
        <div className="flex items-center justify-center w-16 h-16 my-8 bg-black rounded-full sm:w-24 sm:h-24">
          <img src="/upstash.svg" alt="Upstash Logo" className="h-8 sm:h-16" />
        </div>
        <h1 className="mb-2 text-lg font-bold sm:text-2xl">Help us prioritize our roadmap</h1>
        <h2 className="mx-4 text-md sm:text-xl">
          Create or vote up features you want to see in the next release.
        </h2>

        <div className="flex flex-wrap items-center justify-around h-full max-w-4xl my-8 bg-white border border-gray-100 rounded-md shadow-xl sm:w-full">
          <div className="w-full mx-8">
            <form className="relative my-8" onSubmit={addFeature}>
              <input
                ref={featureInputRef}
                aria-label="Suggest a feature for our roadmap"
                placeholder="I want..."
                type="text"
                maxLength={150}
                required
                className="block w-full py-3 pl-3 mt-1 text-lg text-gray-900 placeholder-gray-400 border border-gray-200 rounded-md pr-28 focus:outline-none focus:ring focus:ring-blue-300"
              />
              <button
                className="absolute flex items-center justify-center w-24 h-10 px-4 text-lg text-white bg-black border rounded-md right-2 top-2 focus:outline-none focus:ring focus:ring-blue-300 focus:bg-gray-800"
                type="submit"
              >
                {isCreateLoading ? <LoadingSpinner invert /> : 'Request'}
              </button>
            </form>
          </div>
          <div className="w-full">
            {data.features.map((feature, index) => (
              <Item
                key={index}
                isFirst={index === 0}
                isLast={index === data.features.length - 1}
                isReleased={false}
                hasVoted={feature.ip === ip}
                feature={feature}
              />
            ))}
          </div>
          <hr className="w-full mx-8 my-8 border-gray-200 border-1" />
          <div className="w-full mx-8">
            <p className="flex text-gray-500">
              Leave your email address here to be notified when feature requests are released.
            </p>
            <form className="relative my-4" onSubmit={subscribe}>
              <input
                ref={subscribeInputRef}
                aria-label="Email for updates"
                placeholder="Email Address"
                type="email"
                autoComplete="email"
                maxLength={60}
                required
                className="block w-full px-3 py-3 mt-1 text-lg text-gray-900 placeholder-gray-400 border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
              <button
                className="absolute flex items-center justify-center h-10 px-4 text-gray-900 border border-gray-200 rounded-md right-2 top-2 w-14 focus:outline-none focus:ring focus:ring-blue-300 focus:bg-gray-100"
                type="submit"
              >
                {isEmailLoading ? <LoadingSpinner /> : 'OK'}
              </button>
            </form>
            <div className="flex flex-col items-center justify-between sm:flex-row">
              <p className="flex items-center justify-center w-full my-8 sm:justify-start">
                Powered by
                <img src="/vercel.svg" alt="Vercel Logo" className="h-5 mx-2" />
                and
                <img src="/upstash.svg" alt="Upstash Logo" className="h-5 mx-2" />
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex mb-4 rounded focus:outline-none focus:ring focus:ring-blue-300 sm:mb-0 min-w-max"
                href="https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fwith-redis&project-name=redis-roadmap&repository-name=redis-roadmap&demo-title=Redis%20Roadmap&demo-description=Create%20and%20upvote%20features%20for%20your%20product.&demo-url=https%3A%2F%2Froadmap-redis.vercel.app%2F&integration-ids=oac_V3R1GIpkoJorr6fqyiwdhl17"
              >
                <img src="https://vercel.com/button" alt="Vercel Deploy Button" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
