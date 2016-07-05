var clickWatch1 = 0;
var clickWatch2 = 0;
var clickWatch3 = 0;
$(document).ready(function () {



//Movie # 1. Activates on Button 2 click.
$(".movie1but").on('click', function () {
  clickWatch1 += parseInt($(this).attr("id"));

if(clickWatch1 == 1) {
  $("#movie1").remove();
$.get('http://www.omdbapi.com/?t=fast+and+the+furious&y=&plot=short&r=json')
.then(function(data){
  var movie = data.Title;
  var released = data.Year;
  var actors = data.Actors;
  var poster = data.Poster;
  $("#movie1div").append('<div id="movie1"></div>');
  $("#movie1").append('<ul class="#movie1ul"></ul>').append("<img src=\"" + poster + "\"/>")
  .append("<li>" + "<span>" + "Title " + "</span>"+ movie + "</li>")
  .append("<li>" + "<span>" + "Release Date " + "</span>" + released + "</li>")
  .append("<li>" + "<span>" + "Actors " + "</span>" + actors + "</li>");
    $("#movie1").hide();
    $("#movie1").slideDown("slow");
})
.catch(function() {
  console.log("Seems to be a problem");
}
);
}else {
  $("#movie1").slideUp();
  $("#movie1ul").empty();
  clickWatch1 = 0;
}
});


//Movie # 2. Activates on Button 2 click.
$(".movie2but").on('click', function () {
  clickWatch2 += parseInt($(this).attr("id"));


  if(clickWatch2 == 2) {
    $("#movie2").remove();
$.get('http://www.omdbapi.com/?t=road+house&y=&plot=short&r=json')
.then(function(data){
  var movie = data.Title;
  var released = data.Year;
  var actors = data.Actors;
  var poster = data.Poster;
  $("#movie2div").append('<div id="movie2"></div>');
  $("#movie2").append('<ul class="#movie2ul"></ul>').append("<img src=\"" + poster + "\"/>")
  .append("<li>" + "<span>" + "Title " + "</span>"+ movie + "</li>")
  .append("<li>" + "<span>" + "Release Date " + "</span>" + released + "</li>")
  .append("<li>" + "<span>" + "Actors " + "</span>" + actors + "</li>");
    $("#movie2").hide();
    $("#movie2").slideDown("slow");
})
.catch(function() {
  console.log("Seems to be a problem");
}
);
}else {
  $("#movie2").slideUp();
  $("#movie2ul").empty();
  clickWatch2 = 0;
}
});

//Movie # 3. Activates on Button 3 click.
$(".movie3but").on('click', function () {
  clickWatch3 += parseInt($(this).attr("id"));

if(clickWatch3 == 3) {
  $("#movie3").remove();
$.get('http://www.omdbapi.com/?t=The+other+guys&y=&plot=short&r=json')
.then(function(data){
  var movie = data.Title;
  var released = data.Year;
  var actors = data.Actors;
  var poster = data.Poster;
  $("#movie3div").append('<div id="movie3"></div>');
  $("#movie3").append('<ul class="#movie3ul"></ul>').append("<img src=\"" + poster + "\"/>")
  .append("<li>" + "<span>" + "Title " + "</span>"+ movie + "</li>")
  .append("<li>" + "<span>" + "Release Date " + "</span>" + released + "</li>")
  .append("<li>" + "<span>" + "Actors " + "</span>" + actors + "</li>");
    $("#movie3").hide();
    $("#movie3").slideDown("slow");
})
.catch(function() {
  console.log("Seems to be a problem");
}
);
}else {
  $("#movie3").slideUp();
  $("#movie3ul").empty();
  clickWatch3 = 0;
}
});


//Search Form
 $("#searchForm").on("submit", function(event) {
   $("#search1").remove();
   $("#search1ul").remove();
   $('#tryagain2').remove();
   event.preventDefault();

   var formInput2 = $("#movieSearch").val();
   console.log(formInput2.length);


   if(formInput2.length == 0) {
    $(".searchdiv").append("<h1 id='tryagain2'>Enter a movie title.</h1>");
    $("#tryagain2").hide();
    $("#tryagain2").slideDown("slow");
    $("#tryagain2").delay(1000).slideUp("slow");
  } else {
   var search = "http://www.omdbapi.com/?t=" + $("#movieSearch").val();
   $(".searchdiv").append("<h1 id='tryagain2'>Loading...</h1>");
   $("#tryagain2").hide();
   $("#tryagain2").slideDown();
   $("#tryagain2").delay(200).slideUp("slow");
   $.get(search)
   .then(function(data){
     var movie = data.Title;
     var released = data.Year;
     var actors = data.Actors;
     var poster = data.Poster;
     var genre = data.Genre;
     var runtime = data.Runtime;
     var plot = data.Plot;
     $("#displaysearch").append('<div id="search1"></div>');
     $("#search1").append('<ul class="#search1ul"></ul>').append("<img id='searchImg' src=\"" + poster + "\"/>")
     .append("<li id='searchli'>" + "<span>" + "Title " + "</span>"+ movie + "</li>")
     .append("<li id='searchli'>" + "<span>" + "Release Date " + "</span>" + released + "</li>")
     .append("<li id='searchli'>" + "<span>" + "Actors " + "</span>" + actors + "</li>").append("<li id='searchli'>" + "<span>" + "Genre " + "</span>" + genre + "</li>").append("<li id='searchli'>" + "<span>" + "Runtime " + "</span>" + runtime + "</li>").append("<li id='searchli'>" + "<span>" + "Plot " + "</span>" + plot + "</li>");
       $("#search1").hide();
       $("#search1").slideDown("slow");

   })
   .catch(function() {
     console.log("Seems to be a problem");
   }
 );
 }
});

$(".randombut").on("click", function() {
  $("#random1").remove();
  $("#random1ul").empty();
  $("#tryagain3").remove();
  var movieId = "" + Math.floor((Math.random() * (2155529 - 0000001) + 7));

  if(movieId.length < 7) {
    $(".header3").append("<h1 id='tryagain3'>Nothing Found, Try Agian</h1>");
    $("#tryagain3").hide();
    $("#tryagain3").slideDown("slow");
    $("#tryagain3").delay(800).slideUp("slow");
  } else {
    var movie = parseInt(movieId);
    var random = "http://www.omdbapi.com/?i=tt" + movie + "";
    $(".header3").append("<h1 id='tryagain3'>Loading...</h1>");
    $("#tryagain3").hide();
    $("#tryagain3").slideDown("slow");
    $("#tryagain3").delay(400).slideUp("slow");
$.get(random)
    .then(function(data){
      var movie = data.Title;
      var released = data.Year;
      var actors = data.Actors;
      var poster = data.Poster;
      var genre = data.Genre;
      var runtime = data.Runtime;
      var plot = data.Plot;

      $(".randomdiv").append('<div id="random1"></div>');
      $("#random1").append('<ul class="#random1ul"></ul>').append("<img id='searchImg' src=\"" + poster + "\"/>")
      .append("<li id='searchli'>" + "<span>" + "Title " + "</span>"+ movie + "</li>")
      .append("<li id='searchli'>" + "<span>" + "Release Date " + "</span>" + released + "</li>")
      .append("<li id='searchli'>" + "<span>" + "Actors " + "</span>" + actors + "</li>").append("<li id='searchli'>" + "<span>" + "Genre " + "</span>" + genre + "</li>").append("<li id='searchli'>" + "<span>" + "Runtime " + "</span>" + runtime + "</li>").append("<li id='searchli'>" + "<span>" + "Plot " + "</span>" + plot + "</li>");
      $("#random1").hide();
      $("#random1").slideDown("slow");
    })
    .catch(function() {
      console.log("Seems to be a problem");
    })
  };
  });




// Don't remove! Document Ready closing bracket
});
