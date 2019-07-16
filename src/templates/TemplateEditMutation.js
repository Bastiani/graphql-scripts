import { GraphQLString, GraphQLNonNull, GraphQLID } from "graphql";
import { fromGlobalId, mutationWithClientMutationId } from "graphql-relay";

import * as TemplateLoader from "../TemplateLoader";
import TemplateType from "../TemplateType";
import TemplateModel from "../TemplateModel";

import TemplateFieldsType from "../TemplateFieldsType";

const mutation = mutationWithClientMutationId({
  name: "TemplateEdit",
  inputFields: {
    id: {
      type: GraphQLNonNull(GraphQLID)
    },
    ...TemplateFieldsType
  },
  mutateAndGetPayload: async (args, context) => {
    const { id, active } = args;

    const template = await TemplateModel.findOne({
      _id: fromGlobalId(id).id
    });

    // If not, throw an error
    if (!template) {
      return {
        error: "Template inválido"
      };
    }

    // Edit record
    await template.update({ active });

    // Clear dataloader cache
    TemplateLoader.clearCache(context, template._id);

    return {
      id: template._id,
      error: null
    };
  },
  outputFields: {
    template: {
      type: TemplateType,
      resolve: async ({ id }, args, context) => {
        const newTemplate = await TemplateLoader.load(context, id);

        if (!newTemplate) {
          return null;
        }

        return newTemplate;
      }
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error
    }
  }
});

export default mutation;
