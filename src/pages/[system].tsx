import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'

import { GET_ALL_SYSTEMS_QUERY } from '~/hooks/use-systems'
import { GET_SYSTEM_BY_NAME_QUERY } from '~/hooks/use-system'
import urql from '~/lib/urql'
import System from '~/models/system'

import Head from 'next/head'

import { GetStaticPaths, GetStaticProps } from 'next'
import { useEffect } from 'react'

const Page: React.FC<System> = ({ id, name }) => {
  const router = useRouter()
  const [session, loading] = useSession()

  useEffect(() => {
    if (!loading && !session) {
      router.push('/')
    }
  }, [loading, router, session])

  return (
    <>
      <Head>
        <title>{name}</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <main>
        {loading && 'loading'}
        {!loading && session && `System id for ${name} is ${id}`}
      </main>
    </>
  )
}

export default Page

export const getStaticPaths: GetStaticPaths = async () => {
  const { data, error } = await urql.query<{ systems: System[] }>(GET_ALL_SYSTEMS_QUERY).toPromise()

  console.log(data);

  if (error) {
    console.error(error)
    return ({ paths: [], fallback: false })
  }

  return {
    paths:
      data?.systems?.map(({ name: system }) => ({
        params: { ...(system ? { system: system.toLowerCase() } : '') },
      })) || [],
    fallback: false, // Note: In a static-only build, we don't need fallback rendering.
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.system) {
    return {
      props: {},
    }
  }

  const { data, error } = await urql.query<{ system: System }>(GET_SYSTEM_BY_NAME_QUERY).toPromise()

  console.log(data);

  if (error) {
    console.error(error)
    return ({
      props: {},
    })
  }

  return {
    props: {
      ...data?.system,
    },
    revalidate: 1,
  }
}
