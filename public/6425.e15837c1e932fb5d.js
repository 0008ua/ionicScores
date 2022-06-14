"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6425],{6425:(k,m,n)=>{n.r(m),n.d(m,{GamesPageModule:()=>G});var r=n(6019),d=n(9133),o=n(4662),l=n(777),h=n(18),Z=n(4433),e=n(3668),A=n(607),u=n(3085);function p(t,s){if(1&t&&(e.TgZ(0,"h2"),e._uU(1),e.ALo(2,"async"),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Oqu(e.lcZ(2,1,i.user$).name)}}function f(t,s){1&t&&(e.TgZ(0,"h2"),e._uU(1,"Guest"),e.qZA())}function v(t,s){if(1&t){const i=e.EpF();e.TgZ(0,"ion-item",9),e.NdJ("click",function(){return e.CHM(i),e.oxw().onLogout()}),e._UZ(1,"ion-icon",14),e.TgZ(2,"ion-label"),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.qZA()}2&t&&(e.xp6(3),e.Oqu(e.lcZ(4,1,"modules.user.logout")))}const c=function(){return{exact:!0}};function T(t,s){1&t&&(e.TgZ(0,"ion-item",15),e._UZ(1,"ion-icon",16),e.TgZ(2,"ion-label"),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.qZA()),2&t&&(e.Q6J("routerLinkActiveOptions",e.DdM(4,c)),e.xp6(3),e.Oqu(e.lcZ(4,2,"modules.user.signin")))}const L=[{path:"",component:(()=>{class t{constructor(i,a,g,x){this.store=i,this.translate=a,this.menuController=g,this.route=x}ngOnInit(){this.userRole$=this.store.select(Z.nC),this.user$=this.store.select(Z.dy)}ionViewWillEnter(){this.menuController.enable(!0,"games-menu")}onLogout(){this.store.dispatch((0,h.logout)())}switchLanguage(){this.lang="en"===this.lang?"uk":"en",this.translate.use(this.lang)}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(A.yh),e.Y36(u.sK),e.Y36(o._q),e.Y36(l.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-games"]],decls:30,vars:19,consts:[["menuId","games-menu","side","end","contentId","games-content"],["color","secondary"],[4,"ngIf"],["lines","none"],["auto-hide","false","menu","games-menu"],["routerLink","/games/train","routerLinkActive","active-link",3,"routerLinkActiveOptions"],["name","train-outline","slot","start"],["routerLink","/games/uno","routerLinkActive","active-link",3,"routerLinkActiveOptions"],["name","invert-mode-outline","slot","start"],["button","",3,"click"],["name","earth-outline","slot","start"],["button","",3,"click",4,"ngIf"],["routerLink","/auth/signin","routerLinkActive","active-link",3,"routerLinkActiveOptions",4,"ngIf"],["id","games-content"],["name","exit","slot","start"],["routerLink","/auth/signin","routerLinkActive","active-link",3,"routerLinkActiveOptions"],["name","log-in","slot","start"]],template:function(i,a){1&i&&(e.TgZ(0,"ion-menu",0),e.TgZ(1,"ion-header"),e.TgZ(2,"ion-toolbar",1),e.TgZ(3,"ion-title"),e.YNc(4,p,3,3,"h2",2),e.ALo(5,"async"),e.YNc(6,f,2,0,"h2",2),e.ALo(7,"async"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(8,"ion-content"),e.TgZ(9,"ion-list",3),e.TgZ(10,"ion-menu-toggle",4),e.TgZ(11,"ion-item",5),e._UZ(12,"ion-icon",6),e.TgZ(13,"ion-label"),e._uU(14,"Train"),e.qZA(),e.qZA(),e.TgZ(15,"ion-item",7),e._UZ(16,"ion-icon",8),e.TgZ(17,"ion-label"),e._uU(18,"Uno"),e.qZA(),e.qZA(),e._UZ(19,"ion-item-divider"),e.TgZ(20,"ion-item",9),e.NdJ("click",function(){return a.switchLanguage()}),e._UZ(21,"ion-icon",10),e.TgZ(22,"ion-label"),e._uU(23),e.ALo(24,"translate"),e.qZA(),e.qZA(),e.YNc(25,v,5,3,"ion-item",11),e.ALo(26,"async"),e.YNc(27,T,5,5,"ion-item",12),e.ALo(28,"async"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(29,"ion-router-outlet",13)),2&i&&(e.xp6(4),e.Q6J("ngIf","member"===e.lcZ(5,7,a.userRole$)),e.xp6(2),e.Q6J("ngIf","guest"===e.lcZ(7,9,a.userRole$)),e.xp6(5),e.Q6J("routerLinkActiveOptions",e.DdM(17,c)),e.xp6(4),e.Q6J("routerLinkActiveOptions",e.DdM(18,c)),e.xp6(8),e.Oqu(e.lcZ(24,11,"language")),e.xp6(2),e.Q6J("ngIf","member"===e.lcZ(26,13,a.userRole$)),e.xp6(2),e.Q6J("ngIf","guest"===e.lcZ(28,15,a.userRole$)))},directives:[o.z0,o.Gu,o.sr,o.wd,r.O5,o.W2,o.q_,o.zc,o.Ie,o.YI,l.rH,l.Od,o.gu,o.Q$,o.rH,o.jP],pipes:[r.Ov,u.X$],styles:[""]}),t})(),children:[{path:":id",loadChildren:()=>Promise.all([n.e(8592),n.e(7331)]).then(n.bind(n,7331)).then(t=>t.GamePageModule)},{path:"**",redirectTo:"uno"}]}];let P=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[l.Bz.forChild(L)],l.Bz]}),t})(),G=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[r.ez,d.u5,o.Pc,P,u.aw.forChild({extend:!0})]]}),t})()}}]);