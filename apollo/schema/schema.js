// const {importSchema} = require('graphql-import');
console.log('okay :)');
// const {loadSchemaFiles, loadTypedefs} = require('graphql-toolkit');
// const {loadTypedefsSync} = require('@graphql-tools/load');
// const {GraphQLFileLoader} = require('@graphql-tools/graphql-file-loader');
// const {addResolversToSchema} = require('@graphql-tools/schema');
const {mergeTypeDefs} = require('@graphql-tools/merge');
const basicDefs = require('./gqlSchema');
const gql = require('graphql-tag');
// const path = require('path');
const {disableFragmentWarnings} = require('graphql-tag');
const {importSchema} = require('graphql-import');
const {type} = require('os');

// const basicDefs = loadTypedefs('./apollo.graphql');
// const basicDefs = importSchema('./apollo.graphql');
// const basicDefs = gql(importSchema('./apollo.graphql'));

// const sources = loadTypedefsSync(path.join(__dirname, 'apollo.graphql'), {
//   loaders: [new GraphQLFileLoader()],
// });
// const documentNodes = sources.map(source => source.document);
// console.log(documentNodes);
// let basicDefs = 1;
// async function defsImport() {
//   try {
//     basicDefs = await importSchema('./apollo.graphql');
//   } catch (e) {
//     console.log(e);
//   }
// }

// defsImport().then(() => {

// });

// console.log(basicDefs);

// console.log(basicDefs);

disableFragmentWarnings();

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

module.exports = mergeTypeDefs(typeDefs, {all: true});
