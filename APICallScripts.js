"use strict"



function renderClassSearchResults(response) {
  let beginGymList = document.getElementById("beginGymList");
  console.log(response)
  for (let i = 0; i < response.length; i++) {
    let className = document.createElement("li")
    className.id = "class"+response[i].id
    className.innerHTML=response[i].name
    beginGymList.appendChild(className)
  }
}


function renderGymResults(response) {
  let beginGymList = document.getElementById("beginGymList");
  beginGymList.innerHTML= ""
    let gymName = document.createElement("li")
    gymName.id = "gymTest"
    gymName.innerHTML=response.name
    beginGymList.appendChild(gymName)

}

//Call to search classes
function searchGET(search) {
  let settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://snshealthie.herokuapp.com/api/v2/classes/search/q="+search,
    "method": "GET",
    "headers": {
      "authorization": "Token ced12082a40905503ad2ad29367aeafb824ed2b8",
    }
  }
  console.log(settings.url)
  $.ajax(settings).done(function (response) {
    renderClassSearchResults(response)
  });
}

//Call to return all classes associated to given Gym ID
function lookUpGymClassGET(search) {
  console.log(search)
  let searchTerm = search.replace("gym","")
  let settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://snshealthie.herokuapp.com/api/v2/classes/"+searchTerm,
    "method": "GET",
    "headers": {
      "authorization": "Token ced12082a40905503ad2ad29367aeafb824ed2b8",
    }
  }
  console.log(settings.url)
  $.ajax(settings).done(function (response) {
    console.log(response)
    renderGymResults(response);
  });
}

//Call to return all reviews associated to given class ID
function lookUpGymClassReviewGET(search) {
  let settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://snshealthie.herokuapp.com/api/v2/reviews/"+search,
    "method": "GET",
    "headers": {
      "authorization": "Token ced12082a40905503ad2ad29367aeafb824ed2b8",
    }
  }
  console.log(settings.url)
  $.ajax(settings).done(function (response) {
    console.log(response)
  });
}

function lookUpAllGymClassGET() {
  let settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://snshealthie.herokuapp.com/api/v2/classes/",
    "method": "GET",
    "headers": {
      "authorization": "Token ced12082a40905503ad2ad29367aeafb824ed2b8",
    }
  }
  console.log(settings.url)
  $.ajax(settings).done(function (response) {
    renderAllGymClassSearchResults(response)
  });
}


function createNewGymClassReviewPOST(){
  let form = new FormData(postClassReview);
  for (var pair of form.entries()) {
      console.log(pair[0]+ ', ' + pair[1]);
  }

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
  for (var pair of form.entries()) {
      console.log(pair[0]+ ', ' + pair[1]);
  }
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




function renderAllGymClassSearchResults(classResults) {
  console.log(classResults);
  var classResultsStart = document.getElementById("placeholderClassSearchResult");

  for (i = 0; i < classResults.results.length; i++) {

    var classResultsContainer = document.createElement("div");
    var classResultsFront = document.createElement("div");
    var classResultsBack = document.createElement("div");

    classResultsContainer.classList.add('card');
    classResultsContainer.classList.add('small');
    classResultsFront.classList.add('card-content');
    classResultsBack.classList.add("card-reveal");

    classResultsStart.appendChild(classResultsContainer);
    classResultsContainer.appendChild(classResultsFront);
    classResultsContainer.appendChild(classResultsBack);

    classResultsFront.innerHTML = '<span class="card-title activator grey-text text-darken-4">'+ classResults.results[i].name + '<i class="material-icons right">more_vert</i></span>'
    + '<p>' + classResults.results[i].gym + '</p>'
    // + '<p>' + classResults.classes[i].avgRating + '</p>'
    // + '<p>' + classResults.classes[i].gym + '</p>'
    // + '<p>' + classResults.classes[i].location + '</p>';
    classResultsBack.innerHTML = '<span class="card-title grey-text text-darken-4">'+ 'More Info' + '<i class="material-icons right">close</i></span>'
    // + '<p>' + classResults.results[i].type + '</p>'
    // + '<p>' + classResults.classes[i].description + '</p>'
    // + '<p>' + classResults.classes[i].dateOffered + '</p>'
    // + '<p>' + classResults.classes[i].instructor + '</p>'
    // + '<p>' + classResults.classes[i].duration + '</p>';

  }
}
