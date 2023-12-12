const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');
var cancel = document.getElementById("form");

const fields = {
	customer: false,
	equipment: false
	
}

form.addEventListener('submit', (e) => {
	e.preventDefault();

	if(fields.customer && fields.equipment){
		form.reset();

		document.getElementById('form_message-success').classList.add('form_message-success-active');
		setTimeout(() => {
			document.getElementById('form_message-success').classList.remove('form_message-success-active');
		}, 5000);

		document.querySelectorAll('.form_group-correct').forEach((icon) => {
			icon.classList.remove('form_group-correct');
		});
	} else {
		

		document.getElementById('form_message').classList.add('form_message-active');
		setTimeout(() => {
			document.getElementById('form_message').classList.remove('form_message-active');
		}, 5000);

		
	}
});

cancel.addEventListener("click", function() {
	
	form.reset();

	document.querySelectorAll('.form_group-correct').forEach((icon) => {
		icon.classList.remove('form_group-correct');
	});

	
  });
