System.register("chunks:///_virtual/main",["./TelegramManager.ts","./test.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/TelegramManager.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var r,n,t,a,o,i,l,s,c,u;return{setters:[function(e){r=e.applyDecoratedDescriptor,n=e.inheritsLoose,t=e.initializerDefineProperty,a=e.assertThisInitialized,o=e.asyncToGenerator,i=e.regeneratorRuntime},function(e){l=e.cclegacy,s=e._decorator,c=e.Label,u=e.Component}],execute:function(){var p,d,g,h,f;l._RF.push({},"7d3c4PTwClH2r3HSjVpnH7H","TelegramManager",void 0);var m=s.ccclass,b=s.property;e("TelegramManager",(p=m("TelegramManager"),d=b(c),p((f=r((h=function(e){function r(){for(var r,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return r=e.call.apply(e,[this].concat(o))||this,t(r,"namelabel",f,a(r)),r.userId=null,r.backendUrl="https://cursor-teach.vercel.app/api/add-gold",r}n(r,e);var l=r.prototype;return l.start=function(){this.initTelegram()},l.initTelegram=function(){var e,r=null==(e=window.Telegram)?void 0:e.WebApp;if(r){var n;r.ready();var t=null==(n=r.initDataUnsafe)?void 0:n.user;t?(this.userId=t.id,this.namelabel.string="ID: "+t.id,console.log("当前登录的用户 ID:",t.id)):this.namelabel.string="无法获取用户信息"}else this.namelabel.string="非 Telegram 环境"},l.onAddGoldClicked=function(){var e=o(i().mark((function e(){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.userId){e.next=3;break}return console.error("还没拿到用户 ID，不能加钱"),e.abrupt("return");case 3:return console.log("正在尝试给用户",this.userId,"加金币..."),e.prev=4,e.next=7,fetch(this.backendUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:this.userId,amount:100})});case 7:return r=e.sent,e.next=10,r.json();case 10:n=e.sent,r.ok?(console.log("金币增加成功！数据库返回：",n),alert("金币 +100！")):(console.error("加钱失败：",n.error),alert("错误: "+n.error)),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(4),console.error("网络错误：",e.t0),alert("网络连接失败，请检查后端是否部署");case 18:case"end":return e.stop()}}),e,this,[[4,14]])})));return function(){return e.apply(this,arguments)}}(),l.onVibrateClicked=function(){var e,r=null==(e=window.Telegram)?void 0:e.WebApp;r&&r.HapticFeedback?(r.HapticFeedback.impactOccurred("heavy"),console.log("触发了震动")):console.log("有错误，震动失败！")},r}(u)).prototype,"namelabel",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=h))||g));l._RF.pop()}}}));

System.register("chunks:///_virtual/test.ts",["cc"],(function(){var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"eb422Ur05FHtrqDGiRgVG9C","test",void 0),t._RF.pop()}}}));

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