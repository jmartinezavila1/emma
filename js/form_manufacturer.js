document.addEventListener("DOMContentLoaded", function () {
    const customerForm = document.getElementById("manufacturerForm");

    customerForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Validación de campos
        const companyName = document.getElementById("companyName").value;
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const address = document.getElementById("address").value;
        const postalCode = document.getElementById("postalCode").value;
        const province = document.getElementById("province").value;
        const city = document.getElementById("city").value;
    
        
        message.style.display = 'block';
        setTimeout(function() {
            message.style.display = 'none'; 
          }, 5000); 
        customerForm.reset();

        
    });
});