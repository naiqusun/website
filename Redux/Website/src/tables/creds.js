var AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: 'aaaa',
  secretAccessKey: 'bbb',
  region: ‘us-west-1’
});


var s3 = new AWS.S3();

 s3.createBucket({Bucket: 'snsventures'}, function() {

  var params = {Bucket: 'snsventures', Key: 'AKIAIJ2KAA7SG6FIKDNA', Body: 'Hello!'};

  s3.putObject(params, function(err, data) {

      if (err)

          console.log(err)

      else       console.log("Successfully uploaded data to myBucket/myKey");

   });

});

module.export s3;
