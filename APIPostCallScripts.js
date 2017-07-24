"use strict"

function createNewGymClassReviewPOST(){
  let form = new FormData(postClassReview);
  let settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://snshealthie.herokuapp.com/api/v2/reviews/",
  "method": "POST",
  "headers": {
    "authorization": "Token ced12082a40905503ad2ad29367aeafb824ed2b8",
  },
  "processData": false,
  "contentType": false,
  "mimeType": "multipart/form-data",
  "data": form
  }
  $.ajax(settings).done(function (response) {
    console.log(response);
  })
}


function createNewGymClassPOST() {
  let form = new FormData(postClass);
  let settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://snshealthie.herokuapp.com/api/v2/classes/",
    "method": "POST",
    "headers": {
      "authorization": "Token ced12082a40905503ad2ad29367aeafb824ed2b8",
      },
    "processData": false,
    "contentType": false,
    "mimeType": "multipart/form-data",
    "data": form
  }
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}
