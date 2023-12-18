/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation Login($loginInput: LoginInput!) {\n  login(loginInput: $loginInput) {\n    accessToken\n    refreshToken\n    user {\n      id\n      isAdmin\n    }\n  }\n}\n\nmutation Register($authInput: AuthInput!) {\n  register(authInput: $authInput) {\n    accessToken\n    refreshToken\n    user {\n      id\n      isAdmin\n    }\n  }\n}": types.LoginDocument,
    "query GetAllProductsDashboard($getAllProductInput: GetAllProductInput!) {\n  getAllProducts(getAllProductInput: $getAllProductInput) {\n    length\n    products {\n      colors {\n        id\n        imageCss\n        name\n        slug\n      }\n      description\n      id\n      images\n      insulationId\n      name\n      price\n      size {\n        id\n        name\n      }\n      slug\n    }\n  }\n}\n\nquery GetProductByColor($getProductByColor: GetProductByColor!) {\n  getProductByColor(getProductByColor: $getProductByColor) {\n    id\n    colors {\n      id\n      imageCss\n      name\n    }\n    images\n    name\n    price\n    slug\n    size {\n      id\n      name\n    }\n  }\n}": types.GetAllProductsDashboardDocument,
    "mutation ToggleFavoritesProfile($productId: Float!) {\n  toggleFavoritesProfile(productId: $productId)\n}\n\nquery GetUserFavoritesIdArray {\n  getProfile {\n    favorites {\n      id\n    }\n  }\n}": types.ToggleFavoritesProfileDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Login($loginInput: LoginInput!) {\n  login(loginInput: $loginInput) {\n    accessToken\n    refreshToken\n    user {\n      id\n      isAdmin\n    }\n  }\n}\n\nmutation Register($authInput: AuthInput!) {\n  register(authInput: $authInput) {\n    accessToken\n    refreshToken\n    user {\n      id\n      isAdmin\n    }\n  }\n}"): (typeof documents)["mutation Login($loginInput: LoginInput!) {\n  login(loginInput: $loginInput) {\n    accessToken\n    refreshToken\n    user {\n      id\n      isAdmin\n    }\n  }\n}\n\nmutation Register($authInput: AuthInput!) {\n  register(authInput: $authInput) {\n    accessToken\n    refreshToken\n    user {\n      id\n      isAdmin\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetAllProductsDashboard($getAllProductInput: GetAllProductInput!) {\n  getAllProducts(getAllProductInput: $getAllProductInput) {\n    length\n    products {\n      colors {\n        id\n        imageCss\n        name\n        slug\n      }\n      description\n      id\n      images\n      insulationId\n      name\n      price\n      size {\n        id\n        name\n      }\n      slug\n    }\n  }\n}\n\nquery GetProductByColor($getProductByColor: GetProductByColor!) {\n  getProductByColor(getProductByColor: $getProductByColor) {\n    id\n    colors {\n      id\n      imageCss\n      name\n    }\n    images\n    name\n    price\n    slug\n    size {\n      id\n      name\n    }\n  }\n}"): (typeof documents)["query GetAllProductsDashboard($getAllProductInput: GetAllProductInput!) {\n  getAllProducts(getAllProductInput: $getAllProductInput) {\n    length\n    products {\n      colors {\n        id\n        imageCss\n        name\n        slug\n      }\n      description\n      id\n      images\n      insulationId\n      name\n      price\n      size {\n        id\n        name\n      }\n      slug\n    }\n  }\n}\n\nquery GetProductByColor($getProductByColor: GetProductByColor!) {\n  getProductByColor(getProductByColor: $getProductByColor) {\n    id\n    colors {\n      id\n      imageCss\n      name\n    }\n    images\n    name\n    price\n    slug\n    size {\n      id\n      name\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ToggleFavoritesProfile($productId: Float!) {\n  toggleFavoritesProfile(productId: $productId)\n}\n\nquery GetUserFavoritesIdArray {\n  getProfile {\n    favorites {\n      id\n    }\n  }\n}"): (typeof documents)["mutation ToggleFavoritesProfile($productId: Float!) {\n  toggleFavoritesProfile(productId: $productId)\n}\n\nquery GetUserFavoritesIdArray {\n  getProfile {\n    favorites {\n      id\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;