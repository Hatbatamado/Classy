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
          //$('#pressModal .modal-body').html(data);
          //$("#pressSubmit").remove();
          alert(data)
        },
        error: function(jqXHR, status, error) {
          console.log(status + ": " + error);
        }
    });
    e.preventDefault();
  });

  $("#pressSubmit").on('click', function() {
    $("#pressForm").submit();
  });
});
