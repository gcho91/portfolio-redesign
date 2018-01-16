

//get ALL modals
var modal = [...document.querySelectorAll(".modal-content")];
console.log(modal)

//get ALL buttons
var btn = [...document.querySelectorAll(".article-img")]
console.log(btn)




// When the user clicks the button, open the modal
// btn.onclick = function() {
//     modal.style.display = "block";
//     console.log("herro")
// }


btn.map((x,i) => {
  x.addEventListener('click', () => {
    console.log(modal[0], "HERRO")
     modal[0].style.transformX = (100%)
  })
})

// // Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
//


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}








// var modalBtns = [...document.querySelectorAll(".button")];
// modalBtns.forEach(function(btn){
//   btn.onclick = function() {
//     var modal = btn.getAttribute('data-modal'); //"modalOne"
//     document.getElementById(modal).style.display = "block";
//   }
// });
//
// var closeBtns = [...document.querySelectorAll(".close")];
// closeBtns.forEach(function(btn){
//   btn.onclick = function() {
//     var modal = btn.closest('.modal');
//     modal.style.display = "none";
//   }
// });
//
// window.onclick = function(event) {
//   if (event.target.className === "modal") {
//     event.target.style.display = "none";
//   }
// }


































// ///////////Portfolio1///////////////
//
// // Get the modal
// var modal = document.getElementById('myModal');
//
// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");
//
// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
// var spanx = document.getElementsByClassName("close");
//
// console.log(span)
// console.log(spanx)
//
//
// // When the user clicks the button, open the modal
// btn.onclick = function() {
//     modal.style.display = "block";
// }
//
// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }
//
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
