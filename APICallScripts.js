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
