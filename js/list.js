console.log("JS Ready")

var addListItem = function() {
	var text = $('input').value();
	console.log(text);
}
var listItem;


$(document).ready(function() {
	$('ul').on('click', 'span', function(e) {
    	$(e.target).parent().remove();
	});
	$('.submit').on('click', function() {
		var inputText = $('input').val();
		console.log(inputText);
		listItem = $('<li>');
		listItem.text(inputText);
		$('ul').append('<li>'+inputText+'<span> x </span></li>');
		$('input').val('');
	});
// 	$('.delete').on('click', function() {
// 		listItem.remove();
});
// 	});

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