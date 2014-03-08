jQuery(document).ready(function($) {
      $(".clickableRow").click(function() {
            window.document.location = $(this).data("url");
      });
});