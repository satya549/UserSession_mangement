import {
  DocumentDefinition,
  FilterQuery,
  QueryOptions,
  UpdateQuery,
} from "mongoose";
import ProductModel, { productDocument } from "../models/productModel";

export async function createProduct(
  input: DocumentDefinition<Omit<productDocument, "cretedAt" | "updatedAt">>
) {
  return ProductModel.create(input);
}

export async function findProduct(
  query: FilterQuery<productDocument>,
  Options: QueryOptions = { lean: true }
) {
  return ProductModel.findOne(query, {}, Options);
}

export async function findAndUpdateProduct(
  query: FilterQuery<productDocument>,
  update: UpdateQuery<productDocument>,
  Options: QueryOptions
) {
  return ProductModel.findOneAndUpdate(query, update, Options);
}

export async function deleteProduct(query: FilterQuery<productDocument>) {
  return ProductModel.deleteOne(query);
}
