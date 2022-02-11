"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7341],{7341:(w,p,r)=>{r.r(p),r.d(p,{SigninPageModule:()=>v});var c=r(6019),s=r(9133),e=r(4662),l=r(1880),m=r(18),n=r(3668),Z=r(6006),d=r(607),u=r(3085),f=r(3161);const h=["signinFormDirective"];function T(i,a){if(1&i&&(n.TgZ(0,"ion-text",18),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&i){const t=a.$implicit;n.xp6(1),n.hij(" ",n.lcZ(2,1,"errors."+t)," ")}}function A(i,a){if(1&i&&(n.ynx(0),n.YNc(1,T,3,3,"ion-text",17),n.ALo(2,"errorExtractor"),n.BQk()),2&i){const t=n.oxw();n.xp6(1),n.Q6J("ngForOf",n.lcZ(2,1,t.signinForm.get("name").errors))}}function x(i,a){if(1&i&&(n.TgZ(0,"ion-text",18),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&i){const t=a.$implicit;n.xp6(1),n.hij(" ",n.lcZ(2,1,"errors."+t)," ")}}function y(i,a){if(1&i&&(n.ynx(0),n.YNc(1,x,3,3,"ion-text",17),n.ALo(2,"errorExtractor"),n.BQk()),2&i){const t=n.oxw();n.xp6(1),n.Q6J("ngForOf",n.lcZ(2,1,t.signinForm.get("password").errors))}}const F=[{path:"",component:(()=>{class i{constructor(t,o,g,P){this.authService=t,this.router=o,this.store=g,this.translate=P,this.inputType="password"}ngOnInit(){this.lang=this.translate.currentLang,this.signinForm=new s.cw({name:new s.NI("",{updateOn:"change",validators:[s.kI.minLength(2),s.kI.required]}),password:new s.NI("",{updateOn:"change",validators:[s.kI.required]})})}switchInputType(){this.inputType="password"===this.inputType?"text":"password"}onSignin(){const t={name:this.signinForm.get("name").value,password:this.signinForm.get("password").value};this.store.dispatch((0,m.xJ)({user:t})),this.resetForm()}resetForm(){this.signinFormDirective&&this.signinFormDirective.resetForm()}switchLanguage(){this.lang="en"===this.lang?"uk":"en",this.translate.use(this.lang)}}return i.\u0275fac=function(t){return new(t||i)(n.Y36(Z.e),n.Y36(l.F0),n.Y36(d.yh),n.Y36(u.sK))},i.\u0275cmp=n.Xpm({type:i,selectors:[["app-signin"]],viewQuery:function(t,o){if(1&t&&n.Gf(h,5),2&t){let g;n.iGM(g=n.CRH())&&(o.signinFormDirective=g.first)}},decls:47,vars:24,consts:[["slot","end"],["button","","lines","none",3,"click"],["name","earth-outline","slot","start"],[3,"formGroup"],["signinFormDirective","ngForm"],["size-lg","6","size-md","8","size-sm","10","offset-lg","3","offset-md","2","offset-sm","1"],[1,"ion-text-center"],["button","","color","primary","routerLink","/auth/signup"],["name","person-outline","slot","start",1,"ion-align-self-center"],["position","floating"],["type","text","autocomplete","","autocorrect","","formControlName","name"],[4,"ngIf"],["lines","none"],["name","lock-closed-outline","slot","start",1,"ion-align-self-center"],["autocomplete","","autocorrect","","formControlName","password",3,"type"],["slot","end",1,"ion-align-self-center",3,"name","click"],["expand","block",3,"disabled","click"],["class","input-error","color","danger",4,"ngFor","ngForOf"],["color","danger",1,"input-error"]],template:function(t,o){1&t&&(n.TgZ(0,"ion-header"),n.TgZ(1,"ion-toolbar"),n.TgZ(2,"ion-title"),n._uU(3,"Scores"),n.qZA(),n.TgZ(4,"ion-buttons",0),n.TgZ(5,"ion-item",1),n.NdJ("click",function(){return o.switchLanguage()}),n._UZ(6,"ion-icon",2),n.TgZ(7,"ion-label"),n._uU(8),n.ALo(9,"translate"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(10,"ion-content"),n.TgZ(11,"form",3,4),n.TgZ(13,"ion-grid"),n.TgZ(14,"ion-row"),n.TgZ(15,"ion-col",5),n.TgZ(16,"ion-card"),n.TgZ(17,"ion-card-header"),n.TgZ(18,"ion-card-title",6),n._uU(19),n.ALo(20,"translate"),n.qZA(),n.TgZ(21,"ion-card-subtitle",6),n.TgZ(22,"a",7),n._uU(23),n.ALo(24,"translate"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(25,"ion-card-content"),n.TgZ(26,"ion-list"),n.TgZ(27,"ion-item"),n._UZ(28,"ion-icon",8),n.TgZ(29,"ion-label",9),n._uU(30),n.ALo(31,"translate"),n.qZA(),n._UZ(32,"ion-input",10),n.qZA(),n.YNc(33,A,3,3,"ng-container",11),n.TgZ(34,"ion-item",12),n._UZ(35,"ion-icon",13),n.TgZ(36,"ion-label",9),n._uU(37),n.ALo(38,"translate"),n.qZA(),n._UZ(39,"ion-input",14),n.TgZ(40,"ion-icon",15),n.NdJ("click",function(){return o.switchInputType()}),n.qZA(),n.qZA(),n.YNc(41,y,3,3,"ng-container",11),n.qZA(),n.qZA(),n.qZA(),n.TgZ(42,"ion-row"),n.TgZ(43,"ion-col"),n.TgZ(44,"ion-button",16),n.NdJ("click",function(){return o.onSignin()}),n._uU(45),n.ALo(46,"translate"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&t&&(n.xp6(8),n.Oqu(n.lcZ(9,12,"language")),n.xp6(3),n.Q6J("formGroup",o.signinForm),n.xp6(8),n.Oqu(n.lcZ(20,14,"modules.user.signin")),n.xp6(4),n.Oqu(n.lcZ(24,16,"modules.user.orSignup")),n.xp6(7),n.Oqu(n.lcZ(31,18,"modules.user.name")),n.xp6(3),n.Q6J("ngIf",o.signinForm.get("name").dirty&&o.signinForm.get("name").errors),n.xp6(4),n.Oqu(n.lcZ(38,20,"modules.user.password")),n.xp6(2),n.Q6J("type",o.inputType),n.xp6(1),n.Q6J("name","password"===o.inputType?"eye-outline":"eye-off-outline"),n.xp6(1),n.Q6J("ngIf",o.signinForm.get("password").dirty&&o.signinForm.get("password").errors),n.xp6(3),n.Q6J("disabled","INVALID"===o.signinForm.status),n.xp6(1),n.hij(" ",n.lcZ(46,22,"modules.user.signin")," "))},directives:[e.Gu,e.sr,e.wd,e.Sm,e.Ie,e.gu,e.Q$,e.W2,s._Y,s.JL,s.sg,e.jY,e.Nd,e.wI,e.PM,e.Zi,e.Dq,e.tO,l.yS,e.YI,e.FN,e.q_,e.pK,e.j9,s.JJ,s.u,c.O5,e.YG,c.sg,e.yW],pipes:[u.X$,f.j],styles:[""]}),i})()}];let S=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[[l.Bz.forChild(F)],l.Bz]}),i})();var q=r(1173);let v=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[[c.ez,s.u5,e.Pc,S,s.UX,q.D,u.aw.forChild({extend:!0})]]}),i})()}}]);