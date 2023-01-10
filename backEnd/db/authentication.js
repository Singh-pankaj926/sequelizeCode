const connection = require('./connection');

function connectionToDataBase(){
    try{
        // To authenticate
        return connection.authenticate()
        // .then(() => { console.log('Connection has been established successfully.')})
        // .catch((error) => { console.error('Unable to connect to the database: ', error)});        
    }catch(err){
        console.log(err);
        return err;
    }
}

module.exports = connectionToDataBase