includeHTML();

$(document).ready(function() {
    $(document).on('mousemove', function(e) {
        $('#cursor').css({
            left: e.pageX,
            top: e.pageY
        });
    })
});

function remove(el) {
  var element = el;
  element.remove();
}