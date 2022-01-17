const resolvers = {

  Query: {
    // returns an array of Tracks that will be used to populate
    // the homepage grid of our web client
    tracksForHome: (_, __, {datasources}) => {
      return dataSources.trackAPI.getTracksForHome();
    }
  },
  Track: {
    author: (parent, _, {dataSources}) => {
      return dataSources.trackAPI.getAuthor(authorId);
    }
  }


};

module.exports = resolvers;
