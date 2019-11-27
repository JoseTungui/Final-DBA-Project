var config = {}

config.host = process.env.HOST || "https://65ab9072-0ee0-4-231-b9ee.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "9awikjFXt6nGW1dlgKPH1H1MIagwgo42cJEPtqWZTfaVMtNmp5577zplEjoeQ16KWNGNvjPEa86FvsjFQvPoKA==";
config.databaseId = "ToDoList";
config.collectionId = "Items";

module.exports = config;