module.exports = `
  scalar DateTime

  type AggregateEvent {
    count: Int!
  }
  
  type AggregateEventImage {
    count: Int!
  }
  
  type AggregateEventUrl {
    count: Int!
  }
  
  type AggregateGeoJson {
    count: Int!
  }
  
  type AggregateLocation {
    count: Int!
  }
  
  type AggregateNeighborhood {
    count: Int!
  }
  
  type AggregateOrganization {
    count: Int!
  }
  
  type AggregateSeries {
    count: Int!
  }
  
  type AggregateTag {
    count: Int!
  }
  
  type AggregateUser {
    count: Int!
  }
  
  type BatchPayload {
    count: Long!
  }
  
  scalar DateTime
  
  type Event {
    id: ID!
    title: String!
    description: String!
    start: DateTime!
    end: DateTime!
    ticketPrice: Float!
    creator: User
    eventImages(where: EventImageWhereInput, orderBy: EventImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [EventImage!]
    rsvps(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
    saved(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
    urls(where: EventUrlWhereInput, orderBy: EventUrlOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [EventUrl!]
    admins(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
    locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location!]
    tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag!]
    index: String!
    series: Series
  }
  
  type EventConnection {
    pageInfo: PageInfo!
    edges: [EventEdge]!
    aggregate: AggregateEvent!
  }
  
  input EventCreateInput {
    id: ID
    title: String!
    description: String!
    start: DateTime!
    end: DateTime!
    ticketPrice: Float!
    creator: UserCreateOneWithoutCreatedEventsInput
    eventImages: EventImageCreateManyWithoutEventInput
    rsvps: UserCreateManyWithoutRsvpsInput
    saved: UserCreateManyWithoutSavedInput
    urls: EventUrlCreateManyWithoutEventInput
    admins: UserCreateManyWithoutAdminForInput
    locations: LocationCreateManyWithoutEventInput
    tags: TagCreateManyWithoutEventsInput
    index: String!
    series: SeriesCreateOneWithoutEventsInput
  }
  
  input EventCreateManyWithoutAdminsInput {
    create: [EventCreateWithoutAdminsInput!]
    connect: [EventWhereUniqueInput!]
  }
  
  input EventCreateManyWithoutCreatorInput {
    create: [EventCreateWithoutCreatorInput!]
    connect: [EventWhereUniqueInput!]
  }
  
  input EventCreateManyWithoutRsvpsInput {
    create: [EventCreateWithoutRsvpsInput!]
    connect: [EventWhereUniqueInput!]
  }
  
  input EventCreateManyWithoutSavedInput {
    create: [EventCreateWithoutSavedInput!]
    connect: [EventWhereUniqueInput!]
  }
  
  input EventCreateManyWithoutSeriesInput {
    create: [EventCreateWithoutSeriesInput!]
    connect: [EventWhereUniqueInput!]
  }
  
  input EventCreateManyWithoutTagsInput {
    create: [EventCreateWithoutTagsInput!]
    connect: [EventWhereUniqueInput!]
  }
  
  input EventCreateOneWithoutEventImagesInput {
    create: EventCreateWithoutEventImagesInput
    connect: EventWhereUniqueInput
  }
  
  input EventCreateOneWithoutLocationsInput {
    create: EventCreateWithoutLocationsInput
    connect: EventWhereUniqueInput
  }
  
  input EventCreateOneWithoutUrlsInput {
    create: EventCreateWithoutUrlsInput
    connect: EventWhereUniqueInput
  }
  
  input EventCreateWithoutAdminsInput {
    id: ID
    title: String!
    description: String!
    start: DateTime!
    end: DateTime!
    ticketPrice: Float!
    creator: UserCreateOneWithoutCreatedEventsInput
    eventImages: EventImageCreateManyWithoutEventInput
    rsvps: UserCreateManyWithoutRsvpsInput
    saved: UserCreateManyWithoutSavedInput
    urls: EventUrlCreateManyWithoutEventInput
    locations: LocationCreateManyWithoutEventInput
    tags: TagCreateManyWithoutEventsInput
    index: String!
    series: SeriesCreateOneWithoutEventsInput
  }
  
  input EventCreateWithoutCreatorInput {
    id: ID
    title: String!
    description: String!
    start: DateTime!
    end: DateTime!
    ticketPrice: Float!
    eventImages: EventImageCreateManyWithoutEventInput
    rsvps: UserCreateManyWithoutRsvpsInput
    saved: UserCreateManyWithoutSavedInput
    urls: EventUrlCreateManyWithoutEventInput
    admins: UserCreateManyWithoutAdminForInput
    locations: LocationCreateManyWithoutEventInput
    tags: TagCreateManyWithoutEventsInput
    index: String!
    series: SeriesCreateOneWithoutEventsInput
  }
  
  input EventCreateWithoutEventImagesInput {
    id: ID
    title: String!
    description: String!
    start: DateTime!
    end: DateTime!
    ticketPrice: Float!
    creator: UserCreateOneWithoutCreatedEventsInput
    rsvps: UserCreateManyWithoutRsvpsInput
    saved: UserCreateManyWithoutSavedInput
    urls: EventUrlCreateManyWithoutEventInput
    admins: UserCreateManyWithoutAdminForInput
    locations: LocationCreateManyWithoutEventInput
    tags: TagCreateManyWithoutEventsInput
    index: String!
    series: SeriesCreateOneWithoutEventsInput
  }
  
  input EventCreateWithoutLocationsInput {
    id: ID
    title: String!
    description: String!
    start: DateTime!
    end: DateTime!
    ticketPrice: Float!
    creator: UserCreateOneWithoutCreatedEventsInput
    eventImages: EventImageCreateManyWithoutEventInput
    rsvps: UserCreateManyWithoutRsvpsInput
    saved: UserCreateManyWithoutSavedInput
    urls: EventUrlCreateManyWithoutEventInput
    admins: UserCreateManyWithoutAdminForInput
    tags: TagCreateManyWithoutEventsInput
    index: String!
    series: SeriesCreateOneWithoutEventsInput
  }
  
  input EventCreateWithoutRsvpsInput {
    id: ID
    title: String!
    description: String!
    start: DateTime!
    end: DateTime!
    ticketPrice: Float!
    creator: UserCreateOneWithoutCreatedEventsInput
    eventImages: EventImageCreateManyWithoutEventInput
    saved: UserCreateManyWithoutSavedInput
    urls: EventUrlCreateManyWithoutEventInput
    admins: UserCreateManyWithoutAdminForInput
    locations: LocationCreateManyWithoutEventInput
    tags: TagCreateManyWithoutEventsInput
    index: String!
    series: SeriesCreateOneWithoutEventsInput
  }
  
  input EventCreateWithoutSavedInput {
    id: ID
    title: String!
    description: String!
    start: DateTime!
    end: DateTime!
    ticketPrice: Float!
    creator: UserCreateOneWithoutCreatedEventsInput
    eventImages: EventImageCreateManyWithoutEventInput
    rsvps: UserCreateManyWithoutRsvpsInput
    urls: EventUrlCreateManyWithoutEventInput
    admins: UserCreateManyWithoutAdminForInput
    locations: LocationCreateManyWithoutEventInput
    tags: TagCreateManyWithoutEventsInput
    index: String!
    series: SeriesCreateOneWithoutEventsInput
  }
  
  input EventCreateWithoutSeriesInput {
    id: ID
    title: String!
    description: String!
    start: DateTime!
    end: DateTime!
    ticketPrice: Float!
    creator: UserCreateOneWithoutCreatedEventsInput
    eventImages: EventImageCreateManyWithoutEventInput
    rsvps: UserCreateManyWithoutRsvpsInput
    saved: UserCreateManyWithoutSavedInput
    urls: EventUrlCreateManyWithoutEventInput
    admins: UserCreateManyWithoutAdminForInput
    locations: LocationCreateManyWithoutEventInput
    tags: TagCreateManyWithoutEventsInput
    index: String!
  }
  
  input EventCreateWithoutTagsInput {
    id: ID
    title: String!
    description: String!
    start: DateTime!
    end: DateTime!
    ticketPrice: Float!
    creator: UserCreateOneWithoutCreatedEventsInput
    eventImages: EventImageCreateManyWithoutEventInput
    rsvps: UserCreateManyWithoutRsvpsInput
    saved: UserCreateManyWithoutSavedInput
    urls: EventUrlCreateManyWithoutEventInput
    admins: UserCreateManyWithoutAdminForInput
    locations: LocationCreateManyWithoutEventInput
    index: String!
    series: SeriesCreateOneWithoutEventsInput
  }
  
  input EventCreateWithoutUrlsInput {
    id: ID
    title: String!
    description: String!
    start: DateTime!
    end: DateTime!
    ticketPrice: Float!
    creator: UserCreateOneWithoutCreatedEventsInput
    eventImages: EventImageCreateManyWithoutEventInput
    rsvps: UserCreateManyWithoutRsvpsInput
    saved: UserCreateManyWithoutSavedInput
    admins: UserCreateManyWithoutAdminForInput
    locations: LocationCreateManyWithoutEventInput
    tags: TagCreateManyWithoutEventsInput
    index: String!
    series: SeriesCreateOneWithoutEventsInput
  }
  
  type EventEdge {
    node: Event!
    cursor: String!
  }
  
  type EventImage {
    id: ID!
    creator: User!
    event: Event
    url: String!
  }
  
  type EventImageConnection {
    pageInfo: PageInfo!
    edges: [EventImageEdge]!
    aggregate: AggregateEventImage!
  }
  
  input EventImageCreateInput {
    id: ID
    creator: UserCreateOneWithoutCreatedImagesInput!
    event: EventCreateOneWithoutEventImagesInput
    url: String!
  }
  
  input EventImageCreateManyWithoutCreatorInput {
    create: [EventImageCreateWithoutCreatorInput!]
    connect: [EventImageWhereUniqueInput!]
  }
  
  input EventImageCreateManyWithoutEventInput {
    create: [EventImageCreateWithoutEventInput!]
    connect: [EventImageWhereUniqueInput!]
  }
  
  input EventImageCreateWithoutCreatorInput {
    id: ID
    event: EventCreateOneWithoutEventImagesInput
    url: String!
  }
  
  input EventImageCreateWithoutEventInput {
    id: ID
    creator: UserCreateOneWithoutCreatedImagesInput!
    url: String!
  }
  
  type EventImageEdge {
    node: EventImage!
    cursor: String!
  }
  
  enum EventImageOrderByInput {
    id_ASC
    id_DESC
    url_ASC
    url_DESC
  }
  
  type EventImagePreviousValues {
    id: ID!
    url: String!
  }
  
  input EventImageScalarWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    url: String
    url_not: String
    url_in: [String!]
    url_not_in: [String!]
    url_lt: String
    url_lte: String
    url_gt: String
    url_gte: String
    url_contains: String
    url_not_contains: String
    url_starts_with: String
    url_not_starts_with: String
    url_ends_with: String
    url_not_ends_with: String
    AND: [EventImageScalarWhereInput!]
    OR: [EventImageScalarWhereInput!]
    NOT: [EventImageScalarWhereInput!]
  }
  
  type EventImageSubscriptionPayload {
    mutation: MutationType!
    node: EventImage
    updatedFields: [String!]
    previousValues: EventImagePreviousValues
  }
  
  input EventImageSubscriptionWhereInput {
    mutation_in: [MutationType!]
    updatedFields_contains: String
    updatedFields_contains_every: [String!]
    updatedFields_contains_some: [String!]
    node: EventImageWhereInput
    AND: [EventImageSubscriptionWhereInput!]
    OR: [EventImageSubscriptionWhereInput!]
    NOT: [EventImageSubscriptionWhereInput!]
  }
  
  input EventImageUpdateInput {
    creator: UserUpdateOneRequiredWithoutCreatedImagesInput
    event: EventUpdateOneWithoutEventImagesInput
    url: String
  }
  
  input EventImageUpdateManyDataInput {
    url: String
  }
  
  input EventImageUpdateManyMutationInput {
    url: String
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
  
  input EventImageUpdateManyWithoutEventInput {
    create: [EventImageCreateWithoutEventInput!]
    delete: [EventImageWhereUniqueInput!]
    connect: [EventImageWhereUniqueInput!]
    set: [EventImageWhereUniqueInput!]
    disconnect: [EventImageWhereUniqueInput!]
    update: [EventImageUpdateWithWhereUniqueWithoutEventInput!]
    upsert: [EventImageUpsertWithWhereUniqueWithoutEventInput!]
    deleteMany: [EventImageScalarWhereInput!]
    updateMany: [EventImageUpdateManyWithWhereNestedInput!]
  }
  
  input EventImageUpdateManyWithWhereNestedInput {
    where: EventImageScalarWhereInput!
    data: EventImageUpdateManyDataInput!
  }
  
  input EventImageUpdateWithoutCreatorDataInput {
    event: EventUpdateOneWithoutEventImagesInput
    url: String
  }
  
  input EventImageUpdateWithoutEventDataInput {
    creator: UserUpdateOneRequiredWithoutCreatedImagesInput
    url: String
  }
  
  input EventImageUpdateWithWhereUniqueWithoutCreatorInput {
    where: EventImageWhereUniqueInput!
    data: EventImageUpdateWithoutCreatorDataInput!
  }
  
  input EventImageUpdateWithWhereUniqueWithoutEventInput {
    where: EventImageWhereUniqueInput!
    data: EventImageUpdateWithoutEventDataInput!
  }
  
  input EventImageUpsertWithWhereUniqueWithoutCreatorInput {
    where: EventImageWhereUniqueInput!
    update: EventImageUpdateWithoutCreatorDataInput!
    create: EventImageCreateWithoutCreatorInput!
  }
  
  input EventImageUpsertWithWhereUniqueWithoutEventInput {
    where: EventImageWhereUniqueInput!
    update: EventImageUpdateWithoutEventDataInput!
    create: EventImageCreateWithoutEventInput!
  }
  
  input EventImageWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    creator: UserWhereInput
    event: EventWhereInput
    url: String
    url_not: String
    url_in: [String!]
    url_not_in: [String!]
    url_lt: String
    url_lte: String
    url_gt: String
    url_gte: String
    url_contains: String
    url_not_contains: String
    url_starts_with: String
    url_not_starts_with: String
    url_ends_with: String
    url_not_ends_with: String
    AND: [EventImageWhereInput!]
    OR: [EventImageWhereInput!]
    NOT: [EventImageWhereInput!]
  }
  
  input EventImageWhereUniqueInput {
    id: ID
  }
  
  enum EventOrderByInput {
    id_ASC
    id_DESC
    title_ASC
    title_DESC
    description_ASC
    description_DESC
    start_ASC
    start_DESC
    end_ASC
    end_DESC
    ticketPrice_ASC
    ticketPrice_DESC
    index_ASC
    index_DESC
  }
  
  type EventPreviousValues {
    id: ID!
    title: String!
    description: String!
    start: DateTime!
    end: DateTime!
    ticketPrice: Float!
    index: String!
  }
  
  input EventScalarWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    title: String
    title_not: String
    title_in: [String!]
    title_not_in: [String!]
    title_lt: String
    title_lte: String
    title_gt: String
    title_gte: String
    title_contains: String
    title_not_contains: String
    title_starts_with: String
    title_not_starts_with: String
    title_ends_with: String
    title_not_ends_with: String
    description: String
    description_not: String
    description_in: [String!]
    description_not_in: [String!]
    description_lt: String
    description_lte: String
    description_gt: String
    description_gte: String
    description_contains: String
    description_not_contains: String
    description_starts_with: String
    description_not_starts_with: String
    description_ends_with: String
    description_not_ends_with: String
    start: DateTime
    start_not: DateTime
    start_in: [DateTime!]
    start_not_in: [DateTime!]
    start_lt: DateTime
    start_lte: DateTime
    start_gt: DateTime
    start_gte: DateTime
    end: DateTime
    end_not: DateTime
    end_in: [DateTime!]
    end_not_in: [DateTime!]
    end_lt: DateTime
    end_lte: DateTime
    end_gt: DateTime
    end_gte: DateTime
    ticketPrice: Float
    ticketPrice_not: Float
    ticketPrice_in: [Float!]
    ticketPrice_not_in: [Float!]
    ticketPrice_lt: Float
    ticketPrice_lte: Float
    ticketPrice_gt: Float
    ticketPrice_gte: Float
    index: String
    index_not: String
    index_in: [String!]
    index_not_in: [String!]
    index_lt: String
    index_lte: String
    index_gt: String
    index_gte: String
    index_contains: String
    index_not_contains: String
    index_starts_with: String
    index_not_starts_with: String
    index_ends_with: String
    index_not_ends_with: String
    AND: [EventScalarWhereInput!]
    OR: [EventScalarWhereInput!]
    NOT: [EventScalarWhereInput!]
  }
  
  type EventSubscriptionPayload {
    mutation: MutationType!
    node: Event
    updatedFields: [String!]
    previousValues: EventPreviousValues
  }
  
  input EventSubscriptionWhereInput {
    mutation_in: [MutationType!]
    updatedFields_contains: String
    updatedFields_contains_every: [String!]
    updatedFields_contains_some: [String!]
    node: EventWhereInput
    AND: [EventSubscriptionWhereInput!]
    OR: [EventSubscriptionWhereInput!]
    NOT: [EventSubscriptionWhereInput!]
  }
  
  input EventUpdateInput {
    title: String
    description: String
    start: DateTime
    end: DateTime
    ticketPrice: Float
    creator: UserUpdateOneWithoutCreatedEventsInput
    eventImages: EventImageUpdateManyWithoutEventInput
    rsvps: UserUpdateManyWithoutRsvpsInput
    saved: UserUpdateManyWithoutSavedInput
    urls: EventUrlUpdateManyWithoutEventInput
    admins: UserUpdateManyWithoutAdminForInput
    locations: LocationUpdateManyWithoutEventInput
    tags: TagUpdateManyWithoutEventsInput
    index: String
    series: SeriesUpdateOneWithoutEventsInput
  }
  
  input EventUpdateManyDataInput {
    title: String
    description: String
    start: DateTime
    end: DateTime
    ticketPrice: Float
    index: String
  }
  
  input EventUpdateManyMutationInput {
    title: String
    description: String
    start: DateTime
    end: DateTime
    ticketPrice: Float
    index: String
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
  
  input EventUpdateManyWithoutSeriesInput {
    create: [EventCreateWithoutSeriesInput!]
    delete: [EventWhereUniqueInput!]
    connect: [EventWhereUniqueInput!]
    set: [EventWhereUniqueInput!]
    disconnect: [EventWhereUniqueInput!]
    update: [EventUpdateWithWhereUniqueWithoutSeriesInput!]
    upsert: [EventUpsertWithWhereUniqueWithoutSeriesInput!]
    deleteMany: [EventScalarWhereInput!]
    updateMany: [EventUpdateManyWithWhereNestedInput!]
  }
  
  input EventUpdateManyWithoutTagsInput {
    create: [EventCreateWithoutTagsInput!]
    delete: [EventWhereUniqueInput!]
    connect: [EventWhereUniqueInput!]
    set: [EventWhereUniqueInput!]
    disconnect: [EventWhereUniqueInput!]
    update: [EventUpdateWithWhereUniqueWithoutTagsInput!]
    upsert: [EventUpsertWithWhereUniqueWithoutTagsInput!]
    deleteMany: [EventScalarWhereInput!]
    updateMany: [EventUpdateManyWithWhereNestedInput!]
  }
  
  input EventUpdateManyWithWhereNestedInput {
    where: EventScalarWhereInput!
    data: EventUpdateManyDataInput!
  }
  
  input EventUpdateOneRequiredWithoutLocationsInput {
    create: EventCreateWithoutLocationsInput
    update: EventUpdateWithoutLocationsDataInput
    upsert: EventUpsertWithoutLocationsInput
    connect: EventWhereUniqueInput
  }
  
  input EventUpdateOneRequiredWithoutUrlsInput {
    create: EventCreateWithoutUrlsInput
    update: EventUpdateWithoutUrlsDataInput
    upsert: EventUpsertWithoutUrlsInput
    connect: EventWhereUniqueInput
  }
  
  input EventUpdateOneWithoutEventImagesInput {
    create: EventCreateWithoutEventImagesInput
    update: EventUpdateWithoutEventImagesDataInput
    upsert: EventUpsertWithoutEventImagesInput
    delete: Boolean
    disconnect: Boolean
    connect: EventWhereUniqueInput
  }
  
  input EventUpdateWithoutAdminsDataInput {
    title: String
    description: String
    start: DateTime
    end: DateTime
    ticketPrice: Float
    creator: UserUpdateOneWithoutCreatedEventsInput
    eventImages: EventImageUpdateManyWithoutEventInput
    rsvps: UserUpdateManyWithoutRsvpsInput
    saved: UserUpdateManyWithoutSavedInput
    urls: EventUrlUpdateManyWithoutEventInput
    locations: LocationUpdateManyWithoutEventInput
    tags: TagUpdateManyWithoutEventsInput
    index: String
    series: SeriesUpdateOneWithoutEventsInput
  }
  
  input EventUpdateWithoutCreatorDataInput {
    title: String
    description: String
    start: DateTime
    end: DateTime
    ticketPrice: Float
    eventImages: EventImageUpdateManyWithoutEventInput
    rsvps: UserUpdateManyWithoutRsvpsInput
    saved: UserUpdateManyWithoutSavedInput
    urls: EventUrlUpdateManyWithoutEventInput
    admins: UserUpdateManyWithoutAdminForInput
    locations: LocationUpdateManyWithoutEventInput
    tags: TagUpdateManyWithoutEventsInput
    index: String
    series: SeriesUpdateOneWithoutEventsInput
  }
  
  input EventUpdateWithoutEventImagesDataInput {
    title: String
    description: String
    start: DateTime
    end: DateTime
    ticketPrice: Float
    creator: UserUpdateOneWithoutCreatedEventsInput
    rsvps: UserUpdateManyWithoutRsvpsInput
    saved: UserUpdateManyWithoutSavedInput
    urls: EventUrlUpdateManyWithoutEventInput
    admins: UserUpdateManyWithoutAdminForInput
    locations: LocationUpdateManyWithoutEventInput
    tags: TagUpdateManyWithoutEventsInput
    index: String
    series: SeriesUpdateOneWithoutEventsInput
  }
  
  input EventUpdateWithoutLocationsDataInput {
    title: String
    description: String
    start: DateTime
    end: DateTime
    ticketPrice: Float
    creator: UserUpdateOneWithoutCreatedEventsInput
    eventImages: EventImageUpdateManyWithoutEventInput
    rsvps: UserUpdateManyWithoutRsvpsInput
    saved: UserUpdateManyWithoutSavedInput
    urls: EventUrlUpdateManyWithoutEventInput
    admins: UserUpdateManyWithoutAdminForInput
    tags: TagUpdateManyWithoutEventsInput
    index: String
    series: SeriesUpdateOneWithoutEventsInput
  }
  
  input EventUpdateWithoutRsvpsDataInput {
    title: String
    description: String
    start: DateTime
    end: DateTime
    ticketPrice: Float
    creator: UserUpdateOneWithoutCreatedEventsInput
    eventImages: EventImageUpdateManyWithoutEventInput
    saved: UserUpdateManyWithoutSavedInput
    urls: EventUrlUpdateManyWithoutEventInput
    admins: UserUpdateManyWithoutAdminForInput
    locations: LocationUpdateManyWithoutEventInput
    tags: TagUpdateManyWithoutEventsInput
    index: String
    series: SeriesUpdateOneWithoutEventsInput
  }
  
  input EventUpdateWithoutSavedDataInput {
    title: String
    description: String
    start: DateTime
    end: DateTime
    ticketPrice: Float
    creator: UserUpdateOneWithoutCreatedEventsInput
    eventImages: EventImageUpdateManyWithoutEventInput
    rsvps: UserUpdateManyWithoutRsvpsInput
    urls: EventUrlUpdateManyWithoutEventInput
    admins: UserUpdateManyWithoutAdminForInput
    locations: LocationUpdateManyWithoutEventInput
    tags: TagUpdateManyWithoutEventsInput
    index: String
    series: SeriesUpdateOneWithoutEventsInput
  }
  
  input EventUpdateWithoutSeriesDataInput {
    title: String
    description: String
    start: DateTime
    end: DateTime
    ticketPrice: Float
    creator: UserUpdateOneWithoutCreatedEventsInput
    eventImages: EventImageUpdateManyWithoutEventInput
    rsvps: UserUpdateManyWithoutRsvpsInput
    saved: UserUpdateManyWithoutSavedInput
    urls: EventUrlUpdateManyWithoutEventInput
    admins: UserUpdateManyWithoutAdminForInput
    locations: LocationUpdateManyWithoutEventInput
    tags: TagUpdateManyWithoutEventsInput
    index: String
  }
  
  input EventUpdateWithoutTagsDataInput {
    title: String
    description: String
    start: DateTime
    end: DateTime
    ticketPrice: Float
    creator: UserUpdateOneWithoutCreatedEventsInput
    eventImages: EventImageUpdateManyWithoutEventInput
    rsvps: UserUpdateManyWithoutRsvpsInput
    saved: UserUpdateManyWithoutSavedInput
    urls: EventUrlUpdateManyWithoutEventInput
    admins: UserUpdateManyWithoutAdminForInput
    locations: LocationUpdateManyWithoutEventInput
    index: String
    series: SeriesUpdateOneWithoutEventsInput
  }
  
  input EventUpdateWithoutUrlsDataInput {
    title: String
    description: String
    start: DateTime
    end: DateTime
    ticketPrice: Float
    creator: UserUpdateOneWithoutCreatedEventsInput
    eventImages: EventImageUpdateManyWithoutEventInput
    rsvps: UserUpdateManyWithoutRsvpsInput
    saved: UserUpdateManyWithoutSavedInput
    admins: UserUpdateManyWithoutAdminForInput
    locations: LocationUpdateManyWithoutEventInput
    tags: TagUpdateManyWithoutEventsInput
    index: String
    series: SeriesUpdateOneWithoutEventsInput
  }
  
  input EventUpdateWithWhereUniqueWithoutAdminsInput {
    where: EventWhereUniqueInput!
    data: EventUpdateWithoutAdminsDataInput!
  }
  
  input EventUpdateWithWhereUniqueWithoutCreatorInput {
    where: EventWhereUniqueInput!
    data: EventUpdateWithoutCreatorDataInput!
  }
  
  input EventUpdateWithWhereUniqueWithoutRsvpsInput {
    where: EventWhereUniqueInput!
    data: EventUpdateWithoutRsvpsDataInput!
  }
  
  input EventUpdateWithWhereUniqueWithoutSavedInput {
    where: EventWhereUniqueInput!
    data: EventUpdateWithoutSavedDataInput!
  }
  
  input EventUpdateWithWhereUniqueWithoutSeriesInput {
    where: EventWhereUniqueInput!
    data: EventUpdateWithoutSeriesDataInput!
  }
  
  input EventUpdateWithWhereUniqueWithoutTagsInput {
    where: EventWhereUniqueInput!
    data: EventUpdateWithoutTagsDataInput!
  }
  
  input EventUpsertWithoutEventImagesInput {
    update: EventUpdateWithoutEventImagesDataInput!
    create: EventCreateWithoutEventImagesInput!
  }
  
  input EventUpsertWithoutLocationsInput {
    update: EventUpdateWithoutLocationsDataInput!
    create: EventCreateWithoutLocationsInput!
  }
  
  input EventUpsertWithoutUrlsInput {
    update: EventUpdateWithoutUrlsDataInput!
    create: EventCreateWithoutUrlsInput!
  }
  
  input EventUpsertWithWhereUniqueWithoutAdminsInput {
    where: EventWhereUniqueInput!
    update: EventUpdateWithoutAdminsDataInput!
    create: EventCreateWithoutAdminsInput!
  }
  
  input EventUpsertWithWhereUniqueWithoutCreatorInput {
    where: EventWhereUniqueInput!
    update: EventUpdateWithoutCreatorDataInput!
    create: EventCreateWithoutCreatorInput!
  }
  
  input EventUpsertWithWhereUniqueWithoutRsvpsInput {
    where: EventWhereUniqueInput!
    update: EventUpdateWithoutRsvpsDataInput!
    create: EventCreateWithoutRsvpsInput!
  }
  
  input EventUpsertWithWhereUniqueWithoutSavedInput {
    where: EventWhereUniqueInput!
    update: EventUpdateWithoutSavedDataInput!
    create: EventCreateWithoutSavedInput!
  }
  
  input EventUpsertWithWhereUniqueWithoutSeriesInput {
    where: EventWhereUniqueInput!
    update: EventUpdateWithoutSeriesDataInput!
    create: EventCreateWithoutSeriesInput!
  }
  
  input EventUpsertWithWhereUniqueWithoutTagsInput {
    where: EventWhereUniqueInput!
    update: EventUpdateWithoutTagsDataInput!
    create: EventCreateWithoutTagsInput!
  }
  
  type EventUrl {
    id: ID!
    url: String!
    event: Event!
  }
  
  type EventUrlConnection {
    pageInfo: PageInfo!
    edges: [EventUrlEdge]!
    aggregate: AggregateEventUrl!
  }
  
  input EventUrlCreateInput {
    id: ID
    url: String!
    event: EventCreateOneWithoutUrlsInput!
  }
  
  input EventUrlCreateManyWithoutEventInput {
    create: [EventUrlCreateWithoutEventInput!]
    connect: [EventUrlWhereUniqueInput!]
  }
  
  input EventUrlCreateWithoutEventInput {
    id: ID
    url: String!
  }
  
  type EventUrlEdge {
    node: EventUrl!
    cursor: String!
  }
  
  enum EventUrlOrderByInput {
    id_ASC
    id_DESC
    url_ASC
    url_DESC
  }
  
  type EventUrlPreviousValues {
    id: ID!
    url: String!
  }
  
  input EventUrlScalarWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    url: String
    url_not: String
    url_in: [String!]
    url_not_in: [String!]
    url_lt: String
    url_lte: String
    url_gt: String
    url_gte: String
    url_contains: String
    url_not_contains: String
    url_starts_with: String
    url_not_starts_with: String
    url_ends_with: String
    url_not_ends_with: String
    AND: [EventUrlScalarWhereInput!]
    OR: [EventUrlScalarWhereInput!]
    NOT: [EventUrlScalarWhereInput!]
  }
  
  type EventUrlSubscriptionPayload {
    mutation: MutationType!
    node: EventUrl
    updatedFields: [String!]
    previousValues: EventUrlPreviousValues
  }
  
  input EventUrlSubscriptionWhereInput {
    mutation_in: [MutationType!]
    updatedFields_contains: String
    updatedFields_contains_every: [String!]
    updatedFields_contains_some: [String!]
    node: EventUrlWhereInput
    AND: [EventUrlSubscriptionWhereInput!]
    OR: [EventUrlSubscriptionWhereInput!]
    NOT: [EventUrlSubscriptionWhereInput!]
  }
  
  input EventUrlUpdateInput {
    url: String
    event: EventUpdateOneRequiredWithoutUrlsInput
  }
  
  input EventUrlUpdateManyDataInput {
    url: String
  }
  
  input EventUrlUpdateManyMutationInput {
    url: String
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
  
  input EventUrlUpdateManyWithWhereNestedInput {
    where: EventUrlScalarWhereInput!
    data: EventUrlUpdateManyDataInput!
  }
  
  input EventUrlUpdateWithoutEventDataInput {
    url: String
  }
  
  input EventUrlUpdateWithWhereUniqueWithoutEventInput {
    where: EventUrlWhereUniqueInput!
    data: EventUrlUpdateWithoutEventDataInput!
  }
  
  input EventUrlUpsertWithWhereUniqueWithoutEventInput {
    where: EventUrlWhereUniqueInput!
    update: EventUrlUpdateWithoutEventDataInput!
    create: EventUrlCreateWithoutEventInput!
  }
  
  input EventUrlWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    url: String
    url_not: String
    url_in: [String!]
    url_not_in: [String!]
    url_lt: String
    url_lte: String
    url_gt: String
    url_gte: String
    url_contains: String
    url_not_contains: String
    url_starts_with: String
    url_not_starts_with: String
    url_ends_with: String
    url_not_ends_with: String
    event: EventWhereInput
    AND: [EventUrlWhereInput!]
    OR: [EventUrlWhereInput!]
    NOT: [EventUrlWhereInput!]
  }
  
  input EventUrlWhereUniqueInput {
    id: ID
  }
  
  input EventWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    title: String
    title_not: String
    title_in: [String!]
    title_not_in: [String!]
    title_lt: String
    title_lte: String
    title_gt: String
    title_gte: String
    title_contains: String
    title_not_contains: String
    title_starts_with: String
    title_not_starts_with: String
    title_ends_with: String
    title_not_ends_with: String
    description: String
    description_not: String
    description_in: [String!]
    description_not_in: [String!]
    description_lt: String
    description_lte: String
    description_gt: String
    description_gte: String
    description_contains: String
    description_not_contains: String
    description_starts_with: String
    description_not_starts_with: String
    description_ends_with: String
    description_not_ends_with: String
    start: DateTime
    start_not: DateTime
    start_in: [DateTime!]
    start_not_in: [DateTime!]
    start_lt: DateTime
    start_lte: DateTime
    start_gt: DateTime
    start_gte: DateTime
    end: DateTime
    end_not: DateTime
    end_in: [DateTime!]
    end_not_in: [DateTime!]
    end_lt: DateTime
    end_lte: DateTime
    end_gt: DateTime
    end_gte: DateTime
    ticketPrice: Float
    ticketPrice_not: Float
    ticketPrice_in: [Float!]
    ticketPrice_not_in: [Float!]
    ticketPrice_lt: Float
    ticketPrice_lte: Float
    ticketPrice_gt: Float
    ticketPrice_gte: Float
    creator: UserWhereInput
    eventImages_every: EventImageWhereInput
    eventImages_some: EventImageWhereInput
    eventImages_none: EventImageWhereInput
    rsvps_every: UserWhereInput
    rsvps_some: UserWhereInput
    rsvps_none: UserWhereInput
    saved_every: UserWhereInput
    saved_some: UserWhereInput
    saved_none: UserWhereInput
    urls_every: EventUrlWhereInput
    urls_some: EventUrlWhereInput
    urls_none: EventUrlWhereInput
    admins_every: UserWhereInput
    admins_some: UserWhereInput
    admins_none: UserWhereInput
    locations_every: LocationWhereInput
    locations_some: LocationWhereInput
    locations_none: LocationWhereInput
    tags_every: TagWhereInput
    tags_some: TagWhereInput
    tags_none: TagWhereInput
    index: String
    index_not: String
    index_in: [String!]
    index_not_in: [String!]
    index_lt: String
    index_lte: String
    index_gt: String
    index_gte: String
    index_contains: String
    index_not_contains: String
    index_starts_with: String
    index_not_starts_with: String
    index_ends_with: String
    index_not_ends_with: String
    series: SeriesWhereInput
    AND: [EventWhereInput!]
    OR: [EventWhereInput!]
    NOT: [EventWhereInput!]
  }
  
  input EventWhereUniqueInput {
    id: ID
  }
  
  enum FrequencyType {
    DAILY
    WEEKLY
    MONTHLY
  }
  
  type GeoJson {
    id: ID!
    geoJson: String!
    neighborhood: Neighborhood!
  }
  
  type GeoJsonConnection {
    pageInfo: PageInfo!
    edges: [GeoJsonEdge]!
    aggregate: AggregateGeoJson!
  }
  
  input GeoJsonCreateInput {
    id: ID
    geoJson: String!
    neighborhood: NeighborhoodCreateOneWithoutGeoJsonInput!
  }
  
  input GeoJsonCreateOneWithoutNeighborhoodInput {
    create: GeoJsonCreateWithoutNeighborhoodInput
    connect: GeoJsonWhereUniqueInput
  }
  
  input GeoJsonCreateWithoutNeighborhoodInput {
    id: ID
    geoJson: String!
  }
  
  type GeoJsonEdge {
    node: GeoJson!
    cursor: String!
  }
  
  enum GeoJsonOrderByInput {
    id_ASC
    id_DESC
    geoJson_ASC
    geoJson_DESC
  }
  
  type GeoJsonPreviousValues {
    id: ID!
    geoJson: String!
  }
  
  type GeoJsonSubscriptionPayload {
    mutation: MutationType!
    node: GeoJson
    updatedFields: [String!]
    previousValues: GeoJsonPreviousValues
  }
  
  input GeoJsonSubscriptionWhereInput {
    mutation_in: [MutationType!]
    updatedFields_contains: String
    updatedFields_contains_every: [String!]
    updatedFields_contains_some: [String!]
    node: GeoJsonWhereInput
    AND: [GeoJsonSubscriptionWhereInput!]
    OR: [GeoJsonSubscriptionWhereInput!]
    NOT: [GeoJsonSubscriptionWhereInput!]
  }
  
  input GeoJsonUpdateInput {
    geoJson: String
    neighborhood: NeighborhoodUpdateOneRequiredWithoutGeoJsonInput
  }
  
  input GeoJsonUpdateManyMutationInput {
    geoJson: String
  }
  
  input GeoJsonUpdateOneRequiredWithoutNeighborhoodInput {
    create: GeoJsonCreateWithoutNeighborhoodInput
    update: GeoJsonUpdateWithoutNeighborhoodDataInput
    upsert: GeoJsonUpsertWithoutNeighborhoodInput
    connect: GeoJsonWhereUniqueInput
  }
  
  input GeoJsonUpdateWithoutNeighborhoodDataInput {
    geoJson: String
  }
  
  input GeoJsonUpsertWithoutNeighborhoodInput {
    update: GeoJsonUpdateWithoutNeighborhoodDataInput!
    create: GeoJsonCreateWithoutNeighborhoodInput!
  }
  
  input GeoJsonWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    geoJson: String
    geoJson_not: String
    geoJson_in: [String!]
    geoJson_not_in: [String!]
    geoJson_lt: String
    geoJson_lte: String
    geoJson_gt: String
    geoJson_gte: String
    geoJson_contains: String
    geoJson_not_contains: String
    geoJson_starts_with: String
    geoJson_not_starts_with: String
    geoJson_ends_with: String
    geoJson_not_ends_with: String
    neighborhood: NeighborhoodWhereInput
    AND: [GeoJsonWhereInput!]
    OR: [GeoJsonWhereInput!]
    NOT: [GeoJsonWhereInput!]
  }
  
  input GeoJsonWhereUniqueInput {
    id: ID
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
    event: Event!
    neighborhood: Neighborhood
  }
  
  type LocationConnection {
    pageInfo: PageInfo!
    edges: [LocationEdge]!
    aggregate: AggregateLocation!
  }
  
  input LocationCreateInput {
    id: ID
    name: String!
    streetAddress: String!
    streetAddress2: String
    city: String!
    zipcode: Int!
    state: String!
    latitude: Float
    longitude: Float
    event: EventCreateOneWithoutLocationsInput!
    neighborhood: NeighborhoodCreateOneWithoutLocationsInput
  }
  
  input LocationCreateManyWithoutEventInput {
    create: [LocationCreateWithoutEventInput!]
    connect: [LocationWhereUniqueInput!]
  }
  
  input LocationCreateManyWithoutNeighborhoodInput {
    create: [LocationCreateWithoutNeighborhoodInput!]
    connect: [LocationWhereUniqueInput!]
  }
  
  input LocationCreateWithoutEventInput {
    id: ID
    name: String!
    streetAddress: String!
    streetAddress2: String
    city: String!
    zipcode: Int!
    state: String!
    latitude: Float
    longitude: Float
    neighborhood: NeighborhoodCreateOneWithoutLocationsInput
  }
  
  input LocationCreateWithoutNeighborhoodInput {
    id: ID
    name: String!
    streetAddress: String!
    streetAddress2: String
    city: String!
    zipcode: Int!
    state: String!
    latitude: Float
    longitude: Float
    event: EventCreateOneWithoutLocationsInput!
  }
  
  type LocationEdge {
    node: Location!
    cursor: String!
  }
  
  enum LocationOrderByInput {
    id_ASC
    id_DESC
    name_ASC
    name_DESC
    streetAddress_ASC
    streetAddress_DESC
    streetAddress2_ASC
    streetAddress2_DESC
    city_ASC
    city_DESC
    zipcode_ASC
    zipcode_DESC
    state_ASC
    state_DESC
    latitude_ASC
    latitude_DESC
    longitude_ASC
    longitude_DESC
  }
  
  type LocationPreviousValues {
    id: ID!
    name: String!
    streetAddress: String!
    streetAddress2: String
    city: String!
    zipcode: Int!
    state: String!
    latitude: Float
    longitude: Float
  }
  
  input LocationScalarWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    name: String
    name_not: String
    name_in: [String!]
    name_not_in: [String!]
    name_lt: String
    name_lte: String
    name_gt: String
    name_gte: String
    name_contains: String
    name_not_contains: String
    name_starts_with: String
    name_not_starts_with: String
    name_ends_with: String
    name_not_ends_with: String
    streetAddress: String
    streetAddress_not: String
    streetAddress_in: [String!]
    streetAddress_not_in: [String!]
    streetAddress_lt: String
    streetAddress_lte: String
    streetAddress_gt: String
    streetAddress_gte: String
    streetAddress_contains: String
    streetAddress_not_contains: String
    streetAddress_starts_with: String
    streetAddress_not_starts_with: String
    streetAddress_ends_with: String
    streetAddress_not_ends_with: String
    streetAddress2: String
    streetAddress2_not: String
    streetAddress2_in: [String!]
    streetAddress2_not_in: [String!]
    streetAddress2_lt: String
    streetAddress2_lte: String
    streetAddress2_gt: String
    streetAddress2_gte: String
    streetAddress2_contains: String
    streetAddress2_not_contains: String
    streetAddress2_starts_with: String
    streetAddress2_not_starts_with: String
    streetAddress2_ends_with: String
    streetAddress2_not_ends_with: String
    city: String
    city_not: String
    city_in: [String!]
    city_not_in: [String!]
    city_lt: String
    city_lte: String
    city_gt: String
    city_gte: String
    city_contains: String
    city_not_contains: String
    city_starts_with: String
    city_not_starts_with: String
    city_ends_with: String
    city_not_ends_with: String
    zipcode: Int
    zipcode_not: Int
    zipcode_in: [Int!]
    zipcode_not_in: [Int!]
    zipcode_lt: Int
    zipcode_lte: Int
    zipcode_gt: Int
    zipcode_gte: Int
    state: String
    state_not: String
    state_in: [String!]
    state_not_in: [String!]
    state_lt: String
    state_lte: String
    state_gt: String
    state_gte: String
    state_contains: String
    state_not_contains: String
    state_starts_with: String
    state_not_starts_with: String
    state_ends_with: String
    state_not_ends_with: String
    latitude: Float
    latitude_not: Float
    latitude_in: [Float!]
    latitude_not_in: [Float!]
    latitude_lt: Float
    latitude_lte: Float
    latitude_gt: Float
    latitude_gte: Float
    longitude: Float
    longitude_not: Float
    longitude_in: [Float!]
    longitude_not_in: [Float!]
    longitude_lt: Float
    longitude_lte: Float
    longitude_gt: Float
    longitude_gte: Float
    AND: [LocationScalarWhereInput!]
    OR: [LocationScalarWhereInput!]
    NOT: [LocationScalarWhereInput!]
  }
  
  type LocationSubscriptionPayload {
    mutation: MutationType!
    node: Location
    updatedFields: [String!]
    previousValues: LocationPreviousValues
  }
  
  input LocationSubscriptionWhereInput {
    mutation_in: [MutationType!]
    updatedFields_contains: String
    updatedFields_contains_every: [String!]
    updatedFields_contains_some: [String!]
    node: LocationWhereInput
    AND: [LocationSubscriptionWhereInput!]
    OR: [LocationSubscriptionWhereInput!]
    NOT: [LocationSubscriptionWhereInput!]
  }
  
  input LocationUpdateInput {
    name: String
    streetAddress: String
    streetAddress2: String
    city: String
    zipcode: Int
    state: String
    latitude: Float
    longitude: Float
    event: EventUpdateOneRequiredWithoutLocationsInput
    neighborhood: NeighborhoodUpdateOneWithoutLocationsInput
  }
  
  input LocationUpdateManyDataInput {
    name: String
    streetAddress: String
    streetAddress2: String
    city: String
    zipcode: Int
    state: String
    latitude: Float
    longitude: Float
  }
  
  input LocationUpdateManyMutationInput {
    name: String
    streetAddress: String
    streetAddress2: String
    city: String
    zipcode: Int
    state: String
    latitude: Float
    longitude: Float
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
  
  input LocationUpdateManyWithoutNeighborhoodInput {
    create: [LocationCreateWithoutNeighborhoodInput!]
    delete: [LocationWhereUniqueInput!]
    connect: [LocationWhereUniqueInput!]
    set: [LocationWhereUniqueInput!]
    disconnect: [LocationWhereUniqueInput!]
    update: [LocationUpdateWithWhereUniqueWithoutNeighborhoodInput!]
    upsert: [LocationUpsertWithWhereUniqueWithoutNeighborhoodInput!]
    deleteMany: [LocationScalarWhereInput!]
    updateMany: [LocationUpdateManyWithWhereNestedInput!]
  }
  
  input LocationUpdateManyWithWhereNestedInput {
    where: LocationScalarWhereInput!
    data: LocationUpdateManyDataInput!
  }
  
  input LocationUpdateWithoutEventDataInput {
    name: String
    streetAddress: String
    streetAddress2: String
    city: String
    zipcode: Int
    state: String
    latitude: Float
    longitude: Float
    neighborhood: NeighborhoodUpdateOneWithoutLocationsInput
  }
  
  input LocationUpdateWithoutNeighborhoodDataInput {
    name: String
    streetAddress: String
    streetAddress2: String
    city: String
    zipcode: Int
    state: String
    latitude: Float
    longitude: Float
    event: EventUpdateOneRequiredWithoutLocationsInput
  }
  
  input LocationUpdateWithWhereUniqueWithoutEventInput {
    where: LocationWhereUniqueInput!
    data: LocationUpdateWithoutEventDataInput!
  }
  
  input LocationUpdateWithWhereUniqueWithoutNeighborhoodInput {
    where: LocationWhereUniqueInput!
    data: LocationUpdateWithoutNeighborhoodDataInput!
  }
  
  input LocationUpsertWithWhereUniqueWithoutEventInput {
    where: LocationWhereUniqueInput!
    update: LocationUpdateWithoutEventDataInput!
    create: LocationCreateWithoutEventInput!
  }
  
  input LocationUpsertWithWhereUniqueWithoutNeighborhoodInput {
    where: LocationWhereUniqueInput!
    update: LocationUpdateWithoutNeighborhoodDataInput!
    create: LocationCreateWithoutNeighborhoodInput!
  }
  
  input LocationWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    name: String
    name_not: String
    name_in: [String!]
    name_not_in: [String!]
    name_lt: String
    name_lte: String
    name_gt: String
    name_gte: String
    name_contains: String
    name_not_contains: String
    name_starts_with: String
    name_not_starts_with: String
    name_ends_with: String
    name_not_ends_with: String
    streetAddress: String
    streetAddress_not: String
    streetAddress_in: [String!]
    streetAddress_not_in: [String!]
    streetAddress_lt: String
    streetAddress_lte: String
    streetAddress_gt: String
    streetAddress_gte: String
    streetAddress_contains: String
    streetAddress_not_contains: String
    streetAddress_starts_with: String
    streetAddress_not_starts_with: String
    streetAddress_ends_with: String
    streetAddress_not_ends_with: String
    streetAddress2: String
    streetAddress2_not: String
    streetAddress2_in: [String!]
    streetAddress2_not_in: [String!]
    streetAddress2_lt: String
    streetAddress2_lte: String
    streetAddress2_gt: String
    streetAddress2_gte: String
    streetAddress2_contains: String
    streetAddress2_not_contains: String
    streetAddress2_starts_with: String
    streetAddress2_not_starts_with: String
    streetAddress2_ends_with: String
    streetAddress2_not_ends_with: String
    city: String
    city_not: String
    city_in: [String!]
    city_not_in: [String!]
    city_lt: String
    city_lte: String
    city_gt: String
    city_gte: String
    city_contains: String
    city_not_contains: String
    city_starts_with: String
    city_not_starts_with: String
    city_ends_with: String
    city_not_ends_with: String
    zipcode: Int
    zipcode_not: Int
    zipcode_in: [Int!]
    zipcode_not_in: [Int!]
    zipcode_lt: Int
    zipcode_lte: Int
    zipcode_gt: Int
    zipcode_gte: Int
    state: String
    state_not: String
    state_in: [String!]
    state_not_in: [String!]
    state_lt: String
    state_lte: String
    state_gt: String
    state_gte: String
    state_contains: String
    state_not_contains: String
    state_starts_with: String
    state_not_starts_with: String
    state_ends_with: String
    state_not_ends_with: String
    latitude: Float
    latitude_not: Float
    latitude_in: [Float!]
    latitude_not_in: [Float!]
    latitude_lt: Float
    latitude_lte: Float
    latitude_gt: Float
    latitude_gte: Float
    longitude: Float
    longitude_not: Float
    longitude_in: [Float!]
    longitude_not_in: [Float!]
    longitude_lt: Float
    longitude_lte: Float
    longitude_gt: Float
    longitude_gte: Float
    event: EventWhereInput
    neighborhood: NeighborhoodWhereInput
    AND: [LocationWhereInput!]
    OR: [LocationWhereInput!]
    NOT: [LocationWhereInput!]
  }
  
  input LocationWhereUniqueInput {
    id: ID
  }
  
  scalar Long
  
  type Mutation {
    createEvent(data: EventCreateInput!): Event!
    updateEvent(data: EventUpdateInput!, where: EventWhereUniqueInput!): Event
    updateManyEvents(data: EventUpdateManyMutationInput!, where: EventWhereInput): BatchPayload!
    upsertEvent(where: EventWhereUniqueInput!, create: EventCreateInput!, update: EventUpdateInput!): Event!
    deleteEvent(where: EventWhereUniqueInput!): Event
    deleteManyEvents(where: EventWhereInput): BatchPayload!
    createEventImage(data: EventImageCreateInput!): EventImage!
    updateEventImage(data: EventImageUpdateInput!, where: EventImageWhereUniqueInput!): EventImage
    updateManyEventImages(data: EventImageUpdateManyMutationInput!, where: EventImageWhereInput): BatchPayload!
    upsertEventImage(where: EventImageWhereUniqueInput!, create: EventImageCreateInput!, update: EventImageUpdateInput!): EventImage!
    deleteEventImage(where: EventImageWhereUniqueInput!): EventImage
    deleteManyEventImages(where: EventImageWhereInput): BatchPayload!
    createEventUrl(data: EventUrlCreateInput!): EventUrl!
    updateEventUrl(data: EventUrlUpdateInput!, where: EventUrlWhereUniqueInput!): EventUrl
    updateManyEventUrls(data: EventUrlUpdateManyMutationInput!, where: EventUrlWhereInput): BatchPayload!
    upsertEventUrl(where: EventUrlWhereUniqueInput!, create: EventUrlCreateInput!, update: EventUrlUpdateInput!): EventUrl!
    deleteEventUrl(where: EventUrlWhereUniqueInput!): EventUrl
    deleteManyEventUrls(where: EventUrlWhereInput): BatchPayload!
    createGeoJson(data: GeoJsonCreateInput!): GeoJson!
    updateGeoJson(data: GeoJsonUpdateInput!, where: GeoJsonWhereUniqueInput!): GeoJson
    updateManyGeoJsons(data: GeoJsonUpdateManyMutationInput!, where: GeoJsonWhereInput): BatchPayload!
    upsertGeoJson(where: GeoJsonWhereUniqueInput!, create: GeoJsonCreateInput!, update: GeoJsonUpdateInput!): GeoJson!
    deleteGeoJson(where: GeoJsonWhereUniqueInput!): GeoJson
    deleteManyGeoJsons(where: GeoJsonWhereInput): BatchPayload!
    createLocation(data: LocationCreateInput!): Location!
    updateLocation(data: LocationUpdateInput!, where: LocationWhereUniqueInput!): Location
    updateManyLocations(data: LocationUpdateManyMutationInput!, where: LocationWhereInput): BatchPayload!
    upsertLocation(where: LocationWhereUniqueInput!, create: LocationCreateInput!, update: LocationUpdateInput!): Location!
    deleteLocation(where: LocationWhereUniqueInput!): Location
    deleteManyLocations(where: LocationWhereInput): BatchPayload!
    createNeighborhood(data: NeighborhoodCreateInput!): Neighborhood!
    updateNeighborhood(data: NeighborhoodUpdateInput!, where: NeighborhoodWhereUniqueInput!): Neighborhood
    upsertNeighborhood(where: NeighborhoodWhereUniqueInput!, create: NeighborhoodCreateInput!, update: NeighborhoodUpdateInput!): Neighborhood!
    deleteNeighborhood(where: NeighborhoodWhereUniqueInput!): Neighborhood
    deleteManyNeighborhoods(where: NeighborhoodWhereInput): BatchPayload!
    createOrganization(data: OrganizationCreateInput!): Organization!
    updateOrganization(data: OrganizationUpdateInput!, where: OrganizationWhereUniqueInput!): Organization
    updateManyOrganizations(data: OrganizationUpdateManyMutationInput!, where: OrganizationWhereInput): BatchPayload!
    upsertOrganization(where: OrganizationWhereUniqueInput!, create: OrganizationCreateInput!, update: OrganizationUpdateInput!): Organization!
    deleteOrganization(where: OrganizationWhereUniqueInput!): Organization
    deleteManyOrganizations(where: OrganizationWhereInput): BatchPayload!
    createSeries(data: SeriesCreateInput!): Series!
    updateSeries(data: SeriesUpdateInput!, where: SeriesWhereUniqueInput!): Series
    updateManySerieses(data: SeriesUpdateManyMutationInput!, where: SeriesWhereInput): BatchPayload!
    upsertSeries(where: SeriesWhereUniqueInput!, create: SeriesCreateInput!, update: SeriesUpdateInput!): Series!
    deleteSeries(where: SeriesWhereUniqueInput!): Series
    deleteManySerieses(where: SeriesWhereInput): BatchPayload!
    createTag(data: TagCreateInput!): Tag!
    updateTag(data: TagUpdateInput!, where: TagWhereUniqueInput!): Tag
    updateManyTags(data: TagUpdateManyMutationInput!, where: TagWhereInput): BatchPayload!
    upsertTag(where: TagWhereUniqueInput!, create: TagCreateInput!, update: TagUpdateInput!): Tag!
    deleteTag(where: TagWhereUniqueInput!): Tag
    deleteManyTags(where: TagWhereInput): BatchPayload!
    createUser(data: UserCreateInput!): User!
    updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
    updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
    upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
    deleteUser(where: UserWhereUniqueInput!): User
    deleteManyUsers(where: UserWhereInput): BatchPayload!
  }
  
  enum MutationType {
    CREATED
    UPDATED
    DELETED
  }
  
  type Neighborhood {
    id: ID!
    geoJson: GeoJson!
    locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location!]
  }
  
  type NeighborhoodConnection {
    pageInfo: PageInfo!
    edges: [NeighborhoodEdge]!
    aggregate: AggregateNeighborhood!
  }
  
  input NeighborhoodCreateInput {
    id: ID
    geoJson: GeoJsonCreateOneWithoutNeighborhoodInput!
    locations: LocationCreateManyWithoutNeighborhoodInput
  }
  
  input NeighborhoodCreateOneWithoutGeoJsonInput {
    create: NeighborhoodCreateWithoutGeoJsonInput
    connect: NeighborhoodWhereUniqueInput
  }
  
  input NeighborhoodCreateOneWithoutLocationsInput {
    create: NeighborhoodCreateWithoutLocationsInput
    connect: NeighborhoodWhereUniqueInput
  }
  
  input NeighborhoodCreateWithoutGeoJsonInput {
    id: ID
    locations: LocationCreateManyWithoutNeighborhoodInput
  }
  
  input NeighborhoodCreateWithoutLocationsInput {
    id: ID
    geoJson: GeoJsonCreateOneWithoutNeighborhoodInput!
  }
  
  type NeighborhoodEdge {
    node: Neighborhood!
    cursor: String!
  }
  
  enum NeighborhoodOrderByInput {
    id_ASC
    id_DESC
  }
  
  type NeighborhoodPreviousValues {
    id: ID!
  }
  
  type NeighborhoodSubscriptionPayload {
    mutation: MutationType!
    node: Neighborhood
    updatedFields: [String!]
    previousValues: NeighborhoodPreviousValues
  }
  
  input NeighborhoodSubscriptionWhereInput {
    mutation_in: [MutationType!]
    updatedFields_contains: String
    updatedFields_contains_every: [String!]
    updatedFields_contains_some: [String!]
    node: NeighborhoodWhereInput
    AND: [NeighborhoodSubscriptionWhereInput!]
    OR: [NeighborhoodSubscriptionWhereInput!]
    NOT: [NeighborhoodSubscriptionWhereInput!]
  }
  
  input NeighborhoodUpdateInput {
    geoJson: GeoJsonUpdateOneRequiredWithoutNeighborhoodInput
    locations: LocationUpdateManyWithoutNeighborhoodInput
  }
  
  input NeighborhoodUpdateOneRequiredWithoutGeoJsonInput {
    create: NeighborhoodCreateWithoutGeoJsonInput
    update: NeighborhoodUpdateWithoutGeoJsonDataInput
    upsert: NeighborhoodUpsertWithoutGeoJsonInput
    connect: NeighborhoodWhereUniqueInput
  }
  
  input NeighborhoodUpdateOneWithoutLocationsInput {
    create: NeighborhoodCreateWithoutLocationsInput
    update: NeighborhoodUpdateWithoutLocationsDataInput
    upsert: NeighborhoodUpsertWithoutLocationsInput
    delete: Boolean
    disconnect: Boolean
    connect: NeighborhoodWhereUniqueInput
  }
  
  input NeighborhoodUpdateWithoutGeoJsonDataInput {
    locations: LocationUpdateManyWithoutNeighborhoodInput
  }
  
  input NeighborhoodUpdateWithoutLocationsDataInput {
    geoJson: GeoJsonUpdateOneRequiredWithoutNeighborhoodInput
  }
  
  input NeighborhoodUpsertWithoutGeoJsonInput {
    update: NeighborhoodUpdateWithoutGeoJsonDataInput!
    create: NeighborhoodCreateWithoutGeoJsonInput!
  }
  
  input NeighborhoodUpsertWithoutLocationsInput {
    update: NeighborhoodUpdateWithoutLocationsDataInput!
    create: NeighborhoodCreateWithoutLocationsInput!
  }
  
  input NeighborhoodWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    geoJson: GeoJsonWhereInput
    locations_every: LocationWhereInput
    locations_some: LocationWhereInput
    locations_none: LocationWhereInput
    AND: [NeighborhoodWhereInput!]
    OR: [NeighborhoodWhereInput!]
    NOT: [NeighborhoodWhereInput!]
  }
  
  input NeighborhoodWhereUniqueInput {
    id: ID
  }
  
  interface Node {
    id: ID!
  }
  
  type Organization {
    id: ID!
    name: String!
    url: String
    phone: String
    email: String
    users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  }
  
  type OrganizationConnection {
    pageInfo: PageInfo!
    edges: [OrganizationEdge]!
    aggregate: AggregateOrganization!
  }
  
  input OrganizationCreateInput {
    id: ID
    name: String!
    url: String
    phone: String
    email: String
    users: UserCreateManyWithoutOrganizationsInput
  }
  
  input OrganizationCreateManyWithoutUsersInput {
    create: [OrganizationCreateWithoutUsersInput!]
    connect: [OrganizationWhereUniqueInput!]
  }
  
  input OrganizationCreateWithoutUsersInput {
    id: ID
    name: String!
    url: String
    phone: String
    email: String
  }
  
  type OrganizationEdge {
    node: Organization!
    cursor: String!
  }
  
  enum OrganizationOrderByInput {
    id_ASC
    id_DESC
    name_ASC
    name_DESC
    url_ASC
    url_DESC
    phone_ASC
    phone_DESC
    email_ASC
    email_DESC
  }
  
  type OrganizationPreviousValues {
    id: ID!
    name: String!
    url: String
    phone: String
    email: String
  }
  
  input OrganizationScalarWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    name: String
    name_not: String
    name_in: [String!]
    name_not_in: [String!]
    name_lt: String
    name_lte: String
    name_gt: String
    name_gte: String
    name_contains: String
    name_not_contains: String
    name_starts_with: String
    name_not_starts_with: String
    name_ends_with: String
    name_not_ends_with: String
    url: String
    url_not: String
    url_in: [String!]
    url_not_in: [String!]
    url_lt: String
    url_lte: String
    url_gt: String
    url_gte: String
    url_contains: String
    url_not_contains: String
    url_starts_with: String
    url_not_starts_with: String
    url_ends_with: String
    url_not_ends_with: String
    phone: String
    phone_not: String
    phone_in: [String!]
    phone_not_in: [String!]
    phone_lt: String
    phone_lte: String
    phone_gt: String
    phone_gte: String
    phone_contains: String
    phone_not_contains: String
    phone_starts_with: String
    phone_not_starts_with: String
    phone_ends_with: String
    phone_not_ends_with: String
    email: String
    email_not: String
    email_in: [String!]
    email_not_in: [String!]
    email_lt: String
    email_lte: String
    email_gt: String
    email_gte: String
    email_contains: String
    email_not_contains: String
    email_starts_with: String
    email_not_starts_with: String
    email_ends_with: String
    email_not_ends_with: String
    AND: [OrganizationScalarWhereInput!]
    OR: [OrganizationScalarWhereInput!]
    NOT: [OrganizationScalarWhereInput!]
  }
  
  type OrganizationSubscriptionPayload {
    mutation: MutationType!
    node: Organization
    updatedFields: [String!]
    previousValues: OrganizationPreviousValues
  }
  
  input OrganizationSubscriptionWhereInput {
    mutation_in: [MutationType!]
    updatedFields_contains: String
    updatedFields_contains_every: [String!]
    updatedFields_contains_some: [String!]
    node: OrganizationWhereInput
    AND: [OrganizationSubscriptionWhereInput!]
    OR: [OrganizationSubscriptionWhereInput!]
    NOT: [OrganizationSubscriptionWhereInput!]
  }
  
  input OrganizationUpdateInput {
    name: String
    url: String
    phone: String
    email: String
    users: UserUpdateManyWithoutOrganizationsInput
  }
  
  input OrganizationUpdateManyDataInput {
    name: String
    url: String
    phone: String
    email: String
  }
  
  input OrganizationUpdateManyMutationInput {
    name: String
    url: String
    phone: String
    email: String
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
  
  input OrganizationUpdateManyWithWhereNestedInput {
    where: OrganizationScalarWhereInput!
    data: OrganizationUpdateManyDataInput!
  }
  
  input OrganizationUpdateWithoutUsersDataInput {
    name: String
    url: String
    phone: String
    email: String
  }
  
  input OrganizationUpdateWithWhereUniqueWithoutUsersInput {
    where: OrganizationWhereUniqueInput!
    data: OrganizationUpdateWithoutUsersDataInput!
  }
  
  input OrganizationUpsertWithWhereUniqueWithoutUsersInput {
    where: OrganizationWhereUniqueInput!
    update: OrganizationUpdateWithoutUsersDataInput!
    create: OrganizationCreateWithoutUsersInput!
  }
  
  input OrganizationWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    name: String
    name_not: String
    name_in: [String!]
    name_not_in: [String!]
    name_lt: String
    name_lte: String
    name_gt: String
    name_gte: String
    name_contains: String
    name_not_contains: String
    name_starts_with: String
    name_not_starts_with: String
    name_ends_with: String
    name_not_ends_with: String
    url: String
    url_not: String
    url_in: [String!]
    url_not_in: [String!]
    url_lt: String
    url_lte: String
    url_gt: String
    url_gte: String
    url_contains: String
    url_not_contains: String
    url_starts_with: String
    url_not_starts_with: String
    url_ends_with: String
    url_not_ends_with: String
    phone: String
    phone_not: String
    phone_in: [String!]
    phone_not_in: [String!]
    phone_lt: String
    phone_lte: String
    phone_gt: String
    phone_gte: String
    phone_contains: String
    phone_not_contains: String
    phone_starts_with: String
    phone_not_starts_with: String
    phone_ends_with: String
    phone_not_ends_with: String
    email: String
    email_not: String
    email_in: [String!]
    email_not_in: [String!]
    email_lt: String
    email_lte: String
    email_gt: String
    email_gte: String
    email_contains: String
    email_not_contains: String
    email_starts_with: String
    email_not_starts_with: String
    email_ends_with: String
    email_not_ends_with: String
    users_every: UserWhereInput
    users_some: UserWhereInput
    users_none: UserWhereInput
    AND: [OrganizationWhereInput!]
    OR: [OrganizationWhereInput!]
    NOT: [OrganizationWhereInput!]
  }
  
  input OrganizationWhereUniqueInput {
    id: ID
  }
  
  type PageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: String
    endCursor: String
  }
  
  type Query {
    event(where: EventWhereUniqueInput!): Event
    events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event]!
    eventsConnection(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EventConnection!
    eventImage(where: EventImageWhereUniqueInput!): EventImage
    eventImages(where: EventImageWhereInput, orderBy: EventImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [EventImage]!
    eventImagesConnection(where: EventImageWhereInput, orderBy: EventImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EventImageConnection!
    eventUrl(where: EventUrlWhereUniqueInput!): EventUrl
    eventUrls(where: EventUrlWhereInput, orderBy: EventUrlOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [EventUrl]!
    eventUrlsConnection(where: EventUrlWhereInput, orderBy: EventUrlOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EventUrlConnection!
    geoJson(where: GeoJsonWhereUniqueInput!): GeoJson
    geoJsons(where: GeoJsonWhereInput, orderBy: GeoJsonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GeoJson]!
    geoJsonsConnection(where: GeoJsonWhereInput, orderBy: GeoJsonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GeoJsonConnection!
    location(where: LocationWhereUniqueInput!): Location
    locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location]!
    locationsConnection(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocationConnection!
    neighborhood(where: NeighborhoodWhereUniqueInput!): Neighborhood
    neighborhoods(where: NeighborhoodWhereInput, orderBy: NeighborhoodOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Neighborhood]!
    neighborhoodsConnection(where: NeighborhoodWhereInput, orderBy: NeighborhoodOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NeighborhoodConnection!
    organization(where: OrganizationWhereUniqueInput!): Organization
    organizations(where: OrganizationWhereInput, orderBy: OrganizationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Organization]!
    organizationsConnection(where: OrganizationWhereInput, orderBy: OrganizationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrganizationConnection!
    series(where: SeriesWhereUniqueInput!): Series
    serieses(where: SeriesWhereInput, orderBy: SeriesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Series]!
    seriesesConnection(where: SeriesWhereInput, orderBy: SeriesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SeriesConnection!
    tag(where: TagWhereUniqueInput!): Tag
    tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag]!
    tagsConnection(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TagConnection!
    user(where: UserWhereUniqueInput!): User
    users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
    usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
    node(id: ID!): Node
  }
  
  type Series {
    id: ID!
    frequency: FrequencyType
    series_end: DateTime
    events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event!]
  }
  
  type SeriesConnection {
    pageInfo: PageInfo!
    edges: [SeriesEdge]!
    aggregate: AggregateSeries!
  }
  
  input SeriesCreateInput {
    id: ID
    frequency: FrequencyType
    series_end: DateTime
    events: EventCreateManyWithoutSeriesInput
  }
  
  input SeriesCreateOneWithoutEventsInput {
    create: SeriesCreateWithoutEventsInput
    connect: SeriesWhereUniqueInput
  }
  
  input SeriesCreateWithoutEventsInput {
    id: ID
    frequency: FrequencyType
    series_end: DateTime
  }
  
  type SeriesEdge {
    node: Series!
    cursor: String!
  }
  
  enum SeriesOrderByInput {
    id_ASC
    id_DESC
    frequency_ASC
    frequency_DESC
    series_end_ASC
    series_end_DESC
  }
  
  type SeriesPreviousValues {
    id: ID!
    frequency: FrequencyType
    series_end: DateTime
  }
  
  type SeriesSubscriptionPayload {
    mutation: MutationType!
    node: Series
    updatedFields: [String!]
    previousValues: SeriesPreviousValues
  }
  
  input SeriesSubscriptionWhereInput {
    mutation_in: [MutationType!]
    updatedFields_contains: String
    updatedFields_contains_every: [String!]
    updatedFields_contains_some: [String!]
    node: SeriesWhereInput
    AND: [SeriesSubscriptionWhereInput!]
    OR: [SeriesSubscriptionWhereInput!]
    NOT: [SeriesSubscriptionWhereInput!]
  }
  
  input SeriesUpdateInput {
    frequency: FrequencyType
    series_end: DateTime
    events: EventUpdateManyWithoutSeriesInput
  }
  
  input SeriesUpdateManyMutationInput {
    frequency: FrequencyType
    series_end: DateTime
  }
  
  input SeriesUpdateOneWithoutEventsInput {
    create: SeriesCreateWithoutEventsInput
    update: SeriesUpdateWithoutEventsDataInput
    upsert: SeriesUpsertWithoutEventsInput
    delete: Boolean
    disconnect: Boolean
    connect: SeriesWhereUniqueInput
  }
  
  input SeriesUpdateWithoutEventsDataInput {
    frequency: FrequencyType
    series_end: DateTime
  }
  
  input SeriesUpsertWithoutEventsInput {
    update: SeriesUpdateWithoutEventsDataInput!
    create: SeriesCreateWithoutEventsInput!
  }
  
  input SeriesWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    frequency: FrequencyType
    frequency_not: FrequencyType
    frequency_in: [FrequencyType!]
    frequency_not_in: [FrequencyType!]
    series_end: DateTime
    series_end_not: DateTime
    series_end_in: [DateTime!]
    series_end_not_in: [DateTime!]
    series_end_lt: DateTime
    series_end_lte: DateTime
    series_end_gt: DateTime
    series_end_gte: DateTime
    events_every: EventWhereInput
    events_some: EventWhereInput
    events_none: EventWhereInput
    AND: [SeriesWhereInput!]
    OR: [SeriesWhereInput!]
    NOT: [SeriesWhereInput!]
  }
  
  input SeriesWhereUniqueInput {
    id: ID
  }
  
  type Subscription {
    event(where: EventSubscriptionWhereInput): EventSubscriptionPayload
    eventImage(where: EventImageSubscriptionWhereInput): EventImageSubscriptionPayload
    eventUrl(where: EventUrlSubscriptionWhereInput): EventUrlSubscriptionPayload
    geoJson(where: GeoJsonSubscriptionWhereInput): GeoJsonSubscriptionPayload
    location(where: LocationSubscriptionWhereInput): LocationSubscriptionPayload
    neighborhood(where: NeighborhoodSubscriptionWhereInput): NeighborhoodSubscriptionPayload
    organization(where: OrganizationSubscriptionWhereInput): OrganizationSubscriptionPayload
    series(where: SeriesSubscriptionWhereInput): SeriesSubscriptionPayload
    tag(where: TagSubscriptionWhereInput): TagSubscriptionPayload
    user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  }
  
  type Tag {
    id: ID!
    title: String!
    events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event!]
  }
  
  type TagConnection {
    pageInfo: PageInfo!
    edges: [TagEdge]!
    aggregate: AggregateTag!
  }
  
  input TagCreateInput {
    id: ID
    title: String!
    events: EventCreateManyWithoutTagsInput
  }
  
  input TagCreateManyWithoutEventsInput {
    create: [TagCreateWithoutEventsInput!]
    connect: [TagWhereUniqueInput!]
  }
  
  input TagCreateWithoutEventsInput {
    id: ID
    title: String!
  }
  
  type TagEdge {
    node: Tag!
    cursor: String!
  }
  
  enum TagOrderByInput {
    id_ASC
    id_DESC
    title_ASC
    title_DESC
  }
  
  type TagPreviousValues {
    id: ID!
    title: String!
  }
  
  input TagScalarWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    title: String
    title_not: String
    title_in: [String!]
    title_not_in: [String!]
    title_lt: String
    title_lte: String
    title_gt: String
    title_gte: String
    title_contains: String
    title_not_contains: String
    title_starts_with: String
    title_not_starts_with: String
    title_ends_with: String
    title_not_ends_with: String
    AND: [TagScalarWhereInput!]
    OR: [TagScalarWhereInput!]
    NOT: [TagScalarWhereInput!]
  }
  
  type TagSubscriptionPayload {
    mutation: MutationType!
    node: Tag
    updatedFields: [String!]
    previousValues: TagPreviousValues
  }
  
  input TagSubscriptionWhereInput {
    mutation_in: [MutationType!]
    updatedFields_contains: String
    updatedFields_contains_every: [String!]
    updatedFields_contains_some: [String!]
    node: TagWhereInput
    AND: [TagSubscriptionWhereInput!]
    OR: [TagSubscriptionWhereInput!]
    NOT: [TagSubscriptionWhereInput!]
  }
  
  input TagUpdateInput {
    title: String
    events: EventUpdateManyWithoutTagsInput
  }
  
  input TagUpdateManyDataInput {
    title: String
  }
  
  input TagUpdateManyMutationInput {
    title: String
  }
  
  input TagUpdateManyWithoutEventsInput {
    create: [TagCreateWithoutEventsInput!]
    delete: [TagWhereUniqueInput!]
    connect: [TagWhereUniqueInput!]
    set: [TagWhereUniqueInput!]
    disconnect: [TagWhereUniqueInput!]
    update: [TagUpdateWithWhereUniqueWithoutEventsInput!]
    upsert: [TagUpsertWithWhereUniqueWithoutEventsInput!]
    deleteMany: [TagScalarWhereInput!]
    updateMany: [TagUpdateManyWithWhereNestedInput!]
  }
  
  input TagUpdateManyWithWhereNestedInput {
    where: TagScalarWhereInput!
    data: TagUpdateManyDataInput!
  }
  
  input TagUpdateWithoutEventsDataInput {
    title: String
  }
  
  input TagUpdateWithWhereUniqueWithoutEventsInput {
    where: TagWhereUniqueInput!
    data: TagUpdateWithoutEventsDataInput!
  }
  
  input TagUpsertWithWhereUniqueWithoutEventsInput {
    where: TagWhereUniqueInput!
    update: TagUpdateWithoutEventsDataInput!
    create: TagCreateWithoutEventsInput!
  }
  
  input TagWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    title: String
    title_not: String
    title_in: [String!]
    title_not_in: [String!]
    title_lt: String
    title_lte: String
    title_gt: String
    title_gte: String
    title_contains: String
    title_not_contains: String
    title_starts_with: String
    title_not_starts_with: String
    title_ends_with: String
    title_not_ends_with: String
    events_every: EventWhereInput
    events_some: EventWhereInput
    events_none: EventWhereInput
    AND: [TagWhereInput!]
    OR: [TagWhereInput!]
    NOT: [TagWhereInput!]
  }
  
  input TagWhereUniqueInput {
    id: ID
    title: String
  }
  
  type User {
    id: ID!
    firstName: String
    lastName: String
    oktaId: String!
    organizations(where: OrganizationWhereInput, orderBy: OrganizationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Organization!]
    rsvps(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event!]
    saved(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event!]
    adminFor(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event!]
    createdEvents(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event!]
    createdImages(where: EventImageWhereInput, orderBy: EventImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [EventImage!]
    profileImage: String
  }
  
  type UserConnection {
    pageInfo: PageInfo!
    edges: [UserEdge]!
    aggregate: AggregateUser!
  }
  
  input UserCreateInput {
    id: ID
    firstName: String
    lastName: String
    oktaId: String!
    organizations: OrganizationCreateManyWithoutUsersInput
    rsvps: EventCreateManyWithoutRsvpsInput
    saved: EventCreateManyWithoutSavedInput
    adminFor: EventCreateManyWithoutAdminsInput
    createdEvents: EventCreateManyWithoutCreatorInput
    createdImages: EventImageCreateManyWithoutCreatorInput
    profileImage: String
  }
  
  input UserCreateManyWithoutAdminForInput {
    create: [UserCreateWithoutAdminForInput!]
    connect: [UserWhereUniqueInput!]
  }
  
  input UserCreateManyWithoutOrganizationsInput {
    create: [UserCreateWithoutOrganizationsInput!]
    connect: [UserWhereUniqueInput!]
  }
  
  input UserCreateManyWithoutRsvpsInput {
    create: [UserCreateWithoutRsvpsInput!]
    connect: [UserWhereUniqueInput!]
  }
  
  input UserCreateManyWithoutSavedInput {
    create: [UserCreateWithoutSavedInput!]
    connect: [UserWhereUniqueInput!]
  }
  
  input UserCreateOneWithoutCreatedEventsInput {
    create: UserCreateWithoutCreatedEventsInput
    connect: UserWhereUniqueInput
  }
  
  input UserCreateOneWithoutCreatedImagesInput {
    create: UserCreateWithoutCreatedImagesInput
    connect: UserWhereUniqueInput
  }
  
  input UserCreateWithoutAdminForInput {
    id: ID
    firstName: String
    lastName: String
    oktaId: String!
    organizations: OrganizationCreateManyWithoutUsersInput
    rsvps: EventCreateManyWithoutRsvpsInput
    saved: EventCreateManyWithoutSavedInput
    createdEvents: EventCreateManyWithoutCreatorInput
    createdImages: EventImageCreateManyWithoutCreatorInput
    profileImage: String
  }
  
  input UserCreateWithoutCreatedEventsInput {
    id: ID
    firstName: String
    lastName: String
    oktaId: String!
    organizations: OrganizationCreateManyWithoutUsersInput
    rsvps: EventCreateManyWithoutRsvpsInput
    saved: EventCreateManyWithoutSavedInput
    adminFor: EventCreateManyWithoutAdminsInput
    createdImages: EventImageCreateManyWithoutCreatorInput
    profileImage: String
  }
  
  input UserCreateWithoutCreatedImagesInput {
    id: ID
    firstName: String
    lastName: String
    oktaId: String!
    organizations: OrganizationCreateManyWithoutUsersInput
    rsvps: EventCreateManyWithoutRsvpsInput
    saved: EventCreateManyWithoutSavedInput
    adminFor: EventCreateManyWithoutAdminsInput
    createdEvents: EventCreateManyWithoutCreatorInput
    profileImage: String
  }
  
  input UserCreateWithoutOrganizationsInput {
    id: ID
    firstName: String
    lastName: String
    oktaId: String!
    rsvps: EventCreateManyWithoutRsvpsInput
    saved: EventCreateManyWithoutSavedInput
    adminFor: EventCreateManyWithoutAdminsInput
    createdEvents: EventCreateManyWithoutCreatorInput
    createdImages: EventImageCreateManyWithoutCreatorInput
    profileImage: String
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
  
  input UserCreateWithoutSavedInput {
    id: ID
    firstName: String
    lastName: String
    oktaId: String!
    organizations: OrganizationCreateManyWithoutUsersInput
    rsvps: EventCreateManyWithoutRsvpsInput
    adminFor: EventCreateManyWithoutAdminsInput
    createdEvents: EventCreateManyWithoutCreatorInput
    createdImages: EventImageCreateManyWithoutCreatorInput
    profileImage: String
  }
  
  type UserEdge {
    node: User!
    cursor: String!
  }
  
  enum UserOrderByInput {
    id_ASC
    id_DESC
    firstName_ASC
    firstName_DESC
    lastName_ASC
    lastName_DESC
    oktaId_ASC
    oktaId_DESC
    profileImage_ASC
    profileImage_DESC
  }
  
  type UserPreviousValues {
    id: ID!
    firstName: String
    lastName: String
    oktaId: String!
    profileImage: String
  }
  
  input UserScalarWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    firstName: String
    firstName_not: String
    firstName_in: [String!]
    firstName_not_in: [String!]
    firstName_lt: String
    firstName_lte: String
    firstName_gt: String
    firstName_gte: String
    firstName_contains: String
    firstName_not_contains: String
    firstName_starts_with: String
    firstName_not_starts_with: String
    firstName_ends_with: String
    firstName_not_ends_with: String
    lastName: String
    lastName_not: String
    lastName_in: [String!]
    lastName_not_in: [String!]
    lastName_lt: String
    lastName_lte: String
    lastName_gt: String
    lastName_gte: String
    lastName_contains: String
    lastName_not_contains: String
    lastName_starts_with: String
    lastName_not_starts_with: String
    lastName_ends_with: String
    lastName_not_ends_with: String
    oktaId: String
    oktaId_not: String
    oktaId_in: [String!]
    oktaId_not_in: [String!]
    oktaId_lt: String
    oktaId_lte: String
    oktaId_gt: String
    oktaId_gte: String
    oktaId_contains: String
    oktaId_not_contains: String
    oktaId_starts_with: String
    oktaId_not_starts_with: String
    oktaId_ends_with: String
    oktaId_not_ends_with: String
    profileImage: String
    profileImage_not: String
    profileImage_in: [String!]
    profileImage_not_in: [String!]
    profileImage_lt: String
    profileImage_lte: String
    profileImage_gt: String
    profileImage_gte: String
    profileImage_contains: String
    profileImage_not_contains: String
    profileImage_starts_with: String
    profileImage_not_starts_with: String
    profileImage_ends_with: String
    profileImage_not_ends_with: String
    AND: [UserScalarWhereInput!]
    OR: [UserScalarWhereInput!]
    NOT: [UserScalarWhereInput!]
  }
  
  type UserSubscriptionPayload {
    mutation: MutationType!
    node: User
    updatedFields: [String!]
    previousValues: UserPreviousValues
  }
  
  input UserSubscriptionWhereInput {
    mutation_in: [MutationType!]
    updatedFields_contains: String
    updatedFields_contains_every: [String!]
    updatedFields_contains_some: [String!]
    node: UserWhereInput
    AND: [UserSubscriptionWhereInput!]
    OR: [UserSubscriptionWhereInput!]
    NOT: [UserSubscriptionWhereInput!]
  }
  
  input UserUpdateInput {
    firstName: String
    lastName: String
    oktaId: String
    organizations: OrganizationUpdateManyWithoutUsersInput
    rsvps: EventUpdateManyWithoutRsvpsInput
    saved: EventUpdateManyWithoutSavedInput
    adminFor: EventUpdateManyWithoutAdminsInput
    createdEvents: EventUpdateManyWithoutCreatorInput
    createdImages: EventImageUpdateManyWithoutCreatorInput
    profileImage: String
  }
  
  input UserUpdateManyDataInput {
    firstName: String
    lastName: String
    oktaId: String
    profileImage: String
  }
  
  input UserUpdateManyMutationInput {
    firstName: String
    lastName: String
    oktaId: String
    profileImage: String
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
  
  input UserUpdateManyWithoutOrganizationsInput {
    create: [UserCreateWithoutOrganizationsInput!]
    delete: [UserWhereUniqueInput!]
    connect: [UserWhereUniqueInput!]
    set: [UserWhereUniqueInput!]
    disconnect: [UserWhereUniqueInput!]
    update: [UserUpdateWithWhereUniqueWithoutOrganizationsInput!]
    upsert: [UserUpsertWithWhereUniqueWithoutOrganizationsInput!]
    deleteMany: [UserScalarWhereInput!]
    updateMany: [UserUpdateManyWithWhereNestedInput!]
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
  
  input UserUpdateManyWithWhereNestedInput {
    where: UserScalarWhereInput!
    data: UserUpdateManyDataInput!
  }
  
  input UserUpdateOneRequiredWithoutCreatedImagesInput {
    create: UserCreateWithoutCreatedImagesInput
    update: UserUpdateWithoutCreatedImagesDataInput
    upsert: UserUpsertWithoutCreatedImagesInput
    connect: UserWhereUniqueInput
  }
  
  input UserUpdateOneWithoutCreatedEventsInput {
    create: UserCreateWithoutCreatedEventsInput
    update: UserUpdateWithoutCreatedEventsDataInput
    upsert: UserUpsertWithoutCreatedEventsInput
    delete: Boolean
    disconnect: Boolean
    connect: UserWhereUniqueInput
  }
  
  input UserUpdateWithoutAdminForDataInput {
    firstName: String
    lastName: String
    oktaId: String
    organizations: OrganizationUpdateManyWithoutUsersInput
    rsvps: EventUpdateManyWithoutRsvpsInput
    saved: EventUpdateManyWithoutSavedInput
    createdEvents: EventUpdateManyWithoutCreatorInput
    createdImages: EventImageUpdateManyWithoutCreatorInput
    profileImage: String
  }
  
  input UserUpdateWithoutCreatedEventsDataInput {
    firstName: String
    lastName: String
    oktaId: String
    organizations: OrganizationUpdateManyWithoutUsersInput
    rsvps: EventUpdateManyWithoutRsvpsInput
    saved: EventUpdateManyWithoutSavedInput
    adminFor: EventUpdateManyWithoutAdminsInput
    createdImages: EventImageUpdateManyWithoutCreatorInput
    profileImage: String
  }
  
  input UserUpdateWithoutCreatedImagesDataInput {
    firstName: String
    lastName: String
    oktaId: String
    organizations: OrganizationUpdateManyWithoutUsersInput
    rsvps: EventUpdateManyWithoutRsvpsInput
    saved: EventUpdateManyWithoutSavedInput
    adminFor: EventUpdateManyWithoutAdminsInput
    createdEvents: EventUpdateManyWithoutCreatorInput
    profileImage: String
  }
  
  input UserUpdateWithoutOrganizationsDataInput {
    firstName: String
    lastName: String
    oktaId: String
    rsvps: EventUpdateManyWithoutRsvpsInput
    saved: EventUpdateManyWithoutSavedInput
    adminFor: EventUpdateManyWithoutAdminsInput
    createdEvents: EventUpdateManyWithoutCreatorInput
    createdImages: EventImageUpdateManyWithoutCreatorInput
    profileImage: String
  }
  
  input UserUpdateWithoutRsvpsDataInput {
    firstName: String
    lastName: String
    oktaId: String
    organizations: OrganizationUpdateManyWithoutUsersInput
    saved: EventUpdateManyWithoutSavedInput
    adminFor: EventUpdateManyWithoutAdminsInput
    createdEvents: EventUpdateManyWithoutCreatorInput
    createdImages: EventImageUpdateManyWithoutCreatorInput
    profileImage: String
  }
  
  input UserUpdateWithoutSavedDataInput {
    firstName: String
    lastName: String
    oktaId: String
    organizations: OrganizationUpdateManyWithoutUsersInput
    rsvps: EventUpdateManyWithoutRsvpsInput
    adminFor: EventUpdateManyWithoutAdminsInput
    createdEvents: EventUpdateManyWithoutCreatorInput
    createdImages: EventImageUpdateManyWithoutCreatorInput
    profileImage: String
  }
  
  input UserUpdateWithWhereUniqueWithoutAdminForInput {
    where: UserWhereUniqueInput!
    data: UserUpdateWithoutAdminForDataInput!
  }
  
  input UserUpdateWithWhereUniqueWithoutOrganizationsInput {
    where: UserWhereUniqueInput!
    data: UserUpdateWithoutOrganizationsDataInput!
  }
  
  input UserUpdateWithWhereUniqueWithoutRsvpsInput {
    where: UserWhereUniqueInput!
    data: UserUpdateWithoutRsvpsDataInput!
  }
  
  input UserUpdateWithWhereUniqueWithoutSavedInput {
    where: UserWhereUniqueInput!
    data: UserUpdateWithoutSavedDataInput!
  }
  
  input UserUpsertWithoutCreatedEventsInput {
    update: UserUpdateWithoutCreatedEventsDataInput!
    create: UserCreateWithoutCreatedEventsInput!
  }
  
  input UserUpsertWithoutCreatedImagesInput {
    update: UserUpdateWithoutCreatedImagesDataInput!
    create: UserCreateWithoutCreatedImagesInput!
  }
  
  input UserUpsertWithWhereUniqueWithoutAdminForInput {
    where: UserWhereUniqueInput!
    update: UserUpdateWithoutAdminForDataInput!
    create: UserCreateWithoutAdminForInput!
  }
  
  input UserUpsertWithWhereUniqueWithoutOrganizationsInput {
    where: UserWhereUniqueInput!
    update: UserUpdateWithoutOrganizationsDataInput!
    create: UserCreateWithoutOrganizationsInput!
  }
  
  input UserUpsertWithWhereUniqueWithoutRsvpsInput {
    where: UserWhereUniqueInput!
    update: UserUpdateWithoutRsvpsDataInput!
    create: UserCreateWithoutRsvpsInput!
  }
  
  input UserUpsertWithWhereUniqueWithoutSavedInput {
    where: UserWhereUniqueInput!
    update: UserUpdateWithoutSavedDataInput!
    create: UserCreateWithoutSavedInput!
  }
  
  input UserWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    firstName: String
    firstName_not: String
    firstName_in: [String!]
    firstName_not_in: [String!]
    firstName_lt: String
    firstName_lte: String
    firstName_gt: String
    firstName_gte: String
    firstName_contains: String
    firstName_not_contains: String
    firstName_starts_with: String
    firstName_not_starts_with: String
    firstName_ends_with: String
    firstName_not_ends_with: String
    lastName: String
    lastName_not: String
    lastName_in: [String!]
    lastName_not_in: [String!]
    lastName_lt: String
    lastName_lte: String
    lastName_gt: String
    lastName_gte: String
    lastName_contains: String
    lastName_not_contains: String
    lastName_starts_with: String
    lastName_not_starts_with: String
    lastName_ends_with: String
    lastName_not_ends_with: String
    oktaId: String
    oktaId_not: String
    oktaId_in: [String!]
    oktaId_not_in: [String!]
    oktaId_lt: String
    oktaId_lte: String
    oktaId_gt: String
    oktaId_gte: String
    oktaId_contains: String
    oktaId_not_contains: String
    oktaId_starts_with: String
    oktaId_not_starts_with: String
    oktaId_ends_with: String
    oktaId_not_ends_with: String
    organizations_every: OrganizationWhereInput
    organizations_some: OrganizationWhereInput
    organizations_none: OrganizationWhereInput
    rsvps_every: EventWhereInput
    rsvps_some: EventWhereInput
    rsvps_none: EventWhereInput
    saved_every: EventWhereInput
    saved_some: EventWhereInput
    saved_none: EventWhereInput
    adminFor_every: EventWhereInput
    adminFor_some: EventWhereInput
    adminFor_none: EventWhereInput
    createdEvents_every: EventWhereInput
    createdEvents_some: EventWhereInput
    createdEvents_none: EventWhereInput
    createdImages_every: EventImageWhereInput
    createdImages_some: EventImageWhereInput
    createdImages_none: EventImageWhereInput
    profileImage: String
    profileImage_not: String
    profileImage_in: [String!]
    profileImage_not_in: [String!]
    profileImage_lt: String
    profileImage_lte: String
    profileImage_gt: String
    profileImage_gte: String
    profileImage_contains: String
    profileImage_not_contains: String
    profileImage_starts_with: String
    profileImage_not_starts_with: String
    profileImage_ends_with: String
    profileImage_not_ends_with: String
    AND: [UserWhereInput!]
    OR: [UserWhereInput!]
    NOT: [UserWhereInput!]
  }
  
  input UserWhereUniqueInput {
    id: ID
    oktaId: String
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
