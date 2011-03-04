// jquery.observe_field.js


(function( $ ){

  jQuery.fn.observe_field = function(frequency, callback) {

    return this.each(function(){
      var $this = $(this);
      var prev = $this.val();

      var check = function() {
        var val = $this.val();
        if(prev != val){
          prev = val;
          $this.map(callback); // invokes the callback on $this
        }
      };

      var reset = function() {
        if(ti){
          clearInterval(ti);
          ti = setInterval(check, frequency);
        }
      };

      check();
      frequency = frequency * 1000; // translate to milliseconds
      var ti = setInterval(check, frequency); // invoke check periodically

      // reset counter after user interaction
      $this.bind('keyup mousemove', reset); //mousemove is for selects
    });

  };

})( jQuery );

