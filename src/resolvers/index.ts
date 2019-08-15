// @ts-ignore typings are outdated
import JSON, { GraphQLJSONObject as JSONObject } from 'graphql-type-json'

import {
  queries as userQueries,
  root as userRoot,
  mutations as userMutations,
} from './user'

export default {
  JSON,
  JSONObject,
  ...userRoot,
  Query: {
    ...userQueries,
  },
  Mutation: {
    ...userMutations,
  },
}
