$(function(){
      var t=$('progress'),n=0,c=0;
      $('#start-button').click(function(){
          n=window.setInterval(function(){
                t.attr('value',c++);
              },100);
          }),
      $('#stop-button').click(function(){
            window.clearInterval(n);
          });
      $('#reset-button').click(function(){
            t.attr('value',c=0);
          });    
    });
