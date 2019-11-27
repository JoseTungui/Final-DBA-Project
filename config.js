var config = {}

config.host = process.env.HOST || "https://c42e42ff-0ee0-4-231-b9ee.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "PQggbVmmzJoez3Knbehe005aq97KYsrvzPSjRTa1ji40cU5TjvaZHvRZgITu75OpLal3lKexF2nekywNlI17nA==";
config.databaseId = "ToDoList";
config.collectionId = "Items";

module.exports = config;