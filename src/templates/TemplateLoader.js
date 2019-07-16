import DataLoader from "dataloader";
import {
  connectionFromMongoCursor,
  mongooseLoader
} from "@entria/graphql-mongoose-loader";

import TemplateModel from "./TemplateModel";

export default class Template {
  constructor(data) {
    this.id = data.id;
    this._id = data._id;
  }
}

export const getLoader = () =>
  new DataLoader(ids => mongooseLoader(TemplateModel, ids));

const viewerCanSee = (context, data) => true;

export const load = async (context, id) => {
  if (!id) {
    return null;
  }

  let data;
  try {
    data = await context.dataloaders.TemplateLoader.load(id);
  } catch (err) {
    return null;
  }
  return viewerCanSee(context, data) ? new Template(data) : null;
};

export const clearCache = ({ dataloaders }, id) =>
  dataloaders.TemplateLoader.clear(id.toString());

export const loadTemplates = async (context, args) => {
  const { user } = context;
  if (!user) throw new Error("Unauthorized user");
  // const { search } = args;
  // const conditions = {
  //   ...(search != null ? { name: { $regex: new RegExp(args.search, 'ig') } } : {}),
  // };

  // const templates = TemplateModel.find(conditions).sort({ createdAt: -1 });

  return connectionFromMongoCursor({
    // cursor: templates,
    context,
    args,
    loader: load
  });
};
