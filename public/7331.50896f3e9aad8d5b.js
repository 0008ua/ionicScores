"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7331],{7331:(Je,q,a)=>{a.r(q),a.d(q,{GamePageModule:()=>$e});var l=a(6019),_=a(9133),r=a(4662),C=a(777),R=a(466),O=a(2668),p=a(8260),h=a(5305),T=a(8761),P=a(3051),G=a(7539),k=a(9204),A=a(8717),e=a(3668),Z=a(607),y=a(6382),M=a(3093),f=a(4762);const Q=function(n){return{"background-color":n}};function U(n,s){if(1&n){const o=e.EpF();e.TgZ(0,"ion-col",2),e.NdJ("click",function(){const c=e.CHM(o).$implicit;return e.oxw().onSelect(c)}),e._UZ(1,"div",3),e.qZA()}if(2&n){const o=s.$implicit;e.xp6(1),e.Q6J("ngStyle",e.VKq(1,Q,o))}}let b=(()=>{class n{constructor(o){this.popoverController=o}ngOnInit(){}dismiss(o){this.popoverController.dismiss(o)}onSelect(o){this.dismiss({color:o})}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(r.Dh))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-select-color"]],inputs:{colors:"colors"},decls:5,vars:1,consts:[[1,"select-color"],["class","select-color__container",3,"click",4,"ngFor","ngForOf"],[1,"select-color__container",3,"click"],[1,"select-color__item",3,"ngStyle"]],template:function(o,t){1&o&&(e.TgZ(0,"ion-card"),e.TgZ(1,"ion-card-content"),e.TgZ(2,"ion-grid"),e.TgZ(3,"ion-row",0),e.YNc(4,U,2,3,"ion-col",1),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o&&(e.xp6(4),e.Q6J("ngForOf",t.colors))},directives:[r.PM,r.FN,r.jY,r.Nd,l.sg,r.wI,l.PC],styles:[""]}),n})();var u=a(3085);const Y=function(n){return{"background-color":n}};let H=(()=>{class n{constructor(o){this.popoverController=o,this.playersColors=p.N.games.train.playersColors,this.color=this.playersColors[0]}ngOnInit(){}presentPopover(o,t,i){return(0,f.mG)(this,void 0,void 0,function*(){const c=yield this.popoverController.create({component:t,cssClass:"select-color-popover",componentProps:i,translucent:!0});return yield c.present(),yield c.onDidDismiss()})}showSelectColorPopup(o){return(0,f.mG)(this,void 0,void 0,function*(){const{data:t}=yield this.presentPopover(o,b,{colors:this.playersColors});if(t){const{color:i}=t;this.color=i}})}dismiss(o){this.popoverController.dismiss(o)}onCreate(){this.dismiss({gamer:{color:this.color,name:this.name}})}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(r.Dh))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-create-gamer"]],decls:26,vars:17,consts:[["slot","end"],[3,"click"],["lines","none"],[1,"players-list"],[1,"players-list__color"],[1,"select-color",3,"ngStyle","click"],[1,"players-list__name"],["clearInput","",3,"placeholder","ngModel","ngModelChange"],["expand","block",3,"disabled","click"]],template:function(o,t){1&o&&(e.TgZ(0,"ion-header"),e.TgZ(1,"ion-toolbar"),e.TgZ(2,"ion-title"),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"ion-buttons",0),e.TgZ(6,"ion-button",1),e.NdJ("click",function(){return t.dismiss()}),e._uU(7),e.ALo(8,"translate"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(9,"ion-content"),e.TgZ(10,"ion-card"),e.TgZ(11,"ion-card-content"),e.TgZ(12,"ion-list"),e.TgZ(13,"ion-item",2),e.TgZ(14,"div",3),e.TgZ(15,"div",4),e.TgZ(16,"div",5),e.NdJ("click",function(c){return t.showSelectColorPopup(c)}),e.qZA(),e.qZA(),e.TgZ(17,"div",6),e.TgZ(18,"ion-item"),e.TgZ(19,"ion-input",7),e.NdJ("ngModelChange",function(c){return t.name=c}),e.ALo(20,"translate"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(21,"ion-row"),e.TgZ(22,"ion-col"),e.TgZ(23,"ion-button",8),e.NdJ("click",function(){return t.onCreate()}),e._uU(24),e.ALo(25,"translate"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o&&(e.xp6(3),e.Oqu(e.lcZ(4,7,"modules.games.createGamer")),e.xp6(4),e.hij(" ",e.lcZ(8,9,"elements.button.close")," "),e.xp6(9),e.Q6J("ngStyle",e.VKq(15,Y,t.color)),e.xp6(3),e.Q6J("placeholder",e.lcZ(20,11,"modules.user.name"))("ngModel",t.name),e.xp6(4),e.Q6J("disabled",!t.name),e.xp6(1),e.hij(" ",e.lcZ(25,13,"elements.button.create")," "))},directives:[r.Gu,r.sr,r.wd,r.Sm,r.YG,r.W2,r.PM,r.FN,r.q_,r.Ie,l.PC,r.pK,r.j9,_.JJ,_.On,r.Nd,r.wI],pipes:[u.X$],styles:[""]}),n})();var v=a(5803),j=a(9973);function B(n,s){if(1&n&&(e.TgZ(0,"ion-select-option",15),e._uU(1),e.qZA()),2&n){const o=s.$implicit;e.Q6J("value",o),e.xp6(1),e.hij(" ",o.name," ")}}const z=function(n){return{"background-color":n}};function E(n,s){if(1&n){const o=e.EpF();e.TgZ(0,"ion-item-sliding",9),e.TgZ(1,"ion-item",9),e.TgZ(2,"div",10),e.TgZ(3,"div",11),e.TgZ(4,"div",12),e.NdJ("click",function(i){const d=e.CHM(o).index,m=e.oxw();return m.filtredColors.length>1?m.showSelectColorPopup(i,d):null}),e.qZA(),e.qZA(),e.TgZ(5,"div",13),e.TgZ(6,"ion-item"),e.TgZ(7,"ion-select",14),e.NdJ("ionChange",function(i){const d=e.CHM(o).index;return e.oxw().choosePlayerHandler(i,d)}),e.TgZ(8,"ion-select-option",15),e._uU(9),e.qZA(),e.YNc(10,B,2,2,"ion-select-option",16),e.qZA(),e.TgZ(11,"ion-note",17),e._UZ(12,"ion-icon",18),e._UZ(13,"ion-icon",19),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(14,"ion-item-options",20),e.TgZ(15,"ion-item-option",21),e.NdJ("click",function(){const c=e.CHM(o).$implicit;return e.oxw().removePlayerHandler(c._id)}),e._uU(16),e.ALo(17,"translate"),e.qZA(),e.qZA(),e.qZA()}if(2&n){const o=s.$implicit,t=e.oxw();e.xp6(4),e.Q6J("ngStyle",e.VKq(8,z,null==o?null:o.color)),e.xp6(3),e.Q6J("value",o),e.xp6(1),e.Q6J("value",o),e.xp6(1),e.hij(" ",o.name," "),e.xp6(1),e.Q6J("ngForOf",t.filtredGamers),e.xp6(6),e.Oqu(e.lcZ(17,6,"elements.button.remove"))}}let $=(()=>{class n{constructor(o,t,i,c,d,m){this.store=o,this.translate=t,this.gamerService=i,this.popoverController=c,this.alertController=d,this.sharedService=m,this.environment=p.N,this.gamers=[],this.filtredGamers=[],this.players=[]}ngOnInit(){this.gameType$=this.store.select(h.Wn),this.gameType$.subscribe(o=>{var t,i;this.gameType=o,this.playersColors=null===(t=p.N.games[o])||void 0===t?void 0:t.playersColors,this.filtredColors=null===(i=p.N.games[o])||void 0===i?void 0:i.playersColors}),this.players$=this.store.select(P.y1),this.players$.subscribe(o=>{this.players=o,this.filter()}),this.gamers$=this.gamerService.entities$,this.gamers$.subscribe(o=>{this.gamers=o,this.filter()})}startGameHandler(){this.sharedService.createRounds(this.gameType)}presentPopover(o,t,i){return(0,f.mG)(this,void 0,void 0,function*(){const c=yield this.popoverController.create({component:t,cssClass:"select-color-popover",componentProps:i,translucent:!0});return yield c.present(),yield c.onDidDismiss()})}showSelectColorPopup(o,t){return(0,f.mG)(this,void 0,void 0,function*(){const{data:i}=yield this.presentPopover(o,b,{colors:this.filtredColors});if(i){const{color:c}=i;this.chooseColorHandler(c,t)}})}showCreateGamerPopup(o){return(0,f.mG)(this,void 0,void 0,function*(){const{data:t}=yield this.presentPopover(o,H,null);if(t){const{gamer:i}=t;console.log("gamer",t),this.createGamerHandler(i)}})}filter(){var o;this.filtredGamers=this.gamers.filter(i=>{for(const c of this.players)if(c._id===i._id)return!1;return!0});const t=null===(o=this.playersColors)||void 0===o?void 0:o.filter((i,c)=>{for(const d of this.players)if(d.color===i)return!1;return!0});this.filtredColors=(null==t?void 0:t.length)?t:this.filtredColors}choosePlayerHandler(o,t){const i=this.players.map((c,d)=>d===t?this.filtredColors.includes(this.filtredGamers[0].color)?o.target.value:Object.assign(Object.assign({},o.target.value),{color:this.filtredColors[0]}):c);this.store.dispatch(v.K9({players:i}))}chooseColorHandler(o,t){this.players=this.players.map((i,c)=>c===t?Object.assign(Object.assign({},i),{color:o}):i),this.filter()}removePlayerHandler(o){this.store.dispatch(v.WQ({id:o}))}removeAllPlayersHandler(){this.store.dispatch(v.dO())}addPlayerHandler(o=!0){if(!this.filtredGamers.length)return;let t=this.filtredGamers[0];o||(t=this.filtredGamers[this.filtredGamers.length-1]),this.filtredColors.includes(t.color)?this.store.dispatch(v.KM({player:Object.assign({},t)})):this.store.dispatch(v.KM({player:Object.assign(Object.assign({},t),{color:this.filtredColors[0]})}))}createGamerHandler(o){this.gamerService.add(o).subscribe(t=>{console.log(t)})}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(Z.yh),e.Y36(u.sK),e.Y36(j.E),e.Y36(r.Dh),e.Y36(r.Br),e.Y36(y.F))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-choose-players"]],decls:29,vars:22,consts:[[1,"ion-text-center"],[1,"choose-players"],[1,"choose-players__list"],["lines","none",4,"ngFor","ngForOf"],[1,"choose-players__btn-block"],["expand","block","fill","outline","size","small","color","secondary",3,"disabled","click"],["expand","block","fill","outline","size","small","color","success",3,"disabled","click"],["expand","block","fill","outline","size","small","color","danger",3,"click"],["expand","block",3,"disabled","click"],["lines","none"],[1,"players-list"],[1,"players-list__color"],[1,"select-color",3,"ngStyle","click"],[1,"players-list__name"],["placeholder","Select One","interface","popover","slot","end",3,"value","ionChange"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],["slot","end","color","danger"],["name","trash-outline"],["name","caret-back-outline"],["side","end"],["color","danger",3,"click"]],template:function(o,t){1&o&&(e.TgZ(0,"ion-card"),e.TgZ(1,"ion-card-header"),e.TgZ(2,"ion-card-title",0),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"ion-card-subtitle",0),e._uU(6),e.qZA(),e.qZA(),e.TgZ(7,"ion-card-content",1),e.TgZ(8,"ion-list",2),e.YNc(9,E,18,10,"ion-item-sliding",3),e.ALo(10,"async"),e.qZA(),e.TgZ(11,"ion-row",4),e.TgZ(12,"ion-col"),e.TgZ(13,"ion-button",5),e.NdJ("click",function(){return t.addPlayerHandler()}),e._uU(14),e.ALo(15,"translate"),e.qZA(),e.qZA(),e.TgZ(16,"ion-col"),e.TgZ(17,"ion-button",6),e.NdJ("click",function(c){return t.showCreateGamerPopup(c)}),e._uU(18),e.ALo(19,"translate"),e.qZA(),e.qZA(),e.TgZ(20,"ion-col"),e.TgZ(21,"ion-button",7),e.NdJ("click",function(){return t.removeAllPlayersHandler()}),e._uU(22),e.ALo(23,"translate"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(24,"ion-row",4),e.TgZ(25,"ion-col"),e.TgZ(26,"ion-button",8),e.NdJ("click",function(){return t.startGameHandler()}),e._uU(27),e.ALo(28,"translate"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o&&(e.xp6(3),e.Oqu(e.lcZ(4,10,"modules.games.addPlayers")),e.xp6(3),e.Oqu(null==t.environment.games[t.gameType]?null:t.environment.games[t.gameType].name),e.xp6(3),e.Q6J("ngForOf",e.lcZ(10,12,t.players$)),e.xp6(4),e.Q6J("disabled",t.players.length>=5),e.xp6(1),e.hij(" ",e.lcZ(15,14,"elements.button.add")," "),e.xp6(3),e.Q6J("disabled",t.players.length>=5),e.xp6(1),e.hij(" ",e.lcZ(19,16,"elements.button.create")," "),e.xp6(4),e.hij(" ",e.lcZ(23,18,"elements.button.removeAll")," "),e.xp6(4),e.Q6J("disabled",t.players.length<2),e.xp6(1),e.hij(" ",e.lcZ(28,20,"elements.button.startGame")," "))},directives:[r.PM,r.Zi,r.Dq,r.tO,r.FN,r.q_,l.sg,r.Nd,r.wI,r.YG,r.td,r.Ie,l.PC,r.t9,r.QI,r.n0,r.uN,r.gu,r.IK,r.u8],pipes:[u.X$,l.Ov],styles:[""]}),n})();const g=new e.OlP("roundComponent"),D=function(n){return{"border-bottom":n}},X=["*"];let N=(()=>{class n{constructor(o,t){this.sharedService=o,this.store=t}ngOnInit(){this.loading$=this.store.select(h.NH),this.gameType$=this.store.select(h.Wn),this.gameType$.subscribe(o=>this.gameType=o)}getRoundById(){return this.sharedService.getRoundById(this.roundId)}calcScores(){var o;return null===(o=this.getMemberByPlayerId())||void 0===o?void 0:o.scoresLine.reduce((t,i)=>t+i,0)}getPlayerColor(){return this.sharedService.getPlayerColor(this.playerId)}getPlayerName(){return this.sharedService.getPlayerName(this.playerId)}getMemberByPlayerId(){return this.sharedService.getMemberByPlayerId(this.playerId,this.roundId)}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(y.F),e.Y36(Z.yh))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-round-wrapper"]],contentQueries:function(o,t,i){if(1&o&&e.Suo(i,g,7),2&o){let c;e.iGM(c=e.CRH())&&(t.roundComponent=c.first)}},inputs:{playerId:"playerId",roundId:"roundId"},ngContentSelectors:X,decls:15,vars:12,consts:[[3,"ngStyle"],[1,"round-subtitle"],["color","primary",1,"round-subtitle__icon",3,"name"],[1,"ion-text-capitalize","round-subtitle__text"],[1,"round-subtitle__blank"],[1,"ion-text-center"]],template:function(o,t){if(1&o&&(e.F$t(),e.TgZ(0,"ion-card"),e.TgZ(1,"ion-card-header",0),e.TgZ(2,"ion-card-subtitle"),e.TgZ(3,"span",1),e._UZ(4,"ion-icon",2),e.TgZ(5,"span",3),e._uU(6),e.ALo(7,"translate"),e.ALo(8,"async"),e.qZA(),e._UZ(9,"span",4),e.TgZ(10,"span"),e._uU(11),e.qZA(),e.qZA(),e.qZA(),e.TgZ(12,"ion-card-title",5),e._uU(13),e.qZA(),e.qZA(),e.Hsn(14),e.qZA()),2&o){let i,c;e.xp6(1),e.Q6J("ngStyle",e.VKq(10,D,"2px solid "+t.getPlayerColor())),e.xp6(3),e.Q6J("name",null==(i=t.getRoundById())?null:i.icon),e.xp6(2),e.AsE(" ",e.lcZ(7,6,"games."+e.lcZ(8,8,t.gameType$)+"."+(null==(c=t.getRoundById())?null:c.name))," ",null==(c=t.getRoundById())?null:c.namePostfix," "),e.xp6(5),e.Oqu(t.calcScores()),e.xp6(2),e.Oqu(t.getPlayerName())}},directives:[r.PM,r.Zi,l.PC,r.tO,r.gu,r.Dq],pipes:[u.X$,l.Ov],styles:[""]}),n})(),x=(()=>{class n{constructor(o){this.sharedService=o.get(y.F)}getMemberByPlayerId(){return this.sharedService.getMemberByPlayerId(this.playerId,this.roundId)}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(e.zs3))},n.\u0275dir=e.lG2({type:n,selectors:[["","appRound",""]],inputs:{playerId:"playerId",roundId:"roundId"}}),n})(),I=(()=>{class n extends x{constructor(o){super(o)}addToScoresLine(o){this.sharedService.addToScoresLine(o,this.playerId,this.roundId)}removeFromScoresLine(o){this.sharedService.removeFromScoresLine(o,this.playerId,this.roundId)}addToNamedScoresLine(o){this.sharedService.addToNamedScoresLine(o,this.playerId,this.roundId)}removeFromNamedScoresLine(o){this.sharedService.removeFromNamedScoresLine(o,this.playerId,this.roundId)}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(e.zs3))},n.\u0275dir=e.lG2({type:n,selectors:[["","appRoundScoresLine",""]],features:[e.qOj]}),n})();function W(n,s){if(1&n){const o=e.EpF();e.TgZ(0,"ion-col",4),e.TgZ(1,"img",5),e.NdJ("click",function(){const c=e.CHM(o).$implicit;return e.oxw().addToNamedScoresLine(c)}),e.qZA(),e.qZA()}if(2&n){const o=s.$implicit;e.xp6(1),e.Q6J("src",o.picture,e.LSH)("alt",o.name)}}function K(n,s){if(1&n){const o=e.EpF();e.TgZ(0,"ion-col",6),e.TgZ(1,"img",7),e.NdJ("click",function(){const c=e.CHM(o).$implicit;return e.oxw().removeFromNamedScoresLine(c)}),e.qZA(),e.qZA()}if(2&n){const o=s.$implicit;e.xp6(1),e.Q6J("src",o.picture,e.LSH)("alt",o.name)}}let V=(()=>{class n extends I{constructor(o){super(o),this.namedScoresEnv=p.N.games.uno.namedScores,this.namedScoreLine=[]}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(e.zs3))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-round-uno"]],features:[e._Bn([{provide:g,useExisting:n}]),e.qOj],decls:5,vars:2,consts:[[1,"round","round_tools"],["size","2.4",4,"ngFor","ngForOf"],[1,"round","round_result"],["size","1",4,"ngFor","ngForOf"],["size","2.4"],[1,"uno-round-img",3,"src","alt","click"],["size","1"],[3,"src","alt","click"]],template:function(o,t){if(1&o&&(e.TgZ(0,"ion-card-content"),e.TgZ(1,"ion-row",0),e.YNc(2,W,2,2,"ion-col",1),e.qZA(),e.TgZ(3,"ion-row",2),e.YNc(4,K,2,2,"ion-col",3),e.qZA(),e.qZA()),2&o){let i;e.xp6(2),e.Q6J("ngForOf",t.namedScoresEnv),e.xp6(2),e.Q6J("ngForOf",null==(i=t.getMemberByPlayerId())?null:i.namedScoresLine)}},directives:[r.FN,r.Nd,l.sg,r.wI],styles:[""]}),n})();function ee(n,s){1&n&&e._UZ(0,"app-choose-players")}function oe(n,s){if(1&n&&(e.TgZ(0,"app-round-wrapper",2),e.ALo(1,"async"),e.ALo(2,"async"),e._UZ(3,"app-round-uno",2),e.ALo(4,"async"),e.ALo(5,"async"),e.qZA()),2&n){const o=e.oxw();e.Q6J("roundId",e.lcZ(1,4,o.activeRoundId$))("playerId",e.lcZ(2,6,o.activePlayerId$)),e.xp6(3),e.Q6J("roundId",e.lcZ(4,8,o.activeRoundId$))("playerId",e.lcZ(5,10,o.activePlayerId$))}}let ne=(()=>{class n{constructor(o,t){this.store=o,this.sharedService=t,this.roundsCfg=p.N.games.train.rounds,this.inverse={}}ngOnInit(){this.rounds$=this.store.select(T.PK)}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(Z.yh),e.Y36(y.F))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-uno-rounds"]],inputs:{activeRoundId$:"activeRoundId$",activePlayerId$:"activePlayerId$"},decls:5,vars:6,consts:[[4,"ngIf","ngIfElse"],["restRounds",""],[3,"roundId","playerId"]],template:function(o,t){if(1&o&&(e.YNc(0,ee,1,0,"app-choose-players",0),e.ALo(1,"async"),e.ALo(2,"async"),e.YNc(3,oe,6,12,"ng-template",null,1,e.W1O)),2&o){const i=e.MAs(4);e.Q6J("ngIf","start"===e.lcZ(1,2,t.activeRoundId$)&&0===e.lcZ(2,4,t.rounds$).length)("ngIfElse",i)}},directives:[l.O5,$,N,V],pipes:[l.Ov],styles:[""]}),n})();function te(n,s){if(1&n){const o=e.EpF();e.TgZ(0,"ion-col",2),e.TgZ(1,"ion-chip",3),e.NdJ("click",function(){const c=e.CHM(o).$implicit,d=e.oxw();return d.addToNamedScoresLine({value:c.value*d.inverse,name:c.name})}),e.TgZ(2,"ion-label"),e._uU(3),e.qZA(),e.qZA(),e.qZA()}if(2&n){const o=s.$implicit,t=e.oxw();e.xp6(1),e.Q6J("color",o.value>19?"secondary":"warning"),e.xp6(2),e.Oqu(o.value*t.inverse)}}function re(n,s){if(1&n){const o=e.EpF();e.TgZ(0,"ion-col",2),e.TgZ(1,"ion-chip",7),e.NdJ("click",function(){const c=e.CHM(o).$implicit;return e.oxw().removeFromNamedScoresLine({value:c.value,name:c.name})}),e.TgZ(2,"ion-label"),e._uU(3),e.qZA(),e._UZ(4,"ion-icon",8),e.qZA(),e.qZA()}if(2&n){const o=s.$implicit;e.xp6(1),e.Q6J("color",o.value>19?"secondary":"warning"),e.xp6(2),e.Oqu(o.name)}}let se=(()=>{class n extends I{constructor(o){super(o),this.routesScoresEnv=p.N.games.train.routesScores,this.inverse=1}ngOnInit(){}inverseScore(){this.inverse=-1*this.inverse}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(e.zs3))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-round-routes"]],inputs:{playerId:"playerId",roundId:"roundId"},features:[e._Bn([{provide:g,useExisting:n}]),e.qOj],decls:9,vars:3,consts:[[1,"round","round_tools"],["size","3",4,"ngFor","ngForOf"],["size","3"],[3,"color","click"],["name","add-outline"],["name","remove-outline"],[1,"round","round_result"],["outline","",3,"color","click"],["name","close-circle"]],template:function(o,t){1&o&&(e.TgZ(0,"ion-card-content"),e.TgZ(1,"ion-row",0),e.YNc(2,te,4,2,"ion-col",1),e.TgZ(3,"ion-col",2),e.TgZ(4,"ion-chip",3),e.NdJ("click",function(){return t.inverseScore()}),e._UZ(5,"ion-icon",4),e._UZ(6,"ion-icon",5),e.qZA(),e.qZA(),e.qZA(),e.TgZ(7,"ion-row",6),e.YNc(8,re,5,2,"ion-col",1),e.qZA(),e.qZA()),2&o&&(e.xp6(2),e.Q6J("ngForOf",t.routesScoresEnv),e.xp6(2),e.Q6J("color","danger"),e.xp6(4),e.Q6J("ngForOf",t.getMemberByPlayerId().namedScoresLine))},directives:[r.FN,r.Nd,l.sg,r.wI,r.hM,r.gu,r.Q$],styles:[""]}),n})(),ie=(()=>{class n extends x{constructor(o){super(o),this.longestRouteScoreEnv=p.N.games.train.longestRouteScore}ngOnInit(){}onMarkLongestHandler(o){this.sharedService.setScoresLine(o.target.checked?[this.longestRouteScoreEnv]:[],this.playerId,this.roundId)}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(e.zs3))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-round-length"]],features:[e._Bn([{provide:g,useExisting:n}]),e.qOj],decls:7,vars:4,consts:[[1,"round","round_tools"],[3,"checked","ionChange"]],template:function(o,t){if(1&o&&(e.TgZ(0,"ion-card-content"),e.TgZ(1,"ion-row"),e.TgZ(2,"ion-col",0),e.TgZ(3,"div"),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.TgZ(6,"ion-toggle",1),e.NdJ("ionChange",function(c){return t.onMarkLongestHandler(c)}),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o){let i;e.xp6(4),e.Oqu(e.lcZ(5,2,"games.train.longestRoute")),e.xp6(2),e.Q6J("checked",null==(i=t.getMemberByPlayerId())?null:i.scoresLine.length)}},directives:[r.FN,r.Nd,r.wI,r.ho,r.w],pipes:[u.X$],styles:[""]}),n})(),ce=(()=>{class n extends x{constructor(o){super(o)}ngOnInit(){}addToScoresLine(o){this.sharedService.addToScoresLine(o,this.playerId,this.roundId)}removeFromScoresLine(o){this.sharedService.removeFromScoresLine(o,this.playerId,this.roundId)}calcScores(){return this.getMemberByPlayerId().scoresLine.reduce((o,t)=>o+t,0)}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(e.zs3))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-round-stations"]],features:[e._Bn([{provide:g,useExisting:n}]),e.qOj],decls:15,vars:6,consts:[[1,"round","round_tools"],[1,"round_tools__score"],[1,"round_tools__btn"],[1,"incDecBtn"],["shape","round","color","danger","fill","outline",3,"disabled","click"],["name","remove-outline"],[1,"incDecBtn__caption"],["shape","round","color","success","fill","outline",3,"disabled","click"],["name","add-outline"]],template:function(o,t){1&o&&(e.TgZ(0,"ion-card-content"),e.TgZ(1,"ion-row",0),e.TgZ(2,"ion-col",1),e.TgZ(3,"ion-label"),e._uU(4),e.qZA(),e.qZA(),e.TgZ(5,"ion-col",2),e.TgZ(6,"div",3),e.TgZ(7,"ion-button",4),e.NdJ("click",function(){return t.addToScoresLine(4)}),e._UZ(8,"ion-icon",5),e.qZA(),e.TgZ(9,"span",6),e.TgZ(10,"div"),e._uU(11),e.ALo(12,"translate"),e.qZA(),e.qZA(),e.TgZ(13,"ion-button",7),e.NdJ("click",function(){return t.removeFromScoresLine(4)}),e._UZ(14,"ion-icon",8),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o&&(e.xp6(4),e.Oqu(3-t.calcScores()/4),e.xp6(3),e.Q6J("disabled",t.getMemberByPlayerId().scoresLine.length>=3),e.xp6(4),e.Oqu(e.lcZ(12,4,"games.train.stationsShort")),e.xp6(2),e.Q6J("disabled",t.getMemberByPlayerId().scoresLine.length<=0))},directives:[r.FN,r.Nd,r.wI,r.Q$,r.YG,r.gu],pipes:[u.X$],styles:[""]}),n})();function le(n,s){if(1&n){const o=e.EpF();e.TgZ(0,"ion-row",1),e.TgZ(1,"ion-col",2),e.TgZ(2,"ion-label"),e._uU(3),e.qZA(),e.qZA(),e.TgZ(4,"ion-col",3),e.TgZ(5,"div",4),e.TgZ(6,"ion-button",5),e.NdJ("click",function(){const c=e.CHM(o).$implicit;return e.oxw().removeFromScoresLine(c.value)}),e._UZ(7,"ion-icon",6),e.qZA(),e.TgZ(8,"span",7),e._UZ(9,"ion-icon",8),e._uU(10),e.qZA(),e.TgZ(11,"ion-button",9),e.NdJ("click",function(){const c=e.CHM(o).$implicit;return e.oxw().addToScoresLine(c.value)}),e._UZ(12,"ion-icon",10),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&n){const o=s.$implicit,t=e.oxw();e.xp6(3),e.Oqu(t.calcQtyOfArrItems(o.value)),e.xp6(7),e.hij(" ",o.name," ")}}let ae=(()=>{class n extends I{constructor(o){super(o),this.carsScoresEnv=p.N.games.train.carsScores}ngOnInit(){}calcQtyOfArrItems(o){return this.sharedService.calcQtyOfArrItems(o,this.playerId,this.roundId)}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(e.zs3))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-round-cars"]],features:[e._Bn([{provide:g,useExisting:n}]),e.qOj],decls:2,vars:1,consts:[["class","round round_tools",4,"ngFor","ngForOf"],[1,"round","round_tools"],[1,"round_tools__score"],[1,"round_tools__btn"],[1,"incDecBtn"],["shape","round","color","danger","fill","outline",3,"click"],["name","remove-outline"],[1,"incDecBtn__caption"],["name","train-outline"],["shape","round","color","success","fill","outline",3,"click"],["name","add-outline"]],template:function(o,t){1&o&&(e.TgZ(0,"ion-card-content"),e.YNc(1,le,13,2,"ion-row",0),e.qZA()),2&o&&(e.xp6(1),e.Q6J("ngForOf",t.carsScoresEnv))},directives:[r.FN,l.sg,r.Nd,r.wI,r.Q$,r.YG,r.gu],styles:[""]}),n})();function de(n,s){1&n&&e._UZ(0,"app-choose-players")}function ue(n,s){if(1&n&&(e._UZ(0,"app-round-routes",4),e.ALo(1,"async"),e.ALo(2,"async")),2&n){const o=e.oxw(2);e.Q6J("roundId",e.lcZ(1,2,o.activeRoundId$))("playerId",e.lcZ(2,4,o.activePlayerId$))}}function pe(n,s){if(1&n&&(e._UZ(0,"app-round-length",4),e.ALo(1,"async"),e.ALo(2,"async")),2&n){const o=e.oxw(2);e.Q6J("roundId",e.lcZ(1,2,o.activeRoundId$))("playerId",e.lcZ(2,4,o.activePlayerId$))}}function me(n,s){if(1&n&&(e._UZ(0,"app-round-stations",4),e.ALo(1,"async"),e.ALo(2,"async")),2&n){const o=e.oxw(2);e.Q6J("roundId",e.lcZ(1,2,o.activeRoundId$))("playerId",e.lcZ(2,4,o.activePlayerId$))}}function _e(n,s){if(1&n&&(e._UZ(0,"app-round-cars",4),e.ALo(1,"async"),e.ALo(2,"async")),2&n){const o=e.oxw(2);e.Q6J("roundId",e.lcZ(1,2,o.activeRoundId$))("playerId",e.lcZ(2,4,o.activePlayerId$))}}function ge(n,s){if(1&n&&(e.TgZ(0,"app-round-wrapper",2),e.ALo(1,"async"),e.ALo(2,"async"),e.ALo(3,"async"),e.YNc(4,ue,3,6,"app-round-routes",3),e.YNc(5,pe,3,6,"app-round-length",3),e.YNc(6,me,3,6,"app-round-stations",3),e.YNc(7,_e,3,6,"app-round-cars",3),e.qZA()),2&n){const o=e.oxw();e.Q6J("ngSwitch",e.lcZ(1,7,o.activeRoundId$))("roundId",e.lcZ(2,9,o.activeRoundId$))("playerId",e.lcZ(3,11,o.activePlayerId$)),e.xp6(4),e.Q6J("ngSwitchCase","routes"),e.xp6(1),e.Q6J("ngSwitchCase","length"),e.xp6(1),e.Q6J("ngSwitchCase","stations"),e.xp6(1),e.Q6J("ngSwitchCase","cars")}}let he=(()=>{class n{constructor(o){this.store=o}ngOnInit(){this.rounds$=this.store.select(T.PK)}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(Z.yh))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-train-rounds"]],inputs:{activeRoundId$:"activeRoundId$",activePlayerId$:"activePlayerId$"},decls:5,vars:6,consts:[[4,"ngIf","ngIfElse"],["restRounds",""],[3,"ngSwitch","roundId","playerId"],[3,"roundId","playerId",4,"ngSwitchCase"],[3,"roundId","playerId"]],template:function(o,t){if(1&o&&(e.YNc(0,de,1,0,"app-choose-players",0),e.ALo(1,"async"),e.ALo(2,"async"),e.YNc(3,ge,8,13,"ng-template",null,1,e.W1O)),2&o){const i=e.MAs(4);e.Q6J("ngIf","start"===e.lcZ(1,2,t.activeRoundId$)&&0===e.lcZ(2,4,t.rounds$).length)("ngIfElse",i)}},directives:[l.O5,$,N,l.RF,l.n9,se,ie,ce,ae],pipes:[l.Ov],styles:[""]}),n})();function Ze(n,s){if(1&n&&(e.TgZ(0,"ion-segment-button",8),e.ALo(1,"async"),e.ALo(2,"async"),e._UZ(3,"ion-icon",9),e.qZA()),2&n){const o=s.$implicit,t=e.oxw();e.Q6J("value",o._id)("disabled","start"===o._id&&e.lcZ(1,3,t.rounds$).length||"start"!==o._id&&0===e.lcZ(2,5,t.rounds$).length||"start"!==o._id&&2===t.roundsCfg.length),e.xp6(3),e.Q6J("name",o.icon)}}const ye=function(n){return{"active-player":n}},fe=function(n){return{"border-left":n,"padding-left":"10px"}},ve=function(n){return{"border-right":n,"padding-right":"10px"}};function Ce(n,s){if(1&n){const o=e.EpF();e.TgZ(0,"ion-item",15),e.NdJ("click",function(){const c=e.CHM(o).$implicit;return e.oxw(2).selectPlayer(c._id)}),e.ALo(1,"async"),e.TgZ(2,"ion-label",16),e._uU(3),e.qZA(),e.TgZ(4,"div",17),e._uU(5),e.qZA(),e.qZA()}if(2&n){const o=s.$implicit,t=e.oxw(2);e.Q6J("ngClass",e.VKq(7,ye,o._id===e.lcZ(1,5,t.activePlayerId$))),e.xp6(2),e.Q6J("ngStyle",e.VKq(9,fe,"6px solid "+o.color)),e.xp6(1),e.hij(" ",o.name," "),e.xp6(1),e.Q6J("ngStyle",e.VKq(11,ve,"6px solid "+o.color)),e.xp6(1),e.hij(" ",t.getPlayerTotalScores(o._id)," ")}}function Te(n,s){if(1&n){const o=e.EpF();e.TgZ(0,"ion-button",18),e.NdJ("click",function(){return e.CHM(o),e.oxw(2).openNextRound()}),e._uU(1),e.ALo(2,"translate"),e.qZA()}2&n&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"elements.button.nextRound")," "))}function Ae(n,s){if(1&n){const o=e.EpF();e.TgZ(0,"ion-card"),e.TgZ(1,"ion-card-header"),e.TgZ(2,"ion-card-title",10),e._uU(3,"Uno"),e.qZA(),e.qZA(),e.TgZ(4,"ion-card-content"),e.TgZ(5,"ion-list"),e.YNc(6,Ce,6,13,"ion-item",11),e.qZA(),e.TgZ(7,"ion-row",12),e.TgZ(8,"ion-button",13),e.NdJ("click",function(){return e.CHM(o),e.oxw().onFinishGameHandler()}),e.ALo(9,"async"),e.ALo(10,"async"),e._uU(11),e.ALo(12,"translate"),e.qZA(),e.TgZ(13,"ion-button",13),e.NdJ("click",function(){return e.CHM(o),e.oxw().onCancelGameHandler()}),e.ALo(14,"async"),e.ALo(15,"async"),e._uU(16),e.ALo(17,"translate"),e.qZA(),e.YNc(18,Te,3,3,"ion-button",14),e.qZA(),e.qZA(),e.qZA()}if(2&n){const o=e.oxw();e.xp6(6),e.Q6J("ngForOf",o.playersWithTotal),e.xp6(2),e.Q6J("disabled",0===e.lcZ(9,6,o.rounds$).length||e.lcZ(10,8,o.loading$)),e.xp6(3),e.hij(" ",e.lcZ(12,10,"elements.button.finishGame")," "),e.xp6(2),e.Q6J("disabled",0===e.lcZ(14,12,o.rounds$).length||e.lcZ(15,14,o.loading$)),e.xp6(3),e.hij(" ",e.lcZ(17,16,"elements.button.cancelGame")," "),e.xp6(2),e.Q6J("ngIf","uno"===o.gameType)}}function xe(n,s){if(1&n&&e._UZ(0,"app-uno-rounds",20),2&n){const o=e.oxw(2);e.Q6J("activeRoundId$",o.activeRoundId$)("activePlayerId$",o.activePlayerId$)}}function Ie(n,s){if(1&n&&e._UZ(0,"app-train-rounds",20),2&n){const o=e.oxw(2);e.Q6J("activeRoundId$",o.activeRoundId$)("activePlayerId$",o.activePlayerId$)}}function Se(n,s){if(1&n&&(e.TgZ(0,"ion-col",5),e.YNc(1,xe,1,2,"app-uno-rounds",19),e.ALo(2,"async"),e.YNc(3,Ie,1,2,"app-train-rounds",19),e.ALo(4,"async"),e.qZA()),2&n){const o=e.oxw();e.xp6(1),e.Q6J("ngIf","uno"===e.lcZ(2,2,o.gameType$)),e.xp6(2),e.Q6J("ngIf","train"===e.lcZ(4,4,o.gameType$))}}const qe=[{path:"",component:(()=>{class n{constructor(o,t,i,c){this.store=o,this.sharedService=t,this.route=i,this.gameService=c,this.activeRoundId$=new R.t(1),this.activePlayerId$=new R.t(1)}ngOnInit(){this.loading$=this.store.select(h.NH),this.gameType$=this.store.select(h.Wn),this.rounds$=this.store.select(T.PK),(0,O.aj)([this.gameType$,this.rounds$]).subscribe(([o,t])=>{!o||(this.gameType=o,this.roundsCfg=p.N.games[o].rounds,"uno"===o&&(this.unoRound=this.roundsCfg[1]),this.rounds=t,this.roundsCfg&&this.activeRoundId$.next(t.length?"uno"===this.gameType?this.roundsCfg[1]._id+(1===t.length?this.roundsCfg[1].namePostfix:t.length):this.roundsCfg[1]._id:this.roundsCfg[0]._id))}),this.roundMembers$=this.store.select(G.uW),this.players$=this.store.select(P.y1),this.players$.subscribe(o=>{this.activePlayerId$.next(o[0]._id)}),this.players$.pipe((0,k.w)(o=>(this.players=o,this.roundMembers$))).subscribe(o=>{this.roundMembers=o,this.playersWithTotal=this.players.map(t=>Object.assign(Object.assign({},t),{totalScore:this.getPlayerTotalScores(t._id)})).sort((t,i)=>i.totalScore-t.totalScore)}),this.activePlayerId$.subscribe(o=>this.activePlayerId=o),this.route.params.subscribe(o=>{})}getPlayerTotalScores(o){return this.sharedService.getPlayerTotalScores(o)}onMenuClickHandler(o){this.activeRoundId$.next(o.target.value)}onFinishGameHandler(){this.store.dispatch(A.V_({loading:!0}));const o=this.rounds.map(c=>{const d=c.roundMembers.map(m=>{const F=this.roundMembers.find(S=>S._id===m);return{_id:F.player,score:F.scoresLine.reduce((S,Ne)=>S+Ne,0)}});return{_id:c._id,players:d}}),t={_id:"result",players:this.players.map(c=>({_id:c._id,score:this.getPlayerTotalScores(c._id)}))},i={type:this.rounds[0].clientGame.type,rounds:[...o,t]};this.gameService.add(i).subscribe(c=>{this.onCancelGameHandler()},c=>this.store.dispatch(A.V_({loading:!1})))}onCancelGameHandler(){this.store.dispatch(A.GJ())}openNextRound(){this.sharedService.addRounds(this.unoRound)}selectPlayer(o){this.activePlayerId$.next(o)}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(Z.yh),e.Y36(y.F),e.Y36(C.gz),e.Y36(M.h))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-game"]],decls:17,vars:12,consts:[["slot","end"],["menu","games-menu"],["scrollable","",3,"value","ionChange"],[3,"value","disabled",4,"ngFor","ngForOf"],[1,"ion-no-margin","ion-no-padding"],["size-lg","6","size-md","8","size-sm","10","offset-lg","3","offset-md","2","offset-sm","1"],[4,"ngIf"],["size-lg","6","size-md","8","size-sm","10","offset-lg","3","offset-md","2","offset-sm","1",4,"ngIf"],[3,"value","disabled"],[3,"name"],[1,"ion-text-center"],[3,"ngClass","click",4,"ngFor","ngForOf"],[1,"ion-justify-content-around"],["fill","outline","size","small",3,"disabled","click"],["fill","outline","size","small",3,"click",4,"ngIf"],[3,"ngClass","click"],[3,"ngStyle"],["slot","end",3,"ngStyle"],["fill","outline","size","small",3,"click"],[3,"activeRoundId$","activePlayerId$",4,"ngIf"],[3,"activeRoundId$","activePlayerId$"]],template:function(o,t){1&o&&(e.TgZ(0,"ion-header"),e.TgZ(1,"ion-toolbar"),e.TgZ(2,"ion-buttons",0),e._UZ(3,"ion-menu-button",1),e.qZA(),e.TgZ(4,"ion-segment",2),e.NdJ("ionChange",function(c){return t.onMenuClickHandler(c)}),e.ALo(5,"async"),e.YNc(6,Ze,4,7,"ion-segment-button",3),e.qZA(),e.qZA(),e.qZA(),e.TgZ(7,"ion-content"),e.TgZ(8,"ion-grid",4),e.TgZ(9,"ion-row"),e.TgZ(10,"ion-col",5),e.YNc(11,Ae,19,18,"ion-card",6),e.ALo(12,"async"),e.qZA(),e.qZA(),e.TgZ(13,"ion-row"),e.YNc(14,Se,5,6,"ion-col",7),e.ALo(15,"async"),e.ALo(16,"async"),e.qZA(),e.qZA(),e.qZA()),2&o&&(e.xp6(4),e.Q6J("value",e.lcZ(5,4,t.activeRoundId$)),e.xp6(2),e.Q6J("ngForOf",t.roundsCfg),e.xp6(5),e.Q6J("ngIf",0!==e.lcZ(12,6,t.rounds$).length),e.xp6(3),e.Q6J("ngIf",e.lcZ(15,8,t.activeRoundId$)&&e.lcZ(16,10,t.activePlayerId$)))},directives:[r.Gu,r.sr,r.Sm,r.fG,r.cJ,r.QI,l.sg,r.W2,r.jY,r.Nd,r.wI,l.O5,r.GO,r.gu,r.PM,r.Zi,r.Dq,r.FN,r.q_,r.YG,r.Ie,l.mk,r.Q$,l.PC,ne,he],pipes:[l.Ov,u.X$],styles:[""]}),n})()}];let Re=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[C.Bz.forChild(qe)],C.Bz]}),n})();var J=a(1173);let L=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[_.u5,l.ez,r.Pc,u.aw.forChild({extend:!0})]]}),n})(),w=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[l.ez,_.u5,r.Pc,u.aw.forChild({extend:!0})]]}),n})(),Pe=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[l.ez,_.u5,r.Pc,J.D,u.aw.forChild({extend:!0}),L,w]]}),n})(),be=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[l.ez,_.u5,r.Pc,J.D,u.aw.forChild({extend:!0}),L,w]]}),n})(),$e=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[l.ez,_.u5,r.Pc,Re,u.aw.forChild({extend:!0}),Pe,be]]}),n})()}}]);