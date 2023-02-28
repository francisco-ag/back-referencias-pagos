import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Conceptos} from '../models';
import {ConceptosRepository} from '../repositories';

export class ConceptosController {
  constructor(
    @repository(ConceptosRepository)
    public conceptosRepository : ConceptosRepository,
  ) {}

  @post('/conceptos')
  @response(200, {
    description: 'Conceptos model instance',
    content: {'application/json': {schema: getModelSchemaRef(Conceptos)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Conceptos, {
            title: 'NewConceptos',
            
          }),
        },
      },
    })
    conceptos: Conceptos,
  ): Promise<Conceptos> {
    return this.conceptosRepository.create(conceptos);
  }

  @get('/conceptos/count')
  @response(200, {
    description: 'Conceptos model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Conceptos) where?: Where<Conceptos>,
  ): Promise<Count> {
    return this.conceptosRepository.count(where);
  }

  @get('/conceptos')
  @response(200, {
    description: 'Array of Conceptos model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Conceptos, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Conceptos) filter?: Filter<Conceptos>,
  ): Promise<Conceptos[]> {
    return this.conceptosRepository.find(filter);
  }

  @patch('/conceptos')
  @response(200, {
    description: 'Conceptos PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Conceptos, {partial: true}),
        },
      },
    })
    conceptos: Conceptos,
    @param.where(Conceptos) where?: Where<Conceptos>,
  ): Promise<Count> {
    return this.conceptosRepository.updateAll(conceptos, where);
  }

  @get('/conceptos/{id}')
  @response(200, {
    description: 'Conceptos model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Conceptos, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Conceptos, {exclude: 'where'}) filter?: FilterExcludingWhere<Conceptos>
  ): Promise<Conceptos> {
    return this.conceptosRepository.findById(id, filter);
  }

  @patch('/conceptos/{id}')
  @response(204, {
    description: 'Conceptos PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Conceptos, {partial: true}),
        },
      },
    })
    conceptos: Conceptos,
  ): Promise<void> {
    await this.conceptosRepository.updateById(id, conceptos);
  }

  @put('/conceptos/{id}')
  @response(204, {
    description: 'Conceptos PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() conceptos: Conceptos,
  ): Promise<void> {
    await this.conceptosRepository.replaceById(id, conceptos);
  }

  @del('/conceptos/{id}')
  @response(204, {
    description: 'Conceptos DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.conceptosRepository.deleteById(id);
  }
}
