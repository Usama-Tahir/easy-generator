import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type AuthPayload = {
  __typename: 'AuthPayload';
  /** access token */
  accessToken: Scalars['String']['output'];
  /** user object */
  user: User;
};

export type CreateUserInput = {
  /** The email address of the user.  */
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** The password of the user. */
  password: Scalars['String']['input'];
  /** The name of the user. */
  username: Scalars['String']['input'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename: 'Mutation';
  login: AuthPayload;
  signUp: AuthPayload;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationSignUpArgs = {
  createUserInput: CreateUserInput;
};

export type Query = {
  __typename: 'Query';
  currentUser: User;
  sayHello: Scalars['String']['output'];
};

export type User = {
  __typename: 'User';
  /** The unique identifier of the user. */
  _id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  /** The email address of the user.  */
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  /** Whether the user is active or not. */
  isActive: Scalars['Boolean']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  /** The name of the user. */
  username: Scalars['String']['output'];
};

export type HeyGraphqlServerQueryVariables = Exact<{ [key: string]: never; }>;


export type HeyGraphqlServerQuery = { __typename: 'Query', sayHello: string };


export const HeyGraphqlServerDocument = gql`
    query HeyGraphqlServer {
  sayHello
}
    `;

/**
 * __useHeyGraphqlServerQuery__
 *
 * To run a query within a React component, call `useHeyGraphqlServerQuery` and pass it any options that fit your needs.
 * When your component renders, `useHeyGraphqlServerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHeyGraphqlServerQuery({
 *   variables: {
 *   },
 * });
 */
export function useHeyGraphqlServerQuery(baseOptions?: Apollo.QueryHookOptions<HeyGraphqlServerQuery, HeyGraphqlServerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HeyGraphqlServerQuery, HeyGraphqlServerQueryVariables>(HeyGraphqlServerDocument, options);
      }
export function useHeyGraphqlServerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HeyGraphqlServerQuery, HeyGraphqlServerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HeyGraphqlServerQuery, HeyGraphqlServerQueryVariables>(HeyGraphqlServerDocument, options);
        }
export function useHeyGraphqlServerSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<HeyGraphqlServerQuery, HeyGraphqlServerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<HeyGraphqlServerQuery, HeyGraphqlServerQueryVariables>(HeyGraphqlServerDocument, options);
        }
export type HeyGraphqlServerQueryHookResult = ReturnType<typeof useHeyGraphqlServerQuery>;
export type HeyGraphqlServerLazyQueryHookResult = ReturnType<typeof useHeyGraphqlServerLazyQuery>;
export type HeyGraphqlServerSuspenseQueryHookResult = ReturnType<typeof useHeyGraphqlServerSuspenseQuery>;
export type HeyGraphqlServerQueryResult = Apollo.QueryResult<HeyGraphqlServerQuery, HeyGraphqlServerQueryVariables>;