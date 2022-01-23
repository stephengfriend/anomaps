import System from '~/models/system'

export const resolvers = {
  Query: {
    systems: async (): Promise<System[]> => System.getAll(),
    system: async (_: any, { name }: { name: string }): Promise<System> =>
      System.getByName(name),
  },
}

export default resolvers
