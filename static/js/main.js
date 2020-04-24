/*----------------------Loading the libraries for the datepicker & DataTable----------------------*/

$(document).ready(function() {
  
  //Datepicker settings
  flatpickr('#date', { dateFormat: 'j F, Y', disableMobile: true });
  flatpickr('#editDate', { dateFormat: 'j F, Y', disableMobile: true });

  /*Work-around by user "qbolt" from the Flatpickr Github "Issues" page.
    It prevents manually edit the date field while setting readonly to false, allowing for default validation. */

  $('#date').on('focus', ({ currentTarget }) => $(currentTarget).blur())
  $("#date").prop('readonly', false)
  $('#editDate').on('focus', ({ currentTarget }) => $(currentTarget).blur())
  $("#editDate").prop('readonly', false)

  //DataTable settings
  var table = $('#transactionTable').DataTable({
    lengthChange: false,
    dom: 'lrtip',
    info: false,
    responsive: true,
    columns: [
      { responsivePriority: 1 },
      { responsivePriority: 2},
      { responsivePriority: 5 },
      { responsivePriority: 4 },
      { responsivePriority: 3 },
      { responsivePriority: 6 }
    ]
  });

  //DataTable search function
  $('#dataTableSearch').on('keyup', function() {
    table.search(this.value).draw();
  });
});

/*-------------Open the edit transaction modal and fill the formfields with Json data-------------*/

function editTransaction(id) {
  $.ajax({
    url: `/edit_transaction/${id}`
  }).done(function(response) {
    
    //Stringify to Json JavaScript object
    let data = JSON.parse(response);

    //Grab fields from Json data
    document.editForm.editTransition.value = data.transition;
    document.getElementById('editCategory').value = data.category_name;
    document.getElementById('editDescription').value = data.details;
    document.getElementById('editDate').value = data.date;
    document.getElementById('editAmount').value = data.amount;

    // transaction record ID link
    let updateURL = `/update_transaction/${id}`;
    $('#editForm').attr('action', updateURL);
    $('#editTransactionModal').modal('show');
  });
}

/*------------------Opens the "delete transaction modal" and finds the record ID------------------*/

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