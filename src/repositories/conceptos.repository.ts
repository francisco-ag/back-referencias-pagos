import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {Conceptos, ConceptosRelations} from '../models';

export class ConceptosRepository extends DefaultCrudRepository<
  Conceptos,
  typeof Conceptos.prototype.clave,
  ConceptosRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(Conceptos, dataSource);
  }
}
