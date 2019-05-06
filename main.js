//id,名前,色彩(Max10)彩度(Max10)輝度(Max10)に与える影響,色彩(Max360)彩度(Max100)輝度(Max100)の数値
var images = [
  {id:0, name:"さわやか", Ih:9,Is:7,Il:7, h:200,s:100,l:90},
  {id:1, name:"ポップ", Ih:0,Is:9,Il:8, h:50,s:100,l:55},
  {id:2, name:"明るい", Ih:0,Is:6,Il:9, h:50,s:100,l:90},
  {id:3, name:"若々しい", Ih:8,Is:4,Il:8, h:100,s:60,l:70},
  {id:4, name:"落ち着き", Ih:7,Is:7,Il:9, h:230,s:50,l:30},
  {id:5, name:"ロマンティック", Ih:5,Is:8,Il:8, h:340,s:100,l:90},
  {id:6, name:"エレガント", Ih:9,Is:4,Il:6, h:290,s:80,l:80}
];
var list = "";
for(var i=0,l=images.length;i<l;i++){
  list = list+'<input type="checkbox" id = "check_'+i+'"/><label for=check_'+i+' class="image">'+images[i].name+'</label>';
}
document.getElementById("image-list").innerHTML = list;
function teian(){
  var checkedImages = [];
  var n = 0;
  for(var i=0,l=images.length;i<l;i++){
    var checkbox = document.getElementById("check_"+i);
    if (checkbox.checked){
      checkedImages[n]=images[i];
      n++;
    }
  }
  //Javascriptわからんマンだから効率いい書き方がわからない。
  //同じような内容のコードをh,s,l分、計3こ書いてる。ダサいコードである。絶対もっといい感じになるのに。



  checkedImages.sort(function(a, b) {
    return (a.Ih > b.Ih) ? -1 : 1;
  });
  var h = checkedImages[0].h;
  for(var i=1,l=checkedImages.length;i<l;i++){
    var diff = h-checkedImages[i].h;
    var z = h-((diff/10)*checkedImages[i].Ih);
    h=(z+h)/2;
  }

  checkedImages.sort(function(a, b) {
    return (a.Is > b.Is) ? -1 : 1;
  });
  var s = checkedImages[0].s;
  for(var i=1,l=checkedImages.length;i<l;i++){
    var diff = s-checkedImages[i].s;
    z = s-((diff/10)*checkedImages[i].Is);
    s=(z+s)/2;
  }

  checkedImages.sort(function(a, b) {
    return (a.Il > b.Il) ? -1 : 1;
  });
  var eru= checkedImages[0].l;
  for(var i=1,l=checkedImages.length;i<l;i++){
    var diff = eru-checkedImages[i].l;
    z = eru-((diff/10)*checkedImages[i].Il);
    eru=(z+eru)/2;
  }
  document.getElementById("main-color").style.backgroundColor = "hsl("+h+","+s+"%,"+eru+"%)";
}
