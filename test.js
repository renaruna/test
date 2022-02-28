var times = 0;
var $home = $('.rpt');

function repeater(){
    times++;
    if(times % 2 !== 0) {
         $home.animate({'marginLeft':'0'},500); 
    } else {
         $home.animate({'marginLeft':'100px'},500);
    }
}
