

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

$(".fuwafuwa1").on("click",function(){
  $(this).addClass("pukapuka");
  $(this).show(".fuwafuwa.pukapuka");
  });
