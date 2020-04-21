/*-------------------Open the edit transaction modal and fill the formfields with Json data-------------------*/

function editTransaction(id) {
	$.ajax({
		url: `/edit_transaction/${id}`
	}).done(function(response) {
    
    //Json string to object
    let data = JSON.parse(response);

    //Grab edit fields from Json data
    document.editForm.editTransition.value = data.transition;             // Set transition radio value (on form name="editForm")
		document.getElementById('editCategory').value = data.category_name;   // Set category value
		document.getElementById('editDescription').value = data.details;      // Set description value
    document.getElementById('editDate').value = data.date;                // Set date value
		document.getElementById('editAmount').value = data.amount;            // Set amount value

    // transaction record ID link
		let updateURL = `/update_transaction/${id}`;
		$('#editForm').attr('action', updateURL);
		$('#editTransactionModal').modal('show');
	});
}

/*------------------------Opens the delete transaction modal and finds the record ID------------------------*/

function deleteTransaction(id) {
	$.ajax({
    url: `/edit_transaction/${id}`
	}).done(function(response) {

    // transaction record ID link   
    let updateURL = `/delete_transaction/${id}`;
		$('#deleteForm').attr('action', updateURL);
		$('#deleteTransactionModal').modal('show');
	});
}

/*---------------------------Loading the libraries for the datepicker & DataTable---------------------------*/

$(document).ready(function() {
  
  //Datepicker settings
  flatpickr('#date', { dateFormat: 'j F, Y', disableMobile: true });
  flatpickr('#editDate', { dateFormat: 'j F, Y', disableMobile: true });

  //DataTable settings
	var table = $('#transactionTable').DataTable({
		lengthChange: false,
    dom: 'lrtip',
    info: false,
		responsive: true,
		columns: [
			{ responsivePriority: 1 },
			{ responsivePriority: 5 },
			{ responsivePriority: 4 },
			{ responsivePriority: 2 },
			{ responsivePriority: 3 },
			{ responsivePriority: 6 }
		]
	});

  //DataTable search function
	$('#dataTableSearch').on('keyup', function() {
		table.search(this.value).draw();
	});
});
