import { GraphQLBoolean, GraphQLString } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";

import TemplateModel from "../TemplateModel";

import * as TemplateLoader from "../TemplateLoader";
import TemplateType from "../TemplateType";

const mutation = mutationWithClientMutationId({
  name: "TemplateAdd",
  inputFields: {
    active: {
      type: GraphQLBoolean
    }
  },
  mutateAndGetPayload: async args => {
    const { active } = args;

    const newTemplate = await new TemplateModel({
      active
    }).save();

    return {
      id: newTemplate._id,
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
