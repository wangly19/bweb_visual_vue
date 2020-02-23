import { User } from "src/users/user.db";

const config: Object = {
	type: 'mysql',
	host: 'localhost',
	port: 3306,
	username: 'root',
	password: '141820',
	database: 'visual',
	timezone: 'UTC',
	charset: 'utf8mb4',
    entities: [User],
	multipleStatements: true,
	dropSchema: false,
	synchronize: true,
	logging: true
}

export default config
