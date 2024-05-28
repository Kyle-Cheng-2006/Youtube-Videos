var numClick = 0;
$("button").on("click",function(){
    numClick++;
    if(numClick == 1){
        blick();
        $("img").attr("src","Files/small.png");
        $("a").attr("href","https://youtu.be/hH4dJTdiqC4");
        $("a").text("Gifts From Fire");
    }
    else if(numClick == 2){
        blick();
        $("img").attr("src","Files/Thumbnail_1.png");
        $("a").attr("href","https://youtu.be/V-nCzH9CMJg");
        $("a").text("On Fire");
    }
    else if(numClick == 3){
        blick();
        $("img").attr("src","Files/FEAR.png");
        $("a").attr("href","https://youtu.be/5RPlN_wz74Q");
        $("a").text("Fear");
    }
    else{
        blick();
        $("img").attr("src","Files/Bananasmall.png");
        $("a").attr("href","https://youtu.be/cRjYdGzKS6I");
        $("a").text("LaGuardia Behind The Scenes");
        numClick = 0;
    }
})

    var blick = function(){
    // $("img").hide();
    $("h3").hide();
         $("h3").fadeIn(5000);
    // $("img").fadeIn(200,function(){
    //      $("h3").fadeIn(5000);
    // });
    }
  
    $("button").animate({
        width:"500px",
    }, 500);

    $("h1").animate({
        fontSize: "50px",
    }, 500)