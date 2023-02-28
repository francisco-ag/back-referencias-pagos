import {Entity, model, property} from '@loopback/repository';

@model(
  {
    settings:{
      postgresql: {schema: 'public', table: 'conceptos'}
    }
  }
)

export class Conceptos extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
    required: false,
  })
  id ?: number;
  
  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'string',
    required: true,
  })
  clave: string;

  @property({
    type: 'number',
    required: true,
  })
  importe: number;

  @property({
    type: 'boolean',
    required: true,
  })
  habilitado: boolean;

  @property({
    type: 'string',
    required: true,
  })
  tipo: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Conceptos>) {
    super(data);
  }
}

export interface ConceptosRelations {
  // describe navigational properties here
}

export type ConceptosWithRelations = Conceptos & ConceptosRelations;
