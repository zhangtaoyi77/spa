$(function(){
      var r=$("#rectangle-width"),n=$("#rectangle-height");
      function c(e,t){
        return Math.round(e*Math.pow(10,t))/Math.pow(10,t)
      }
      function h(e){
        var t=$(e),a=$(e+"-validate"),l=$(e).attr("data-label");
        return ""===t.val()?(a.html(l+"不能为空！")),
        t.select(),
          !1) : /^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(t.val()) ? window.Number(t.val()) < 0 ? (a.html(l + "必须大于零"),
              t.select(),
                  !1) : (a.html(""),
                        !0) : (a.html(l + "必须是数值"),
                                t.select(),
                                        !1)
      }
      $("#rectangle-calc").click(function() {
          if (h("#rectangle-width") && h("#rectangle-height")) {
              var e = Number(r.val())
                , t = Number(n.val())
                  , a = c(2 * e + 2 * t, 2)
                    , l = c(e * t, 2);
                    $("#rectangle-perimeter").val(a),
                      $("#rectangle-area").val(l)

                        
          }


          })
    });
