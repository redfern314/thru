jQuery(document).ready(function($) {
      $(".clickableRow").click(function() {
            window.document.location = $(this).data("url");
      });
      $.getJSON("https://api.findmespot.com/spot-main-web/consumer/rest-api/2.0/public/feed/00vRM7z8sReBrcimbsKNcUKffUhp0XHHQ/latest.json", function(data) {
          //data is the JSON string
          console.log(data);
      });
      // $("#SPOTLOC").text
});