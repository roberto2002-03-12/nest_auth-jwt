import { DataSource } from 'typeorm';
import { ConfigType } from '@nestjs/config';
import config from '../../config/config';
import { User } from 'src/modules/user/entity/user.entity';

export const databaseProviders = [
  {
    provide: 'MARIADB',
    useFactory: async (configService: ConfigType<typeof config>) => {
      const dataSource = new DataSource({
        type: 'mariadb',
        host: configService.database.databaseHost,
        port: configService.database.databasePort,
        username: configService.database.databaseUsername,
        password: configService.database.databasePassword,
        database: configService.database.databaseName,
        entities: [User],
        synchronize: false,
      });

      return dataSource.initialize();
    },
    inject: [config.KEY]
  },
];