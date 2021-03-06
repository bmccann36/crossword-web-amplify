/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateRestaurant: OnCreateRestaurantSubscription;
  onUpdateRestaurant: OnUpdateRestaurantSubscription;
  onDeleteRestaurant: OnDeleteRestaurantSubscription;
};

export type CreateRestaurantInput = {
  id?: string | null;
  name: string;
  description: string;
  city: string;
};

export type ModelRestaurantConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  city?: ModelStringInput | null;
  and?: Array<ModelRestaurantConditionInput | null> | null;
  or?: Array<ModelRestaurantConditionInput | null> | null;
  not?: ModelRestaurantConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Restaurant = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateRestaurantInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  city?: string | null;
};

export type DeleteRestaurantInput = {
  id: string;
};

export type User = {
  __typename: "User";
  Username: string;
  UserAttributes?: Array<Value | null> | null;
  UserCreateDate?: string | null;
  UserLastModifiedDate?: string | null;
  Enabled?: boolean | null;
  UserStatus?: UserStatus | null;
  MFAOptions?: Array<MFAOption | null> | null;
  PreferredMfaSetting?: string | null;
  UserMFASettingList?: string | null;
};

export type Value = {
  __typename: "Value";
  Name: string;
  Value?: string | null;
};

export enum UserStatus {
  UNCONFIRMED = "UNCONFIRMED",
  CONFIRMED = "CONFIRMED",
  ARCHIVED = "ARCHIVED",
  COMPROMISED = "COMPROMISED",
  UNKNOWN = "UNKNOWN",
  RESET_REQUIRED = "RESET_REQUIRED",
  FORCE_CHANGE_PASSWORD = "FORCE_CHANGE_PASSWORD"
}

export type MFAOption = {
  __typename: "MFAOption";
  DeliveryMedium?: string | null;
  AttributeName?: string | null;
};

export type ModelRestaurantFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  city?: ModelStringInput | null;
  and?: Array<ModelRestaurantFilterInput | null> | null;
  or?: Array<ModelRestaurantFilterInput | null> | null;
  not?: ModelRestaurantFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelRestaurantConnection = {
  __typename: "ModelRestaurantConnection";
  items?: Array<Restaurant | null> | null;
  nextToken?: string | null;
};

export type CreateRestaurantMutation = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateRestaurantMutation = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type DeleteRestaurantMutation = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type MeQuery = {
  __typename: "User";
  Username: string;
  UserAttributes?: Array<{
    __typename: "Value";
    Name: string;
    Value?: string | null;
  } | null> | null;
  UserCreateDate?: string | null;
  UserLastModifiedDate?: string | null;
  Enabled?: boolean | null;
  UserStatus?: UserStatus | null;
  MFAOptions?: Array<{
    __typename: "MFAOption";
    DeliveryMedium?: string | null;
    AttributeName?: string | null;
  } | null> | null;
  PreferredMfaSetting?: string | null;
  UserMFASettingList?: string | null;
};

export type GetRestaurantQuery = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ListRestaurantsQuery = {
  __typename: "ModelRestaurantConnection";
  items?: Array<{
    __typename: "Restaurant";
    id: string;
    name: string;
    description: string;
    city: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateRestaurantSubscription = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnUpdateRestaurantSubscription = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnDeleteRestaurantSubscription = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateRestaurant(
    input: CreateRestaurantInput,
    condition?: ModelRestaurantConditionInput
  ): Promise<CreateRestaurantMutation> {
    const statement = `mutation CreateRestaurant($input: CreateRestaurantInput!, $condition: ModelRestaurantConditionInput) {
        createRestaurant(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRestaurantMutation>response.data.createRestaurant;
  }
  async UpdateRestaurant(
    input: UpdateRestaurantInput,
    condition?: ModelRestaurantConditionInput
  ): Promise<UpdateRestaurantMutation> {
    const statement = `mutation UpdateRestaurant($input: UpdateRestaurantInput!, $condition: ModelRestaurantConditionInput) {
        updateRestaurant(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRestaurantMutation>response.data.updateRestaurant;
  }
  async DeleteRestaurant(
    input: DeleteRestaurantInput,
    condition?: ModelRestaurantConditionInput
  ): Promise<DeleteRestaurantMutation> {
    const statement = `mutation DeleteRestaurant($input: DeleteRestaurantInput!, $condition: ModelRestaurantConditionInput) {
        deleteRestaurant(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRestaurantMutation>response.data.deleteRestaurant;
  }
  async Me(): Promise<MeQuery> {
    const statement = `query Me {
        me {
          __typename
          Username
          UserAttributes {
            __typename
            Name
            Value
          }
          UserCreateDate
          UserLastModifiedDate
          Enabled
          UserStatus
          MFAOptions {
            __typename
            DeliveryMedium
            AttributeName
          }
          PreferredMfaSetting
          UserMFASettingList
        }
      }`;
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <MeQuery>response.data.me;
  }
  async Echo(msg?: string): Promise<string | null> {
    const statement = `query Echo($msg: String) {
        echo(msg: $msg)
      }`;
    const gqlAPIServiceArguments: any = {};
    if (msg) {
      gqlAPIServiceArguments.msg = msg;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <string | null>response.data.echo;
  }
  async GetRestaurant(id: string): Promise<GetRestaurantQuery> {
    const statement = `query GetRestaurant($id: ID!) {
        getRestaurant(id: $id) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRestaurantQuery>response.data.getRestaurant;
  }
  async ListRestaurants(
    filter?: ModelRestaurantFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRestaurantsQuery> {
    const statement = `query ListRestaurants($filter: ModelRestaurantFilterInput, $limit: Int, $nextToken: String) {
        listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            city
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRestaurantsQuery>response.data.listRestaurants;
  }
  OnCreateRestaurantListener(
    owner: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRestaurant">>
  > {
    const statement = `subscription OnCreateRestaurant($owner: String!) {
        onCreateRestaurant(owner: $owner) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      owner
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRestaurant">>
    >;
  }

  OnUpdateRestaurantListener(
    owner: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRestaurant">>
  > {
    const statement = `subscription OnUpdateRestaurant($owner: String!) {
        onUpdateRestaurant(owner: $owner) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      owner
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRestaurant">>
    >;
  }

  OnDeleteRestaurantListener(
    owner: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRestaurant">>
  > {
    const statement = `subscription OnDeleteRestaurant($owner: String!) {
        onDeleteRestaurant(owner: $owner) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      owner
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRestaurant">>
    >;
  }
}
