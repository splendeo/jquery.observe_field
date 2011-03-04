// jquery.observe_field.js
//

jQuery.fn.observe_field = function(frequency, callback) {

  return this.each(function(){
    var $this = $(this);
    var prev = $this.val();

    var chk = function() {
      var val = $this.val();
      if(prev != val){
        prev = val;
        $this.map(callback); // invokes the callback on $this
      }
    };
    chk();
    frequency = frequency * 1000; // translate to milliseconds
    var ti = setInterval(chk, frequency);
    // reset counter after user interaction
    $this.bind('keyup', function() {
      ti && clearInterval(ti);
      ti = setInterval(chk, frequency);
    });
  });

};
