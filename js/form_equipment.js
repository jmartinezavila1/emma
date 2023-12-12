document.addEventListener("DOMContentLoaded", function () {
    const customerForm = document.getElementById("equipmentForm");

    customerForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Validación de campos
        const name = document.getElementById("name").value;
        const model = document.getElementById("model").value;
        const serialNumber = document.getElementById("serialNumber").value;
        const description = document.getElementById("description").value;
        const color = document.getElementById("color").value;
        const manufacturer = document.getElementById("manufacturer").value;
        const type = document.getElementById("type").value;
    
        const confirmed = window.confirm('Equipment successfully saved! To add Repair press OK or Cancel to do it later.');
    
		if (confirmed) {
			// Si el usuario hace clic en "Aceptar", redirige a new_equipment.html
			window.location.href = 'new_repairs.html';
		  } else {
			window.location.href = 'customer.html';
		  }
        // clean the form
        customerForm.reset();
        /*message.style.display = 'block';
        setTimeout(function() {
            message.style.display = 'none'; 
          }, 5000); 
       
        // clean the form
        customerForm.reset();*/
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

// Function to show the popup
const showButtons2 = document.querySelectorAll(".showPopup3");
showButtons2.forEach(function(button) {
    button.addEventListener("click", function() {
        document.getElementById("overlay3").style.display = "block";
        document.getElementById("popup3").style.display = "block";
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


document.getElementById("closePopup3").addEventListener("click", function() {
    document.getElementById("overlay3").style.display = "none";
    document.getElementById("popup3").style.display = "none";
});


document.getElementById("closePopup4").addEventListener("click", function() {
    document.getElementById("overlay3").style.display = "none";
    document.getElementById("popup3").style.display = "none";
});

