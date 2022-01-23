import System from '~/models/system'
import useQuery from '~/hooks/use-query'

export const GET_ALL_SYSTEMS_QUERY = `query AllSystems {
  systems {
    id
    name
    constellation
    region
    security
  }
}`

export const GET_SYSTEM_BY_NAME_QUERY = `query SystemByName($name: String!) {
  system(name: $name) {
    id
    name
    constellation
    region
    security
  }
}`

export const useSystems = (name?: string) => {
  const query = name ? GET_SYSTEM_BY_NAME_QUERY : GET_ALL_SYSTEMS_QUERY
  const variables = name ? { name } : {}
  return useQuery<System | System[], { name?: string }>(query, variables)

}

export default useSystems
