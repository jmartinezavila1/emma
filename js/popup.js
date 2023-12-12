// Function to show the popup
const showButtons = document.querySelectorAll(".showPopup");
showButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        document.getElementById("overlay").style.display = "block";
        document.getElementById("popup").style.display = "block";
    });
});

const showButtons2 = document.querySelectorAll(".showPopup2");
showButtons2.forEach(function(button) {
    button.addEventListener("click", function() {
        document.getElementById("overlay2").style.display = "block";
        document.getElementById("popup2").style.display = "block";
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



// Function to close the popup
document.getElementById("closePopupEdit").addEventListener("click", function() {
    document.getElementById("overlay2").style.display = "none";
    document.getElementById("popup2").style.display = "none";
});

document.getElementById("closePopupEdit2").addEventListener("click", function() {
    document.getElementById("overlay2").style.display = "none";
    document.getElementById("popup2").style.display = "none";
});




$(document).ready( function () {
    // Initialize DataTables on the table with id "customerTable"
    const dataTable = $('#customerTable').DataTable();

    // Add a search filter
    dataTable.columns().every(function () {
        const that = this;
        $('input', this.header()).on('keyup change', function () {
            if (that.search() !== this.value) {
                that
                    .search(this.value)
                    .draw();
            }
        });
    });

});

