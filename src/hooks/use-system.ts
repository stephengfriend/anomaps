import System from '~/models/system'
import useQuery from '~/hooks/use-query'

export const GET_SYSTEM_BY_NAME_QUERY = `query GetAllSystems($name: String!) {
  system: getSystemByName(name: $ name) {
    id
    name
    constellation
    region
    security
  }
}`

export const useSystems = (name: string) => useQuery<System, { name: string }>(GET_SYSTEM_BY_NAME_QUERY, { name })

export default useSystems

export { System }
