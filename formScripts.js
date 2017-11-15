$(document).ready(function () {
  $('body').on('hidden.bs.modal', '.modal', function () {
    $('video').trigger('pause');
  });

  $("#pressForm").on("submit", function(e) {
    var postData = $(this).serializeArray();
    var formURL = $(this).attr("action");
    $.ajax({
        url: formURL,
        type: "POST",
        data: postData,
        success: function(data, textStatus, jqXHR) {
          alert(data);
        },
        error: function(jqXHR, status, error) {
          console.log(status + ": " + error);
        }
    });
    e.preventDefault();
  });

  $("#contactForm").on("submit", function(e) {
    var postData = $(this).serializeArray();
    var formURL = $(this).attr("action");
    $.ajax({
        url: formURL,
        type: "POST",
        data: postData,
        success: function(data, textStatus, jqXHR) {
          alert(data);
        },
        error: function(jqXHR, status, error) {
          console.log(status + ": " + error);
        }
    });
    e.preventDefault();
  });

  $("#salesForm").on("submit", function(e) {
    var postData = $(this).serializeArray();
    var formURL = $(this).attr("action");
    $.ajax({
        url: formURL,
        type: "POST",
        data: postData,
        success: function(data, textStatus, jqXHR) {
          alert(data);
        },
        error: function(jqXHR, status, error) {
          console.log(status + ": " + error);
        }
    });
    e.preventDefault();
  });

  $("#keepMeUpdatedFooterForm").on("submit", function(e) {
    var postData = $(this).serializeArray();
    var formURL = $(this).attr("action");
    $.ajax({
        url: formURL,
        type: "POST",
        data: postData,
        success: function(data, textStatus, jqXHR) {
          alert(data);
        },
        error: function(jqXHR, status, error) {
          console.log(status + ": " + error);
        }
    });
    e.preventDefault();
  });

  $("#birdSalesForm").on("submit", function(e) {
    var postData = $(this).serializeArray();
    var formURL = $(this).attr("action");
    $.ajax({
        url: formURL,
        type: "POST",
        data: postData,
        success: function(data, textStatus, jqXHR) {
          alert(data);
        },
        error: function(jqXHR, status, error) {
          console.log(status + ": " + error);
        }
    });
    e.preventDefault();
  });

  $("#keepMeUpdatedTopForm").on("submit", function(e) {
    var postData = $(this).serializeArray();
    var formURL = $(this).attr("action");
    $.ajax({
        url: formURL,
        type: "POST",
        data: postData,
        success: function(data, textStatus, jqXHR) {
          alert(data);
        },
        error: function(jqXHR, status, error) {
          console.log(status + ": " + error);
        }
    });
    e.preventDefault();
  });
});
