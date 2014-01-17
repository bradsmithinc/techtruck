jQuery(document).ready(function () {
  
  // Initialize tooltip plugin
  jQuery('a').tooltip();
  
  // Lava Lamp Menu Line   
  var $el, leftPos, newWidth;
  
  jQuery("#navigation").append("<li id='magic-line'></li>");
  
  var $magicLine = jQuery("#magic-line");
  
  $magicLine
  .width(jQuery(".active a").width())
  .css("left", $(".active a.level-one").position().left)
  .data("origLeft", $magicLine.position().left)
  .data("origWidth", $magicLine.width());
  
  jQuery("#navigation li a.level-one").hover(function() {
    $el = jQuery(this);
    leftPos = $el.position().left;
    newWidth = $el.parent().width();
    
    $magicLine.stop().animate({
      left: leftPos,
      width: newWidth
    });
  }, function () {
    $magicLine.stop().animate({
      left: $magicLine.data("origLeft"),
      width: $magicLine.data("origWidth")
    });    
  });  
});

jQuery(window).load(function() {
  
  // Iscroll
  (function(){
    var ua = navigator.userAgent,
        isMobileWebkit = /WebKit/.test(ua) && /Mobile/.test(ua);
    
    if (isMobileWebkit) {
      jQuery('html').addClass('mobile');
    }
    
    jQuery(function(){
      var iScrollInstance;
      
      if (isMobileWebkit) {
        iScrollInstance = new iScroll('wrapper', { snap: false, bounce: true, momentum: true });
        
        jQuery('a.goto').click ( function (e) {
          var id = $(this).attr('href');
          if (id.substr(0,1) == '#') {
            e.preventDefault();
            setTimeout( function() {
              iScrollInstance.scrollToElement ( id, 0 );
            }, 0);
            return false;
          } else {
            return true;
          }
        });
        
        
        jQuery('#scroller').stellar({
          scrollProperty: 'transform',
          positionProperty: 'transform',
          responsive: true,
          horizontalScrolling: false,
          verticalOffset: 0
        });
      } else {
        jQuery.stellar({
          horizontalScrolling: false,
          responsive: true,
          verticalOffset: 0
        });
      }
    });
  })();
  
});


// Smooth Goto Anchor
var $root = jQuery('html, body');
jQuery('a.goto').click(function() {
  $root.animate({
    scrollTop: jQuery( jQuery.attr(this, 'href') ).offset().top
  }, 900);
  return false;  
  
});

// Set Page Slides

jQuery(".feature-1, .feature-3, .first, .third, .fifth, .signup").pageslide({ speed: 600, direction: "left", modal: true });
jQuery(".feature-2, .second, .forth, .sixth").pageslide({ speed: 600, direction: "right", modal: true });

// Maps
// Values 51.505, -0.09 are Lattitude / Longitude of map center - change these to where you are! 
var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
}).addTo(map);
// Values 51.5, -0.09 are Lattitude / Longitude of the marker - change these to where you are! 
L.marker([51.5, -0.09]).addTo(map)
// Set the marker popup content below
.bindPopup("<p><b>Your Jazzy Company</b><br/>5 Jazz Street<br/>London WC3 456<br/>United Kingdom</p>").openPopup();      
var popup = L.popup();      
function onMapClick(e) {
  popup
  .setLatLng(e.latlng)
  .setContent("You clicked the map at " + e.latlng.toString())
  .openOn(map);
}
map.on('click', onMapClick); 

// Smooth Height For Testamonials

jQuery('#testamonials').bind('slide', function(e) {
  setTimeout(function () {
    var next_h = $(e.relatedTarget).outerHeight();
    jQuery('.carousel.testamonial').css('height', next_h);
  }, 10);
});

// Chart Data
var lineChartData = {
  
  labels : ["Week 1","Week 2","Week 3","Week 4","Week 5","Week 6","Week 7"],
  datasets : [
    {
      fillColor : "rgba(109,89,138,0.5)",
      strokeColor : "rgba(109,89,138,1)",
      pointColor : "rgba(109,89,138,1)",
      pointStrokeColor : "#fff",
      data : [65,59,90,81,56,55,40]
    },
    {
      fillColor : "rgba(242,120,105,0.5)",
      strokeColor : "rgba(242,120,105,1)",
      pointColor : "rgba(242,120,105,1)",
      pointStrokeColor : "#fff",
      data : [28,48,40,19,96,27,100]
    },
    {
      fillColor : "rgba(81,100,131,0.5)",
      strokeColor : "rgba(81,100,131,1)",
      pointColor : "rgba(81,100,131,1)",
      pointStrokeColor : "#fff",
      data : [34,64,30,9,60,35,24]
    }
  ]
  
}

var myLine = new Chart(document.getElementById("canvas").getContext("2d")).Line(lineChartData, {
  scaleOverride : true,
  scaleSteps : 5,
  scaleStepWidth : 20,
  scaleStartValue : 0,
  scaleFontFamily : "'OSPDIN', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  scaleFontSize : 20,
  scaleFontColor : "#999"
});	