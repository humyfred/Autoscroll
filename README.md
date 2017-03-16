# Autoscroll

## 介绍：
向上滚动插件...
基于原生JS编写的代码，轻便，好用


## 使用：

###1.只需在列表直属父容器加上id名：
```html
<div id="autoscroll">
          <div><a href="">1</a></div>
          <div><a href="">2</a></div>
          <div><a href="">3</a></div>
          <div><a href="">4</a></div>
          <div><a href="">5</a></div>
          <div><a href="">7</a></div>
          <div><a href="">8</a></div>
          <div><a href="">9</a></div>
          <div><a href="">0</a></div>
          <div><a href="">00</a></div>
          <div><a href="">--</a></div>
          <div><a href="">22</a></div>
          <div><a href="">44</a></div>
          <div><a href="">66</a></div>
          <div><a href="">55</a></div>
          <div><a href="">44</a></div>
          <div><a href="">33</a></div>
          <div><a href="">11</a></div>
          <div><a href="">22</a></div>
          <div><a href="">11</a></div>
</div>
```
###2.用div标签包裹该列表容器：
```html
<div>
<div id="autoscroll">
          <div><a href="">1</a></div>
          <div><a href="">2</a></div>
          <div><a href="">3</a></div>
          <div><a href="">4</a></div>
          <div><a href="">5</a></div>
          <div><a href="">7</a></div>
          <div><a href="">8</a></div>
          <div><a href="">9</a></div>
          <div><a href="">0</a></div>
          <div><a href="">00</a></div>
          <div><a href="">--</a></div>
          <div><a href="">22</a></div>
          <div><a href="">44</a></div>
          <div><a href="">66</a></div>
          <div><a href="">55</a></div>
          <div><a href="">44</a></div>
          <div><a href="">33</a></div>
          <div><a href="">11</a></div>
          <div><a href="">22</a></div>
          <div><a href="">11</a></div>
</div>
</div>
```
###3.引入autoscroll.js之后，在其后加一条js语句：
```html
    <script>
    
      var a = new autoscroll({scrollId:'autoscroll',scrollIndex:0,fixHeight:'200px',stopable:true,speed:10});

   </script>
```   
###4.结束


###5.属性配置解说：
scrollId：列表容器的id，

scrollIndex: 列表容器在父亲元素的元素位置(不是节点位置)，如果父亲元素内只有列表容器则可忽略该属性,

fixHeight:列表容器的父亲元素的高度，

stopable：当鼠标移动到列表容器之上是否停止，

speed：  滚动速度；



##License：
This content is released under the MIT License.



##结语：
若网友发现代码有bug或者有好的建议可以发邮件给我，谢谢！！


