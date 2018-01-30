/**
 * Created by asus on 2018/1/25.
 */
var $header=$(".header"),
    $main=$(".main"),
    $footer=$(".footer"),
    $container=$(".container"),
   musicAudio=$(".musicAudio")[0],
    $musicBtn=$header.find(".musicBtn"),
    $current=$footer.find(".current"),
    $duration=$footer.find(".duration"),
    $already=$footer.find(".alrdy"),
    $wrapper=$main.find(".wrapper")
musicAudio.play();
musicAudio.addEventListener("canplay",function () {
    $musicBtn.addClass("move")
});
//3.绑定触摸事件
$musicBtn.tap(function () {
    //paused:如果音乐停止的,那么是true
    if(musicAudio.paused){
        musicAudio.play();
        $musicBtn.addClass("move")
    }
    musicAudio.pause();
    $musicBtn.removeClass("move")
})
//绑定数据
var ary = [{minute:"00",second:"08",value:"一直地一直地往前走"},{minute:"00",second:"13",value:"疯狂的世界"},{minute:"00",second:"16",value:"迎着痛把眼中所有梦"},{minute:"00",second:"21",value:"都交给时间"},{minute:"00",second:"24",value:"想飞就用心地去飞"},{minute:"00",second:"26",value:"谁不经历狼狈"},{minute:"00",second:"31",value:"我想我会忽略失望的灰"},{minute:"00",second:"34",value:"拥抱遗憾的美"},{minute:"00",second:"39",value:"我的梦说别停留等待"},{minute:"00",second:"43",value:"就让光芒折射泪湿的瞳孔"},{minute:"00",second:"47",value:"映出心中最想拥有的彩虹"},{minute:"00",second:"51",value:"带我奔向那片有你的天空"},{minute:"00",second:"55",value:"因为你是我的梦"},{minute:"01",second:"07",value:"我的梦"},{minute:"01",second:"16",value:"执着地勇敢地不回头"},{minute:"01",second:"21",value:"穿过了黑夜踏过了边界"},{minute:"01",second:"24",value:"路过雨路过风往前冲"},{minute:"01",second:"28",value:"总会有一天站在你身边"},{minute:"01",second:"32",value:"泪就让它往下坠"},{minute:"01",second:"35",value:"溅起伤口的美"},{minute:"01",second:"39",value:"哦别以为失去的最宝贵"},{minute:"01",second:"43",value:"才让今天浪费"},{minute:"01",second:"47",value:"我的梦说别停留等待"},{minute:"01",second:"51",value:"就让光芒折射泪湿的瞳孔"},{minute:"01",second:"55",value:"映出心中最想拥有的彩虹"},{minute:"01",second:"59",value:"带我奔向那片有你的天空"},{minute:"02",second:"03",value:"因为你是我的梦"},{minute:"02",second:"11",value:"我的梦"},{minute:"02",second:"15",value:"我的梦"},{minute:"02",second:"19",value:"我的梦"},{minute:"02",second:"24",value:"世界会怎么变化"},{minute:"02",second:26,value:"都不是意外"},{minute:"02",second:"28",value:"记得用心去回答"},{minute:"02",second:"30",value:"命运的精彩"},{minute:"02",second:"32",value:"世界会怎么变化"},{minute:"02",second:"34",value:"都离不开爱"},{minute:"02",second:"36",value:"记得成长的对话"},{minute:"02",second:"39",value:"勇敢地说我不再等待"},{minute:"02",second:"45",value:"就让光芒折射泪湿的瞳孔"},{minute:"02",second:"49",value:"映出心中最想拥有的彩虹"},{minute:"02",second:"53",value:"带我奔向那片有你的天空"},{minute:"02",second:"57",value:"因为你是我的梦"},{minute:"03",second:"05",value:"我的梦"},{minute:"03",second:"09",value:"我的梦"},{minute:"03",second:"14",value:"因为你是我的梦"}];
var str=``;
for(var i=0;i<ary.length;i++){
    str+=`<p data-minute="${item.minute}">${item.value}</p>`
}
