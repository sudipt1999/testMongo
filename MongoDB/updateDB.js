const{MongoClient , ObjectID} = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/Client',{ useNewUrlParser: true },(err,client)=>{
    if(err)
    {
        return console.log("ERROR IN CONNECTION ");
    }
    const db = client.db('Client');
    db.collection('first').findOneAndUpdate(
        //find    
        {status:"single"},
        //update
        {
            $set:{
                status:"commited"
            }
        },
        //options
        {
            returnOriginal:false
        }
        ).then((result)=>{
            console.log(result);
        });
});