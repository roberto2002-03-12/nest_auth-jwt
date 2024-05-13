
export interface DatabaseProps {
  databaseHost: string;
  databasePort: number;
  databaseName: string;
  databaseUsername: string;
  databasePassword: string;
}

export interface BaseEnvProps {
  port: number;
  database: DatabaseProps;
  jwtSecret: string;
}
