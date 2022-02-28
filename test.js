var times = 0;
var $home = $('.rpt');

function repeater(){
    times++;
    if(times % 2 !== 0) {
         $home.animate({'marginRight':'0'},500); 
    } else {
         $home.animate({'marginRight':'380px'},500);
    }
}
