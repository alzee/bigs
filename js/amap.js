/*
window.onLoad  = function(){
  var map = new AMap.Map('container');
  map.setMapStyle('darkblue');
}
var url = 'https://webapi.amap.com/maps?v=1.4.15&key=f194e59849288489c1710a796802b4f7&callback=onLoad';
var jsapi = document.createElement('script');
jsapi.charset = 'utf-8';
jsapi.src = url;
document.head.appendChild(jsapi);
*/

var map = new AMap.Map('container', {
  resizeEnable: true, //是否监控地图容器尺寸变化
  // mapStyle: "amap://styles/"
});
styleName = "amap://styles/08539321a17cd7c322f76950f2c68b3f"
map.setMapStyle(styleName);
