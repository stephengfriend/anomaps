import System from '~/models/system'

export const resolvers = {
  Query: {
    getAllSystems: async (): Promise<System[]> => System.getAll(),
    getSystemByName: async (_: any, { name }: { name: string }): Promise<System> =>
      System.getByName(name),
  },
}

export default resolvers
