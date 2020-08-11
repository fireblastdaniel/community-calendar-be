const {importSchema} = require('graphql-import');
const gql = require('graphql-tag');
const {disableFragmentWarnings} = require('graphql-tag');
const basicDefs = importSchema('./schema.graphql');
// const basicDefs = gql(importSchema('./apollo.graphql'));

disableFragmentWarnings();

// const basicDefs = gql`
//   input UserCheckIdInput {
//     oktaId: String!
//   }

//   input EventCreateTagInput {
//     title: String!
//   }

//   input EventCreateImageInput {
//     url: String!
//   }

//   type File {
//     filename: String!
//     mimetype: String!
//     encoding: String!
//   }

//   input EventCreateInput {
//     id: ID
//     title: String!
//     description: String!
//     start: DateTime!
//     end: DateTime!
//     eventImages: [EventCreateImageInput!]
//     rsvps: UserCreateManyWithoutRsvpsInput
//     saved: UserCreateManyWithoutSavedInput
//     urls: EventUrlCreateManyWithoutEventInput
//     admin: UserCreateManyWithoutAdminForInput
//     locations: LocationCreateManyWithoutEventInput
//     tags: [EventCreateTagInput!]
//     ticketPrice: Float!
//     series: SeriesCreateOneWithoutEventsInput
//   }

//   input EventUpdateInput {
//     title: String
//     description: String
//     start: DateTime
//     end: DateTime
//     eventImages: [EventCreateImageInput!]
//     rsvps: UserUpdateManyWithoutRsvpsInput
//     saved: UserUpdateManyWithoutSavedInput
//     urls: EventUrlUpdateManyWithoutEventInput
//     admins: UserUpdateManyWithoutAdminForInput
//     locations: LocationUpdateManyWithoutEventInput
//     tags: [EventCreateTagInput!]
//     ticketPrice: Float
//   }

//   input UserUpdateInput {
//     firstName: String
//     lastName: String
//     organizations: OrganizationUpdateManyWithoutUsersInput
//     rsvps: EventUpdateManyWithoutRsvpsInput
//     saved: EventUpdateManyWithoutSavedInput
//     adminFor: EventUpdateManyWithoutAdminsInput
//     createdEvents: EventUpdateManyWithoutCreatorInput
//     createdImages: EventImageUpdateManyWithoutCreatorInput
//     profileImage: String
//   }

//   input EventIdInput {
//     id: ID!
//   }

//   input TicketPriceSearchInput {
//     minPrice: Int
//     maxPrice: Int
//   }

//   input DateRangeSearchInput {
//     start: DateTime!
//     end: DateTime!
//   }

//   input LocationSearchInput {
//     userLongitude: Float!
//     userLatitude: Float!
//     radius: Int!
//   }

//   input SearchFilters {
//     index: String
//     location: LocationSearchInput
//     tags: [String!]
//     ticketPrice: [TicketPriceSearchInput!]
//     dateRange: DateRangeSearchInput
//   }

//   type Location {
//     id: ID!
//     name: String!
//     streetAddress: String!
//     streetAddress2: String
//     city: String!
//     zipcode: Int!
//     state: String!
//     latitude: Float
//     longitude: Float
//     distanceFromUser: Float
//     distanceUnit: String
//     event: Event!
//     neighborhood: Neighborhood
//   }

//   type Event {
//     id: ID!
//     title: String!
//     description: String!
//     start: DateTime!
//     end: DateTime!
//     creator: User
//     ticketPrice: Float!
//     eventImages(
//       where: EventImageWhereInput
//       orderBy: EventImageOrderByInput
//       skip: Int
//       after: String
//       before: String
//       first: Int
//       last: Int
//     ): [EventImage!]
//     rsvps(
//       where: UserWhereInput
//       orderBy: UserOrderByInput
//       skip: Int
//       after: String
//       before: String
//       first: Int
//       last: Int
//     ): [User!]
//     saved(
//       where: UserWhereInput
//       orderBy: UserOrderByInput
//       skip: Int
//       after: String
//       before: String
//       first: Int
//       last: Int
//     ): [User!]
//     urls(
//       where: EventUrlWhereInput
//       orderBy: EventUrlOrderByInput
//       skip: Int
//       after: String
//       before: String
//       first: Int
//       last: Int
//     ): [EventUrl!]
//     admins(
//       where: UserWhereInput
//       orderBy: UserOrderByInput
//       skip: Int
//       after: String
//       before: String
//       first: Int
//       last: Int
//     ): [User!]
//     locations(
//       where: LocationWhereInput
//       orderBy: LocationOrderByInput
//       skip: Int
//       after: String
//       before: String
//       first: Int
//       last: Int
//       # userLatitude and userLongitude args used to calculate distance to event
//       userLatitude: Float
//       userLongitude: Float
//       # distanceUnit for event is "miles" or "kilometers" to comply with turf requirements
//       distanceUnit: String
//     ): [Location!]
//     tags(
//       where: TagWhereInput
//       orderBy: TagOrderByInput
//       skip: Int
//       after: String
//       before: String
//       first: Int
//       last: Int
//     ): [Tag!]
//     index: String!
//   }

//   type Query {
//     users(
//       where: UserWhereInput
//       orderBy: UserOrderByInput
//       skip: Int
//       after: String
//       before: String
//       first: Int
//       last: Int
//     ): [User!]
//     checkId(data: UserCheckIdInput!): [User]
//     user(where: UserWhereUniqueInput): User!
//     events(
//       where: EventWhereInput
//       orderBy: EventOrderByInput
//       skip: Int
//       after: String
//       before: String
//       first: Int
//       last: Int
//       searchFilters: SearchFilters
//     ): [Event!]
//     tags(
//       where: TagWhereInput
//       orderBy: TagOrderByInput
//       skip: Int
//       after: String
//       before: String
//       first: Int
//       last: Int
//     ): [Tag!]
//     ticketMasterEvents(
//       radius: Int
//       # "miles" or "km"
//       unit: String
//       #number of events per page
//       size: Int
//       page: String
//       keyword: String
//       #Point to search for events from "30.00,-67.00" . NO SPACES
//       latlong: String
//       startDateTime: DateTime
//       endDateTime: DateTime
//       city: String
//       countryCode: String
//       stateCode: String
//       postalCode: String
//     ): TMResults
//     ticketMasterEventsAlt(
//       radius: Int
//       # "miles" or "km"
//       unit: String
//       #number of events per page
//       size: Int
//       page: String
//       keyword: String
//       #Point to search for events from "30.00,-67.00" . NO SPACES
//       latlong: String
//       startDateTime: DateTime
//       endDateTime: DateTime
//       city: String
//       countryCode: String
//       stateCode: String
//       postalCode: String
//     ): TMResultsAlt
//   }

//   type Mutation {
//     addUser(data: UserCreateInput!): User!
//     deleteEvent(where: EventWhereUniqueInput!): Event
//     rsvpEvent(event: EventIdInput!): Boolean!
//     saveEvent(event: EventIdInput!): Boolean!
//   }
// `;

// fixes issue of Upload type not being recognized in schema.graphql
const mutationDefs = gql`
  extend type Mutation {
    addEvent(data: EventCreateInput!, images: [Upload!]): Event!
    updateEvent(
      data: EventUpdateInput
      where: EventWhereUniqueInput!
      images: [Upload!]
    ): Event
    updateUser(
      data: UserUpdateInput
      image: Upload
      where: UserWhereUniqueInput
    ): User!
  }
`;
// combine imported schema and extended schema
const typeDefs = [basicDefs, mutationDefs];

module.exports = typeDefs;
