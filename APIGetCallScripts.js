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

    classResultsFront.innerHTML = '<span class="card-title activator grey-text text-darken-4">Name'+ classResults.results[i].name + '<i class="material-icons right">more_vert</i></span>'
    + '<p>Gym' + classResults.results[i].gym + '</p>'
    + '<p>Class Type' + classResults.results[i].type + '</p>'
    + '<p>Instructor' + classResults.results[i].instructor + '</p>';
    classResultsBack.innerHTML = '<span class="card-title grey-text text-darken-4">'+ 'More Info' + '<i class="material-icons right">close</i></span>'
    // + '<p>' + classResults.classes[i].description + '</p>'
    // + '<p>' + classResults.classes[i].dateOffered + '</p>'
    // + '<p>' + classResults.classes[i].instructor + '</p>'
    + '<p>Duration' + classResults.results[i].duration_minutes + 'Min</p>';

    //add various functions

    classResultsFront.onclick = () => {
      document.getElementById("placeholderClassReviewSearchResult").innerHTML = ""
      changeGymClassReviewTitleHeader(className)
      lookUpGymClassReviewGET(classResultsContainer.id)
    }
  }
}

function changeGymClassReviewTitleHeader(className) {
    document.getElementById("reviewlistresults").innerHTML="Reviews for " + className
}


function changeGymClassTitleHeader(categoryName) {
    let categories = document.getElementById("classlistresults")
    categories.innerHTML="Classes for " + categoryName
}

//Call to return all reviews associated to given class ID
function lookUpGymClassReviewGET(search) {
  let searchTerm = search.replace("class","")
  let settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://snshealthie.herokuapp.com/api/v2/classes/"+searchTerm+"/reviews/",
    "method": "GET",
    "headers": {
      "authorization": "Token ced12082a40905503ad2ad29367aeafb824ed2b8",
    }
  }
  $.ajax(settings).done(function (response) {
    renderSelectedGymClassReviews(response)
  });
}

function renderSelectedGymClassReviews(reviewName) {

  let classReviewResultsStart = document.getElementById("placeholderClassReviewSearchResult");

  if (reviewName.results.length < 1) {

    let classReviewResultsContainer = document.createElement("div")
    classReviewResultsContainer.innerHTML = "Sorry, selected class has no reviews";
    classReviewResultsStart.appendChild(classReviewResultsContainer)

  } else {

    for (let i = 0; i < reviewName.results.length; i++) {

      let classReviewResultsContainer = document.createElement("div");
      let classReviewResultsContent = document.createElement("div");

      classReviewResultsContainer.classList.add("card");
      classReviewResultsContent.classList.add("card-content");
      classReviewResultsContent.classList.add("black-text");

      classReviewResultsContent.innerHTML = '<span class="card-title">' + reviewName.results[i].title + '<span style="float:right">' + reviewName.results[i].rating + 'stars</span></span>'
      // + '<p>' + classdatajson.classes[0].reviews[i].user
      // + '<span style="float:right">' + classdatajson.classes[0].reviews[i].dateSubmitted + '</span></p><br>'
      + '<p>' + reviewName.results[i].review + '</p>'
      + '<br><p><i class=material-icons>thumb_up</i>     <i class=material-icons>thumb_down</i></p>';

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

function trackGymSelection() {

}

function trackClassSelection() {

}

const gymClassCategories = ["Strength", "Conditioning", "Cycling", "Yoga", "Pilates", "Aquatics", "Team Sports", "Boxing & Martial Arts", "Dance"]

function createGymClassCategories(categories) {

  let classCategoryStart = document.getElementById("placeholdergymclasscategorieslist")

  for (let i = 0; i <= 7; i++) {

    let gymClassCategory = document.createElement("div")
    let gymClassCategoryButton = document.createElement("a")
    let categoryName = categories[i]

    gymClassCategory.classList.add("col")
    gymClassCategory.classList.add("s1.5")
    gymClassCategoryButton.classList.add("waves-effect")
    gymClassCategoryButton.classList.add("waves-light")
    gymClassCategoryButton.classList.add("btn-large")

    classCategoryStart.appendChild(gymClassCategory)
    gymClassCategory.appendChild(gymClassCategoryButton)

    gymClassCategoryButton.innerHTML = "<span id=category" + i + ">" + categories[i] + "</span>"

    gymClassCategoryButton.onclick = () => {
      changeGymClassTitleHeader(categoryName)
    }
  }

}
