// to make the lookup table Collapsible

function toggleRepairDetails(jobId) {
    var content = document.getElementById(jobId);
    content.style.display = content.style.display === "block" ? "none" : "block";
  }
  
  function toggleRepairDetails(jobId) {
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