document.addEventListener("DOMContentLoaded", function () {
    const customerForm = document.getElementById("customerForm");

    customerForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Validación de campos
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const address = document.getElementById("address").value;
        const postalCode = document.getElementById("postalCode").value;
        const province = document.getElementById("province").value;
        const city = document.getElementById("city").value;

        
        const confirmed = window.confirm('Customer successfully saved! To add Equipment press OK or Cancel to do it later.');
    
		if (confirmed) {
			// Si el usuario hace clic en "Aceptar", redirige a new_equipment.html
			window.location.href = 'new_equipment.html';
		  } else {
			window.location.href = 'customer.html';
		  }
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






  