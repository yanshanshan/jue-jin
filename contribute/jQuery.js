/**
 * Created by db on 16/8/19.
 */
;(function(){
  var $click =$('.click')
    $click.focus(function(){
        var $clickIndex = $click.index(this)
        console.log($clickIndex)
        $click.eq($clickIndex).addClass('click-blue')
    })
    $click.blur(function(){
     var $clickIndex = $click.index(this)
      $click.eq($clickIndex).removeClass('click-blue')
    })


})();

;(function(){

})();