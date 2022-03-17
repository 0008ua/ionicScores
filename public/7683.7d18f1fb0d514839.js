"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7683],{7683:(x,d,e)=>{e.r(d),e.d(d,{AnalyticsPageModule:()=>P});var c=e(6019),h=e(9133),i=e(4662),s=e(1880),m=e(18),A=e(4433),t=e(3668),Z=e(607),r=e(3085);function y(n,a){if(1&n&&(t.TgZ(0,"h2"),t._uU(1),t.ALo(2,"async"),t.qZA()),2&n){const o=t.oxw();t.xp6(1),t.Oqu(t.lcZ(2,1,o.user$).name)}}function f(n,a){1&n&&(t.TgZ(0,"h2"),t._uU(1,"Guest"),t.qZA())}function p(n,a){if(1&n){const o=t.EpF();t.TgZ(0,"ion-item",9),t.NdJ("click",function(){return t.CHM(o),t.oxw().onLogout()}),t._UZ(1,"ion-icon",14),t.TgZ(2,"ion-label"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.qZA()}2&n&&(t.xp6(3),t.Oqu(t.lcZ(4,1,"modules.user.logout")))}const u=function(){return{exact:!0}};function T(n,a){1&n&&(t.TgZ(0,"ion-item",15),t._UZ(1,"ion-icon",16),t.TgZ(2,"ion-label"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.qZA()),2&n&&(t.Q6J("routerLinkActiveOptions",t.DdM(4,u)),t.xp6(3),t.Oqu(t.lcZ(4,2,"modules.user.signin")))}const v=[{path:"",component:(()=>{class n{constructor(o,l,g){this.store=o,this.translate=l,this.menuController=g}ngOnInit(){this.userRole$=this.store.select(A.nC),this.user$=this.store.select(A.dy)}ionViewWillEnter(){console.log("analytics ionViewWillEnter"),this.menuController.enable(!0,"analytics-menu")}onLogout(){this.store.dispatch((0,m.logout)())}switchLanguage(){this.lang="en"===this.lang?"uk":"en",this.translate.use(this.lang)}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(Z.yh),t.Y36(r.sK),t.Y36(i._q))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-games"]],decls:30,vars:19,consts:[["menuId","analytics-menu","side","end","contentId","analytics-content"],["color","secondary"],[4,"ngIf"],["lines","none"],["auto-hide","false","menu","analytics-menu"],["routerLink","/analytics/train","routerLinkActive","active-link",3,"routerLinkActiveOptions"],["name","train-outline","slot","start"],["routerLink","/analytics/cards","routerLinkActive","active-link",3,"routerLinkActiveOptions"],["name","layers-outline","slot","start"],["button","",3,"click"],["name","earth-outline","slot","start"],["button","",3,"click",4,"ngIf"],["routerLink","/auth/signin","routerLinkActive","active-link",3,"routerLinkActiveOptions",4,"ngIf"],["id","analytics-content"],["name","exit","slot","start"],["routerLink","/auth/signin","routerLinkActive","active-link",3,"routerLinkActiveOptions"],["name","log-in","slot","start"]],template:function(o,l){1&o&&(t.TgZ(0,"ion-menu",0),t.TgZ(1,"ion-header"),t.TgZ(2,"ion-toolbar",1),t.TgZ(3,"ion-title"),t.YNc(4,y,3,3,"h2",2),t.ALo(5,"async"),t.YNc(6,f,2,0,"h2",2),t.ALo(7,"async"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(8,"ion-content"),t.TgZ(9,"ion-list",3),t.TgZ(10,"ion-menu-toggle",4),t.TgZ(11,"ion-item",5),t._UZ(12,"ion-icon",6),t.TgZ(13,"ion-label"),t._uU(14,"Train"),t.qZA(),t.qZA(),t.TgZ(15,"ion-item",7),t._UZ(16,"ion-icon",8),t.TgZ(17,"ion-label"),t._uU(18,"Cards"),t.qZA(),t.qZA(),t._UZ(19,"ion-item-divider"),t.TgZ(20,"ion-item",9),t.NdJ("click",function(){return l.switchLanguage()}),t._UZ(21,"ion-icon",10),t.TgZ(22,"ion-label"),t._uU(23),t.ALo(24,"translate"),t.qZA(),t.qZA(),t.YNc(25,p,5,3,"ion-item",11),t.ALo(26,"async"),t.YNc(27,T,5,5,"ion-item",12),t.ALo(28,"async"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(29,"ion-router-outlet",13)),2&o&&(t.xp6(4),t.Q6J("ngIf","member"===t.lcZ(5,7,l.userRole$)),t.xp6(2),t.Q6J("ngIf","guest"===t.lcZ(7,9,l.userRole$)),t.xp6(5),t.Q6J("routerLinkActiveOptions",t.DdM(17,u)),t.xp6(4),t.Q6J("routerLinkActiveOptions",t.DdM(18,u)),t.xp6(8),t.Oqu(t.lcZ(24,11,"language")),t.xp6(2),t.Q6J("ngIf","member"===t.lcZ(26,13,l.userRole$)),t.xp6(2),t.Q6J("ngIf","guest"===t.lcZ(28,15,l.userRole$)))},directives:[i.z0,i.Gu,i.sr,i.wd,c.O5,i.W2,i.q_,i.zc,i.Ie,i.YI,s.rH,s.Od,i.gu,i.Q$,i.rH,i.jP],pipes:[c.Ov,r.X$],styles:[""]}),n})(),children:[{path:"train",loadChildren:()=>e.e(3336).then(e.bind(e,3336)).then(n=>n.TrainPageModule)},{path:"cards",loadChildren:()=>e.e(6136).then(e.bind(e,6136)).then(n=>n.CardsPageModule)},{path:"",redirectTo:"train",pathMatch:"full"}]},{path:"**",redirectTo:"",pathMatch:"full"},{path:"cards",loadChildren:()=>e.e(6136).then(e.bind(e,6136)).then(n=>n.CardsPageModule)}];let L=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[s.Bz.forChild(v)],s.Bz]}),n})(),P=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[c.ez,h.u5,i.Pc,L,r.aw.forChild({extend:!0})]]}),n})()}}]);