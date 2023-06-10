

$("h1").on("click", function () {
  $(".omikuji_kekka").fadeIn();
  $("#sound1").get(0).play();
  $(".close_btn").fadeIn();

  const random = Math.floor(Math.random() * 5);

  if (random === 0){
    console.log("大吉です");
    $(".omikuji_kekka").html("<img src='img/daikichi.png'>");
  }else if (random === 1){
    console.log("中吉です");
    $(".omikuji_kekka").html("<img src='img/chukichi.png'>");
  }else if (random === 2){
    console.log("吉です");
    $(".omikuji_kekka").html("<img src='img/kichi.png'>");
  }else if (random === 3){
    console.log("小吉です");
    $(".omikuji_kekka").html("<img src='img/chokichi.png'>");
  }else if (random === 4){
    console.log("末です");
    $(".omikuji_kekka").html("<img src='img/suekichi.png'>");
   
  }
});

$(".close_btn").on("click",function(){
  $(".omikuji_kekka").fadeOut();
  $(".close_btn").fadeOut();
})

$(".btn1").on("click",function(){
  $(".header_list").slideToggle(1000);
  $(".btn1").fadeOut(1000);
  $(".btn2").fadeIn(1000);
})
$(".btn2").on("click",function(){
  $(".header_list").slideToggle(1000);
  $(".btn2").fadeOut(1000);
  $(".btn1").fadeIn(1000);
})

$(".twitter_img").on("click",function(){
  $(this).addClass("twt");
  $(".twitter_text").css("display","block");
})

$(".twitter_img").on("mouseout",function(){
  $(this).removeClass("twt");
  $(".twitter_text").css("display","none");
})


$(".instagram_img").on("click",function(){
  $(this).addClass("inst");
  $(".instagram_text").css("display","block");
})

$(".instagram_img").on("mouseout",function(){
  $(this).removeClass("inst");
  $(".instagram_text").css("display","none");
})


$(".line_img").on("click",function(){
  $(this).addClass("lin");
  $(".line_text").css("display","block");
})

$(".line_img").on("mouseout",function(){
  $(this).removeClass("lin");
  $(".line_text").css("display","none");
})


$(".facebook_img").on("click",function(){
  $(this).addClass("fb");
  $(".facebook_text").css("display","block");
})

$(".facebook_img").on("mouseout",function(){
  $(this).removeClass("fb");
  $(".facebook_text").css("display","none");
})