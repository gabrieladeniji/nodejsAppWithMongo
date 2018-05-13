$(function(){
  $(".submit").on('click', function(){
    var data = $("input:eq(0)").val();
    if(data.replace(/\s+/g,'') != ''){
      $.post('/', {data:data}, function(response){
        if(response == 'success'){
          // $("input:eq(0)").val('');
          location.reload();
        }
      });
    }
  });

  $(".ul-list li").on('click', function(){
    var value = $(this).text();
    $.ajax({
      type: 'DELETE',
      url: '/'+value,
      success: function(response){
        if(response == 'success'){
          location.reload();
        }
      }
    });
  });

});
