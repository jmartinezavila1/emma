// to make the lookup table Collapsible

function toggleRepairDetails(cusEtuipId) {
    var content = document.getElementById(cusEtuipId);
    content.style.display = content.style.display === "block" ? "none" : "block";
  }
  
  function toggleRepairDetails(cusEtuipId) {
    var content = document.getElementById(cusEtuipId);
    var icon = document.getElementById("icon-" + cusEtuipId);
  
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