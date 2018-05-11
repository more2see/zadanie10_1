var spanEven = $('span:even');
spanEven.each(function(index, element) {
	$(spanEven).css('color', 'red');
});
var paragraphs = $('p');
paragraphs.each(function(index, element) {
	var button = '<button class="btn" data-tmp="' + index + '">Click me</button>';
	$(element).append(button);
});
$('button').click(function() {
	alert($(this).attr('data-tmp'));
});

