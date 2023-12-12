// to make the lookup table Collapsible

function toggleRepairDetails(repairId) {
    var content = document.getElementById(repairId);
    content.style.display = content.style.display === "block" ? "none" : "block";
  }
  
  function toggleRepairDetails(repairId) {
    var content = document.getElementById(repairId);
    var icon = document.getElementById("icon-" + repairId);
  
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

  
