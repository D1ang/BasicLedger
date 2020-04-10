/*------------------------JQuery function to check the amount field for two decimals------------------------*/

$('.two-decimals').change(function() {
	this.value = parseFloat(this.value).toFixed(2);
});
