/*------------------------JQuery function to check the amount field for two decimals------------------------*/
$('.two-decimals').change(function() {
	this.value = parseFloat(this.value).toFixed(2);
});

/*----------------------Edit transaction modal and fill the formfields with Json data-----------------------*/
function editTransaction(id) {
	$.ajax({
		url: `/edit_transaction/${id}`
	}).done(function(response) {
		console.log(response);
		let updateURL = `/update_transaction/${id}`;
		$('#editForm').attr('action', updateURL);
		$('#EditTransactionModal').modal('show');
	});
}

/*---------------------------Loading the libraries for the datepicker & DataTable---------------------------*/
$(document).ready(function() {
	var datepicker = flatpickr('#date', { dateFormat: 'j F, Y', inline: true });
	$('#table_id').DataTable({ lengthChange: false, responsive: true });
});
