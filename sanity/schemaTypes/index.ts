import { type SchemaTypeDefinition } from 'sanity'
import { homePageSchema } from './homepage'
import { workers } from './workers'
import { services } from './services'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homePageSchema, workers, services],
}
