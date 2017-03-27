/* Autoscroll v1
 * By humyfred https://humyfred.github.io/Autoscroll
 * Github: https://github.com/humyfred/Autoscroll
 * MIT Licensed.
 */


;(function(){
	/*

	*/
	 function Autoscroll(options){
		this.scrollObj   = null;
		options          = options || {};
		this.scrollId    = options.scrollId;
		this.scrollIdx   = options.scrollIndex || 0;
		this.time        = options.speed || 40;
		//this.fixHeight = options.fixHeight|| '100px';
		this.stopable    = options.stopable;  //是否可停止滚动
		this.scrollCache = null;	//正在滚动的对象缓存
		this.stopCache   = null;  //停止滚动的对象缓存
		this.init();
	}

	Autoscroll.prototype = {
    consturctor:Autoscroll,
		init:function(){
			this.scrollObj = document.getElementById(this.scrollId);
			this.addScrollAction();
		},
		getFixHeight:function(){
			var objHeight = this.scrollObj.clientHeight;
			if(objHeight>380){
				return 380;
			}else{
				return objHeight;
			}
		},
		addScrollAction:function(){
			var self              = this;
			var parent            = this.scrollObj.parentNode;
			parent.style.height   = this.getFixHeight()+ 'px';
			parent.style.overflow = 'hidden';
			var clone             = self.cloneAndAppendParent(this.scrollObj,parent);

			if(self.stopable){		//注册鼠标事件
				self.stopToView()
			}

			var timer  = setTimeout(function(){
				self.toScroll();
			}, self.time);
			self.scrollCache = {
				obj  : this.scrollObj,
				clone: clone,
				timer: timer
			}

		},
		cloneAndAppendParent : function(obj,parent){
			var clone = obj.cloneNode(true);
			parent.appendChild(clone);
			return clone;
		},
		scrollToOrback :function(val){
			if(val.clone.offsetHeight-val.obj.parentNode.scrollTop<=0){
				val.obj.parentNode.scrollTop = 0;
			}else{
				val.obj.parentNode.scrollTop++;
			}
		},
		toScroll:function(){
			var self = this;
			var val  = self.scrollCache;
			clearTimeout(val.timer);
			if(!this.watchStopCahche()){	//看看是否有鼠标事件，把当前对象注册到停止滚动数组里
				this.scrollToOrback(val);

				val.timer = setTimeout(function(){
					self.toScroll();
				}, self.time);
			}

		},
		watchStopCahche:function(){
			if(this.stopCache!==null){
				return true;
			}
			return false;		//没有，继续滚动
		},
		stopToView : function(){
			var parent = this.scrollObj.parentNode;
			this.bindFn(parent,'mouseover',function(e){
				var target = e?e.currentTarget.children[this.scrollIdx]:event.srcElement.parentNode.parentNode;
				if(this.stopCache===null){
					this.stopCache = {obj:target};
				}
			});
			this.bindFn(parent,'mouseout',function(e){
				var target = e?e.currentTarget.children[this.scrollIdx]:event.srcElement.parentNode.parentNode;
				var self   = this;
				if(this.stopCache.obj===target){
					this.stopCache.timer = setTimeout(function(){
						self.toScroll();
					}, this.time);
					this.stopCache.clone = this.nextElement(target);
					this.scrollCache     = this.stopCache;
					this.stopCache       = null;
				}
			})
		},
		nextElement:function(obj){
			return obj.nextSibling.nextSibling;
		},
		bindFn:function(dom,type,fn){
			if(window.addEventListener){
				dom.addEventListener(type,fn.bind(this),false)
			}else if(window.attachEvent){
				dom.attachEvent('on'+type,fn.bind(this))
			}
		},
	}

  if (typeof module !== 'undefined' && typeof module.exports === 'object') {
    module.exports = Autoscroll;
  } else {
    window.Autoscroll = Autoscroll;
  }

})();
