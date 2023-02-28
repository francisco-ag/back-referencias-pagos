import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'postgres',
  connector: 'postgresql',
  url: '',
  host: '172.30.1.244',
  port: 5432,
  user: 'hfxezea',
  password: 'LRf3tBONtGpM2K9WRaw69S3y2VLTU6cY',
  database: 'hfxezea'
};


/***
 * 
 * *******   DESARRROLLO // BD LOCAL  
 */
// const config = {
//   name: 'postgres',
//   connector: 'postgresql',
//   url: '',
//   host: 'localhost',
//   port: 5432,
//   user: 'postgres',
//   password: 'root',
//   database: 'generador-referencias'
// };


// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class PostgresDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'postgres';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.postgres', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
