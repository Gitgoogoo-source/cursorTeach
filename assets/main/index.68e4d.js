System.register("chunks:///_virtual/main",["./TelegramManager.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/TelegramManager.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var r,n,a,i,t,l,o,s;return{setters:[function(e){r=e.applyDecoratedDescriptor,n=e.inheritsLoose,a=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){t=e.cclegacy,l=e._decorator,o=e.Label,s=e.Component}],execute:function(){var c,u,g,p,m;t._RF.push({},"7d3c4PTwClH2r3HSjVpnH7H","TelegramManager",void 0);var d=l.ccclass,f=l.property;e("TelegramManager",(c=d("TelegramManager"),u=f(o),c((m=r((p=function(e){function r(){for(var r,n=arguments.length,t=new Array(n),l=0;l<n;l++)t[l]=arguments[l];return r=e.call.apply(e,[this].concat(t))||this,a(r,"namelabel",m,i(r)),r.userId=null,r}n(r,e);var t=r.prototype;return t.start=function(){this.initTelegram()},t.initTelegram=function(){var e,r=null==(e=window.Telegram)?void 0:e.WebApp;if(r){var n;r.ready();var a=null==(n=r.initDataUnsafe)?void 0:n.user;a?(this.userId=a.id,this.namelabel.string="ID: "+a.id,console.log("当前登录的用户 ID:",a.id)):this.namelabel.string="无法获取用户信息"}else this.namelabel.string="非 Telegram 环境"},r}(s)).prototype,"namelabel",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=p))||g));t._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});