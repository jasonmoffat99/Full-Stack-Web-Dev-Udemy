// fucntion that hadnels the toggle of the h1 heading at the top of the page that applies to all the buttons

$("button").click(function(){
    $("h1").toggle()
});

// function that handles the heading change when entering a character into the serach bar

$("input").keypress(function(event){
    $("h1").text(event.key);
});

