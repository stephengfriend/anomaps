import systems from '~/data/systems.json'

import NotFoundError from '~/errors/not-found'

export default class System {
  id: string
  name: string
  constellation: string
  region: string
  security: string

  constructor(id: string, name: string, constellation: string, region: string, security: string) {
    this.id = id
    this.name = name
    this.constellation = constellation
    this.region = region
    this.security = security
  }

  static async getAll(): Promise<System[]> {
    return systems;
  }

  static async getById(id: string): Promise<System> {
    const system = systems.filter((system: System) => system.id === id)?.[0]

    if (!system) throw new NotFoundError(`Unknown system id ${id}`)

    const { name, constellation, region, security } = system

    return { id, name, constellation, region, security }
  }

  static async getByName(name: string): Promise<System> {
    const system = systems.filter((system: System) => system.name === name)?.[0]

    if (!system) throw new NotFoundError(`Unknown system name ${name}`)

    const { id, constellation, region, security } = system

    return { id, name, constellation, region, security }
  }
}
