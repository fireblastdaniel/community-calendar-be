module.exports = `
  scalar DateTime

  input UserCreateManyWithoutRsvpsInput {
    create: [UserCreateWithoutRsvpsInput!]
    connect: [UserWhereUniqueInput!]
  }

  input UserCreateWithoutRsvpsInput {
    id: ID
    firstName: String
    lastName: String
    oktaId: String!
    organizations: OrganizationCreateManyWithoutUsersInput
    saved: EventCreateManyWithoutSavedInput
    adminFor: EventCreateManyWithoutAdminsInput
    createdEvents: EventCreateManyWithoutCreatorInput
    createdImages: EventImageCreateManyWithoutCreatorInput
    profileImage: String
  }

  input UserWhereUniqueInput {
    id: ID
    oktaId: String
  }

  input UserCreateManyWithoutSavedInput {
    create: [UserCreateWithoutSavedInput!]
    connect: [UserWhereUniqueInput!]
  }

  input EventUrlCreateManyWithoutEventInput {
    create: [EventUrlCreateWithoutEventInput!]
    connect: [EventUrlWhereUniqueInput!]
  }

  input UserCreateManyWithoutAdminForInput {
    create: [UserCreateWithoutAdminForInput!]
    connect: [UserWhereUniqueInput!]
  }

  input LocationCreateManyWithoutEventInput {
    create: [LocationCreateWithoutEventInput!]
    connect: [LocationWhereUniqueInput!]
  }

  input SeriesCreateOneWithoutEventsInput {
    create: SeriesCreateWithoutEventsInput
    connect: SeriesWhereUniqueInput
  }

  input UserUpdateManyWithoutRsvpsInput {
    create: [UserCreateWithoutRsvpsInput!]
    delete: [UserWhereUniqueInput!]
    connect: [UserWhereUniqueInput!]
    set: [UserWhereUniqueInput!]
    disconnect: [UserWhereUniqueInput!]
    update: [UserUpdateWithWhereUniqueWithoutRsvpsInput!]
    upsert: [UserUpsertWithWhereUniqueWithoutRsvpsInput!]
    deleteMany: [UserScalarWhereInput!]
    updateMany: [UserUpdateManyWithWhereNestedInput!]
  }

  input UserUpdateManyWithoutSavedInput {
    create: [UserCreateWithoutSavedInput!]
    delete: [UserWhereUniqueInput!]
    connect: [UserWhereUniqueInput!]
    set: [UserWhereUniqueInput!]
    disconnect: [UserWhereUniqueInput!]
    update: [UserUpdateWithWhereUniqueWithoutSavedInput!]
    upsert: [UserUpsertWithWhereUniqueWithoutSavedInput!]
    deleteMany: [UserScalarWhereInput!]
    updateMany: [UserUpdateManyWithWhereNestedInput!]
  }

  input EventUrlUpdateManyWithoutEventInput {
    create: [EventUrlCreateWithoutEventInput!]
    delete: [EventUrlWhereUniqueInput!]
    connect: [EventUrlWhereUniqueInput!]
    set: [EventUrlWhereUniqueInput!]
    disconnect: [EventUrlWhereUniqueInput!]
    update: [EventUrlUpdateWithWhereUniqueWithoutEventInput!]
    upsert: [EventUrlUpsertWithWhereUniqueWithoutEventInput!]
    deleteMany: [EventUrlScalarWhereInput!]
    updateMany: [EventUrlUpdateManyWithWhereNestedInput!]
  }

  input UserUpdateManyWithoutAdminForInput {
    create: [UserCreateWithoutAdminForInput!]
    delete: [UserWhereUniqueInput!]
    connect: [UserWhereUniqueInput!]
    set: [UserWhereUniqueInput!]
    disconnect: [UserWhereUniqueInput!]
    update: [UserUpdateWithWhereUniqueWithoutAdminForInput!]
    upsert: [UserUpsertWithWhereUniqueWithoutAdminForInput!]
    deleteMany: [UserScalarWhereInput!]
    updateMany: [UserUpdateManyWithWhereNestedInput!]
  }

  input LocationUpdateManyWithoutEventInput {
    create: [LocationCreateWithoutEventInput!]
    delete: [LocationWhereUniqueInput!]
    connect: [LocationWhereUniqueInput!]
    set: [LocationWhereUniqueInput!]
    disconnect: [LocationWhereUniqueInput!]
    update: [LocationUpdateWithWhereUniqueWithoutEventInput!]
    upsert: [LocationUpsertWithWhereUniqueWithoutEventInput!]
    deleteMany: [LocationScalarWhereInput!]
    updateMany: [LocationUpdateManyWithWhereNestedInput!]
  }

  input OrganizationUpdateManyWithoutUsersInput {
    create: [OrganizationCreateWithoutUsersInput!]
    delete: [OrganizationWhereUniqueInput!]
    connect: [OrganizationWhereUniqueInput!]
    set: [OrganizationWhereUniqueInput!]
    disconnect: [OrganizationWhereUniqueInput!]
    update: [OrganizationUpdateWithWhereUniqueWithoutUsersInput!]
    upsert: [OrganizationUpsertWithWhereUniqueWithoutUsersInput!]
    deleteMany: [OrganizationScalarWhereInput!]
    updateMany: [OrganizationUpdateManyWithWhereNestedInput!]
  }

  input EventUpdateManyWithoutRsvpsInput {
    create: [EventCreateWithoutRsvpsInput!]
    delete: [EventWhereUniqueInput!]
    connect: [EventWhereUniqueInput!]
    set: [EventWhereUniqueInput!]
    disconnect: [EventWhereUniqueInput!]
    update: [EventUpdateWithWhereUniqueWithoutRsvpsInput!]
    upsert: [EventUpsertWithWhereUniqueWithoutRsvpsInput!]
    deleteMany: [EventScalarWhereInput!]
    updateMany: [EventUpdateManyWithWhereNestedInput!]
  }

  input EventUpdateManyWithoutSavedInput {
    create: [EventCreateWithoutSavedInput!]
    delete: [EventWhereUniqueInput!]
    connect: [EventWhereUniqueInput!]
    set: [EventWhereUniqueInput!]
    disconnect: [EventWhereUniqueInput!]
    update: [EventUpdateWithWhereUniqueWithoutSavedInput!]
    upsert: [EventUpsertWithWhereUniqueWithoutSavedInput!]
    deleteMany: [EventScalarWhereInput!]
    updateMany: [EventUpdateManyWithWhereNestedInput!]
  }

  input EventUpdateManyWithoutAdminsInput {
    create: [EventCreateWithoutAdminsInput!]
    delete: [EventWhereUniqueInput!]
    connect: [EventWhereUniqueInput!]
    set: [EventWhereUniqueInput!]
    disconnect: [EventWhereUniqueInput!]
    update: [EventUpdateWithWhereUniqueWithoutAdminsInput!]
    upsert: [EventUpsertWithWhereUniqueWithoutAdminsInput!]
    deleteMany: [EventScalarWhereInput!]
    updateMany: [EventUpdateManyWithWhereNestedInput!]
  }

  input EventUpdateManyWithoutCreatorInput {
    create: [EventCreateWithoutCreatorInput!]
    delete: [EventWhereUniqueInput!]
    connect: [EventWhereUniqueInput!]
    set: [EventWhereUniqueInput!]
    disconnect: [EventWhereUniqueInput!]
    update: [EventUpdateWithWhereUniqueWithoutCreatorInput!]
    upsert: [EventUpsertWithWhereUniqueWithoutCreatorInput!]
    deleteMany: [EventScalarWhereInput!]
    updateMany: [EventUpdateManyWithWhereNestedInput!]
  }

  input EventImageUpdateManyWithoutCreatorInput {
    create: [EventImageCreateWithoutCreatorInput!]
    delete: [EventImageWhereUniqueInput!]
    connect: [EventImageWhereUniqueInput!]
    set: [EventImageWhereUniqueInput!]
    disconnect: [EventImageWhereUniqueInput!]
    update: [EventImageUpdateWithWhereUniqueWithoutCreatorInput!]
    upsert: [EventImageUpsertWithWhereUniqueWithoutCreatorInput!]
    deleteMany: [EventImageScalarWhereInput!]
    updateMany: [EventImageUpdateManyWithWhereNestedInput!]
  }

  input UserCheckIdInput {
    oktaId: String!
  }

  input EventCreateTagInput {
    title: String!
  }

  input EventCreateImageInput {
    url: String!
  }

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  input EventCreateInput {
    id: ID
    title: String!
    description: String!
    start: DateTime!
    end: DateTime!
    eventImages: [EventCreateImageInput!]
    rsvps: UserCreateManyWithoutRsvpsInput
    saved: UserCreateManyWithoutSavedInput
    urls: EventUrlCreateManyWithoutEventInput
    admin: UserCreateManyWithoutAdminForInput
    locations: LocationCreateManyWithoutEventInput
    tags: [EventCreateTagInput!]
    ticketPrice: Float!
    series: SeriesCreateOneWithoutEventsInput
  }

  input EventUpdateInput {
    title: String
    description: String
    start: DateTime
    end: DateTime
    eventImages: [EventCreateImageInput!]
    rsvps: UserUpdateManyWithoutRsvpsInput
    saved: UserUpdateManyWithoutSavedInput
    urls: EventUrlUpdateManyWithoutEventInput
    admins: UserUpdateManyWithoutAdminForInput
    locations: LocationUpdateManyWithoutEventInput
    tags: [EventCreateTagInput!]
    ticketPrice: Float
  }

  input UserUpdateInput {
    firstName: String
    lastName: String
    organizations: OrganizationUpdateManyWithoutUsersInput
    rsvps: EventUpdateManyWithoutRsvpsInput
    saved: EventUpdateManyWithoutSavedInput
    adminFor: EventUpdateManyWithoutAdminsInput
    createdEvents: EventUpdateManyWithoutCreatorInput
    createdImages: EventImageUpdateManyWithoutCreatorInput
    profileImage: String
  }

  input EventIdInput {
    id: ID!
  }

  input TicketPriceSearchInput {
    minPrice: Int
    maxPrice: Int
  }

  input DateRangeSearchInput {
    start: DateTime!
    end: DateTime!
  }

  input LocationSearchInput {
    userLongitude: Float!
    userLatitude: Float!
    radius: Int!
  }

  input SearchFilters {
    index: String
    location: LocationSearchInput
    tags: [String!]
    ticketPrice: [TicketPriceSearchInput!]
    dateRange: DateRangeSearchInput
  }

  type Location {
    id: ID!
    name: String!
    streetAddress: String!
    streetAddress2: String
    city: String!
    zipcode: Int!
    state: String!
    latitude: Float
    longitude: Float
    distanceFromUser: Float
    distanceUnit: String
    event: Event!
    neighborhood: Neighborhood
  }

  type Event {
    id: ID!
    title: String!
    description: String!
    start: DateTime!
    end: DateTime!
    creator: User
    ticketPrice: Float!
    eventImages(
      where: EventImageWhereInput
      orderBy: EventImageOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [EventImage!]
    rsvps(
      where: UserWhereInput
      orderBy: UserOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [User!]
    saved(
      where: UserWhereInput
      orderBy: UserOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [User!]
    urls(
      where: EventUrlWhereInput
      orderBy: EventUrlOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [EventUrl!]
    admins(
      where: UserWhereInput
      orderBy: UserOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [User!]
    locations(
      where: LocationWhereInput
      orderBy: LocationOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
      # userLatitude and userLongitude args used to calculate distance to event
      userLatitude: Float
      userLongitude: Float
      # distanceUnit for event is "miles" or "kilometers" to comply with turf requirements
      distanceUnit: String
    ): [Location!]
    tags(
      where: TagWhereInput
      orderBy: TagOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Tag!]
    index: String!
  }

  type Query {
    users(
      where: UserWhereInput
      orderBy: UserOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [User!]
    checkId(data: UserCheckIdInput!): [User]
    user(where: UserWhereUniqueInput): User!
    events(
      where: EventWhereInput
      orderBy: EventOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
      searchFilters: SearchFilters
    ): [Event!]
    tags(
      where: TagWhereInput
      orderBy: TagOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Tag!]
    ticketMasterEvents(
      radius: Int
      # "miles" or "km"
      unit: String
      #number of events per page
      size: Int
      page: String
      keyword: String
      #Point to search for events from "30.00,-67.00" . NO SPACES
      latlong: String
      startDateTime: DateTime
      endDateTime: DateTime
      city: String
      countryCode: String
      stateCode: String
      postalCode: String
    ): TMResults
    ticketMasterEventsAlt(
      radius: Int
      # "miles" or "km"
      unit: String
      #number of events per page
      size: Int
      page: String
      keyword: String
      #Point to search for events from "30.00,-67.00" . NO SPACES
      latlong: String
      startDateTime: DateTime
      endDateTime: DateTime
      city: String
      countryCode: String
      stateCode: String
      postalCode: String
    ): TMResultsAlt
  }

  type Mutation {
    addUser(data: UserCreateInput!): User!
    deleteEvent(where: EventWhereUniqueInput!): Event
    rsvpEvent(event: EventIdInput!): Boolean!
    saveEvent(event: EventIdInput!): Boolean!
  }
`;
