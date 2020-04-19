/*----------------------Edit transaction modal and fill the formfields with Json data-----------------------*/

function editTransaction(id) {
	$.ajax({
		url: `/edit_transaction/${id}`
	}).done(function(response) {

    let data = JSON.parse(response)

    document.getElementById('demo1').value = data.transition;
    document.getElementById('editCategory').value = data.category_name;
    document.getElementById('editDescription').value = data.details;
    document.getElementById('editDate').value = data.date;
    document.getElementById('editAmount').value = data.amount;

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