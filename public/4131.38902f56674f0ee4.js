"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4131],{4131:(F,r,s)=>{s.r(r),s.d(r,{RummyPageModule:()=>$});var m=s(6019),d=s(9133),o=s(4662),l=s(4100),y=s(8260),g=s(4368),c=s(3957),t=s(3668),Z=s(607),h=s(3093),f=s(9973),u=s(3085);function p(n,e){1&n&&(t.TgZ(0,"ion-item",7),t._UZ(1,"ion-skeleton-text",8),t._UZ(2,"ion-skeleton-text",9),t.qZA())}function A(n,e){if(1&n&&(t.TgZ(0,"ion-list"),t.YNc(1,p,3,0,"ion-item",6),t.qZA()),2&n){const i=t.oxw();t.xp6(1),t.Q6J("ngForOf",i.array(5).fill(""))}}const T=function(n){return{"border-right":n,"padding-right":"10px"}};function x(n,e){if(1&n&&(t.TgZ(0,"ion-item"),t.TgZ(1,"div",11),t._uU(2),t.qZA(),t.TgZ(3,"ion-label"),t._uU(4),t.qZA(),t.TgZ(5,"ion-text",12),t.TgZ(6,"ion-text",13),t._uU(7),t.qZA(),t._uU(8),t.qZA(),t.qZA()),2&n){const i=e.$implicit,a=e.index;t.xp6(1),t.Q6J("ngStyle",t.VKq(7,T,"6px solid "+i.color)),t.xp6(1),t.Oqu(a+1),t.xp6(2),t.hij(" ",i.name," "),t.xp6(2),t.Q6J("color",i.rating.scores<0?"danger":"success"),t.xp6(1),t.hij(" ",i.rating.scores,""),t.xp6(1),t.AsE(" / ",i.rating.totalGames," / ",i.rating.wins," ")}}function v(n,e){if(1&n&&(t.TgZ(0,"ion-list"),t.YNc(1,x,9,9,"ion-item",10),t.ALo(2,"async"),t.qZA()),2&n){const i=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.lcZ(2,1,i.analytics$))}}const R=[{path:"",component:(()=>{class n{constructor(i,a,q){this.store=i,this.gameService=a,this.gamerService=q,this.stats=y.N.games.rummy.stats,this.stat=this.stats[0],this.math=Math,this.array=Array}ionViewWillEnter(){this.store.dispatch(g[this.stats[0]._id]({gameType:"rummy"}))}ngOnInit(){console.log("init"),this.games$=this.gameService.entities$,this.games$.subscribe(()=>this.store.dispatch(g[this.stat._id]({gameType:"rummy"}))),this.gamers$=this.gamerService.entities$,this.gamers$.subscribe(i=>console.log("gamers",i)),console.log("[this.stats[0]._id",this.stats[0]._id),this.analytics$=this.store.select(c.lz),this.loading$=this.store.select(c.NH)}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(Z.yh),t.Y36(h.h),t.Y36(f.E))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-rummy"]],decls:20,vars:9,consts:[["slot","end"],["menu","analytics-menu"],[1,"ion-no-margin","ion-no-padding"],["size-lg","6","size-md","8","size-sm","10","offset-lg","3","offset-md","2","offset-sm","1"],[1,"ion-text-center"],[4,"ngIf"],["lines","none",4,"ngFor","ngForOf"],["lines","none"],["slot","start","animated","",2,"width","60%"],["slot","end","animated",""],[4,"ngFor","ngForOf"],["slot","start",3,"ngStyle"],["slot","end","color","primary"],[1,"bold",3,"color"]],template:function(i,a){1&i&&(t.TgZ(0,"ion-header"),t.TgZ(1,"ion-toolbar"),t.TgZ(2,"ion-buttons",0),t._UZ(3,"ion-menu-button",1),t.qZA(),t.qZA(),t.qZA(),t.TgZ(4,"ion-content"),t.TgZ(5,"ion-grid",2),t.TgZ(6,"ion-row"),t.TgZ(7,"ion-col",3),t.TgZ(8,"ion-card"),t.TgZ(9,"ion-card-header"),t.TgZ(10,"ion-card-title",4),t._uU(11,"Rummy"),t.qZA(),t.TgZ(12,"ion-card-subtitle",4),t._uU(13),t.ALo(14,"translate"),t.qZA(),t.qZA(),t.TgZ(15,"ion-card-content"),t.YNc(16,A,2,1,"ion-list",5),t.ALo(17,"async"),t.YNc(18,v,3,3,"ion-list",5),t.ALo(19,"async"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&i&&(t.xp6(13),t.hij("",t.lcZ(14,3,"modules.analytics."+a.stat.name)," "),t.xp6(3),t.Q6J("ngIf",!0===t.lcZ(17,5,a.loading$)),t.xp6(2),t.Q6J("ngIf",!1===t.lcZ(19,7,a.loading$)))},directives:[o.Gu,o.sr,o.Sm,o.fG,o.W2,o.jY,o.Nd,o.wI,o.PM,o.Zi,o.Dq,o.tO,o.FN,m.O5,o.q_,m.sg,o.Ie,o.CK,m.PC,o.Q$,o.yW],pipes:[u.X$,m.Ov],styles:[""]}),n})()}];let P=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.Bz.forChild(R)],l.Bz]}),n})(),$=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[m.ez,d.u5,o.Pc,P,u.aw.forChild({extend:!0})]]}),n})()}}]);