$(document).ready(function() {
    $('.delete-article').on('click', function(e) {
      const id = $(this).data('id');
      $.ajax({
        type: 'DELETE',
        url: '/articles/' + id,
        success: function(response) {
          console.log(response);
          window.location.href = '/';
        },
        error: function(err) {
          console.log(err);
        }
      });
    });
  });
  
  