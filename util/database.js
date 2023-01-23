require('dotenv').config()

const mongodb= require('mongodb')

const mongoConnect = (callback)=>{
    MongoClient.connect(process.env.Mongo_Connect)
    .then(client=>{
        console.log('connected')
        callback(client)
    })
    
    .catch(err=>{console.log(err)});
}
const MongoClient=mongodb.MongoClient


module.exports=mongoConnect;