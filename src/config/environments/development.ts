import { registerAs } from '@nestjs/config'
import { DevelopmentEnvProps } from '../interfaces'

export default registerAs('config', (): DevelopmentEnvProps => {
  return {
    port: parseInt(process.env.PORT),
    database: {
      databaseHost: process.env.DATABASE_HOST,
      databasePort: parseInt(process.env.DATABASE_PORT),
      databaseName: process.env.DATABASE_NAME,
      databaseUsername: process.env.DATABASE_USERNAME,
      databasePassword: process.env.DATABASE_PASSWORD
    },
    jwtSecret: process.env.JWT_SECRET,
  }
})
