import System from '~/models/system'
import useQuery from '~/hooks/use-query'

export const GET_ALL_SYSTEMS_QUERY = `query GetAllSystems {
  systems: getAllSystems() {
    id
    name
    constellation
    region
    security
  }
}`

export const useSystems = () => useQuery<System[], never>(GET_ALL_SYSTEMS_QUERY)

export default useSystems

export { System }
