$(document).ready(function() {

  // Start Countdown
  var endDate = "June 30, 2018 00:00:00";
  $('.countdown').countdown({
    date: endDate,
    render: function(data) {
      $(this.el).html(
        "<div class=\"countdown-item\">" + 
          this.leadingZeros(data.days, 3) + " <div class=\"countdown-text\">Days</div>"+
        "</div>"+
        "<div class=\"countdown-separator\">:</div>"+
        "<div class=\"countdown-item\">" + 
          this.leadingZeros(data.hours, 2) + " <div class=\"countdown-text\">Hours</div>"+
        "</div>"+
        "<div class=\"countdown-separator\">:</div>"+
        "<div class=\"countdown-item\">" + 
          this.leadingZeros(data.min, 2) + " <div class=\"countdown-text\">Minutes</div>"+
        "</div>"+
        "<div class=\"countdown-separator\">:</div>"+
        "<div class=\"countdown-item\">" + 
          this.leadingZeros(data.sec, 2) + " <div class=\"countdown-text\">Seconds</div>"+
        "</div>"
      );
    }
  });

});