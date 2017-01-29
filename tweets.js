$(document).ready(function(){
  var $section = $('section');
  $section.html('');
  var streamToRefresh = "home";

  
  function displayTweets(arrayOfTweets){
    var index = arrayOfTweets.length - 1;
    while(index >= 0){
      var tweet = arrayOfTweets[index];
      var user = "<span class = 'username'>" + "@" + tweet.user + "</span>";

      //var $user = $("<span class = 'username'></span>");
      var $tweet = $("<div class = 'tweets'></div>"); 
      var $timestamp = $("<div class = 'timestamp'></div>")

      //$user.text("@" + tweet.user + ":");
      $tweet.html(user + ": " + tweet.message);
      //$tweet.html(tweet.message);
      $timestamp.text(tweet.created_at);

      //$user.appendTo($section);
      $tweet.appendTo($section);
      $timestamp.appendTo($section);

      index--;
    }
  }

//this is a 1 line function in case the location is changed from section
  function removeTweets(){
    /*$(".username").remove();
    $(".tweets").remove();
    $(".timestamp").remove();*/
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