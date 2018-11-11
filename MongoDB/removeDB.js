const {MongoClient , ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Client',{ useNewUrlParser: true },(err ,client)=>{
    if(err)
    {
        return console.log("SORRY UNABLE TO CONNECT !! ");
    }
    const db = client.db('Client');
    db.collection('first').findOneAndDelete({status:"commited"}).then((result)=>{
        console.log(result);
    },(err)=>{
        console.log(err);
    })
})