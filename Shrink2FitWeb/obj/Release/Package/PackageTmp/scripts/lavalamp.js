/**
 * Lava Lamp
 * http://lavalamp.magicmediamuse.com/
 *
 * Author
 * Richard Hung
 * http://www.magicmediamuse.com/
 *
 * Version
 * 1.0.3
 *
 * Copyright (c) 2013 Richard Hung.
 *
 * License
 * Lava Lamp by Richard Hung is licensed under a Creative Commons Attribution-NonCommercial 3.0 Unported License.
 * http://creativecommons.org/licenses/by-nc/3.0/deed.en_US
 */
(function(e){var t={init:function(t){var n={easing:"swing",duration:700,margins:false,setOnClick:false,activeObj:".active",autoUpdate:false,updateTime:100};var t=e.extend({},n,t);return this.each(function(){var n=t.easing;var r=t.duration;var i=t.margins;var s=t.setOnClick;var o=t.activeObj;var u=t.autoUpdate;var a=t.updateTime;var f=e(this);var l=f.children();var c=f.children(o);if(c.length==0){c=l.eq(0)}f.data({easing:n,duration:r,margins:i,setOnClick:s,active:c,isAnim:false});f.addClass("lavalamp").css({position:"relative"});var h=e('<div class="lavalamp-object" />').prependTo(f).css({position:"absolute"});l.addClass("lavalamp-item").css({zIndex:5,position:"relative"});var p=c.outerWidth(i);var d=c.outerHeight(i);var v=c.position().top;var m=c.position().left;var g=c.css("marginTop");var y=c.css("marginLeft");if(!i){y=parseInt(y);g=parseInt(g);m=m+y;v=v+g}h.css({width:p,height:d,top:v,left:m});var b=false;enter=function(){var t=e(this);b=true;f.lavalamp("anim",t)};leave=function(){b=false;c=f.data("active");f.lavalamp("anim",c)};f.on("mouseenter",".lavalamp-item",enter);f.on("mouseleave",".lavalamp-item",leave);if(s){e(l).click(function(){c=e(this);f.data("active",c)})}if(u){setInterval(function(){var e=f.data("isAnim");if(b==false&&e==false){f.lavalamp("update")}},a)}})},destroy:function(){return this.each(function(){var t=e(this);var n=t.children(".lavalamp-item");t.off("mouseenter",".lavalamp-item",enter);t.off("mouseleave",".lavalamp-item",leave);t.removeClass("lavalamp");n.removeClass("lavalamp-item");t.children(".lavalamp-object").remove();t.removeData()})},update:function(){return this.each(function(){var t=e(this);var n=t.children(":not(.lavalamp-object)");var r=t.data("active");var i=t.children("lavalamp-object");n.addClass("lavalamp-item").css({zIndex:5,position:"relative"});t.lavalamp("anim",r)})},anim:function(e){var t=this;var n=t.data("duration");var r=t.data("easing");var i=t.data("margins");var s=t.children(".lavalamp-object");var o=e.outerWidth(i);var u=e.outerHeight(i);var a=e.position().top;var f=e.position().left;var l=e.css("marginTop");var c=e.css("marginLeft");if(!i){c=parseInt(c);l=parseInt(l);f=f+c;a=a+l}t.data("isAnim",true);s.stop(true,false).animate({width:o,height:u,top:a,left:f},n,r,function(){t.data("isAnim",false)})}};e.fn.lavalamp=function(n){var r;var i;if(t[n]){return t[n].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof n==="object"||!n){return t.init.apply(this,arguments)}else{e.error("Method "+n+" does not exist on jQuery.lavalamp")}}})(jQuery)