
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/home/home","pages/login/login","pages/profile/profile","pages/release/release","pages/cart/cart","pages/electronics/electronics","pages/books/books","pages/houses/houses","pages/cate/cate","pages/detail/detail"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"拾到","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#FFFFFF"},"tabBar":{"selectedColor":"#F1729D","list":[{"text":"首页","pagePath":"pages/home/home","iconPath":"static/icon/home.png","selectedIconPath":"static/icon/home-active.png"},{"text":"发布","pagePath":"pages/release/release","iconPath":"static/icon/release.png","selectedIconPath":"static/icon/release-active.png"},{"text":"购物车","pagePath":"pages/cart/cart","iconPath":"static/icon/cart.png","selectedIconPath":"static/icon/cart-active.png"},{"text":"我的","pagePath":"pages/profile/profile","iconPath":"static/icon/profile.png","selectedIconPath":"static/icon/profile-active.png"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"shidao","compilerVersion":"2.8.3","entryPagePath":"pages/home/home","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/home/home","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/login/login","meta":{},"window":{}},{"path":"/pages/profile/profile","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarBackgroundColor":"#F1729D","navigationBarTextStyle":"white"}},{"path":"/pages/release/release","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/cart/cart","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/electronics/electronics","meta":{},"window":{}},{"path":"/pages/books/books","meta":{},"window":{}},{"path":"/pages/houses/houses","meta":{},"window":{}},{"path":"/pages/cate/cate","meta":{},"window":{}},{"path":"/pages/detail/detail","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});