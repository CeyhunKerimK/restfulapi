const mongoose = require('mongoose');
const databaseUrl = "mongodb://localhost/apıDatabase";


mongoose.connect(databaseUrl)
.then((result) => console.log("bağlantı başarılı."))
.catch((error) => console.log(`database'e bağlantı kurulamadı ${error}`));