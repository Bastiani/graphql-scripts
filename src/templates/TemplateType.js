import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLBoolean
} from "graphql";

import { connectionDefinitions } from "../../graphql/connection/customConnection";
import { registerType, nodeInterface } from "../../interface/Node";

const TemplateType = registerType(
  new GraphQLObjectType({
    name: "Template",
    description: "Template type definition",
    fields: () => ({
      id: {
        type: new GraphQLNonNull(GraphQLID),
        description: "ID of the user"
      },
      active: {
        type: GraphQLBoolean,
        description: "Active of the user"
      }
    }),
    interfaces: () => [nodeInterface]
  })
);

export const TemplateConnection = connectionDefinitions({
  name: "Template",
  nodeType: GraphQLNonNull(TemplateType)
});

export default TemplateType;
