// alert('hello world!');

// console.log('hellooooo');

// function changeMe() {
// 			document.getElementById('result') = ('hello world')
// 		}

// 		n

// var number1 = 10;
// var number2 = -1;
// var result = number1 + number2;

// console.log(result);

// var age = 9;

// var number = 100;

// if (number <10) {
// 	alert("your number + number + is less than 10")

// } else {
// 	alert("over 10")

// }


// function dosomeMath (x, y, z, a) {
// 	return x * y - z;
// }

// var result = dosomeMath(-2, 3, 100, 1)
// conesole.log(result)

$(document).ready(function() {




$(".box").click(function() {
	$(".box").animate({
		opacity: 0.5,
		width: 400,
		height: 400
	}, 2000);
}); 


 $("h1").fadeOut(1000, function() {
    $("h1").fadeIn(1000, function() {
    	 alert("Roof, Roof");
    });
  });
});



$(document).ready(function(){
    animateDiv();
    
});

function makeNewPosition(){
    
    
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = makeNewPosition();
    $('.a').animate({ top: newq[0], left: newq[1] }, function(){
      animateDiv();        
    });
    
};























