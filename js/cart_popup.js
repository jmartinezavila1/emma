const showCartButtons = document.querySelectorAll(".show-cart-btn");

showCartButtons.forEach((button, index) => {
  button.addEventListener("click", function () {
    document.getElementById("cart-popup").style.display = "block";
  });
});
document
  .getElementById("close-cart-btn")
  .addEventListener("click", function () {
    document.getElementById("cart-popup").style.display = "none";
   
  });


const showCartButtons1 = document.querySelectorAll(".show-cart-btn1");

showCartButtons1.forEach((button, index) => {
  button.addEventListener("click", function () {
    document.getElementById("cart-popup1").style.display = "block";
  });
});
// document
//   .getElementById("close-cart-btn1")
//   .addEventListener("click", function () {
//     document.getElementById("cart-popup1").style.display = "none";
//   });

// to make the jobs Collapsible

function toggleJobDetails(jobId) {
  var content = document.getElementById(jobId);
  content.style.display = content.style.display === "block" ? "none" : "block";
}

function toggleJobDetails(jobId) {
  var content = document.getElementById(jobId);
  var icon = document.getElementById("icon-" + jobId);

  if (content.style.display === "block") {
    content.style.display = "none";
    icon.classList.remove("bi-caret-down");
    icon.classList.add("bi-caret-right");
  } else {
    content.style.display = "block";
    icon.classList.remove("bi-caret-right");
    icon.classList.add("bi-caret-down");
  }
}


// to make the lookup table Collapsible

function togglelookupDetails(customerId) {
    var content = document.getElementById(customerId);
    content.style.display = content.style.display === "block" ? "none" : "block";
  }
  
  function togglelookupDetails(customerId) {
    var content = document.getElementById(customerId);
    var icon = document.getElementById("icon-" + customerId);
  
    if (content.style.display === "block") {
      content.style.display = "none";
      icon.classList.remove("bi-caret-down");
      icon.classList.add("bi-caret-right");
    } else {
      content.style.display = "block";
      icon.classList.remove("bi-caret-right");
      icon.classList.add("bi-caret-down");
    }
  }

  
// to make the lookup table Collapsible
function togglelookupDetails(helpId) {
    var contents = document.getElementsByClassName("help-content");
    var icons = document.querySelectorAll("[id^='icon-']");
  
    for (var i = 0; i < contents.length; i++) {
        var content = contents[i];
        var icon = icons[i];
        
        if (content.id === helpId) {
            if (content.style.display === "block") {
                content.style.display = "none";
                icon.classList.remove("bi-caret-down");
                icon.classList.add("bi-caret-right");
            } else {
                content.style.display = "block";
                icon.classList.remove("bi-caret-right");
                icon.classList.add("bi-caret-down");
            }
        } else {
            content.style.display = "none";
            icon.classList.remove("bi-caret-down");
            icon.classList.add("bi-caret-right");
        }
    }
}

// function toggleHelpDetails(helpId) {
//     var content = document.getElementById(helpId);
//     content.style.display = content.style.display === "block" ? "none" : "block";
// }

//   function togglelookupDetails(helpId) {
//     var content = document.getElementById(helpId);
//     var icon = document.getElementById("icon-" + helpId);
//     if (content.style.display === "block") {
//         content.style.display = "none";
//         icon.classList.remove("bi-caret-down");
//         icon.classList.add("bi-caret-right");
//       } else {
//         content.style.display = "block";
//         icon.classList.remove("bi-caret-right");
//         icon.classList.add("bi-caret-down");
//       }
//   }