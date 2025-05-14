export type Maybe<T> = T | null | undefined;

export interface AuthenticateInput {
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  name?: string;
  password?: string;
  createdAt: Date;
}

export interface OauthProfile {
  sub: string;
  email: string;
  name?: string;
  given_name?: string;
  family_name?: string;
}

export interface FederatedIdentity {
  user_id: string;
  provider_id: string;
  provider: EProvider;
  createdAt: Date;
}

export enum EProvider {
  GOOGLE,
  FACEBOOK,
}
