"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7683],{7683:(x,g,i)=>{i.r(g),i.d(g,{AnalyticsPageModule:()=>P});var c=i(6019),Z=i(9133),e=i(4662),s=i(4100),h=i(18),m=i(4433),t=i(3668),d=i(607),r=i(3085);function y(n,a){if(1&n&&(t.TgZ(0,"h2"),t._uU(1),t.ALo(2,"async"),t.qZA()),2&n){const o=t.oxw();t.xp6(1),t.Oqu(t.lcZ(2,1,o.user$).name)}}function f(n,a){1&n&&(t.TgZ(0,"h2"),t._uU(1,"Guest"),t.qZA())}function p(n,a){if(1&n){const o=t.EpF();t.TgZ(0,"ion-item",7),t.NdJ("click",function(){return t.CHM(o),t.oxw().onLogout()}),t._UZ(1,"ion-icon",12),t.TgZ(2,"ion-label"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.qZA()}2&n&&(t.xp6(3),t.Oqu(t.lcZ(4,1,"modules.user.logout")))}const A=function(){return{exact:!0}};function T(n,a){1&n&&(t.TgZ(0,"ion-item",13),t._UZ(1,"ion-icon",14),t.TgZ(2,"ion-label"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.qZA()),2&n&&(t.Q6J("routerLinkActiveOptions",t.DdM(4,A)),t.xp6(3),t.Oqu(t.lcZ(4,2,"modules.user.signin")))}const v=[{path:"",component:(()=>{class n{constructor(o,l,u){this.store=o,this.translate=l,this.menuController=u}ngOnInit(){this.userRole$=this.store.select(m.nC),this.user$=this.store.select(m.dy)}ionViewWillEnter(){console.log("analytics ionViewWillEnter"),this.menuController.enable(!0,"analytics-menu")}onLogout(){this.store.dispatch((0,h.kS)())}switchLanguage(){this.lang="en"===this.lang?"uk":"en",this.translate.use(this.lang)}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(d.yh),t.Y36(r.sK),t.Y36(e._q))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-games"]],decls:26,vars:17,consts:[["menuId","analytics-menu","side","end","contentId","analytics-content"],["color","secondary"],[4,"ngIf"],["lines","none"],["auto-hide","false","menu","analytics-menu"],["routerLink","/analytics/train","routerLinkActive","active-link",3,"routerLinkActiveOptions"],["name","train-outline","slot","start"],["button","",3,"click"],["name","earth-outline","slot","start"],["button","",3,"click",4,"ngIf"],["routerLink","/auth/signin","routerLinkActive","active-link",3,"routerLinkActiveOptions",4,"ngIf"],["id","analytics-content"],["name","exit","slot","start"],["routerLink","/auth/signin","routerLinkActive","active-link",3,"routerLinkActiveOptions"],["name","log-in","slot","start"]],template:function(o,l){1&o&&(t.TgZ(0,"ion-menu",0),t.TgZ(1,"ion-header"),t.TgZ(2,"ion-toolbar",1),t.TgZ(3,"ion-title"),t.YNc(4,y,3,3,"h2",2),t.ALo(5,"async"),t.YNc(6,f,2,0,"h2",2),t.ALo(7,"async"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(8,"ion-content"),t.TgZ(9,"ion-list",3),t.TgZ(10,"ion-menu-toggle",4),t.TgZ(11,"ion-item",5),t._UZ(12,"ion-icon",6),t.TgZ(13,"ion-label"),t._uU(14,"Train"),t.qZA(),t.qZA(),t._UZ(15,"ion-item-divider"),t.TgZ(16,"ion-item",7),t.NdJ("click",function(){return l.switchLanguage()}),t._UZ(17,"ion-icon",8),t.TgZ(18,"ion-label"),t._uU(19),t.ALo(20,"translate"),t.qZA(),t.qZA(),t.YNc(21,p,5,3,"ion-item",9),t.ALo(22,"async"),t.YNc(23,T,5,5,"ion-item",10),t.ALo(24,"async"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(25,"ion-router-outlet",11)),2&o&&(t.xp6(4),t.Q6J("ngIf","member"===t.lcZ(5,6,l.userRole$)),t.xp6(2),t.Q6J("ngIf","guest"===t.lcZ(7,8,l.userRole$)),t.xp6(5),t.Q6J("routerLinkActiveOptions",t.DdM(16,A)),t.xp6(8),t.Oqu(t.lcZ(20,10,"language")),t.xp6(2),t.Q6J("ngIf","member"===t.lcZ(22,12,l.userRole$)),t.xp6(2),t.Q6J("ngIf","guest"===t.lcZ(24,14,l.userRole$)))},directives:[e.z0,e.Gu,e.sr,e.wd,c.O5,e.W2,e.q_,e.zc,e.Ie,e.YI,s.rH,s.Od,e.gu,e.Q$,e.rH,e.jP],pipes:[c.Ov,r.X$],styles:[""]}),n})(),children:[{path:"train",loadChildren:()=>i.e(3336).then(i.bind(i,3336)).then(n=>n.TrainPageModule)},{path:"",redirectTo:"train",pathMatch:"full"}]},{path:"**",redirectTo:"",pathMatch:"full"}];let L=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[s.Bz.forChild(v)],s.Bz]}),n})(),P=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[c.ez,Z.u5,e.Pc,L,r.aw.forChild({extend:!0})]]}),n})()}}]);