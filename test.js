var times = 0;
var $home = $('.rpt');

function repeater(){
    times++;
    if(times % 2 !== 0) {
         $home.animate({'width':'50px'},500); 
    } else {
         $home.animate({'width':'100px'},500);
    }
}
