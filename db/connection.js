// instantiate sequelize
const Sequelize = require('sequelize');
require('dotenv').config();

// connect db
// dialect tells which db we are using
const connection = new Sequelize(process.env.dbName, process.env.adminName, process.env.password, {
    host: process.env.host,
    dialect: process.env.dialect
});




// To authenticate
// connection.authenticate().then(() => { console.log('Connection has been established successfully.')}).catch((error) => { console.error('Unable to connect to the database: ', error)});

// // define article model
// const Article = connection.define("article", {
//     title: Sequelize.String,
//     content: Sequelize.String
// });
// connection.sync();

// // query using sequelize API
// Article.findById(5).then(function (article) {
//     console.log(article);
// })

// function connectionToDataBase(dbName, userName, password, host, dialect, operation){
//     try{
//         // connect db
//         // dialect tells which db we are using
//         const connection = new Sequelize(dbName, userName, password, {
//             host: host,
//             dialect: dialect
//         });

//         if(operation == "connection"){
//             // To authenticate
//             return connection.authenticate()
//             // .then(() => { console.log('Connection has been established successfully.')})
//             // .catch((error) => { console.error('Unable to connect to the database: ', error)});
//         }else{
//             return connection;
//         }        
//     }catch(err){
//         console.log(err);
//         return err;
//     }

// }

module.exports = connection