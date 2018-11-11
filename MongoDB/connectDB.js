const MongoClient = require('mongodb').MongoClient;

console.log("STARTING APP ");
MongoClient.connect('mongodb://localhost:27017/Client',
(err,db)=>{
    if(err)
    {
        return console.log("error came down !!!");
    }
    console.log("CONNECTED!!");

    //Creating
    var collection = db.db('Client').collection('first');
    collection.insertOne({name:"Rohan" , age : "22" , status:"commited"} ,
        (err,result)=>{
            if(err)
            {
                console.log("ERROR FROM RESULT !!");
                console.log(err);
            }
            console.log(JSON.stringify(result.ops , undefined , 3));
        });
    db.close();
});