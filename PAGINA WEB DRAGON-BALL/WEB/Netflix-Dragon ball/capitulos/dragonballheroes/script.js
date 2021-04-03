$(document).ready(function () {
    // When the DOM is ready, attach the event handler.
    $(document).keydown(function (e) {
        if (e.which >= 37 && e.which <= 40) moveCursor(e.which);
    });
});

function moveCursor(key){
  // console.log(key);
  if ((key == 37 /* left */ || key == 39 /* right */) && $('.active').parents('.horizontal-nav').length > 0) {
    var horizontalItemsContainer = $('.horizontal-nav');
    var horizontalItems = $('.horizontal-nav li');
    var activeItem = $('.active').parents('.horizontal-nav li');
    var activeItemIndex = horizontalItems.index( activeItem );
    var newIndex = ( key == 37 ) ? Math.max(0, activeItemIndex - 1) : Math.min(horizontalItems.length - 1, activeItemIndex + 1);
    var left = (newIndex * -9.5);
    $('.active').removeClass('active');
    horizontalItems.find('.pointer').removeClass('pointer');
    $( $(horizontalItems.get(newIndex)).find('.nav-item').get(0) ).addClass('active pointer');
    horizontalItemsContainer.css('transform', "translate("+left+"rem, 0)");
  } else if (key == 38 /* up */ || key == 40 /* down */) {
    var verticalItems = $('.vertical-nav > li');
    var activeItem = $('.active').parents('.vertical-nav > li');
    var activeItemIndex = verticalItems.index( activeItem );
    var newIndex = ( key == 38 ) ? Math.max(0, activeItemIndex - 1) : Math.min(verticalItems.length - 1, activeItemIndex + 1);
    $('.active').removeClass('active');
    $(verticalItems.get(newIndex)).find('.pointer').addClass('active');
  }
}


//      transform: translate(-20px, 0);