var config = {}

config.host = process.env.HOST || "https://bc154523-0ee0-4-231-b9ee.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "1zTtdcQjKBFj0Kch0x0DUL9bNYeBwWFtjykb1DHBOlYHMIh7pMGkiIsbIOXMbSTAzLUKjdfyGgIrjxjMc8doqA==";
config.databaseId = "ToDoList";
config.collectionId = "Territories";

module.exports = config;