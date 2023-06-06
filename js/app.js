

$("h1").on("click", function () {
  $(".omikuji_kekka").html("あああ");

  const random = Math.floor(Math.random() * 5);

  if (random === 0){
    console.log("大吉です");
    $(".omikuji_kekka").html("大吉です");
    $(".omikuji_kekka").html("<img src='img/daikichi.webp'>");
  }else if (random === 1){
    console.log("中吉です");
    $(".omikuji_kekka").html("中吉です");
  }else if (random === 2){
    console.log("吉です");
    $(".omikuji_kekka").html("吉です");
  }else if (random === 3){
    console.log("小吉です");
    $(".omikuji_kekka").html("小吉です");
  }else if (random === 4){
    console.log("末です");
    $(".omikuji_kekka").html("末です");
  }
});