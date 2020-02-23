import { User } from "src/users/user.db";
import { Area } from 'src/entity/area.zd'
const config: Object = {
	type: 'mysql',
	host: 'localhost',
	port: 3306,
	username: 'root',
	password: '141820',
	database: 'visual',
	timezone: 'UTC',
	charset: 'utf8mb4',
    entities: [User, Area],
	multipleStatements: true,
	dropSchema: false,
	synchronize: true,
	logging: true
}

export default config
