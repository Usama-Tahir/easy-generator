import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type AuthPayloadKeySpecifier = ('accessToken' | 'user' | AuthPayloadKeySpecifier)[];
export type AuthPayloadFieldPolicy = {
	accessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('login' | 'signUp' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	signUp?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('currentUser' | 'sayHello' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	currentUser?: FieldPolicy<any> | FieldReadFunction<any>,
	sayHello?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('_id' | 'createdAt' | 'email' | 'firstName' | 'isActive' | 'lastName' | 'updatedAt' | 'username' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	_id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	isActive?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	AuthPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuthPayloadKeySpecifier | (() => undefined | AuthPayloadKeySpecifier),
		fields?: AuthPayloadFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;