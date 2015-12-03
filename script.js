var i=0;
var picture = 0;
var picture2 = 0;

$(document).ready(function() {
$("#menu_video").css("background", "#6afbff");

var pictures = ["#pic1", "#pic2" ,"#pic3","#pic4", "#pic5" ,"#pic6", "#pic7", "#pic8" ,"#pic9","#pic10" ];
var stats1=[40, 66.9, 94.6, 87.5,87.7,10,32,94.3 ];

$("#pic1").fadeIn();
$("#stat1").animate({
           width: '+='+stats1[0]+'px'
       });
$("#pic2").fadeOut();
$("#pic3").fadeOut();
$("#pic4").fadeOut();
$("#pic5").fadeOut();
$("#pic6").fadeOut();
$("#pic7").fadeOut();
$("#pic8").fadeOut();
$("#pic9").fadeOut();
$("#pic10").fadeOut();

$("#move_left").click(function(){
$("#pic1").fadeOut();
$("#pic2").fadeOut();
$("#pic3").fadeOut();
$("#pic4").fadeOut();
$("#pic5").fadeOut();
$("#pic6").fadeOut();
$("#pic7").fadeOut();
$("#pic8").fadeOut();
$("#pic9").fadeOut();
$("#pic10").fadeOut();
i=i-1;
if (i<0) i=9;
else;
picture = pictures[i];
$(picture).fadeIn();
});

$("#move_right").click(function(){
$("#pic1").fadeOut();
$("#pic2").fadeOut();
$("#pic3").fadeOut();
$("#pic4").fadeOut();
$("#pic5").fadeOut();
$("#pic6").fadeOut();
$("#pic7").fadeOut();
$("#pic8").fadeOut();
$("#pic9").fadeOut();
$("#pic10").fadeOut();
i=i+1;
if (i>9) i=0;
else;
picture = pictures[i];
$(picture).fadeIn();
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