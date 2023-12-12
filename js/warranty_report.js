
function warrantyExportReport() {
    // Obtiene los valores seleccionados por el usuario
var startDate = $('#StartDate').val();
var endDate = $('#EndDate').val();
var company = $('#company').val();

// Datos de ejemplo de garantías (puedes ajustarlos según tus necesidades)
var garantias = [
  { id: 1, descripcion: 'Garantía 1', cliente: 'Cliente A', fecha: '2023-01-01' },
  { id: 2, descripcion: 'Garantía 2', cliente: 'Cliente B', fecha: '2023-02-01' },
  // Agrega más garantías según sea necesario
];


var doc = new jsPDF();

  // Encabezado
  doc.setFontSize(14);
  doc.text("Emmas Small Engines", 10, 10);
  doc.text("warranty Report", 80, 20);
  doc.line(10, 22, 200, 22);
  doc.setFontSize(10);

  // Información del reporte
  doc.text("Date generated: " + getCurrentDate(), 10, 30);
  doc.text("Generated by: Emma", 10, 40);
  doc.text("Report date range: " + startDate + " - " + endDate, 10, 50);
  // Agregar el departamento de la persona que lo generó
  doc.text("Role: Admin" , 10, 60);
  doc.text("Company: "+ company, 10, 70);

  doc.autoTable({
    html: '#warrantyReportTablepdf',
    startY: 80,
    theme: 'grid',
    headStyles :{lineWidth: .5,fillColor: [26, 137, 241],textColor: [255,255,255],
    },
    columnStyles: {
        0: {
            halign: 'right',
            tableWidth: 500,
            },
        1: {
            tableWidth: 100,
           },
        2: {
            halign: 'right',
            tableWidth: 100,
           },
        3: {
            halign: 'right',
            tableWidth: 100,
           }
    },

})

doc.text("Total Warranties: 5", 150, 130);
doc.text("Average Duration: 80 HRS.", 150, 137);
doc.text("Customers Served: 5", 150, 144);
doc.text("Total Cost: $2150.00", 150, 151);



doc.save("Warranty_Report.pdf");
}
function getCurrentDate() {
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); // Enero es 0
var yyyy = today.getFullYear();
return dd + '/' + mm + '/' + yyyy;
}


document.addEventListener("DOMContentLoaded", function() {
    // Get the elements
    var repairReportLink = document.getElementById("home-tab");
    var RepairReportContainer = document.getElementById("RepairReportContainer");
    var ActivityReportContainer = document.getElementById("ActvityReportContainer");
  
    // Add a click event listener to the "Repair Report" link
    repairReportLink.addEventListener("click", function(event) {
      // Prevent the default behavior (navigation)
      event.preventDefault();
  
      // Hide the warranty report container
      RepairReportContainer.style.display = "none";
      ActivityReportContainer.style.display = "none";
    });
});