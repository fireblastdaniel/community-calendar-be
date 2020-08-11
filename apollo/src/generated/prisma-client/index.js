"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Event",
    embedded: false
  },
  {
    name: "Tag",
    embedded: false
  },
  {
    name: "EventImage",
    embedded: false
  },
  {
    name: "EventUrl",
    embedded: false
  },
  {
    name: "Location",
    embedded: false
  },
  {
    name: "Organization",
    embedded: false
  },
  {
    name: "Neighborhood",
    embedded: false
  },
  {
    name: "GeoJson",
    embedded: false
  },
  {
    name: "FrequencyType",
    embedded: false
  },
  {
    name: "Series",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://com-cal-fb8c99410f.herokuapp.com/community-calendar-be/dev`,
  secret: `${process.env["PRISMA_SECRET"]}`
});
exports.prisma = new exports.Prisma();
