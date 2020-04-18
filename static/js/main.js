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