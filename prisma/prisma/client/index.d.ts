
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Federated_Identity
 * 
 */
export type Federated_Identity = $Result.DefaultSelection<Prisma.$Federated_IdentityPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EProvider: {
  GOOGLE: 'GOOGLE',
  FACEBOOK: 'FACEBOOK'
};

export type EProvider = (typeof EProvider)[keyof typeof EProvider]

}

export type EProvider = $Enums.EProvider

export const EProvider: typeof $Enums.EProvider

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.federated_Identity`: Exposes CRUD operations for the **Federated_Identity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Federated_Identities
    * const federated_Identities = await prisma.federated_Identity.findMany()
    * ```
    */
  get federated_Identity(): Prisma.Federated_IdentityDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Federated_Identity: 'Federated_Identity'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "federated_Identity"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Federated_Identity: {
        payload: Prisma.$Federated_IdentityPayload<ExtArgs>
        fields: Prisma.Federated_IdentityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Federated_IdentityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Federated_IdentityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Federated_IdentityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Federated_IdentityPayload>
          }
          findFirst: {
            args: Prisma.Federated_IdentityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Federated_IdentityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Federated_IdentityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Federated_IdentityPayload>
          }
          findMany: {
            args: Prisma.Federated_IdentityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Federated_IdentityPayload>[]
          }
          create: {
            args: Prisma.Federated_IdentityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Federated_IdentityPayload>
          }
          createMany: {
            args: Prisma.Federated_IdentityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Federated_IdentityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Federated_IdentityPayload>[]
          }
          delete: {
            args: Prisma.Federated_IdentityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Federated_IdentityPayload>
          }
          update: {
            args: Prisma.Federated_IdentityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Federated_IdentityPayload>
          }
          deleteMany: {
            args: Prisma.Federated_IdentityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Federated_IdentityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Federated_IdentityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Federated_IdentityPayload>[]
          }
          upsert: {
            args: Prisma.Federated_IdentityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Federated_IdentityPayload>
          }
          aggregate: {
            args: Prisma.Federated_IdentityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFederated_Identity>
          }
          groupBy: {
            args: Prisma.Federated_IdentityGroupByArgs<ExtArgs>
            result: $Utils.Optional<Federated_IdentityGroupByOutputType>[]
          }
          count: {
            args: Prisma.Federated_IdentityCountArgs<ExtArgs>
            result: $Utils.Optional<Federated_IdentityCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    federated_Identity?: Federated_IdentityOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Federated_Identity: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Federated_Identity?: boolean | UserCountOutputTypeCountFederated_IdentityArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFederated_IdentityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Federated_IdentityWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    fullname: string | null
    email: string | null
    password: string | null
    profile_picture: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fullname: string | null
    email: string | null
    password: string | null
    profile_picture: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullname: number
    email: number
    password: number
    profile_picture: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    password?: true
    profile_picture?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    password?: true
    profile_picture?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    password?: true
    profile_picture?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    fullname: string
    email: string
    password: string
    profile_picture: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    email?: boolean
    password?: boolean
    profile_picture?: boolean
    Federated_Identity?: boolean | User$Federated_IdentityArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    email?: boolean
    password?: boolean
    profile_picture?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    email?: boolean
    password?: boolean
    profile_picture?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullname?: boolean
    email?: boolean
    password?: boolean
    profile_picture?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullname" | "email" | "password" | "profile_picture", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Federated_Identity?: boolean | User$Federated_IdentityArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Federated_Identity: Prisma.$Federated_IdentityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullname: string
      email: string
      password: string
      profile_picture: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Federated_Identity<T extends User$Federated_IdentityArgs<ExtArgs> = {}>(args?: Subset<T, User$Federated_IdentityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Federated_IdentityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly fullname: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly profile_picture: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Federated_Identity
   */
  export type User$Federated_IdentityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Federated_Identity
     */
    select?: Federated_IdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Federated_Identity
     */
    omit?: Federated_IdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Federated_IdentityInclude<ExtArgs> | null
    where?: Federated_IdentityWhereInput
    orderBy?: Federated_IdentityOrderByWithRelationInput | Federated_IdentityOrderByWithRelationInput[]
    cursor?: Federated_IdentityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Federated_IdentityScalarFieldEnum | Federated_IdentityScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Federated_Identity
   */

  export type AggregateFederated_Identity = {
    _count: Federated_IdentityCountAggregateOutputType | null
    _min: Federated_IdentityMinAggregateOutputType | null
    _max: Federated_IdentityMaxAggregateOutputType | null
  }

  export type Federated_IdentityMinAggregateOutputType = {
    id: string | null
    provider: $Enums.EProvider | null
    provider_id: string | null
    user_id: string | null
    createdAt: Date | null
  }

  export type Federated_IdentityMaxAggregateOutputType = {
    id: string | null
    provider: $Enums.EProvider | null
    provider_id: string | null
    user_id: string | null
    createdAt: Date | null
  }

  export type Federated_IdentityCountAggregateOutputType = {
    id: number
    provider: number
    provider_id: number
    user_id: number
    createdAt: number
    _all: number
  }


  export type Federated_IdentityMinAggregateInputType = {
    id?: true
    provider?: true
    provider_id?: true
    user_id?: true
    createdAt?: true
  }

  export type Federated_IdentityMaxAggregateInputType = {
    id?: true
    provider?: true
    provider_id?: true
    user_id?: true
    createdAt?: true
  }

  export type Federated_IdentityCountAggregateInputType = {
    id?: true
    provider?: true
    provider_id?: true
    user_id?: true
    createdAt?: true
    _all?: true
  }

  export type Federated_IdentityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Federated_Identity to aggregate.
     */
    where?: Federated_IdentityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Federated_Identities to fetch.
     */
    orderBy?: Federated_IdentityOrderByWithRelationInput | Federated_IdentityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Federated_IdentityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Federated_Identities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Federated_Identities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Federated_Identities
    **/
    _count?: true | Federated_IdentityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Federated_IdentityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Federated_IdentityMaxAggregateInputType
  }

  export type GetFederated_IdentityAggregateType<T extends Federated_IdentityAggregateArgs> = {
        [P in keyof T & keyof AggregateFederated_Identity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFederated_Identity[P]>
      : GetScalarType<T[P], AggregateFederated_Identity[P]>
  }




  export type Federated_IdentityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Federated_IdentityWhereInput
    orderBy?: Federated_IdentityOrderByWithAggregationInput | Federated_IdentityOrderByWithAggregationInput[]
    by: Federated_IdentityScalarFieldEnum[] | Federated_IdentityScalarFieldEnum
    having?: Federated_IdentityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Federated_IdentityCountAggregateInputType | true
    _min?: Federated_IdentityMinAggregateInputType
    _max?: Federated_IdentityMaxAggregateInputType
  }

  export type Federated_IdentityGroupByOutputType = {
    id: string
    provider: $Enums.EProvider
    provider_id: string
    user_id: string
    createdAt: Date
    _count: Federated_IdentityCountAggregateOutputType | null
    _min: Federated_IdentityMinAggregateOutputType | null
    _max: Federated_IdentityMaxAggregateOutputType | null
  }

  type GetFederated_IdentityGroupByPayload<T extends Federated_IdentityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Federated_IdentityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Federated_IdentityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Federated_IdentityGroupByOutputType[P]>
            : GetScalarType<T[P], Federated_IdentityGroupByOutputType[P]>
        }
      >
    >


  export type Federated_IdentitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    provider_id?: boolean
    user_id?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["federated_Identity"]>

  export type Federated_IdentitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    provider_id?: boolean
    user_id?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["federated_Identity"]>

  export type Federated_IdentitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    provider_id?: boolean
    user_id?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["federated_Identity"]>

  export type Federated_IdentitySelectScalar = {
    id?: boolean
    provider?: boolean
    provider_id?: boolean
    user_id?: boolean
    createdAt?: boolean
  }

  export type Federated_IdentityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "provider" | "provider_id" | "user_id" | "createdAt", ExtArgs["result"]["federated_Identity"]>
  export type Federated_IdentityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type Federated_IdentityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type Federated_IdentityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $Federated_IdentityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Federated_Identity"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      provider: $Enums.EProvider
      provider_id: string
      user_id: string
      createdAt: Date
    }, ExtArgs["result"]["federated_Identity"]>
    composites: {}
  }

  type Federated_IdentityGetPayload<S extends boolean | null | undefined | Federated_IdentityDefaultArgs> = $Result.GetResult<Prisma.$Federated_IdentityPayload, S>

  type Federated_IdentityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Federated_IdentityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Federated_IdentityCountAggregateInputType | true
    }

  export interface Federated_IdentityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Federated_Identity'], meta: { name: 'Federated_Identity' } }
    /**
     * Find zero or one Federated_Identity that matches the filter.
     * @param {Federated_IdentityFindUniqueArgs} args - Arguments to find a Federated_Identity
     * @example
     * // Get one Federated_Identity
     * const federated_Identity = await prisma.federated_Identity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Federated_IdentityFindUniqueArgs>(args: SelectSubset<T, Federated_IdentityFindUniqueArgs<ExtArgs>>): Prisma__Federated_IdentityClient<$Result.GetResult<Prisma.$Federated_IdentityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Federated_Identity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Federated_IdentityFindUniqueOrThrowArgs} args - Arguments to find a Federated_Identity
     * @example
     * // Get one Federated_Identity
     * const federated_Identity = await prisma.federated_Identity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Federated_IdentityFindUniqueOrThrowArgs>(args: SelectSubset<T, Federated_IdentityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Federated_IdentityClient<$Result.GetResult<Prisma.$Federated_IdentityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Federated_Identity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Federated_IdentityFindFirstArgs} args - Arguments to find a Federated_Identity
     * @example
     * // Get one Federated_Identity
     * const federated_Identity = await prisma.federated_Identity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Federated_IdentityFindFirstArgs>(args?: SelectSubset<T, Federated_IdentityFindFirstArgs<ExtArgs>>): Prisma__Federated_IdentityClient<$Result.GetResult<Prisma.$Federated_IdentityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Federated_Identity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Federated_IdentityFindFirstOrThrowArgs} args - Arguments to find a Federated_Identity
     * @example
     * // Get one Federated_Identity
     * const federated_Identity = await prisma.federated_Identity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Federated_IdentityFindFirstOrThrowArgs>(args?: SelectSubset<T, Federated_IdentityFindFirstOrThrowArgs<ExtArgs>>): Prisma__Federated_IdentityClient<$Result.GetResult<Prisma.$Federated_IdentityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Federated_Identities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Federated_IdentityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Federated_Identities
     * const federated_Identities = await prisma.federated_Identity.findMany()
     * 
     * // Get first 10 Federated_Identities
     * const federated_Identities = await prisma.federated_Identity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const federated_IdentityWithIdOnly = await prisma.federated_Identity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Federated_IdentityFindManyArgs>(args?: SelectSubset<T, Federated_IdentityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Federated_IdentityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Federated_Identity.
     * @param {Federated_IdentityCreateArgs} args - Arguments to create a Federated_Identity.
     * @example
     * // Create one Federated_Identity
     * const Federated_Identity = await prisma.federated_Identity.create({
     *   data: {
     *     // ... data to create a Federated_Identity
     *   }
     * })
     * 
     */
    create<T extends Federated_IdentityCreateArgs>(args: SelectSubset<T, Federated_IdentityCreateArgs<ExtArgs>>): Prisma__Federated_IdentityClient<$Result.GetResult<Prisma.$Federated_IdentityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Federated_Identities.
     * @param {Federated_IdentityCreateManyArgs} args - Arguments to create many Federated_Identities.
     * @example
     * // Create many Federated_Identities
     * const federated_Identity = await prisma.federated_Identity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Federated_IdentityCreateManyArgs>(args?: SelectSubset<T, Federated_IdentityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Federated_Identities and returns the data saved in the database.
     * @param {Federated_IdentityCreateManyAndReturnArgs} args - Arguments to create many Federated_Identities.
     * @example
     * // Create many Federated_Identities
     * const federated_Identity = await prisma.federated_Identity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Federated_Identities and only return the `id`
     * const federated_IdentityWithIdOnly = await prisma.federated_Identity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Federated_IdentityCreateManyAndReturnArgs>(args?: SelectSubset<T, Federated_IdentityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Federated_IdentityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Federated_Identity.
     * @param {Federated_IdentityDeleteArgs} args - Arguments to delete one Federated_Identity.
     * @example
     * // Delete one Federated_Identity
     * const Federated_Identity = await prisma.federated_Identity.delete({
     *   where: {
     *     // ... filter to delete one Federated_Identity
     *   }
     * })
     * 
     */
    delete<T extends Federated_IdentityDeleteArgs>(args: SelectSubset<T, Federated_IdentityDeleteArgs<ExtArgs>>): Prisma__Federated_IdentityClient<$Result.GetResult<Prisma.$Federated_IdentityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Federated_Identity.
     * @param {Federated_IdentityUpdateArgs} args - Arguments to update one Federated_Identity.
     * @example
     * // Update one Federated_Identity
     * const federated_Identity = await prisma.federated_Identity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Federated_IdentityUpdateArgs>(args: SelectSubset<T, Federated_IdentityUpdateArgs<ExtArgs>>): Prisma__Federated_IdentityClient<$Result.GetResult<Prisma.$Federated_IdentityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Federated_Identities.
     * @param {Federated_IdentityDeleteManyArgs} args - Arguments to filter Federated_Identities to delete.
     * @example
     * // Delete a few Federated_Identities
     * const { count } = await prisma.federated_Identity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Federated_IdentityDeleteManyArgs>(args?: SelectSubset<T, Federated_IdentityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Federated_Identities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Federated_IdentityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Federated_Identities
     * const federated_Identity = await prisma.federated_Identity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Federated_IdentityUpdateManyArgs>(args: SelectSubset<T, Federated_IdentityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Federated_Identities and returns the data updated in the database.
     * @param {Federated_IdentityUpdateManyAndReturnArgs} args - Arguments to update many Federated_Identities.
     * @example
     * // Update many Federated_Identities
     * const federated_Identity = await prisma.federated_Identity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Federated_Identities and only return the `id`
     * const federated_IdentityWithIdOnly = await prisma.federated_Identity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Federated_IdentityUpdateManyAndReturnArgs>(args: SelectSubset<T, Federated_IdentityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Federated_IdentityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Federated_Identity.
     * @param {Federated_IdentityUpsertArgs} args - Arguments to update or create a Federated_Identity.
     * @example
     * // Update or create a Federated_Identity
     * const federated_Identity = await prisma.federated_Identity.upsert({
     *   create: {
     *     // ... data to create a Federated_Identity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Federated_Identity we want to update
     *   }
     * })
     */
    upsert<T extends Federated_IdentityUpsertArgs>(args: SelectSubset<T, Federated_IdentityUpsertArgs<ExtArgs>>): Prisma__Federated_IdentityClient<$Result.GetResult<Prisma.$Federated_IdentityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Federated_Identities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Federated_IdentityCountArgs} args - Arguments to filter Federated_Identities to count.
     * @example
     * // Count the number of Federated_Identities
     * const count = await prisma.federated_Identity.count({
     *   where: {
     *     // ... the filter for the Federated_Identities we want to count
     *   }
     * })
    **/
    count<T extends Federated_IdentityCountArgs>(
      args?: Subset<T, Federated_IdentityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Federated_IdentityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Federated_Identity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Federated_IdentityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Federated_IdentityAggregateArgs>(args: Subset<T, Federated_IdentityAggregateArgs>): Prisma.PrismaPromise<GetFederated_IdentityAggregateType<T>>

    /**
     * Group by Federated_Identity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Federated_IdentityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Federated_IdentityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Federated_IdentityGroupByArgs['orderBy'] }
        : { orderBy?: Federated_IdentityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Federated_IdentityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFederated_IdentityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Federated_Identity model
   */
  readonly fields: Federated_IdentityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Federated_Identity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Federated_IdentityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Federated_Identity model
   */
  interface Federated_IdentityFieldRefs {
    readonly id: FieldRef<"Federated_Identity", 'String'>
    readonly provider: FieldRef<"Federated_Identity", 'EProvider'>
    readonly provider_id: FieldRef<"Federated_Identity", 'String'>
    readonly user_id: FieldRef<"Federated_Identity", 'String'>
    readonly createdAt: FieldRef<"Federated_Identity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Federated_Identity findUnique
   */
  export type Federated_IdentityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Federated_Identity
     */
    select?: Federated_IdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Federated_Identity
     */
    omit?: Federated_IdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Federated_IdentityInclude<ExtArgs> | null
    /**
     * Filter, which Federated_Identity to fetch.
     */
    where: Federated_IdentityWhereUniqueInput
  }

  /**
   * Federated_Identity findUniqueOrThrow
   */
  export type Federated_IdentityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Federated_Identity
     */
    select?: Federated_IdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Federated_Identity
     */
    omit?: Federated_IdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Federated_IdentityInclude<ExtArgs> | null
    /**
     * Filter, which Federated_Identity to fetch.
     */
    where: Federated_IdentityWhereUniqueInput
  }

  /**
   * Federated_Identity findFirst
   */
  export type Federated_IdentityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Federated_Identity
     */
    select?: Federated_IdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Federated_Identity
     */
    omit?: Federated_IdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Federated_IdentityInclude<ExtArgs> | null
    /**
     * Filter, which Federated_Identity to fetch.
     */
    where?: Federated_IdentityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Federated_Identities to fetch.
     */
    orderBy?: Federated_IdentityOrderByWithRelationInput | Federated_IdentityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Federated_Identities.
     */
    cursor?: Federated_IdentityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Federated_Identities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Federated_Identities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Federated_Identities.
     */
    distinct?: Federated_IdentityScalarFieldEnum | Federated_IdentityScalarFieldEnum[]
  }

  /**
   * Federated_Identity findFirstOrThrow
   */
  export type Federated_IdentityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Federated_Identity
     */
    select?: Federated_IdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Federated_Identity
     */
    omit?: Federated_IdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Federated_IdentityInclude<ExtArgs> | null
    /**
     * Filter, which Federated_Identity to fetch.
     */
    where?: Federated_IdentityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Federated_Identities to fetch.
     */
    orderBy?: Federated_IdentityOrderByWithRelationInput | Federated_IdentityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Federated_Identities.
     */
    cursor?: Federated_IdentityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Federated_Identities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Federated_Identities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Federated_Identities.
     */
    distinct?: Federated_IdentityScalarFieldEnum | Federated_IdentityScalarFieldEnum[]
  }

  /**
   * Federated_Identity findMany
   */
  export type Federated_IdentityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Federated_Identity
     */
    select?: Federated_IdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Federated_Identity
     */
    omit?: Federated_IdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Federated_IdentityInclude<ExtArgs> | null
    /**
     * Filter, which Federated_Identities to fetch.
     */
    where?: Federated_IdentityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Federated_Identities to fetch.
     */
    orderBy?: Federated_IdentityOrderByWithRelationInput | Federated_IdentityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Federated_Identities.
     */
    cursor?: Federated_IdentityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Federated_Identities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Federated_Identities.
     */
    skip?: number
    distinct?: Federated_IdentityScalarFieldEnum | Federated_IdentityScalarFieldEnum[]
  }

  /**
   * Federated_Identity create
   */
  export type Federated_IdentityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Federated_Identity
     */
    select?: Federated_IdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Federated_Identity
     */
    omit?: Federated_IdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Federated_IdentityInclude<ExtArgs> | null
    /**
     * The data needed to create a Federated_Identity.
     */
    data: XOR<Federated_IdentityCreateInput, Federated_IdentityUncheckedCreateInput>
  }

  /**
   * Federated_Identity createMany
   */
  export type Federated_IdentityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Federated_Identities.
     */
    data: Federated_IdentityCreateManyInput | Federated_IdentityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Federated_Identity createManyAndReturn
   */
  export type Federated_IdentityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Federated_Identity
     */
    select?: Federated_IdentitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Federated_Identity
     */
    omit?: Federated_IdentityOmit<ExtArgs> | null
    /**
     * The data used to create many Federated_Identities.
     */
    data: Federated_IdentityCreateManyInput | Federated_IdentityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Federated_IdentityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Federated_Identity update
   */
  export type Federated_IdentityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Federated_Identity
     */
    select?: Federated_IdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Federated_Identity
     */
    omit?: Federated_IdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Federated_IdentityInclude<ExtArgs> | null
    /**
     * The data needed to update a Federated_Identity.
     */
    data: XOR<Federated_IdentityUpdateInput, Federated_IdentityUncheckedUpdateInput>
    /**
     * Choose, which Federated_Identity to update.
     */
    where: Federated_IdentityWhereUniqueInput
  }

  /**
   * Federated_Identity updateMany
   */
  export type Federated_IdentityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Federated_Identities.
     */
    data: XOR<Federated_IdentityUpdateManyMutationInput, Federated_IdentityUncheckedUpdateManyInput>
    /**
     * Filter which Federated_Identities to update
     */
    where?: Federated_IdentityWhereInput
    /**
     * Limit how many Federated_Identities to update.
     */
    limit?: number
  }

  /**
   * Federated_Identity updateManyAndReturn
   */
  export type Federated_IdentityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Federated_Identity
     */
    select?: Federated_IdentitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Federated_Identity
     */
    omit?: Federated_IdentityOmit<ExtArgs> | null
    /**
     * The data used to update Federated_Identities.
     */
    data: XOR<Federated_IdentityUpdateManyMutationInput, Federated_IdentityUncheckedUpdateManyInput>
    /**
     * Filter which Federated_Identities to update
     */
    where?: Federated_IdentityWhereInput
    /**
     * Limit how many Federated_Identities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Federated_IdentityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Federated_Identity upsert
   */
  export type Federated_IdentityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Federated_Identity
     */
    select?: Federated_IdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Federated_Identity
     */
    omit?: Federated_IdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Federated_IdentityInclude<ExtArgs> | null
    /**
     * The filter to search for the Federated_Identity to update in case it exists.
     */
    where: Federated_IdentityWhereUniqueInput
    /**
     * In case the Federated_Identity found by the `where` argument doesn't exist, create a new Federated_Identity with this data.
     */
    create: XOR<Federated_IdentityCreateInput, Federated_IdentityUncheckedCreateInput>
    /**
     * In case the Federated_Identity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Federated_IdentityUpdateInput, Federated_IdentityUncheckedUpdateInput>
  }

  /**
   * Federated_Identity delete
   */
  export type Federated_IdentityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Federated_Identity
     */
    select?: Federated_IdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Federated_Identity
     */
    omit?: Federated_IdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Federated_IdentityInclude<ExtArgs> | null
    /**
     * Filter which Federated_Identity to delete.
     */
    where: Federated_IdentityWhereUniqueInput
  }

  /**
   * Federated_Identity deleteMany
   */
  export type Federated_IdentityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Federated_Identities to delete
     */
    where?: Federated_IdentityWhereInput
    /**
     * Limit how many Federated_Identities to delete.
     */
    limit?: number
  }

  /**
   * Federated_Identity without action
   */
  export type Federated_IdentityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Federated_Identity
     */
    select?: Federated_IdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Federated_Identity
     */
    omit?: Federated_IdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Federated_IdentityInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    email: 'email',
    password: 'password',
    profile_picture: 'profile_picture'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const Federated_IdentityScalarFieldEnum: {
    id: 'id',
    provider: 'provider',
    provider_id: 'provider_id',
    user_id: 'user_id',
    createdAt: 'createdAt'
  };

  export type Federated_IdentityScalarFieldEnum = (typeof Federated_IdentityScalarFieldEnum)[keyof typeof Federated_IdentityScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'EProvider'
   */
  export type EnumEProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EProvider'>
    


  /**
   * Reference to a field of type 'EProvider[]'
   */
  export type ListEnumEProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EProvider[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    fullname?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    profile_picture?: StringFilter<"User"> | string
    Federated_Identity?: Federated_IdentityListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile_picture?: SortOrder
    Federated_Identity?: Federated_IdentityOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullname?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    profile_picture?: StringFilter<"User"> | string
    Federated_Identity?: Federated_IdentityListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile_picture?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    fullname?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    profile_picture?: StringWithAggregatesFilter<"User"> | string
  }

  export type Federated_IdentityWhereInput = {
    AND?: Federated_IdentityWhereInput | Federated_IdentityWhereInput[]
    OR?: Federated_IdentityWhereInput[]
    NOT?: Federated_IdentityWhereInput | Federated_IdentityWhereInput[]
    id?: UuidFilter<"Federated_Identity"> | string
    provider?: EnumEProviderFilter<"Federated_Identity"> | $Enums.EProvider
    provider_id?: StringFilter<"Federated_Identity"> | string
    user_id?: UuidFilter<"Federated_Identity"> | string
    createdAt?: DateTimeFilter<"Federated_Identity"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type Federated_IdentityOrderByWithRelationInput = {
    id?: SortOrder
    provider?: SortOrder
    provider_id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type Federated_IdentityWhereUniqueInput = Prisma.AtLeast<{
    user_id_provider?: Federated_IdentityUser_idProviderCompoundUniqueInput
    AND?: Federated_IdentityWhereInput | Federated_IdentityWhereInput[]
    OR?: Federated_IdentityWhereInput[]
    NOT?: Federated_IdentityWhereInput | Federated_IdentityWhereInput[]
    id?: UuidFilter<"Federated_Identity"> | string
    provider?: EnumEProviderFilter<"Federated_Identity"> | $Enums.EProvider
    provider_id?: StringFilter<"Federated_Identity"> | string
    user_id?: UuidFilter<"Federated_Identity"> | string
    createdAt?: DateTimeFilter<"Federated_Identity"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "user_id_provider">

  export type Federated_IdentityOrderByWithAggregationInput = {
    id?: SortOrder
    provider?: SortOrder
    provider_id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    _count?: Federated_IdentityCountOrderByAggregateInput
    _max?: Federated_IdentityMaxOrderByAggregateInput
    _min?: Federated_IdentityMinOrderByAggregateInput
  }

  export type Federated_IdentityScalarWhereWithAggregatesInput = {
    AND?: Federated_IdentityScalarWhereWithAggregatesInput | Federated_IdentityScalarWhereWithAggregatesInput[]
    OR?: Federated_IdentityScalarWhereWithAggregatesInput[]
    NOT?: Federated_IdentityScalarWhereWithAggregatesInput | Federated_IdentityScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Federated_Identity"> | string
    provider?: EnumEProviderWithAggregatesFilter<"Federated_Identity"> | $Enums.EProvider
    provider_id?: StringWithAggregatesFilter<"Federated_Identity"> | string
    user_id?: UuidWithAggregatesFilter<"Federated_Identity"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Federated_Identity"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    fullname: string
    email: string
    password: string
    profile_picture: string
    Federated_Identity?: Federated_IdentityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fullname: string
    email: string
    password: string
    profile_picture: string
    Federated_Identity?: Federated_IdentityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    Federated_Identity?: Federated_IdentityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    Federated_Identity?: Federated_IdentityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    fullname: string
    email: string
    password: string
    profile_picture: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
  }

  export type Federated_IdentityCreateInput = {
    id?: string
    provider: $Enums.EProvider
    provider_id: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFederated_IdentityInput
  }

  export type Federated_IdentityUncheckedCreateInput = {
    id?: string
    provider: $Enums.EProvider
    provider_id: string
    user_id: string
    createdAt?: Date | string
  }

  export type Federated_IdentityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumEProviderFieldUpdateOperationsInput | $Enums.EProvider
    provider_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFederated_IdentityNestedInput
  }

  export type Federated_IdentityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumEProviderFieldUpdateOperationsInput | $Enums.EProvider
    provider_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Federated_IdentityCreateManyInput = {
    id?: string
    provider: $Enums.EProvider
    provider_id: string
    user_id: string
    createdAt?: Date | string
  }

  export type Federated_IdentityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumEProviderFieldUpdateOperationsInput | $Enums.EProvider
    provider_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Federated_IdentityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumEProviderFieldUpdateOperationsInput | $Enums.EProvider
    provider_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Federated_IdentityListRelationFilter = {
    every?: Federated_IdentityWhereInput
    some?: Federated_IdentityWhereInput
    none?: Federated_IdentityWhereInput
  }

  export type Federated_IdentityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile_picture?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile_picture?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile_picture?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumEProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.EProvider | EnumEProviderFieldRefInput<$PrismaModel>
    in?: $Enums.EProvider[] | ListEnumEProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.EProvider[] | ListEnumEProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumEProviderFilter<$PrismaModel> | $Enums.EProvider
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type Federated_IdentityUser_idProviderCompoundUniqueInput = {
    user_id: string
    provider: $Enums.EProvider
  }

  export type Federated_IdentityCountOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    provider_id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
  }

  export type Federated_IdentityMaxOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    provider_id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
  }

  export type Federated_IdentityMinOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    provider_id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumEProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EProvider | EnumEProviderFieldRefInput<$PrismaModel>
    in?: $Enums.EProvider[] | ListEnumEProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.EProvider[] | ListEnumEProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumEProviderWithAggregatesFilter<$PrismaModel> | $Enums.EProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEProviderFilter<$PrismaModel>
    _max?: NestedEnumEProviderFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Federated_IdentityCreateNestedManyWithoutUserInput = {
    create?: XOR<Federated_IdentityCreateWithoutUserInput, Federated_IdentityUncheckedCreateWithoutUserInput> | Federated_IdentityCreateWithoutUserInput[] | Federated_IdentityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Federated_IdentityCreateOrConnectWithoutUserInput | Federated_IdentityCreateOrConnectWithoutUserInput[]
    createMany?: Federated_IdentityCreateManyUserInputEnvelope
    connect?: Federated_IdentityWhereUniqueInput | Federated_IdentityWhereUniqueInput[]
  }

  export type Federated_IdentityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Federated_IdentityCreateWithoutUserInput, Federated_IdentityUncheckedCreateWithoutUserInput> | Federated_IdentityCreateWithoutUserInput[] | Federated_IdentityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Federated_IdentityCreateOrConnectWithoutUserInput | Federated_IdentityCreateOrConnectWithoutUserInput[]
    createMany?: Federated_IdentityCreateManyUserInputEnvelope
    connect?: Federated_IdentityWhereUniqueInput | Federated_IdentityWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type Federated_IdentityUpdateManyWithoutUserNestedInput = {
    create?: XOR<Federated_IdentityCreateWithoutUserInput, Federated_IdentityUncheckedCreateWithoutUserInput> | Federated_IdentityCreateWithoutUserInput[] | Federated_IdentityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Federated_IdentityCreateOrConnectWithoutUserInput | Federated_IdentityCreateOrConnectWithoutUserInput[]
    upsert?: Federated_IdentityUpsertWithWhereUniqueWithoutUserInput | Federated_IdentityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Federated_IdentityCreateManyUserInputEnvelope
    set?: Federated_IdentityWhereUniqueInput | Federated_IdentityWhereUniqueInput[]
    disconnect?: Federated_IdentityWhereUniqueInput | Federated_IdentityWhereUniqueInput[]
    delete?: Federated_IdentityWhereUniqueInput | Federated_IdentityWhereUniqueInput[]
    connect?: Federated_IdentityWhereUniqueInput | Federated_IdentityWhereUniqueInput[]
    update?: Federated_IdentityUpdateWithWhereUniqueWithoutUserInput | Federated_IdentityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Federated_IdentityUpdateManyWithWhereWithoutUserInput | Federated_IdentityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Federated_IdentityScalarWhereInput | Federated_IdentityScalarWhereInput[]
  }

  export type Federated_IdentityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Federated_IdentityCreateWithoutUserInput, Federated_IdentityUncheckedCreateWithoutUserInput> | Federated_IdentityCreateWithoutUserInput[] | Federated_IdentityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Federated_IdentityCreateOrConnectWithoutUserInput | Federated_IdentityCreateOrConnectWithoutUserInput[]
    upsert?: Federated_IdentityUpsertWithWhereUniqueWithoutUserInput | Federated_IdentityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Federated_IdentityCreateManyUserInputEnvelope
    set?: Federated_IdentityWhereUniqueInput | Federated_IdentityWhereUniqueInput[]
    disconnect?: Federated_IdentityWhereUniqueInput | Federated_IdentityWhereUniqueInput[]
    delete?: Federated_IdentityWhereUniqueInput | Federated_IdentityWhereUniqueInput[]
    connect?: Federated_IdentityWhereUniqueInput | Federated_IdentityWhereUniqueInput[]
    update?: Federated_IdentityUpdateWithWhereUniqueWithoutUserInput | Federated_IdentityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Federated_IdentityUpdateManyWithWhereWithoutUserInput | Federated_IdentityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Federated_IdentityScalarWhereInput | Federated_IdentityScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFederated_IdentityInput = {
    create?: XOR<UserCreateWithoutFederated_IdentityInput, UserUncheckedCreateWithoutFederated_IdentityInput>
    connectOrCreate?: UserCreateOrConnectWithoutFederated_IdentityInput
    connect?: UserWhereUniqueInput
  }

  export type EnumEProviderFieldUpdateOperationsInput = {
    set?: $Enums.EProvider
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutFederated_IdentityNestedInput = {
    create?: XOR<UserCreateWithoutFederated_IdentityInput, UserUncheckedCreateWithoutFederated_IdentityInput>
    connectOrCreate?: UserCreateOrConnectWithoutFederated_IdentityInput
    upsert?: UserUpsertWithoutFederated_IdentityInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFederated_IdentityInput, UserUpdateWithoutFederated_IdentityInput>, UserUncheckedUpdateWithoutFederated_IdentityInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumEProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.EProvider | EnumEProviderFieldRefInput<$PrismaModel>
    in?: $Enums.EProvider[] | ListEnumEProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.EProvider[] | ListEnumEProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumEProviderFilter<$PrismaModel> | $Enums.EProvider
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumEProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EProvider | EnumEProviderFieldRefInput<$PrismaModel>
    in?: $Enums.EProvider[] | ListEnumEProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.EProvider[] | ListEnumEProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumEProviderWithAggregatesFilter<$PrismaModel> | $Enums.EProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEProviderFilter<$PrismaModel>
    _max?: NestedEnumEProviderFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Federated_IdentityCreateWithoutUserInput = {
    id?: string
    provider: $Enums.EProvider
    provider_id: string
    createdAt?: Date | string
  }

  export type Federated_IdentityUncheckedCreateWithoutUserInput = {
    id?: string
    provider: $Enums.EProvider
    provider_id: string
    createdAt?: Date | string
  }

  export type Federated_IdentityCreateOrConnectWithoutUserInput = {
    where: Federated_IdentityWhereUniqueInput
    create: XOR<Federated_IdentityCreateWithoutUserInput, Federated_IdentityUncheckedCreateWithoutUserInput>
  }

  export type Federated_IdentityCreateManyUserInputEnvelope = {
    data: Federated_IdentityCreateManyUserInput | Federated_IdentityCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type Federated_IdentityUpsertWithWhereUniqueWithoutUserInput = {
    where: Federated_IdentityWhereUniqueInput
    update: XOR<Federated_IdentityUpdateWithoutUserInput, Federated_IdentityUncheckedUpdateWithoutUserInput>
    create: XOR<Federated_IdentityCreateWithoutUserInput, Federated_IdentityUncheckedCreateWithoutUserInput>
  }

  export type Federated_IdentityUpdateWithWhereUniqueWithoutUserInput = {
    where: Federated_IdentityWhereUniqueInput
    data: XOR<Federated_IdentityUpdateWithoutUserInput, Federated_IdentityUncheckedUpdateWithoutUserInput>
  }

  export type Federated_IdentityUpdateManyWithWhereWithoutUserInput = {
    where: Federated_IdentityScalarWhereInput
    data: XOR<Federated_IdentityUpdateManyMutationInput, Federated_IdentityUncheckedUpdateManyWithoutUserInput>
  }

  export type Federated_IdentityScalarWhereInput = {
    AND?: Federated_IdentityScalarWhereInput | Federated_IdentityScalarWhereInput[]
    OR?: Federated_IdentityScalarWhereInput[]
    NOT?: Federated_IdentityScalarWhereInput | Federated_IdentityScalarWhereInput[]
    id?: UuidFilter<"Federated_Identity"> | string
    provider?: EnumEProviderFilter<"Federated_Identity"> | $Enums.EProvider
    provider_id?: StringFilter<"Federated_Identity"> | string
    user_id?: UuidFilter<"Federated_Identity"> | string
    createdAt?: DateTimeFilter<"Federated_Identity"> | Date | string
  }

  export type UserCreateWithoutFederated_IdentityInput = {
    id?: string
    fullname: string
    email: string
    password: string
    profile_picture: string
  }

  export type UserUncheckedCreateWithoutFederated_IdentityInput = {
    id?: string
    fullname: string
    email: string
    password: string
    profile_picture: string
  }

  export type UserCreateOrConnectWithoutFederated_IdentityInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFederated_IdentityInput, UserUncheckedCreateWithoutFederated_IdentityInput>
  }

  export type UserUpsertWithoutFederated_IdentityInput = {
    update: XOR<UserUpdateWithoutFederated_IdentityInput, UserUncheckedUpdateWithoutFederated_IdentityInput>
    create: XOR<UserCreateWithoutFederated_IdentityInput, UserUncheckedCreateWithoutFederated_IdentityInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFederated_IdentityInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFederated_IdentityInput, UserUncheckedUpdateWithoutFederated_IdentityInput>
  }

  export type UserUpdateWithoutFederated_IdentityInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutFederated_IdentityInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
  }

  export type Federated_IdentityCreateManyUserInput = {
    id?: string
    provider: $Enums.EProvider
    provider_id: string
    createdAt?: Date | string
  }

  export type Federated_IdentityUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumEProviderFieldUpdateOperationsInput | $Enums.EProvider
    provider_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Federated_IdentityUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumEProviderFieldUpdateOperationsInput | $Enums.EProvider
    provider_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Federated_IdentityUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumEProviderFieldUpdateOperationsInput | $Enums.EProvider
    provider_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}