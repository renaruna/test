var times = 0;
var rpt = document.getElementById("repeat-images");
var dftr = rpt.src;
function repeater(){
    times++;
    if(times % 2 !== 0) {
        rpt.src = rpt.dataset.secondImage;
    } else {
        rpt.src = dftr;
    }
}
