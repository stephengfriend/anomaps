import { ApolloServer, Config } from 'apollo-server-micro';

import schema from '~/graphql/schema'

const env = process.env?.NODE_ENV || 'development';
const isDevEnv = env.includes('dev');

class Server extends ApolloServer {
	public constructor(config?: Config) {
		super({
			schema,
			playground: isDevEnv,
			tracing: isDevEnv,
			...config,
		});
	}
}

export { Server as ApolloServer }

export default new Server()
