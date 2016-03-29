
/* function for tile effect on mouse hover*/

$(document).ready(function(){
$('.tiles').mouseenter(function(){
	$(this).css('background-color', '#967117');
	}),
$('.tiles').mouseleave(function(){
	$(this).css('background-color', '#ffb300');
	});
});




/* CODE FOR REFERNCE OF JQUERY FUNCTIONS


$(document).ready(function(){
	$('li:first-child').addClass('emphasis');
});

//this will make green only the first childlren gree
$('ul.emphasis').children('li').css('color', 'green');

// this will make all the li elements green
$('ul.emphasis').find('li').css('color', 'green');

//only first li element
$('ul.emphasis').children('li:first').css('color', 'red');
 // the next line is same as above lline
 $('ul.emphasis').children('li').first().css('color', 'red');

 //we can alos do like
 $('ul.emphasis li:first').css('color', 'red');


// to ad a text line
 $('ul.emphasis').children('li:first').text('fuck you');

 //next line is same as above
 $('ul.emphasis').children('li').eq(0).text('fuck you');
 
 // the ext phase is same as above line, this ismore readable with indentation
  $('ul.emphasis')
  	.children('li')
  		.eq(0)
  			.text('fuck you');

 //similar to children we have parent an removeclass
 $('li').parent().removeClass('emphasis');

 //paret will give the direct parent, parents will give all the parents. 'Closest'


//day and night button, we had to make separet stylesheet hence this could not work as expected
 $(document).ready(function(){
 	var name = $(this).text().toLowerCase();

 	$('button').click(function(){
 		$(this).addClass(name);
 		$(this).siblings('button').removeAttr('disabled');
 		$(this).attr('disabled', 'disabled');

 	});

 });


$(document).ready(function(){

	
	$('dd').filter(':nth-child(n+4)').hide();
	$('dt').on('mouseenter', function(){
		$(this).next().siblings('dd').slideUp(300);
		$(this).next().slideDown(200);
	});

});

//appending content to document
$(document).ready(function(){
	$('article').append("bonojur");
	$('article').prepend("bonojur");
	$('h1').after("bonojur");
	$('p').first().before("bonojur");
	$('<h2>extar string added</h2>').appendTo('article');
	$('<h2></h2>', {text: "hello once more" , class: 'name'}).appendTo('article');
	$('<h2></h2>', {text: "hello once more" , class: 'name'}).prependTo('article');
	$('<h2></h2>', {text: "hello once more" , class: 'name'}).insertAfter('h1 ');
}); 


// custom functions:
jQuery.fn.flash = function(speed, easing, callback){
	$(this).slideDown(1000);
	console.log('hi there');

}
$('div.content').hide();
$('h1').on('click', function(){
	$(this).next('div.content').flash();


});
*/