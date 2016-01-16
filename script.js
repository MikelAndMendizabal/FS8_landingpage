var i=0;
var picture = 0;

$(document).ready(function() {
$("#menu_video").css("background", "#6afbff");

var pictures = ["pic1", "pic2" ,"pic3","pic4", "pic5" ,"pic6", "pic7", "pic8" ,"pic9"];
var weapon_names= {pic1: "AK-74M War Machine" , pic2:"AK-47 Human Fighter" ,pic3:"AR-57 Fighting Machine" ,pic4:"R93 Old Machine" , pic5:"L96A1 Human Warrior" ,pic6:"M16A4 Absolute Machine" , pic7:"MP5K Liquid Machine", pic8:"SVD Violet Machine" ,pic9:"GalilMAR Future Machine" };

var atk = {pic1: 40 , pic2:45 ,pic3:36 ,pic4:120.7 , pic5:126 ,pic6:39.3 , pic7:38 , pic8:101 ,pic9:38.9 };
var range = {pic1: 66.9 , pic2:68.7 ,pic3:36.2 ,pic4:87.5 , pic5:98.1 ,pic6:70.6 , pic7:47 , pic8:85.2 ,pic9:46 };
var acc = {pic1: 94.6 , pic2:89.9 ,pic3:81.8 ,pic4:91.4 , pic5:88.8 ,pic6:91.2 , pic7:81.5 , pic8:95.7 ,pic9:81.3 };
var autofireacc = {pic1: 87.5 , pic2:79.2 ,pic3:77.5 ,pic4:0 , pic5:0 ,pic6:82.3 , pic7:80.5 , pic8:83.8 ,pic9:70.2 };
var recoil = {pic1: 87.7 , pic2:83 ,pic3:93.2 ,pic4:79 , pic5:69.9 ,pic6:86.3 , pic7:89.3 , pic8:78.2 ,pic9:88.4 };
var autofire = {pic1: 10 , pic2:9.35 ,pic3:12.35 ,pic4:0.94 , pic5:0.91 ,pic6:10.99 , pic7:12.5 , pic8:2.38 ,pic9:12.5 };
var magcap = {pic1: 32 , pic2:32 ,pic3:54 ,pic4:6 , pic5:6 ,pic6:35 , pic7:32 , pic8:11 ,pic9:38 };
var mob = {pic1: 94.3 , pic2:93.5 ,pic3:90.8 ,pic4:95.5 , pic5:96.4 ,pic6:96.2 , pic7:93.6 , pic8:95.5 ,pic9:92.6 };

$("#p3_titel").text("AK-74M War Machine");

$("#pic1").fadeIn();

$("#stat1").animate({
           width: '+='+parseInt(atk["pic1"], 10)+'px'
       });
$("#stat1_value").text(atk["pic1"]);
$("#stat2").animate({
           width: '+='+parseInt(range["pic1"], 10)+'px'
       });
$("#stat2_value").text(range["pic1"]);
$("#stat3").animate({
           width: '+='+parseInt(acc["pic1"], 10)+'px'
       });
$("#stat3_value").text(acc["pic1"]);
$("#stat4").animate({
           width: '+='+parseInt(autofireacc["pic1"], 10)+'px'
       });
$("#stat4_value").text(autofireacc["pic1"]);
$("#stat5").animate({
           width: '+='+parseInt(recoil["pic1"], 10)+'px'
       });
$("#stat5_value").text(recoil["pic1"]);
$("#stat6").animate({
           width: '+='+parseInt(autofire["pic1"], 10)+'px'
       });
$("#stat6_value").text(autofire["pic1"]);
$("#stat7").animate({
           width: '+='+parseInt(magcap["pic1"], 10)+'px'
       });
$("#stat7_value").text(magcap["pic1"]);
$("#stat8").animate({
           width: '+='+parseInt(mob["pic1"], 10)+'px'
       }); 
$("#stat8_value").text(mob["pic1"]);

$("#pic2").fadeOut();
$("#pic3").fadeOut();
$("#pic4").fadeOut();
$("#pic5").fadeOut();
$("#pic6").fadeOut();
$("#pic7").fadeOut();
$("#pic8").fadeOut();
$("#pic9").fadeOut();

$("#move_left").click(function(){

$(".gallery_stat").css("width", "100px");
	
$("#pic1").fadeOut();
$("#pic2").fadeOut();
$("#pic3").fadeOut();
$("#pic4").fadeOut();
$("#pic5").fadeOut();
$("#pic6").fadeOut();
$("#pic7").fadeOut();
$("#pic8").fadeOut();
$("#pic9").fadeOut();
i=i-1;
if (i<0) i=8;
else;

picture = pictures[i];
$("#p3_titel").text(weapon_names[picture]);
$("#stat1").animate({
           width: '+='+parseInt(atk[picture], 10)+'px'
       });
$("#stat1_value").text(atk[picture]);

$("#stat2").animate({
           width: '+='+parseInt(range[picture], 10)+'px'
       });
$("#stat2_value").text(range[picture]);

$("#stat3").animate({
           width: '+='+parseInt(acc[picture], 10)+'px'
       });
$("#stat3_value").text(acc[picture]);

$("#stat4").animate({
           width: '+='+parseInt(autofireacc[picture], 10)+'px'
       });
$("#stat4_value").text(autofireacc[picture]);

$("#stat5").animate({
           width: '+='+parseInt(recoil[picture], 10)+'px'
       });
$("#stat5_value").text(recoil[picture]);

$("#stat6").animate({
           width: '+='+parseInt(autofire[picture], 10)+'px'
       });
$("#stat6_value").text(autofire[picture]);

$("#stat7").animate({
           width: '+='+parseInt(magcap[picture], 10)+'px'
       });
$("#stat7_value").text(magcap[picture]);

$("#stat8").animate({
           width: '+='+parseInt(mob[picture], 10)+'px'
       });
$("#stat8_value").text(mob[picture]);

 picture= "#"+picture;
$(picture).fadeIn();
}); 

$("#move_right").click(function(){
	
$(".gallery_stat").css("width", "100px");

$("#pic1").fadeOut();
$("#pic2").fadeOut();
$("#pic3").fadeOut();
$("#pic4").fadeOut();
$("#pic5").fadeOut();
$("#pic6").fadeOut();
$("#pic7").fadeOut();
$("#pic8").fadeOut();
$("#pic9").fadeOut();
i=i+1;
if (i>8) i=0;
else;
picture = pictures[i];
$("#p3_titel").text(weapon_names[picture]);
$("#stat1").animate({
           width: '+='+parseInt(atk[picture], 10)+'px'
       });
$("#stat1_value").text(atk[picture]);

$("#stat2").animate({
           width: '+='+parseInt(range[picture], 10)+'px'
       });
$("#stat2_value").text(range[picture]);

$("#stat3").animate({
           width: '+='+parseInt(acc[picture], 10)+'px'
       });
$("#stat3_value").text(acc[picture]);

$("#stat4").animate({
           width: '+='+parseInt(autofireacc[picture], 10)+'px'
       });
$("#stat4_value").text(autofireacc[picture]);

$("#stat5").animate({
           width: '+='+parseInt(recoil[picture], 10)+'px'
       });
$("#stat5_value").text(recoil[picture]);

$("#stat6").animate({
           width: '+='+parseInt(autofire[picture], 10)+'px'
       });
$("#stat6_value").text(autofire[picture]);

$("#stat7").animate({
           width: '+='+parseInt(magcap[picture], 10)+'px'
       });
$("#stat7_value").text(magcap[picture]);

$("#stat8").animate({
           width: '+='+parseInt(mob[picture], 10)+'px'
       });
$("#stat8_value").text(mob[picture]);

picture= "#"+picture;
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