/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import { FieldAuthorizeResolver } from "nexus/dist/plugins/fieldAuthorizePlugin"
import { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * Date custom scalar type
     */
    dateTime<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "dateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * Date custom scalar type
     */
    dateTime<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "dateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  dateTime: any
}

export interface NexusGenObjects {
  CheckFollowResponse: { // root type
    follows?: boolean | null; // Boolean
  }
  CheckLikeResponse: { // root type
    liked?: boolean | null; // Boolean
  }
  Fleet: { // root type
    author?: NexusGenRootTypes['User'] | null; // User
    authorId?: number | null; // Int
    body?: string | null; // String
    createdAt?: NexusGenScalars['dateTime'] | null; // dateTime
    id?: number | null; // Int
    like?: Array<NexusGenRootTypes['Like'] | null> | null; // [Like]
    reply?: Array<NexusGenRootTypes['Reply'] | null> | null; // [Reply]
    updatedAt?: NexusGenScalars['dateTime'] | null; // dateTime
  }
  Follow: { // root type
    createdAt?: NexusGenScalars['dateTime'] | null; // dateTime
    from?: NexusGenRootTypes['User'] | null; // User
    fromId?: number | null; // Int
    id?: number | null; // Int
    to?: NexusGenRootTypes['User'] | null; // User
    toId?: number | null; // Int
    updatedAt?: NexusGenScalars['dateTime'] | null; // dateTime
  }
  FollowCountResponse: { // root type
    followerCount: number; // Int!
    followingCount: number; // Int!
  }
  FollowUsersResponse: { // root type
    followers?: Array<NexusGenRootTypes['User'] | null> | null; // [User]
    following?: Array<NexusGenRootTypes['User'] | null> | null; // [User]
  }
  Like: { // root type
    createdAt?: NexusGenScalars['dateTime'] | null; // dateTime
    fleet?: NexusGenRootTypes['Fleet'] | null; // Fleet
    fleetId?: number | null; // Int
    id?: number | null; // Int
    updatedAt?: NexusGenScalars['dateTime'] | null; // dateTime
    user?: NexusGenRootTypes['User'] | null; // User
    userId?: number | null; // Int
  }
  Mutation: {};
  Query: {};
  Reply: { // root type
    body?: string | null; // String
    createdAt?: NexusGenScalars['dateTime'] | null; // dateTime
    fleet?: NexusGenRootTypes['Fleet'] | null; // Fleet
    fleetId?: number | null; // Int
    id?: number | null; // Int
    updatedAt?: NexusGenScalars['dateTime'] | null; // dateTime
    user?: NexusGenRootTypes['User'] | null; // User
    userId?: number | null; // Int
  }
  SuccessResponse: { // root type
    success?: boolean | null; // Boolean
  }
  TimelineFleet: { // root type
    liked?: boolean | null; // Boolean
    post?: NexusGenRootTypes['Fleet'] | null; // Fleet
  }
  TokenResponse: { // root type
    id?: number | null; // Int
    refreshToken?: string | null; // String
    success?: boolean | null; // Boolean
    token?: string | null; // String
  }
  User: { // root type
    avatarURL?: string | null; // String
    bio?: string | null; // String
    createdAt?: NexusGenScalars['dateTime'] | null; // dateTime
    displayName?: string | null; // String
    email?: string | null; // String
    fleet?: Array<NexusGenRootTypes['Fleet'] | null> | null; // [Fleet]
    followers?: Array<NexusGenRootTypes['Follow'] | null> | null; // [Follow]
    following?: Array<NexusGenRootTypes['Follow'] | null> | null; // [Follow]
    id?: number | null; // Int
    isAdmin?: boolean | null; // Boolean
    like?: Array<NexusGenRootTypes['Like'] | null> | null; // [Like]
    password?: string | null; // String
    reply?: Array<NexusGenRootTypes['Reply'] | null> | null; // [Reply]
    updatedAt?: NexusGenScalars['dateTime'] | null; // dateTime
    username?: string | null; // String
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  CheckFollowResponse: { // field return type
    follows: boolean | null; // Boolean
  }
  CheckLikeResponse: { // field return type
    liked: boolean | null; // Boolean
  }
  Fleet: { // field return type
    author: NexusGenRootTypes['User'] | null; // User
    authorId: number | null; // Int
    body: string | null; // String
    createdAt: NexusGenScalars['dateTime'] | null; // dateTime
    id: number | null; // Int
    like: Array<NexusGenRootTypes['Like'] | null> | null; // [Like]
    reply: Array<NexusGenRootTypes['Reply'] | null> | null; // [Reply]
    updatedAt: NexusGenScalars['dateTime'] | null; // dateTime
  }
  Follow: { // field return type
    createdAt: NexusGenScalars['dateTime'] | null; // dateTime
    from: NexusGenRootTypes['User'] | null; // User
    fromId: number | null; // Int
    id: number | null; // Int
    to: NexusGenRootTypes['User'] | null; // User
    toId: number | null; // Int
    updatedAt: NexusGenScalars['dateTime'] | null; // dateTime
  }
  FollowCountResponse: { // field return type
    followerCount: number; // Int!
    followingCount: number; // Int!
  }
  FollowUsersResponse: { // field return type
    followers: Array<NexusGenRootTypes['User'] | null> | null; // [User]
    following: Array<NexusGenRootTypes['User'] | null> | null; // [User]
  }
  Like: { // field return type
    createdAt: NexusGenScalars['dateTime'] | null; // dateTime
    fleet: NexusGenRootTypes['Fleet'] | null; // Fleet
    fleetId: number | null; // Int
    id: number | null; // Int
    updatedAt: NexusGenScalars['dateTime'] | null; // dateTime
    user: NexusGenRootTypes['User'] | null; // User
    userId: number | null; // Int
  }
  Mutation: { // field return type
    deleteFleet: NexusGenRootTypes['SuccessResponse'] | null; // SuccessResponse
    deleteReply: NexusGenRootTypes['SuccessResponse'] | null; // SuccessResponse
    follow: NexusGenRootTypes['SuccessResponse'] | null; // SuccessResponse
    likeFleet: NexusGenRootTypes['SuccessResponse'] | null; // SuccessResponse
    postFleet: NexusGenRootTypes['Fleet'] | null; // Fleet
    reply: NexusGenRootTypes['Reply'] | null; // Reply
    signIn: NexusGenRootTypes['TokenResponse'] | null; // TokenResponse
    signOut: NexusGenRootTypes['SuccessResponse'] | null; // SuccessResponse
    signUp: NexusGenRootTypes['User'] | null; // User
    unfollow: NexusGenRootTypes['SuccessResponse'] | null; // SuccessResponse
    unlikeFleet: NexusGenRootTypes['SuccessResponse'] | null; // SuccessResponse
  }
  Query: { // field return type
    allFleets: Array<NexusGenRootTypes['Fleet'] | null> | null; // [Fleet]
    allUsers: Array<NexusGenRootTypes['User'] | null> | null; // [User]
    checkFollow: NexusGenRootTypes['CheckFollowResponse'] | null; // CheckFollowResponse
    checkLike: NexusGenRootTypes['CheckLikeResponse'] | null; // CheckLikeResponse
    fleet: NexusGenRootTypes['TimelineFleet'] | null; // TimelineFleet
    followCount: NexusGenRootTypes['FollowCountResponse'] | null; // FollowCountResponse
    followUsers: NexusGenRootTypes['FollowUsersResponse'] | null; // FollowUsersResponse
    homePageFleets: Array<NexusGenRootTypes['TimelineFleet'] | null> | null; // [TimelineFleet]
    isAdmin: boolean | null; // Boolean
    recommend: Array<NexusGenRootTypes['User'] | null> | null; // [User]
    refreshToken: NexusGenRootTypes['TokenResponse'] | null; // TokenResponse
    user: NexusGenRootTypes['User'] | null; // User
    userInfo: NexusGenRootTypes['User'] | null; // User
    userTimeline: Array<NexusGenRootTypes['TimelineFleet'] | null> | null; // [TimelineFleet]
  }
  Reply: { // field return type
    body: string | null; // String
    createdAt: NexusGenScalars['dateTime'] | null; // dateTime
    fleet: NexusGenRootTypes['Fleet'] | null; // Fleet
    fleetId: number | null; // Int
    id: number | null; // Int
    updatedAt: NexusGenScalars['dateTime'] | null; // dateTime
    user: NexusGenRootTypes['User'] | null; // User
    userId: number | null; // Int
  }
  SuccessResponse: { // field return type
    success: boolean | null; // Boolean
  }
  TimelineFleet: { // field return type
    liked: boolean | null; // Boolean
    post: NexusGenRootTypes['Fleet'] | null; // Fleet
  }
  TokenResponse: { // field return type
    id: number | null; // Int
    refreshToken: string | null; // String
    success: boolean | null; // Boolean
    token: string | null; // String
  }
  User: { // field return type
    avatarURL: string | null; // String
    bio: string | null; // String
    createdAt: NexusGenScalars['dateTime'] | null; // dateTime
    displayName: string | null; // String
    email: string | null; // String
    fleet: Array<NexusGenRootTypes['Fleet'] | null> | null; // [Fleet]
    followers: Array<NexusGenRootTypes['Follow'] | null> | null; // [Follow]
    following: Array<NexusGenRootTypes['Follow'] | null> | null; // [Follow]
    id: number | null; // Int
    isAdmin: boolean | null; // Boolean
    like: Array<NexusGenRootTypes['Like'] | null> | null; // [Like]
    password: string | null; // String
    reply: Array<NexusGenRootTypes['Reply'] | null> | null; // [Reply]
    updatedAt: NexusGenScalars['dateTime'] | null; // dateTime
    username: string | null; // String
  }
}

export interface NexusGenFieldTypeNames {
  CheckFollowResponse: { // field return type name
    follows: 'Boolean'
  }
  CheckLikeResponse: { // field return type name
    liked: 'Boolean'
  }
  Fleet: { // field return type name
    author: 'User'
    authorId: 'Int'
    body: 'String'
    createdAt: 'dateTime'
    id: 'Int'
    like: 'Like'
    reply: 'Reply'
    updatedAt: 'dateTime'
  }
  Follow: { // field return type name
    createdAt: 'dateTime'
    from: 'User'
    fromId: 'Int'
    id: 'Int'
    to: 'User'
    toId: 'Int'
    updatedAt: 'dateTime'
  }
  FollowCountResponse: { // field return type name
    followerCount: 'Int'
    followingCount: 'Int'
  }
  FollowUsersResponse: { // field return type name
    followers: 'User'
    following: 'User'
  }
  Like: { // field return type name
    createdAt: 'dateTime'
    fleet: 'Fleet'
    fleetId: 'Int'
    id: 'Int'
    updatedAt: 'dateTime'
    user: 'User'
    userId: 'Int'
  }
  Mutation: { // field return type name
    deleteFleet: 'SuccessResponse'
    deleteReply: 'SuccessResponse'
    follow: 'SuccessResponse'
    likeFleet: 'SuccessResponse'
    postFleet: 'Fleet'
    reply: 'Reply'
    signIn: 'TokenResponse'
    signOut: 'SuccessResponse'
    signUp: 'User'
    unfollow: 'SuccessResponse'
    unlikeFleet: 'SuccessResponse'
  }
  Query: { // field return type name
    allFleets: 'Fleet'
    allUsers: 'User'
    checkFollow: 'CheckFollowResponse'
    checkLike: 'CheckLikeResponse'
    fleet: 'TimelineFleet'
    followCount: 'FollowCountResponse'
    followUsers: 'FollowUsersResponse'
    homePageFleets: 'TimelineFleet'
    isAdmin: 'Boolean'
    recommend: 'User'
    refreshToken: 'TokenResponse'
    user: 'User'
    userInfo: 'User'
    userTimeline: 'TimelineFleet'
  }
  Reply: { // field return type name
    body: 'String'
    createdAt: 'dateTime'
    fleet: 'Fleet'
    fleetId: 'Int'
    id: 'Int'
    updatedAt: 'dateTime'
    user: 'User'
    userId: 'Int'
  }
  SuccessResponse: { // field return type name
    success: 'Boolean'
  }
  TimelineFleet: { // field return type name
    liked: 'Boolean'
    post: 'Fleet'
  }
  TokenResponse: { // field return type name
    id: 'Int'
    refreshToken: 'String'
    success: 'Boolean'
    token: 'String'
  }
  User: { // field return type name
    avatarURL: 'String'
    bio: 'String'
    createdAt: 'dateTime'
    displayName: 'String'
    email: 'String'
    fleet: 'Fleet'
    followers: 'Follow'
    following: 'Follow'
    id: 'Int'
    isAdmin: 'Boolean'
    like: 'Like'
    password: 'String'
    reply: 'Reply'
    updatedAt: 'dateTime'
    username: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    deleteFleet: { // args
      id: number; // Int!
    }
    deleteReply: { // args
      id: number; // Int!
    }
    follow: { // args
      id: number; // Int!
    }
    likeFleet: { // args
      id: number; // Int!
    }
    postFleet: { // args
      body: string; // String!
    }
    reply: { // args
      body: string; // String!
      fleetId: number; // Int!
    }
    signIn: { // args
      email: string; // String!
      password: string; // String!
    }
    signUp: { // args
      bio?: string | null; // String
      displayName: string; // String!
      email: string; // String!
      password: string; // String!
      username: string; // String!
    }
    unfollow: { // args
      id: number; // Int!
    }
    unlikeFleet: { // args
      id: number; // Int!
    }
  }
  Query: {
    checkFollow: { // args
      id: number; // Int!
    }
    checkLike: { // args
      id: number; // Int!
    }
    fleet: { // args
      id: number; // Int!
    }
    followCount: { // args
      id: number; // Int!
    }
    followUsers: { // args
      id: number; // Int!
    }
    isAdmin: { // args
      id: number; // Int!
    }
    user: { // args
      id: number; // Int!
    }
    userInfo: { // args
      id: number; // Int!
    }
    userTimeline: { // args
      id: number; // Int!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    /**
     * Authorization for an individual field. Returning "true"
     * or "Promise<true>" means the field can be accessed.
     * Returning "false" or "Promise<false>" will respond
     * with a "Not Authorized" error for the field.
     * Returning or throwing an error will also prevent the
     * resolver from executing.
     */
    authorize?: FieldAuthorizeResolver<TypeName, FieldName>
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}