"use strict"



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
  $.ajax(settings).done(function (response) {
    console.log(response)
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
  $.ajax(settings).done(function (response) {
    renderAllGymClassSearchResults(response)
  });
}


function renderAllGymClassSearchResults(classResults) {
console.log(classResults);
  let classResultsStart = document.getElementById("placeholderClassSearchResult");

  for (let i = 0; i < classResults.results.length; i++) {

    let classResultsContainer = document.createElement("div");
    let classResultsFront = document.createElement("div");
    let classResultsBack = document.createElement("div");

    let className = classResults.results[i].name
    let classReviews = classResults.results[i].reviews

    classResultsContainer.classList.add('card');
    classResultsContainer.classList.add('small');
    classResultsContainer.id ="class"+classResults.results[i].id
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

    //add various functions

    classResultsFront.onclick = () => {
      document.getElementById("placeholderClassReviewSearchResult").innerHTML = ""
      changeGymClassReviewTitleHeader(className)
      selectGymClass(classReviews)
    }
  }
}

function changeGymClassReviewTitleHeader(className) {
    document.getElementById("reviewlistresults").innerHTML="Reviews for " + className
}


function changeGymClassTitleHeader(categoryName) {
    document.getElementById("classlistresults").innerHTML="Classes for " + categoryName
}

function selectGymClass(reviewName) {

  let classReviewResultsStart = document.getElementById("placeholderClassReviewSearchResult");

  if (reviewName.length < 1) {

    let classReviewResultsContainer = document.createElement("div")
    classReviewResultsContainer.innerHTML = "Sorry, selected class has no reviews";
    classReviewResultsStart.appendChild(classReviewResultsContainer)

  } else {

    for (let i = 0; i < reviewName.length; i++) {

      let classReviewResultsContainer = document.createElement("div");
      let classReviewResultsContent = document.createElement("div");

      classReviewResultsContainer.classList.add("card");
      classReviewResultsContent.classList.add("card-content");
      classReviewResultsContent.classList.add("black-text");

      classReviewResultsContent.innerHTML = "Review(s) found"

      // classReviewResultsContent.innerHTML = '<span class="card-title">' + classdatajson.classes[0].reviews[i].reviewTitle + '<span style="float:right">' + classdatajson.classes[0].reviews[i].rating + '</span></span>'
      // + '<p>' + classdatajson.classes[0].reviews[i].user
      // + '<span style="float:right">' + classdatajson.classes[0].reviews[i].dateSubmitted + '</span></p><br>'
      // + '<p>' + classdatajson.classes[0].reviews[i].reviewText + '</p>'
      // + '<br><p><i class=material-icons>thumb_up</i>     <i class=material-icons>thumb_down</i></p>';

      classReviewResultsStart.appendChild(classReviewResultsContainer);
      classReviewResultsContainer.appendChild(classReviewResultsContent);
    }
  }
}


//Call to search classes
function searchClassesGET(search) {
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
    console.log(response)
  });
}
