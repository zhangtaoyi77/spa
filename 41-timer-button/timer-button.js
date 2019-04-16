$(function(){
  var n = 6;
    var $container = $('.main');
      
        var DOM = '<input type="button" class="timer-button" value="同意" disabled>';
          $container.html(DOM);
            
              /*
                var $timerBtn = $('<input type="button" value="同意" disabled>');
                  $container.append($timerBtn);
                    */
                      var $btnAgree = $container.find('.timer-button');
                      $btnAgree.css({
                          'font-size':'1.2em',
                              'width':'150px',
                                  'height':'60px'
                                    
                          });
                      var timer = window.setInterval(function(){
                          n--;
                          if(n == 0){
                                window.clearInterval(timer);
                                      $btnAgree.removeAttr('disabled');
                                            $btnAgree.val('同意');
                                                
                                            }else{
                                                  $btnAgree.val('同意('+n+'s)');
                                                      
                                            }
                                              
                          },1000);

                      $btnAgree.click(function(){
                          alert('SPA! 10-timer-button task!');
                            
                          });


    });
