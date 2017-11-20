var MongoClient = require('mongodb').MongoClient;
var connectionUrl = 'mongodb://localhost:27017/myproject',sampleCollection = 'chapters';

var chapters =
[{
  'Title':'snow crash',
  'Author':'Vighesh'
},{

  'Title':'crash',
  'Author':'Tiwari'
}];

MongoClient.connect(connectionUrl,function (err,db)
{
  console.log("connected correctly");
  var collection = db.collection(sampleCollection);
  collection.insert(chapters,function (error,result)
  {
    if(!error)
    {
      console.log("success:"+result.ops.length+"chapters inserted");
    }
    else
    {
      console.log("some error occured");
    }
    db.close();
  });

});
