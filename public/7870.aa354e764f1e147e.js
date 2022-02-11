"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7870],{7870:(O,l,r)=>{r.r(l),r.d(l,{SignupPageModule:()=>k});var c=r(6019),e=r(9133),i=r(4662),u=r(1880),f=r(3405),d=r(5722),Z=r(9204),h=r(1125),m=r(8735),x=r(6636),A=r(18),n=r(3668),T=r(6006),p=r(3085),S=r(607),F=r(3161);const _=["signupFormDirective"];function y(o,s){if(1&o&&(n.TgZ(0,"ion-text",23),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&o){const t=s.$implicit;n.xp6(1),n.hij(" ",n.lcZ(2,1,"errors."+t)," ")}}function v(o,s){if(1&o&&(n.ynx(0),n.YNc(1,y,3,3,"ion-text",22),n.ALo(2,"errorExtractor"),n.BQk()),2&o){const t=n.oxw(2);n.xp6(1),n.Q6J("ngForOf",n.lcZ(2,1,t.signupForm.get("name").errors))}}function I(o,s){if(1&o&&(n.TgZ(0,"ion-text",23),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&o){const t=s.$implicit;n.xp6(1),n.hij(" ",n.lcZ(2,1,"errors."+t)," ")}}function w(o,s){if(1&o&&(n.ynx(0),n.YNc(1,I,3,3,"ion-text",22),n.ALo(2,"errorExtractor"),n.BQk()),2&o){const t=n.oxw(2);n.xp6(1),n.Q6J("ngForOf",n.lcZ(2,1,t.signupForm.get("password").errors))}}function P(o,s){1&o&&n._UZ(0,"ion-icon",24),2&o&&n.Q6J("name","checkmark-done-outline")}function L(o,s){if(1&o&&(n.TgZ(0,"ion-text",23),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&o){const t=s.$implicit;n.xp6(1),n.hij(" ",n.lcZ(2,1,"errors."+t)," ")}}function q(o,s){if(1&o&&(n.ynx(0),n.YNc(1,L,3,3,"ion-text",22),n.ALo(2,"errorExtractor"),n.BQk()),2&o){const t=n.oxw(2);n.xp6(1),n.Q6J("ngForOf",n.lcZ(2,1,t.signupForm.get("passwordConfirm").errors))}}function N(o,s){if(1&o){const t=n.EpF();n.TgZ(0,"form",4,5),n.TgZ(2,"ion-grid"),n.TgZ(3,"ion-row"),n.TgZ(4,"ion-col",6),n.TgZ(5,"ion-card"),n.TgZ(6,"ion-card-header"),n.TgZ(7,"div"),n._UZ(8,"img",7),n.qZA(),n.TgZ(9,"ion-card-title",8),n._uU(10),n.ALo(11,"translate"),n.qZA(),n.TgZ(12,"ion-card-subtitle",8),n.TgZ(13,"a",9),n._uU(14),n.ALo(15,"translate"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(16,"ion-card-content"),n.TgZ(17,"ion-list"),n.TgZ(18,"ion-item"),n._UZ(19,"ion-icon",10),n.TgZ(20,"ion-label",11),n._uU(21),n.ALo(22,"translate"),n.qZA(),n._UZ(23,"ion-input",12),n.qZA(),n.YNc(24,v,3,3,"ng-container",13),n.TgZ(25,"ion-item",14),n._UZ(26,"ion-icon",15),n.TgZ(27,"ion-label",11),n._uU(28),n.ALo(29,"translate"),n.qZA(),n._UZ(30,"ion-input",16),n.TgZ(31,"ion-icon",17),n.NdJ("click",function(){return n.CHM(t),n.oxw().switchInputType()}),n.qZA(),n.qZA(),n.YNc(32,w,3,3,"ng-container",13),n.TgZ(33,"ion-item",14),n._UZ(34,"ion-icon",18),n.TgZ(35,"ion-label",11),n._uU(36),n.ALo(37,"translate"),n.qZA(),n._UZ(38,"ion-input",19),n.YNc(39,P,1,1,"ion-icon",20),n.qZA(),n.YNc(40,q,3,3,"ng-container",13),n.qZA(),n.qZA(),n.qZA(),n.TgZ(41,"ion-row"),n.TgZ(42,"ion-col"),n.TgZ(43,"ion-button",21),n.NdJ("click",function(){return n.CHM(t),n.oxw().formSubmitSubject$.next()}),n._uU(44),n.ALo(45,"translate"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()}if(2&o){const t=n.oxw();n.Q6J("formGroup",t.signupForm),n.xp6(10),n.Oqu(n.lcZ(11,15,"modules.user.signup")),n.xp6(4),n.Oqu(n.lcZ(15,17,"modules.user.orSignin")),n.xp6(7),n.Oqu(n.lcZ(22,19,"modules.user.name")),n.xp6(3),n.Q6J("ngIf",t.signupForm.get("name").dirty&&t.signupForm.get("name").errors),n.xp6(4),n.Oqu(n.lcZ(29,21,"modules.user.password")),n.xp6(2),n.Q6J("type",t.inputType),n.xp6(1),n.Q6J("name","password"===t.inputType?"eye-outline":"eye-off-outline"),n.xp6(1),n.Q6J("ngIf",t.signupForm.get("password").dirty&&t.signupForm.get("password").errors),n.xp6(4),n.Oqu(n.lcZ(37,23,"modules.user.confirmPassword")),n.xp6(2),n.Q6J("type",t.inputType),n.xp6(1),n.Q6J("ngIf",t.signupForm.get("passwordConfirm").dirty&&"VALID"===t.signupForm.get("passwordConfirm").status),n.xp6(1),n.Q6J("ngIf",t.signupForm.get("passwordConfirm").dirty&&t.signupForm.get("passwordConfirm").errors),n.xp6(3),n.Q6J("disabled","INVALID"===t.signupForm.status||"PENDING"===t.signupForm.status),n.xp6(1),n.hij(" ",n.lcZ(45,25,"modules.user.signup")," ")}}const J=[{path:"",component:(()=>{class o{constructor(t,a,g,C){this.authService=t,this.router=a,this.translate=g,this.store=C,this.inputType="password",this.formSubmitSubject$=new f.xQ}ngOnInit(){this.lang=this.translate.currentLang,this.signupForm=new e.cw({name:new e.NI("",{updateOn:"change",validators:[e.kI.pattern("^[a-zA-Z0-9_\\-]+$"),e.kI.minLength(2),e.kI.maxLength(60),e.kI.required]}),password:new e.NI("",{updateOn:"change",validators:[e.kI.pattern("^[a-zA-Z0-9_\\-]+$"),e.kI.minLength(2),e.kI.maxLength(60),e.kI.required]}),passwordConfirm:new e.NI("",{updateOn:"change",validators:[e.kI.pattern("^[a-zA-Z0-9_\\-]+$"),e.kI.minLength(2),e.kI.maxLength(60),e.kI.required]})},this.authService.matchPassword),this.formSubmitSubject$.pipe((0,d.b)(()=>this.signupForm.markAsDirty()),(0,Z.w)(()=>this.signupForm.statusChanges.pipe((0,h.O)(this.signupForm.status),(0,m.h)(t=>"PENDING"!==t),(0,x.q)(1))),(0,m.h)(t=>"VALID"===t)).subscribe(t=>this.onSignup())}switchInputType(){this.inputType="password"===this.inputType?"text":"password"}onSignup(){const t={name:this.signupForm.get("name").value,password:this.signupForm.get("password").value};this.store.dispatch((0,A.IU)({user:t})),this.resetForm()}resetForm(){this.signupFormDirective&&this.signupFormDirective.resetForm()}switchLanguage(){this.lang="en"===this.lang?"uk":"en",this.translate.use(this.lang)}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(T.e),n.Y36(u.F0),n.Y36(p.sK),n.Y36(S.yh))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-signup"]],viewQuery:function(t,a){if(1&t&&n.Gf(_,5),2&t){let g;n.iGM(g=n.CRH())&&(a.signupFormDirective=g.first)}},decls:12,vars:4,consts:[["slot","end"],["button","","lines","none",3,"click"],["name","earth-outline","slot","start"],[3,"formGroup",4,"ngIf"],[3,"formGroup"],["signupFormDirective","ngForm"],["size-lg","6","size-md","8","size-sm","10","offset-lg","3","offset-md","2","offset-sm","1"],["src","/assets/banner.svg",1,"logo_signin"],[1,"ion-text-center"],["button","","color","primary","routerLink","tabs/signin"],["name","person-outline","slot","start",1,"ion-align-self-center"],["position","floating"],["type","text","autocomplete","","autocorrect","","formControlName","name"],[4,"ngIf"],["lines","none"],["name","lock-closed-outline","slot","start",1,"ion-align-self-center"],["autocomplete","","autocorrect","","formControlName","password",3,"type"],["slot","end",1,"ion-align-self-center",3,"name","click"],["name","reorder-two-outline","slot","start",1,"ion-align-self-center"],["autocomplete","","autocorrect","","formControlName","passwordConfirm",3,"type"],["class","ion-align-self-center","color","success","slot","end",3,"name",4,"ngIf"],["expand","block",3,"disabled","click"],["class","input-error","color","danger",4,"ngFor","ngForOf"],["color","danger",1,"input-error"],["color","success","slot","end",1,"ion-align-self-center",3,"name"]],template:function(t,a){1&t&&(n.TgZ(0,"ion-header"),n.TgZ(1,"ion-toolbar"),n.TgZ(2,"ion-title"),n._uU(3,"Scores"),n.qZA(),n.TgZ(4,"ion-buttons",0),n.TgZ(5,"ion-item",1),n.NdJ("click",function(){return a.switchLanguage()}),n._UZ(6,"ion-icon",2),n.TgZ(7,"ion-label"),n._uU(8),n.ALo(9,"translate"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(10,"ion-content"),n.YNc(11,N,46,27,"form",3),n.qZA()),2&t&&(n.xp6(8),n.Oqu(n.lcZ(9,2,"language")),n.xp6(3),n.Q6J("ngIf",a.signupForm))},directives:[i.Gu,i.sr,i.wd,i.Sm,i.Ie,i.gu,i.Q$,i.W2,c.O5,e._Y,e.JL,e.sg,i.jY,i.Nd,i.wI,i.PM,i.Zi,i.Dq,i.tO,u.yS,i.YI,i.FN,i.q_,i.pK,i.j9,e.JJ,e.u,i.YG,c.sg,i.yW],pipes:[p.X$,F.j],styles:[""]}),o})()}];let U=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[u.Bz.forChild(J)],u.Bz]}),o})();var Q=r(1173);let k=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[c.ez,e.u5,i.Pc,e.UX,Q.D,p.aw.forChild({extend:!0}),U]]}),o})()}}]);