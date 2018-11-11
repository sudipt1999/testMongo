const {MongoClient , ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Client',{ useNewUrlParser: true },(err ,client)=>{
    if(err)
    {
        return console.log("SORRY UNABLE TO CONNECT !! ");
    }
    const db = client.db('Client');
    db.collection('first').find().toArray().then((docs)=>{
                    console.log(JSON.stringify(docs,undefined,3));
                },(err)=>{
                    console.log("ERROR !!!");
                });

    db.collection('first').find({status:"single"}).toArray().then((docs)=>{
        console.log("SEARCHING A CATEGORY !");        
        console.log(JSON.stringify(docs,undefined,3));
    },(err)=>{
        console.log("ERROR !!!");
    });

})