# Autoscroll

## 介绍：
基于原生JS的自动向上滚动插件，轻便，好用;

效果展示(移动端):https://humyfred.github.io/autoscroll/

## 使用：

### 1.列表加上id名：
```html
<div id="autoscroll">
     <div><a href="">1</a></div>
     <div><a href="">2</a></div>
     <div><a href="">3</a></div>
     <div><a href="">4</a></div>
     <div><a href="">5</a></div>
     <div><a href="">7</a></div>
     <div><a href="">8</a></div>
</div>
```
### 2.用div标签包裹该列表：
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
     </div>
</div>
```
### 3.API：
```html
    <script>

      var a = new Autoscroll({
          scrollId:'autoscroll',
          scrollIndex:0,
          fixHeight:'200px',
          stopable:true,
          speed:10
     });

   </script>
```   

### 4.API配置说明：
scrollId：列表id，

scrollIndex: 列表所在父容器的元素位置(不是节点位置，如果父容器内只有列表则可忽略该属性),

fixHeight:列表的高度，

stopable：当鼠标移动到列表容器之上是否停止，

speed：  滚动速度；

## License：
This content is released under the MIT License.
