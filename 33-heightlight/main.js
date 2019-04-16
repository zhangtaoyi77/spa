/*global */
$(function(){
  var $btnAddCode = $('input[type="button"]');
    
  $btnAddCode.click(function(){
      var $code = $('<div><pre class="javascript"></pre><button>删除</button></div><br/>');

          $code.find('pre').html($('.code').val());
          $code.find('button').click(function(i){
                $code[i].remove();
                    
              })
                  $('div.main').append($code);
                     
                         hljs.highlightBlock($code[0]);
                           
      })




    });
