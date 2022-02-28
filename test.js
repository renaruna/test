var times = 0;
function repeater(){
    times++;
    if(times % 2 !== 0) {
        $('.rpt').show();
    } else {
        $('.rpt').hide();
    }
}
