import * as urql from 'urql'

import { DocumentNode } from 'graphql'

export const useQuery = <Data = any, Variables = object>(
  query: string | DocumentNode,
  variables?: Variables
) => {
  const [result, reexecuteQuery] = urql.useQuery<Data, Variables>({
    query,
    variables
  })

  return result
}

export default useQuery
