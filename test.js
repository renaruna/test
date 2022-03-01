$(function() {
   
    $('.front').click(function() {
        $('.front').hide();
        $('.back').show();
        $('.rpt').animate({'marginLeft':'380px'},500);
    });
    
    $('.back').click(function() {
        $('.back').hide();
        $('.front').show();
        $('.rpt').animate({'marginLeft':0},500);
    });
    
});
