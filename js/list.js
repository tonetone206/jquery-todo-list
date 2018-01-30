console.log("JS Ready")

var addListItem = function() {
	var text = $('input').value();
	console.log(text);
}

$(document).ready(function() {
$('.submit').on('click', function() {
	var inputText = $('input').val();
	console.log(inputText);
	var listItem = $('<li>');
	listItem.text(inputText);
	$('ul').append(listItem);
	$('input').val('');
});
$('.delete').on('click', function() {
$('li:last-child').remove();
});
});

// $('submit').click(function() {
// 	.append();
// 	alert("thanks for submitting")
// }

// $('delete').click(function() {
// 	e.remove
// }

 // $('.three').click(function(e) {
 //    e.stopPropagation();
 //    alert("Crime in Florida");