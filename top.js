var status = "false";
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100 && status == "false") {
        $('#topBtn').css('display', 'block');
        $('#topBtn').fadeTo(400, 1);
        status = "true";
    } else if(height <= 100 && status == "true") {
        $('#topBtn').fadeTo(400, 0, function() {
            $('#topBtn').css('display', 'none');
        });
        status = "false";
    }
});
$(document).ready(function() {
    $("#topBtn").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
     $('.col-6 img').on('click', function() {
            $('.modal-image').attr('src', $(this).attr('src'));
            $('#imgModal').modal('show');
        });
});