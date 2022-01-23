import { useSession } from 'next-auth/client'

import { GET_ALL_SYSTEMS_QUERY, GET_SYSTEM_BY_NAME_QUERY } from '~/hooks/use-systems'
import useRedirectToUppercase from '~/hooks/use-redirect-to-uppercase'
import urql from '~/lib/urql'
import System from '~/models/system'

import Head from 'next/head'

import { GetStaticPaths, GetStaticProps } from 'next'

const Page: React.FC<System> = ({ id, name }) => {
  const [session, loading] = useSession()

  useRedirectToUppercase()

  return (
    <>
      <Head>
        <title>{name}</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <main>
        {loading && 'loading'}
        {!loading && session && `System id for ${name} is ${id}`}
        {!loading && !session && `No ${name} anomalies for you!`}
      </main>
    </>
  )
}

export default Page

export const getStaticPaths: GetStaticPaths = async () => {
  const { data, error } = await urql.query<{ systems: System[] }>(GET_ALL_SYSTEMS_QUERY).toPromise()

  if (error) throw error

  return {
    paths:
      data?.systems?.map(({ name }) => ({
        params: { name },
      })) || [],
    fallback: true, // Note: In a static-only build, we don't need fallback rendering.
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (Array.isArray(params?.name) || !params?.name) return { props: {}, notFound: true }

  const { data, error } = await urql
    .query<{ system: System }>(GET_SYSTEM_BY_NAME_QUERY, { name: params.name })
    .toPromise()

  if (error) throw error

  // No matching system name
  if (!data) {
    return {
      props: {},
      notFound: true,
    }
  }

  return {
    props: {
      ...data?.system,
    },
    revalidate: 1,
  }
}
