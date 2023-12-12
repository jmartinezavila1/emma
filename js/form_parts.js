document.addEventListener("DOMContentLoaded", function () {
const customerForm = document.getElementById("partsForm");

    customerForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Validación de campos
        const partID = document.getElementById("partsID").value;
        const partName = document.getElementById("partsName").value;
        const quantity = document.getElementById("quantity").value;
        const status = document.getElementById("status").value;
        const date = document.getElementById("date").value;
    
        message.style.display = 'block';
        setTimeout(function() {
            message.style.display = 'none'; 
          }, 5000); 
       
        // clean the form
        customerForm.reset();
    });
});

// Function to show the popup
const showButtons = document.querySelectorAll(".showPopup");
showButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        document.getElementById("overlay").style.display = "block";
        document.getElementById("popup").style.display = "block";
    });
});


// Function to close the popup
document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("popup").style.display = "none";
});
document.getElementById("closePopup2").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("popup").style.display = "none";
});
