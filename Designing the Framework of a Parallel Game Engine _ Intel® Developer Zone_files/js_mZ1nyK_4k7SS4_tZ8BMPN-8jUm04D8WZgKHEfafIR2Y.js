// ColorBox v1.3.19.3 - jQuery lightbox plugin
// (c) 2011 Jack Moore - jacklmoore.com
// License: http://www.opensource.org/licenses/mit-license.php
(function(b,C,ca){function c(a,h,c){a=C.createElement(a);h&&(a.id=n+h);c&&(a.style.cssText=c);return b(a)}function L(a){var b=j.length,a=(o+a)%b;return 0>a?b+a:a}function l(a,b){return Math.round((/%/.test(a)?("x"===b?g.width():g.height())/100:1)*parseInt(a,10))}function da(b){return a.photo||/\.(gif|png|jpe?g|bmp|ico)((#|\?).*)?$/i.test(b)}function ea(){var w,h=b.data(q,r);a=null==h?b.extend({},Q):b.extend({},h);for(w in a)b.isFunction(a[w])&&"on"!==w.slice(0,2)&&(a[w]=a[w].call(q));a.rel=a.rel||q.rel||"nofollow";a.href=a.href||b(q).attr("href");a.title=a.title||q.title;"string"===typeof a.href&&(a.href=b.trim(a.href))}function A(a,h){b.event.trigger(a);h&&h.call(q)}function ka(){var b,h=n+"Slideshow_",c="click."+n,d,p;a.slideshow&&j[1]?(d=function(){D.text(a.slideshowStop).unbind(c).bind(R,function(){if(a.loop||j[o+1])b=setTimeout(f.next,a.slideshowSpeed)}).bind(S,function(){clearTimeout(b)}).one(c+" "+M,p);i.removeClass(h+"off").addClass(h+"on");b=setTimeout(f.next,a.slideshowSpeed)},p=function(){clearTimeout(b);D.text(a.slideshowStart).unbind([R,S,M,c].join(" ")).one(c,function(){f.next();d()});i.removeClass(h+"on").addClass(h+"off")},a.slideshowAuto?d():p()):i.removeClass(h+"off "+h+"on")}function fa(c){if(!N){q=c;ea();j=b(q);o=0;"nofollow"!==a.rel&&(j=b("."+E).filter(function(){var c=b.data(this,r),w;c&&(w=c.rel||this.rel);return w===a.rel}),o=j.index(q),-1===o&&(j=j.add(q),o=j.length-1));if(!s){s=F=!0;i.show();if(a.returnFocus)b(q).blur().one(ga,function(){b(this).focus()});x.css({opacity:+a.opacity,cursor:a.overlayClose?"pointer":"auto"}).show();a.w=l(a.initialWidth,"x");a.h=l(a.initialHeight,"y");f.position();G&&g.bind("resize."+O+" scroll."+O,function(){x.css({width:g.width(),height:g.height(),top:g.scrollTop(),left:g.scrollLeft()})}).trigger("resize."+O);A(ha,a.onOpen);T.add(U).hide();V.html(a.close).show()}f.load(!0)}}function ia(){!i&&C.body&&(W=!1,g=b(ca),i=c(d).attr({id:r,"class":H?n+(G?"IE6":"IE"):""}).hide(),x=c(d,"Overlay",G?"position:absolute":"").hide(),B=c(d,"Wrapper"),t=c(d,"Content").append(m=c(d,"LoadedContent","width:0; height:0; overflow:hidden"),X=c(d,"LoadingOverlay").add(c(d,"LoadingGraphic")),U=c(d,"Title"),Y=c(d,"Current"),I=c(d,"Next"),J=c(d,"Previous"),D=c(d,"Slideshow").bind(ha,ka),V=c(d,"Close")),B.append(c(d).append(c(d,"TopLeft"),Z=c(d,"TopCenter"),c(d,"TopRight")),c(d,!1,"clear:left").append($=c(d,"MiddleLeft"),t,aa=c(d,"MiddleRight")),c(d,!1,"clear:left").append(c(d,"BottomLeft"),ba=c(d,"BottomCenter"),c(d,"BottomRight"))).find("div div").css({"float":"left"}),K=c(d,!1,"position:absolute; width:9999px; visibility:hidden; display:none"),T=I.add(J).add(Y).add(D),b(C.body).append(x,i.append(B,K)))}var Q={transition:"elastic",speed:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:0.9,preloading:!0,current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",open:!1,returnFocus:!0,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0},r="colorbox",n="cbox",E=n+"Element",ha=n+"_open",S=n+"_load",R=n+"_complete",M=n+"_cleanup",ga=n+"_closed",P=n+"_purge",H=!b.support.opacity&&!b.support.style,G=H&&!ca.XMLHttpRequest,O=n+"_IE6",x,i,B,t,Z,$,aa,ba,j,g,m,K,X,U,Y,D,I,J,V,T,a,y,z,u,v,q,o,e,s,F,N,ja,f,d="div",W;b.colorbox||(b(ia),f=b.fn[r]=b[r]=function(c,d){var e=this,c=c||{};ia();var k;i?(W||(W=!0,y=Z.height()+ba.height()+t.outerHeight(!0)-t.height(),z=$.width()+aa.width()+t.outerWidth(!0)-t.width(),u=m.outerHeight(!0),v=m.outerWidth(!0),i.css({"padding-bottom":y,"padding-right":z}),I.click(function(){f.next()}),J.click(function(){f.prev()}),V.click(function(){f.close()}),x.click(function(){a.overlayClose&&f.close()}),b(C).bind("keydown."+n,function(b){var c=b.keyCode;s&&(a.escKey&&27===c)&&(b.preventDefault(),f.close());s&&(a.arrowKey&&j[1])&&(37===c?(b.preventDefault(),J.click()):39===c&&(b.preventDefault(),I.click()))}),b("."+E,C).live("click",function(a){1<a.which||(a.shiftKey||a.altKey||a.metaKey)||(a.preventDefault(),fa(this))})),k=!0):k=!1;if(k){if(!e[0]){if(e.selector)return e;e=b("<a/>");c.open=!0}d&&(c.onComplete=d);e.each(function(){b.data(this,r,b.extend({},b.data(this,r)||Q,c))}).addClass(E);(b.isFunction(c.open)&&c.open.call(e)||c.open)&&fa(e[0])}return e},f.position=function(b,c){function d(a){Z[0].style.width=ba[0].style.width=t[0].style.width=a.style.width;t[0].style.height=$[0].style.height=aa[0].style.height=a.style.height}var e=0,p=0,j=i.offset(),m,o;g.unbind("resize."+n);i.css({top:-9E4,left:-9E4});m=g.scrollTop();o=g.scrollLeft();a.fixed&&!G?(j.top-=m,j.left-=o,i.css({position:"fixed"})):(e=m,p=o,i.css({position:"absolute"}));p=!1!==a.right?p+Math.max(g.width()-a.w-v-z-l(a.right,"x"),0):!1!==a.left?p+l(a.left,"x"):p+Math.round(Math.max(g.width()-a.w-v-z,0)/2);e=!1!==a.bottom?e+Math.max(g.height()-a.h-u-y-l(a.bottom,"y"),0):!1!==a.top?e+l(a.top,"y"):e+Math.round(Math.max(g.height()-a.h-u-y,0)/2);i.css({top:j.top,left:j.left});b=i.width()===a.w+v&&i.height()===a.h+u?0:b||0;B[0].style.width=B[0].style.height="9999px";i.dequeue().animate({width:a.w+v,height:a.h+u,top:e,left:p},{duration:b,complete:function(){d(this);F=false;B[0].style.width=a.w+v+z+"px";B[0].style.height=a.h+u+y+"px";a.reposition&&setTimeout(function(){g.bind("resize."+n,f.position)},1);c&&c()},step:function(){d(this)}})},f.resize=function(b){s&&(b=b||{},b.width&&(a.w=l(b.width,"x")-v-z),b.innerWidth&&(a.w=l(b.innerWidth,"x")),m.css({width:a.w}),b.height&&(a.h=l(b.height,"y")-u-y),b.innerHeight&&(a.h=l(b.innerHeight,"y")),!b.innerHeight&&!b.height&&(m.css({height:"auto"}),a.h=m.height()),m.css({height:a.h}),f.position("none"===a.transition?0:a.speed))},f.prep=function(g){function h(){a.w=a.w||m.width();a.w=a.mw&&a.mw<a.w?a.mw:a.w;return a.w}function l(){a.h=a.h||m.height();a.h=a.mh&&a.mh<a.h?a.mh:a.h;return a.h}if(s){var k,p="none"===a.transition?0:a.speed;m.remove();m=c(d,"LoadedContent").append(g);m.hide().appendTo(K.show()).css({width:h(),overflow:a.scrolling?"auto":"hidden"}).css({height:l()}).prependTo(t);K.hide();b(e).css({"float":"none"});if(G)b("select").not(i.find("select")).filter(function(){return"hidden"!==this.style.visibility}).css({visibility:"hidden"}).one(M,function(){this.style.visibility="inherit"});k=function(){function d(){H&&i[0].style.removeAttribute("filter")}var f,h;f=j.length;var g,l,k;if(s){l=function(){clearTimeout(ja);X.hide();A(R,a.onComplete)};H&&e&&m.fadeIn(100);U.html(a.title).add(m).show();if(1<f){if("string"===typeof a.current&&Y.html(a.current.replace("{current}",o+1).replace("{total}",f)).show(),I[a.loop||o<f-1?"show":"hide"]().html(a.next),J[a.loop||o?"show":"hide"]().html(a.previous),a.slideshow&&D.show(),a.preloading)for(f=[L(-1),L(1)];h=j[f.pop()];)if((k=b.data(h,r))&&k.href?(k=k.href,b.isFunction(k)&&(k=k.call(h))):k=h.href,da(k))h=new Image,h.src=k}else T.hide();if(a.iframe){g=c("iframe")[0];"frameBorder"in g&&(g.frameBorder=0);"allowTransparency"in g&&(g.allowTransparency="true");g.name=n+ +new Date;if(a.fastIframe)l();else b(g).one("load",l);g.src=a.href;a.scrolling||(g.scrolling="no");b(g).addClass(n+"Iframe").appendTo(m).one(P,function(){g.src="//about:blank"})}else l();"fade"===a.transition?i.fadeTo(p,1,d):d()}};"fade"===a.transition?i.fadeTo(p,0,function(){f.position(0,k)}):f.position(p,k)}},f.load=function(g){var h,i,k=f.prep;F=!0;e=!1;q=j[o];g||ea();A(P);A(S,a.onLoad);a.h=a.height?l(a.height,"y")-u-y:a.innerHeight&&l(a.innerHeight,"y");a.w=a.width?l(a.width,"x")-v-z:a.innerWidth&&l(a.innerWidth,"x");a.mw=a.w;a.mh=a.h;a.maxWidth&&(a.mw=l(a.maxWidth,"x")-v-z,a.mw=a.w&&a.w<a.mw?a.w:a.mw);a.maxHeight&&(a.mh=l(a.maxHeight,"y")-u-y,a.mh=a.h&&a.h<a.mh?a.h:a.mh);h=a.href;ja=setTimeout(function(){X.show()},100);a.inline?(c(d).hide().insertBefore(b(h)[0]).one(P,function(){b(this).replaceWith(m.children())}),k(b(h))):a.iframe?k(" "):a.html?k(a.html):da(h)?(b(e=new Image).addClass(n+"Photo").error(function(){a.title=false;k(c(d,"Error").html(a.imgError))}).load(function(){var b;e.onload=null;if(a.scalePhotos){i=function(){e.height=e.height-e.height*b;e.width=e.width-e.width*b};if(a.mw&&e.width>a.mw){b=(e.width-a.mw)/e.width;i()}if(a.mh&&e.height>a.mh){b=(e.height-a.mh)/e.height;i()}}if(a.h)e.style.marginTop=Math.max(a.h-e.height,0)/2+"px";if(j[1]&&(a.loop||j[o+1])){e.style.cursor="pointer";e.onclick=function(){f.next()}}if(H)e.style.msInterpolationMode="bicubic";setTimeout(function(){k(e)},1)}),setTimeout(function(){e.src=h},1)):h&&K.load(h,a.data,function(e,f){k(f==="error"?c(d,"Error").html(a.xhrError):b(this).contents())})},f.next=function(){if(!F&&j[1]&&(a.loop||j[o+1]))o=L(1),f.load()},f.prev=function(){if(!F&&j[1]&&(a.loop||o))o=L(-1),f.load()},f.close=function(){s&&!N&&(N=!0,s=!1,A(M,a.onCleanup),g.unbind("."+n+" ."+O),x.fadeTo(200,0),i.stop().fadeTo(300,0,function(){i.add(x).css({opacity:1,cursor:"auto"}).hide();A(P);m.remove();setTimeout(function(){N=!1;A(ga,a.onClosed)},1)}))},f.remove=function(){b([]).add(i).add(x).remove();i=null;b("."+E).removeData(r).removeClass(E).die()},f.element=function(){return b(q)},f.settings=Q)})(jQuery,document,this);
;
(function ($) {

Drupal.behaviors.initColorbox = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox)) {
      return;
    }
    $('a, area, input', context)
      .filter('.colorbox')
      .once('init-colorbox')
      .colorbox(settings.colorbox);
  }
};

{
  $(document).bind('cbox_complete', function () {
    Drupal.attachBehaviors('#cboxLoadedContent');
  });
}

})(jQuery);
;
(function ($) {

Drupal.behaviors.initColorboxLoad = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox)) {
      return;
    }
    $.urlParams = function (url) {
      var p = {},
          e,
          a = /\+/g,  // Regex for replacing addition symbol with a space
          r = /([^&=]+)=?([^&]*)/g,
          d = function (s) { return decodeURIComponent(s.replace(a, ' ')); },
          q = url.split('?');
      while (e = r.exec(q[1])) {
        e[1] = d(e[1]);
        e[2] = d(e[2]);
        switch (e[2].toLowerCase()) {
          case 'true':
          case 'yes':
            e[2] = true;
            break;
          case 'false':
          case 'no':
            e[2] = false;
            break;
        }
        if (e[1] == 'width') { e[1] = 'innerWidth'; }
        if (e[1] == 'height') { e[1] = 'innerHeight'; }
        p[e[1]] = e[2];
      }
      return p;
    };
    $('a, area, input', context)
      .filter('.colorbox-load')
      .once('init-colorbox-load', function () {
        var params = $.urlParams($(this).attr('href'));
        $(this).colorbox($.extend({}, settings.colorbox, params));
      });
  }
};

})(jQuery);
;
(function(){var g=function(e,h,f,g){
this.get=function(a){for(var a=a+"=",c=document.cookie.split(";"),b=0,e=c.length;b<e;b++){for(var d=c[b];" "==d.charAt(0);)d=d.substring(1,d.length);if(0==d.indexOf(a))return d.substring(a.length,d.length)}return null};
this.set=function(a,c){var b="",b=new Date;b.setTime(b.getTime()+6048E5);b="; expires="+b.toGMTString();document.cookie=a+"="+c+b+"; path=/; "};
this.check=function(){var a=this.get(f);if(a)a=a.split(":");else if(100!=e)"v"==h&&(e=Math.random()>=e/100?0:100),a=[h,e,0],this.set(f,a.join(":"));else return!0;var c=a[1];if(100==c)return!0;switch(a[0]){case "v":return!1;case "r":return c=a[2]%Math.floor(100/c),a[2]++,this.set(f,a.join(":")),!c}return!0};
this.go=function(){if(this.check()){var a=document.createElement("script");a.type="text/javascript";a.src=g+ "&t=" + (new Date()).getTime();document.body&&document.body.appendChild(a)}};
this.start=function(){var a=this;window.addEventListener?window.addEventListener("load",function(){a.go()},!1):window.attachEvent&&window.attachEvent("onload",function(){a.go()})}};
try{(new g(100,"r","QSI_S_ZN_0677ZkA58MonfDL","//zn_0677zka58monfdl-idz.siteintercept.qualtrics.com/WRSiteInterceptEngine/?Q_ZID=ZN_0677ZkA58MonfDL&Q_LOC="+encodeURIComponent(window.location.href))).start()}catch(i){}})();

;

(function ($) {
  Drupal.Panels = Drupal.Panels || {};

  Drupal.Panels.autoAttach = function() {
    if ($.browser.msie) {
      // If IE, attach a hover event so we can see our admin links.
      $("div.panel-pane").hover(
        function() {
          $('div.panel-hide', this).addClass("panel-hide-hover"); return true;
        },
        function() {
          $('div.panel-hide', this).removeClass("panel-hide-hover"); return true;
        }
      );
      $("div.admin-links").hover(
        function() {
          $(this).addClass("admin-links-hover"); return true;
        },
        function(){
          $(this).removeClass("admin-links-hover"); return true;
        }
      );
    }
  };

  $(Drupal.Panels.autoAttach);
})(jQuery);
;
(function ($) {

Drupal.behaviors.quote = {
  attach: function(context, settings) {
    var level = Drupal.settings.quote_nest - 1;
    if (level >= 0) {
      var top = $('blockquote.quote-nest-1', context);
      $('blockquote.quote-msg:eq(' + level + ')', top)
      .hide()
      .after('<div class="quote-snip">' + Drupal.t('<a href="#">[snip]</a>') + '</div>')
      .next('.quote-snip')
      .children('a')
      .click(function(e) {
        $(this).parent().siblings('.quote-msg').toggle();
        e.preventDefault();
      });
    }
  }
};

}(jQuery));
;
(function ($) {

$(document).ready(function() {

  // Expression to check for absolute internal links.
  var isInternal = new RegExp("^(https?):\/\/" + window.location.host, "i");

  // Attach onclick event to document only and catch clicks on all elements.
  $(document.body).click(function(event) {
    // Catch the closest surrounding link of a clicked element.
    $(event.target).closest("a,area").each(function() {

      var ga = Drupal.settings.googleanalytics;
      // Expression to check for special links like gotwo.module /go/* links.
      var isInternalSpecial = new RegExp("(\/go\/.*)$", "i");
      // Expression to check for download links.
      var isDownload = new RegExp("\\.(" + ga.trackDownloadExtensions + ")$", "i");

      // Is the clicked URL internal?
      if (isInternal.test(this.href)) {
        // Skip 'click' tracking, if custom tracking events are bound.
        if ($(this).is('.colorbox')) {
          // Do nothing here. The custom event will handle all tracking.
        }
        // Is download tracking activated and the file extension configured for download tracking?
        else if (ga.trackDownload && isDownload.test(this.href)) {
          // Download link clicked.
          var extension = isDownload.exec(this.href);
          _gaq.push(["_trackEvent", "Downloads", extension[1].toUpperCase(), this.href.replace(isInternal, '')]);
        }
        else if (isInternalSpecial.test(this.href)) {
          // Keep the internal URL for Google Analytics website overlay intact.
          _gaq.push(["_trackPageview", this.href.replace(isInternal, '')]);
        }
      }
      else {
        if (ga.trackMailto && $(this).is("a[href^='mailto:'],area[href^='mailto:']")) {
          // Mailto link clicked.
          _gaq.push(["_trackEvent", "Mails", "Click", this.href.substring(7)]);
        }
        else if (ga.trackOutbound && this.href.match(/^\w+:\/\//i)) {
          if (ga.trackDomainMode == 2 && isCrossDomain($(this).attr('hostname'), ga.trackCrossDomains)) {
            // Top-level cross domain clicked. document.location is handled by _link internally.
            event.preventDefault();
            _gaq.push(["_link", this.href]);
          }
          else {
            // External link clicked.
            _gaq.push(["_trackEvent", "Outbound links", "Click", this.href]);
          }
        }
      }
    });
  });

  // Colorbox: This event triggers when the transition has completed and the
  // newly loaded content has been revealed.
  $(document).bind("cbox_complete", function() {
    var href = $.colorbox.element().attr("href");
    if (href) {
      _gaq.push(["_trackPageview", href.replace(isInternal, '')]);
    }
  });

});

/**
 * Check whether the hostname is part of the cross domains or not.
 *
 * @param string hostname
 *   The hostname of the clicked URL.
 * @param array crossDomains
 *   All cross domain hostnames as JS array.
 *
 * @return boolean
 */
function isCrossDomain(hostname, crossDomains) {
  /**
   * jQuery < 1.6.3 bug: $.inArray crushes IE6 and Chrome if second argument is
   * `null` or `undefined`, http://bugs.jquery.com/ticket/10076,
   * https://github.com/jquery/jquery/commit/a839af034db2bd934e4d4fa6758a3fed8de74174
   *
   * @todo: Remove/Refactor in D8
   */
  if (!crossDomains) {
    return false;
  }
  else {
    return $.inArray(hostname, crossDomains) > -1 ? true : false;
  }
}

})(jQuery);
;
