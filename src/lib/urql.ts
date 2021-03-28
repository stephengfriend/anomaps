import { createClient, dedupExchange, fetchExchange, cacheExchange } from 'urql'
import { executeExchange } from '@urql/exchange-execute'

import schema from '~/graphql/schema'

const exchanges = [dedupExchange, cacheExchange]

if (typeof window === 'undefined') {
  exchanges.push(executeExchange({ schema }))
} else {
  exchanges.push(fetchExchange)
}

const client = createClient({
  url: '/api/graphql',
  exchanges,
})

export default client
