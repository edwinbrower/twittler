$(document).ready(function(){
  var $section = $('section');
  $section.html('');
  var streamToRefresh = "home";

  
  function displayTweets(arrayOfTweets){
    var index = arrayOfTweets.length - 1;
    while(index >= 0){
      var tweet = arrayOfTweets[index];
      var user = "<span class = 'username'>" + "@" + tweet.user + "</span>";
      var $tweet = $("<div class = 'tweets'></div>"); 
      var $timestamp = $("<div class = 'timestamp'></div>")
      $tweet.html(user + ": " + tweet.message);
      $timestamp.text(tweet.created_at);
      $tweet.appendTo($section);
      $timestamp.appendTo($section);

      index--;
    }
  }

//this is a 1 line function in case the location is changed from section
  function removeTweets(){
    $section.html('');
  }

  displayTweets(streams.home);


  $(".home").on("click", function() {
    $(".pageTitle").text("Home");
    removeTweets();
    displayTweets(streams.home);
    streamToRefresh = "home"
  });

  $(".refresh").on("click", function() {
    $(".pageTitle").text(streamToRefresh);
    removeTweets();
    if (streamToRefresh === "home") displayTweets(streams.home);
    else displayTweets(streams.users[streamToRefresh]);
  }); 

 $section.on('click', '.username', function() {
    removeTweets();
    var userID = ($(this).text()).slice(1);
    for (var x in streams.users) {
      if (userID === x) {
        displayTweets(streams.users[x]);
        $(".pageTitle").text(x);
        streamToRefresh = x;
      }
    }
  });
}); 