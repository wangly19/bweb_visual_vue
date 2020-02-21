const mysqlConfig: Object = {
	type: 'mysql',
	host: 'localhost',
	port: 3306,
	username: 'root',
	password: '123456',
	database: 'test',
	timezone: 'UTC',
	charset: 'utf8mb4',
	multipleStatements: true,
	dropSchema: false,
	synchronize: true,
	logging: true
}
export default mysqlConfig
