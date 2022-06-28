/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  emsID?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  stateCode?: string | null,
  password?: string | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  emsID?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  stateCode?: ModelStringInput | null,
  password?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
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
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  emsID?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  stateCode?: string | null,
  password?: string | null,
  Checklist?: ModelChecklistConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelChecklistConnection = {
  __typename: "ModelChecklistConnection",
  items:  Array<Checklist | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Checklist = {
  __typename: "Checklist",
  id: string,
  userID: string,
  name?: string | null,
  description?: string | null,
  courseNumber?: number | null,
  dateStarted?: string | null,
  dateCompleted?: string | null,
  isComplete?: boolean | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type UpdateUserInput = {
  id: string,
  emsID?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  stateCode?: string | null,
  password?: string | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateChecklistInput = {
  id?: string | null,
  userID: string,
  name?: string | null,
  description?: string | null,
  courseNumber?: number | null,
  dateStarted?: string | null,
  dateCompleted?: string | null,
  isComplete?: boolean | null,
  _version?: number | null,
};

export type ModelChecklistConditionInput = {
  userID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  courseNumber?: ModelIntInput | null,
  dateStarted?: ModelStringInput | null,
  dateCompleted?: ModelStringInput | null,
  isComplete?: ModelBooleanInput | null,
  and?: Array< ModelChecklistConditionInput | null > | null,
  or?: Array< ModelChecklistConditionInput | null > | null,
  not?: ModelChecklistConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateChecklistInput = {
  id: string,
  userID?: string | null,
  name?: string | null,
  description?: string | null,
  courseNumber?: number | null,
  dateStarted?: string | null,
  dateCompleted?: string | null,
  isComplete?: boolean | null,
  _version?: number | null,
};

export type DeleteChecklistInput = {
  id: string,
  _version?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  emsID?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  stateCode?: ModelStringInput | null,
  password?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelChecklistFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  courseNumber?: ModelIntInput | null,
  dateStarted?: ModelStringInput | null,
  dateCompleted?: ModelStringInput | null,
  isComplete?: ModelBooleanInput | null,
  and?: Array< ModelChecklistFilterInput | null > | null,
  or?: Array< ModelChecklistFilterInput | null > | null,
  not?: ModelChecklistFilterInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    emsID?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    stateCode?: string | null,
    password?: string | null,
    Checklist?:  {
      __typename: "ModelChecklistConnection",
      items:  Array< {
        __typename: "Checklist",
        id: string,
        userID: string,
        name?: string | null,
        description?: string | null,
        courseNumber?: number | null,
        dateStarted?: string | null,
        dateCompleted?: string | null,
        isComplete?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    emsID?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    stateCode?: string | null,
    password?: string | null,
    Checklist?:  {
      __typename: "ModelChecklistConnection",
      items:  Array< {
        __typename: "Checklist",
        id: string,
        userID: string,
        name?: string | null,
        description?: string | null,
        courseNumber?: number | null,
        dateStarted?: string | null,
        dateCompleted?: string | null,
        isComplete?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    emsID?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    stateCode?: string | null,
    password?: string | null,
    Checklist?:  {
      __typename: "ModelChecklistConnection",
      items:  Array< {
        __typename: "Checklist",
        id: string,
        userID: string,
        name?: string | null,
        description?: string | null,
        courseNumber?: number | null,
        dateStarted?: string | null,
        dateCompleted?: string | null,
        isComplete?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateChecklistMutationVariables = {
  input: CreateChecklistInput,
  condition?: ModelChecklistConditionInput | null,
};

export type CreateChecklistMutation = {
  createChecklist?:  {
    __typename: "Checklist",
    id: string,
    userID: string,
    name?: string | null,
    description?: string | null,
    courseNumber?: number | null,
    dateStarted?: string | null,
    dateCompleted?: string | null,
    isComplete?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateChecklistMutationVariables = {
  input: UpdateChecklistInput,
  condition?: ModelChecklistConditionInput | null,
};

export type UpdateChecklistMutation = {
  updateChecklist?:  {
    __typename: "Checklist",
    id: string,
    userID: string,
    name?: string | null,
    description?: string | null,
    courseNumber?: number | null,
    dateStarted?: string | null,
    dateCompleted?: string | null,
    isComplete?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteChecklistMutationVariables = {
  input: DeleteChecklistInput,
  condition?: ModelChecklistConditionInput | null,
};

export type DeleteChecklistMutation = {
  deleteChecklist?:  {
    __typename: "Checklist",
    id: string,
    userID: string,
    name?: string | null,
    description?: string | null,
    courseNumber?: number | null,
    dateStarted?: string | null,
    dateCompleted?: string | null,
    isComplete?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    emsID?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    stateCode?: string | null,
    password?: string | null,
    Checklist?:  {
      __typename: "ModelChecklistConnection",
      items:  Array< {
        __typename: "Checklist",
        id: string,
        userID: string,
        name?: string | null,
        description?: string | null,
        courseNumber?: number | null,
        dateStarted?: string | null,
        dateCompleted?: string | null,
        isComplete?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      emsID?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      stateCode?: string | null,
      password?: string | null,
      Checklist?:  {
        __typename: "ModelChecklistConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      emsID?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      stateCode?: string | null,
      password?: string | null,
      Checklist?:  {
        __typename: "ModelChecklistConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetChecklistQueryVariables = {
  id: string,
};

export type GetChecklistQuery = {
  getChecklist?:  {
    __typename: "Checklist",
    id: string,
    userID: string,
    name?: string | null,
    description?: string | null,
    courseNumber?: number | null,
    dateStarted?: string | null,
    dateCompleted?: string | null,
    isComplete?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListChecklistsQueryVariables = {
  filter?: ModelChecklistFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChecklistsQuery = {
  listChecklists?:  {
    __typename: "ModelChecklistConnection",
    items:  Array< {
      __typename: "Checklist",
      id: string,
      userID: string,
      name?: string | null,
      description?: string | null,
      courseNumber?: number | null,
      dateStarted?: string | null,
      dateCompleted?: string | null,
      isComplete?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncChecklistsQueryVariables = {
  filter?: ModelChecklistFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncChecklistsQuery = {
  syncChecklists?:  {
    __typename: "ModelChecklistConnection",
    items:  Array< {
      __typename: "Checklist",
      id: string,
      userID: string,
      name?: string | null,
      description?: string | null,
      courseNumber?: number | null,
      dateStarted?: string | null,
      dateCompleted?: string | null,
      isComplete?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    emsID?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    stateCode?: string | null,
    password?: string | null,
    Checklist?:  {
      __typename: "ModelChecklistConnection",
      items:  Array< {
        __typename: "Checklist",
        id: string,
        userID: string,
        name?: string | null,
        description?: string | null,
        courseNumber?: number | null,
        dateStarted?: string | null,
        dateCompleted?: string | null,
        isComplete?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    emsID?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    stateCode?: string | null,
    password?: string | null,
    Checklist?:  {
      __typename: "ModelChecklistConnection",
      items:  Array< {
        __typename: "Checklist",
        id: string,
        userID: string,
        name?: string | null,
        description?: string | null,
        courseNumber?: number | null,
        dateStarted?: string | null,
        dateCompleted?: string | null,
        isComplete?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    emsID?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    stateCode?: string | null,
    password?: string | null,
    Checklist?:  {
      __typename: "ModelChecklistConnection",
      items:  Array< {
        __typename: "Checklist",
        id: string,
        userID: string,
        name?: string | null,
        description?: string | null,
        courseNumber?: number | null,
        dateStarted?: string | null,
        dateCompleted?: string | null,
        isComplete?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateChecklistSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateChecklistSubscription = {
  onCreateChecklist?:  {
    __typename: "Checklist",
    id: string,
    userID: string,
    name?: string | null,
    description?: string | null,
    courseNumber?: number | null,
    dateStarted?: string | null,
    dateCompleted?: string | null,
    isComplete?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateChecklistSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateChecklistSubscription = {
  onUpdateChecklist?:  {
    __typename: "Checklist",
    id: string,
    userID: string,
    name?: string | null,
    description?: string | null,
    courseNumber?: number | null,
    dateStarted?: string | null,
    dateCompleted?: string | null,
    isComplete?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteChecklistSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteChecklistSubscription = {
  onDeleteChecklist?:  {
    __typename: "Checklist",
    id: string,
    userID: string,
    name?: string | null,
    description?: string | null,
    courseNumber?: number | null,
    dateStarted?: string | null,
    dateCompleted?: string | null,
    isComplete?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};
