var AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: 'AKIAIJ2KAA7SG6FIKDNA',
  secretAccessKey: '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',
  region: ‘us-west-1’
});


var s3 = new AWS.S3();

 s3.createBucket({Bucket: 'naiqu'}, function() {

  var params = {Bucket: 'myBucket', Key: 'AKIAIJ2KAA7SG6FIKDNA', Body: 'Hello!'};

  s3.putObject(params, function(err, data) {

      if (err)

          console.log(err)

      else       console.log("Successfully uploaded data to myBucket/myKey");

   });

});

module.export s3;
