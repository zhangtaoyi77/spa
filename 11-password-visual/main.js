$(function(){
  var n=$("#pwd");
  var o=$(".pwd-text");
  var e=$("#eye");
  n.on("inpit",function(){
        o.val(n,val());
      }),
  e.mouseover(function(){
        o.css("z-index","10");
      }) ,
  e.mouseout(function(){
        o.css("z-index","-10")
     })
      
    });
