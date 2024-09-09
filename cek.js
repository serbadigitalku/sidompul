

$(document).ready(function(){
    $('#submitCekKuota').click(function(){
      $.ajax({
          type:'GET',
          crossDomain: true,
          url: "https://apigw.kmsp-store.com/sidompul/v3/cek_kuota?msisdn=" + $('#msisdn').val() + "&isJSON=true",
          data:{},
          dataType:'JSON',
          'contentType': 'application/x-www-form-urlencoded',
          error:function(xhr, ajaxOptions, thrownError){
          //error
          $('#cover-spin').hide();
          toastr.error('Terjadi kesalahan. Silakan coba lagi!');
          },
          cache:false,
          beforeSend:function(request){
            request.setRequestHeader('Authorization', 'Basic c2lkb21wdWxhcGk6YXBpZ3drbXNw');
            request.setRequestHeader('X-API-Key', '4352ff7d-f4e6-48c6-89dd-21c811621b1c');
            request.setRequestHeader('X-App-Version', '3.0.0');
          //sebelum kirim
          $('#cover-spin').show(0);
          },
          success:function(s){
            //console.log(s);
  
            $('#cover-spin').hide();
  
            if(s['status'] == false)
            {
              toastr.error(s['message']);
              $('#hasilnya').html('');
              $('#hasilnya').html("<br>" + '<font style="color: red;"><b>' + s['data']['keteranganError'] + '</b></font>');
            }
  
            if(s['status'] == true)
            {
              toastr.success(s['message']);
              $('#hasilnya').html('');
              $('#hasilnya').html("<br>" + s['data']['hasil']);
            }
          }
        });
    });
  });
  
  $(document).on('keypress',function(e) {
    if(e.which == 13 && $("#msisdn").is(":focus"))
    {
      $.ajax({
          type:'GET',
          crossDomain: true,
          url: "https://apigw.kmsp-store.com/sidompul/v3/cek_kuota?msisdn=" + $('#msisdn').val() + "&isJSON=true",
          data:{},
          dataType:'JSON',
          'contentType': 'application/x-www-form-urlencoded',
          error:function(xhr, ajaxOptions, thrownError){
          //error
          $('#cover-spin').hide();
          toastr.error('Terjadi kesalahan. Silakan coba lagi!');
          },
          cache:false,
          beforeSend:function(request){
            request.setRequestHeader('Authorization', 'Basic c2lkb21wdWxhcGk6YXBpZ3drbXNw');
            request.setRequestHeader('X-API-Key', '4352ff7d-f4e6-48c6-89dd-21c811621b1c');
            request.setRequestHeader('X-App-Version', '3.0.0');
          //sebelum kirim
          $('#cover-spin').show(0);
          },
          success:function(s){
            //console.log(s);
  
            $('#cover-spin').hide();
  
            if(s['status'] == false)
            {
              toastr.error(s['message']);
              $('#hasilnya').html('');
              $('#hasilnya').html("<br>" + '<font style="color: red;"><b>' + s['data']['keteranganError'] + '</b></font>');
            }
  
            if(s['status'] == true)
            {
              toastr.success(s['message']);
              $('#hasilnya').html('');
              $('#hasilnya').html("<br>" + s['data']['hasil']);
            }
          }
        });
    }
  });