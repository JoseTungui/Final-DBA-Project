var config = {}

config.host = process.env.HOST || "https://northwind.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "90xMbUUvgElya0EzuoxXGcgcVFMoEq80RSkLkAC5gd2xJy4RYwYt5FnqI0VXSATzY766wdV0F7EjI1WE8R1vyQ==";
config.databaseId = "northwind";
config.collectionId = "Territories";

module.exports = config;