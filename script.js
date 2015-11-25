var i=0;
var picture = 0;
var picture2 = 0;

$(document).ready(function() {
$("#menu_video").css("background", "#6afbff");

var pictures = ["#pic1", "#pic2" ,"#pic3" ];
$("#pic1").fadeIn();
$("#pic2").fadeOut();
$("#pic3").fadeOut();
var pictures2 = ["#pic1_2", "#pic2_2" ,"#pic3_2" ];
$("#pic1_2").fadeIn();
$("#pic2_2").fadeOut();
$("#pic3_2").fadeOut();

$("#move_left").click(function(){
$("#pic1").fadeOut();
$("#pic2").fadeOut();
$("#pic3").fadeOut();
i=i-1;
if (i<0) i=2;
else;
picture = pictures[i];
$(picture).fadeIn();
});

$("#move_right_2").click(function(){
$("#pic1_2").fadeOut();
$("#pic2_2").fadeOut();
$("#pic3_2").fadeOut();
i=i+1;
if (i>2) i=0;
else;
picture2 = pictures2[i];
$(picture2).fadeIn();
});

$("#move_left_2").click(function(){
$("#pic1_2").fadeOut();
$("#pic2_2").fadeOut();
$("#pic3_2").fadeOut();
i=i-1;
if (i<0) i=2;
else;
picture2 = pictures2[i];
$(picture2).fadeIn();
});

$("#move_right").click(function(){
$("#pic1").fadeOut();
$("#pic2").fadeOut();
$("#pic3").fadeOut();
i=i+1;
if (i>2) i=0;
else;
picture = pictures[i];
$(picture).fadeIn();
});

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y < 950) {
	   $("#menu_video").css("background", "#6afbff");
	   $("#menu_level").css("background", "#0481ab");
	   $("#menu_maps").css("background", "#0481ab");
	   $("#menu_notes").css("background", "#0481ab");	   
    }
	
	else if ((y > 950)&&(y<1450)) 
	{
	$("#menu_video").css("background", "#0481ab");
	   $("#menu_level").css("background", "#6afbff");
	   $("#menu_maps").css("background", "#0481ab");
	   $("#menu_notes").css("background", "#0481ab");
	}
	else if ((y > 1450)&&(y<2200)) 
	{
	$("#menu_video").css("background", "#0481ab");
	   $("#menu_level").css("background", "#0481ab");
	   $("#menu_maps").css("background", "#6afbff");
	   $("#menu_notes").css("background", "#0481ab");
	}
	else if ((y >2200)) 
	{
	$("#menu_video").css("background", "#0481ab");
	   $("#menu_level").css("background", "#0481ab");
	   $("#menu_maps").css("background", "#0481ab");
	   $("#menu_notes").css("background", "#6afbff");
	}
	  
});



$("#menu_video").click(function(){
$('html,body').animate({
          scrollTop:  $("#video_section").offset().top
		  }, 1000);
});

$("#menu_level").click(function(){
$('html,body').animate({
          scrollTop:  $("#level_section").offset().top
		  }, 1000);
});

$("#menu_maps").click(function(){
$('html,body').animate({
          scrollTop:  $("#maps_section").offset().top
		  }, 1000);
});

$("#menu_notes").click(function(){
$('html,body').animate({
          scrollTop:  $("#notes_section").offset().top
		  }, 1000);
});


$('#button_play').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
 
$('#button_play').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });

});