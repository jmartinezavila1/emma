//new equipment dummy button start
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("equipmentForm");
    var fillFormButton = document.getElementById("fillFormButton");

    fillFormButton.addEventListener("click", function () {

        //fills text

        form.querySelector("#name").value = "Soft Grass Bag";
        form.querySelector("#description").value = "Durable and practical";
        form.querySelector("#model").value = "X350";
        form.querySelector("#serialNumber").value = "234QWERHJ778";

        //fills lists

        form.querySelector("#color").selectedIndex = 1
        form.querySelector("#manufacturer").selectedIndex = 1
        form.querySelector("#type").selectedIndex = 1
        form.querySelector("#warranty").selectedIndex = 1
    });
});
//new equipment dummy button end


//new customer/technician dummy button start 
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("customerForm");
    var fillFormButton = document.getElementById("fillFormButton");

    fillFormButton.addEventListener("click", function () {

        form.querySelector("#firstName").value = "Andrew";
        form.querySelector("#lastName").value = "Frans";
        form.querySelector("#email").value = "Andrew@gmail.com";
        form.querySelector("#phone").value = "(289)-929-8178";
        form.querySelector("#address").value = "Mountain Rd 12345";
        form.querySelector("#postalCode").value = "L2J3x3";

        form.querySelector("#province").selectedIndex = 1
        form.querySelector("#city").selectedIndex = 1
    });
});
//new customer/technician dummy button end 


//new repair dummy button start 

document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("customerForm");
    var fillFormButton = document.getElementById("fillFormButton");

    fillFormButton.addEventListener("click", function () {

        //form.querySelector("#date").

        form.querySelector("#error").value = "A brief description of the error";

        form.querySelector("#status").selectedIndex = 1
    });
});

//new repair dummy button end


//new job dummy button start

document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("repairlistedForm");
    var fillFormButton = document.getElementById("fillFormButton");

    fillFormButton.addEventListener("click", function () {

        //form.querySelector("#date").

        form.querySelector("#technician").selectedIndex = 1;

        form.querySelector("#description").value = "The deck parts have deck corrosion and rust"

        //needs date input
    });
});

//new job dummy button end

//new manufacturer dummy button 

document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("manufacturerForm");
    var fillFormButton = document.getElementById("fillFormButton");

    fillFormButton.addEventListener("click", function () {
        //form.querySelector("#companyName").value = "ford";
        form.querySelector("#firstName").value = "Andrew";
        form.querySelector("#lastName").value = "Frans";
        form.querySelector("#email").value = "Andrew@gmail.com";
        form.querySelector("#phone").value = "(289)-929-8178";
        form.querySelector("#address").value = "Mountain Rd 12345";
        form.querySelector("#postalCode").value = "L2J3x3";

        form.querySelector("#province").selectedIndex = 1
        form.querySelector("#city").selectedIndex = 1
    });
});