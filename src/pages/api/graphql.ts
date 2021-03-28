import { getSession } from 'next-auth/client'

import { ApolloServer } from '~/graphql'

import { ContextFunction } from 'apollo-server-core'

const context: ContextFunction = async ({ req }) => ({ session: await getSession({ req }) })

const apolloServer = new ApolloServer({
  context,
  playground: {
    settings: {
      'request.credentials': 'include',
    },
  },
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })
