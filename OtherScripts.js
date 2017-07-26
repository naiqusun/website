// "use strict"
//
//
// const gymClassCategories = ["Strength Training", "Conditioning", "Cycling", "Yoga", "Pilates", "Aquatics", "Team Sports", "Boxing and Martial Arts", "Dance"]
//
// function createGymClassCategories(categories) {
//
//   let classCategoryStart = document.getElementById(placeholdergymclasscategorieslist)
//
//   for (let i = 0; i < 6; i++) {
//
//     let gymClassCategory = document.createElement("div")
//     let gymClassCategoryButton = document.createElement("a")
//     let categoryName = categories[i]
//
//     gymClassCategory.classList.add("col")
//     gymClassCategory.classList.add("s2")
//     gymClassCategoryButton.classList.add("waves-effect")
//     gymClassCategoryButton.classList.add("waves-light")
//     gymClassCategoryButton.classList.add("btn-large")
//
//     classCategoryStart.appendChild(gymClassCategory)
//     gymClassCategory.appendChild(gymClassCategoryButton)
//
//     gymClassCategoryButton.innerHTML = "<span id=category" + i + ">" + category[i] + "</span>"
//
//     gymClassCategoryButton.onclick = () => {
//       changeGymClassTitleHeader(categoryName)
//     }
//   }
//
// }
