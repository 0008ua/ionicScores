"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4335],{4335:(de,v,a)=>{a.r(v),a.d(v,{TrainPageModule:()=>le});var _=a(6019),g=a(9133),r=a(4662),m=a(1880),S=a(4099),A=a(9204),b=a(3783),u=a(8260),T=a(8761),q=a(7539),f=a(3051),e=a(3668),y=a(607),P=a(6382),M=a(3093),$=a(5722),C=a(8775),h=a(4762);const O=function(t){return{"background-color":t}};function w(t,c){if(1&t){const o=e.EpF();e.TgZ(0,"ion-col",2),e.NdJ("click",function(){const s=e.CHM(o).$implicit;return e.oxw().onSelect(s)}),e._UZ(1,"div",3),e.qZA()}if(2&t){const o=c.$implicit;e.xp6(1),e.Q6J("ngStyle",e.VKq(1,O,o))}}let J=(()=>{class t{constructor(o){this.popoverController=o}ngOnInit(){}dismiss(o){this.popoverController.dismiss(o)}onSelect(o){this.dismiss({color:o})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(r.Dh))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-select-color"]],inputs:{colors:"colors"},decls:5,vars:1,consts:[[1,"select-color"],["class","select-color__container",3,"click",4,"ngFor","ngForOf"],[1,"select-color__container",3,"click"],[1,"select-color__item",3,"ngStyle"]],template:function(o,n){1&o&&(e.TgZ(0,"ion-card"),e.TgZ(1,"ion-card-content"),e.TgZ(2,"ion-grid"),e.TgZ(3,"ion-row",0),e.YNc(4,w,2,3,"ion-col",1),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o&&(e.xp6(4),e.Q6J("ngForOf",n.colors))},directives:[r.PM,r.FN,r.jY,r.Nd,_.sg,r.wI,_.PC],styles:[""]}),t})();var p=a(3085);const N=function(t){return{"background-color":t}};let k=(()=>{class t{constructor(o){this.popoverController=o,this.playersColors=u.N.games.train.playersColors,this.color=this.playersColors[0]}ngOnInit(){}presentPopover(o,n,i){return(0,h.mG)(this,void 0,void 0,function*(){const s=yield this.popoverController.create({component:n,cssClass:"select-color-popover",componentProps:i,translucent:!0});return yield s.present(),yield s.onDidDismiss()})}showSelectColorPopup(o){return(0,h.mG)(this,void 0,void 0,function*(){const{data:n}=yield this.presentPopover(o,J,{colors:this.playersColors});if(n){const{color:i}=n;this.color=i}})}dismiss(o){this.popoverController.dismiss(o)}onCreate(){this.dismiss({gamer:{color:this.color,name:this.name}})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(r.Dh))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-create-gamer"]],decls:26,vars:17,consts:[["slot","end"],[3,"click"],["lines","none"],[1,"choose-players"],[1,"choose-players__color"],[1,"select-color",3,"ngStyle","click"],[1,"choose-players__name"],["clearInput","",3,"placeholder","ngModel","ngModelChange"],["expand","block",3,"disabled","click"]],template:function(o,n){1&o&&(e.TgZ(0,"ion-header"),e.TgZ(1,"ion-toolbar"),e.TgZ(2,"ion-title"),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"ion-buttons",0),e.TgZ(6,"ion-button",1),e.NdJ("click",function(){return n.dismiss()}),e._uU(7),e.ALo(8,"translate"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(9,"ion-content"),e.TgZ(10,"ion-card"),e.TgZ(11,"ion-card-content"),e.TgZ(12,"ion-list"),e.TgZ(13,"ion-item",2),e.TgZ(14,"div",3),e.TgZ(15,"div",4),e.TgZ(16,"div",5),e.NdJ("click",function(s){return n.showSelectColorPopup(s)}),e.qZA(),e.qZA(),e.TgZ(17,"div",6),e.TgZ(18,"ion-item"),e.TgZ(19,"ion-input",7),e.NdJ("ngModelChange",function(s){return n.name=s}),e.ALo(20,"translate"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(21,"ion-row"),e.TgZ(22,"ion-col"),e.TgZ(23,"ion-button",8),e.NdJ("click",function(){return n.onCreate()}),e._uU(24),e.ALo(25,"translate"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o&&(e.xp6(3),e.Oqu(e.lcZ(4,7,"modules.games.createGamer")),e.xp6(4),e.hij(" ",e.lcZ(8,9,"elements.button.close")," "),e.xp6(9),e.Q6J("ngStyle",e.VKq(15,N,n.color)),e.xp6(3),e.Q6J("placeholder",e.lcZ(20,11,"modules.user.name"))("ngModel",n.name),e.xp6(4),e.Q6J("disabled",!n.name),e.xp6(1),e.hij(" ",e.lcZ(25,13,"elements.button.create")," "))},directives:[r.Gu,r.sr,r.wd,r.Sm,r.YG,r.W2,r.PM,r.FN,r.q_,r.Ie,_.PC,r.pK,r.j9,g.JJ,g.On,r.Nd,r.wI],pipes:[p.X$],styles:[""]}),t})();var Z=a(5803),F=a(9973);function R(t,c){if(1&t&&(e.TgZ(0,"ion-select-option",15),e._uU(1),e.qZA()),2&t){const o=c.$implicit;e.Q6J("value",o),e.xp6(1),e.hij(" ",o.name," ")}}const Q=function(t){return{"background-color":t}};function G(t,c){if(1&t){const o=e.EpF();e.TgZ(0,"ion-item-sliding",9),e.TgZ(1,"ion-item",9),e.TgZ(2,"div",10),e.TgZ(3,"div",11),e.TgZ(4,"div",12),e.NdJ("click",function(i){const l=e.CHM(o).index,d=e.oxw();return d.filtredColors.length?d.showSelectColorPopup(i,l):null}),e.qZA(),e.qZA(),e.TgZ(5,"div",13),e.TgZ(6,"ion-item"),e.TgZ(7,"ion-select",14),e.NdJ("ionChange",function(i){const l=e.CHM(o).index;return e.oxw().choosePlayerHandler(i,l)}),e.TgZ(8,"ion-select-option",15),e._uU(9),e.qZA(),e.YNc(10,R,2,2,"ion-select-option",16),e.qZA(),e.TgZ(11,"ion-note",17),e._UZ(12,"ion-icon",18),e._UZ(13,"ion-icon",19),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(14,"ion-item-options",20),e.TgZ(15,"ion-item-option",21),e.NdJ("click",function(){const s=e.CHM(o).$implicit;return e.oxw().removePlayerHandler(s._id)}),e._uU(16),e.ALo(17,"translate"),e.qZA(),e.qZA(),e.qZA()}if(2&t){const o=c.$implicit,n=e.oxw();e.xp6(4),e.Q6J("ngStyle",e.VKq(8,Q,null==o?null:o.color)),e.xp6(3),e.Q6J("value",o),e.xp6(1),e.Q6J("value",o),e.xp6(1),e.hij(" ",o.name," "),e.xp6(1),e.Q6J("ngForOf",n.filtredGamers),e.xp6(6),e.Oqu(e.lcZ(17,6,"elements.button.remove"))}}let L=(()=>{class t{constructor(o,n,i,s,l,d){this.store=o,this.translate=n,this.gamerService=i,this.popoverController=s,this.alertController=l,this.sharedService=d,this.gamers=[],this.filtredGamers=[],this.players=[],this.playersColors=u.N.games.train.playersColors,this.filtredColors=u.N.games.train.playersColors}ngOnInit(){this.players$=this.store.select(f.y1),this.players$.subscribe(o=>{this.players=o,this.filter()}),this.gamers$=this.gamerService.entities$,this.gamers$.subscribe(o=>{this.gamers=o,this.filter()})}startGameHandler(){this.sharedService.createRounds("train")}presentPopover(o,n,i){return(0,h.mG)(this,void 0,void 0,function*(){const s=yield this.popoverController.create({component:n,cssClass:"select-color-popover",componentProps:i,translucent:!0});return yield s.present(),yield s.onDidDismiss()})}showSelectColorPopup(o,n){return(0,h.mG)(this,void 0,void 0,function*(){const{data:i}=yield this.presentPopover(o,J,{colors:this.filtredColors});if(i){const{color:s}=i;this.chooseColorHandler(s,n)}})}showCreateGamerPopup(o){return(0,h.mG)(this,void 0,void 0,function*(){const{data:n}=yield this.presentPopover(o,k,null);if(n){const{gamer:i}=n;console.log("gamer",n),this.createGamerHandler(i)}})}filter(){this.filtredGamers=this.gamers.filter(o=>{for(const n of this.players)if(n._id===o._id)return!1;return!0}),this.filtredColors=this.playersColors.filter(o=>{for(const n of this.players)if(n.color===o)return!1;return!0})}choosePlayerHandler(o,n){const i=this.players.map((s,l)=>l===n?this.filtredColors.includes(this.filtredGamers[0].color)?o.target.value:Object.assign(Object.assign({},o.target.value),{color:this.filtredColors[0]}):s);console.log("players",i),this.store.dispatch(Z.K9({players:i}))}chooseColorHandler(o,n){this.players=this.players.map((i,s)=>s===n?Object.assign(Object.assign({},i),{color:o}):i),this.filter()}removePlayerHandler(o){this.store.dispatch(Z.WQ({id:o}))}removeAllPlayersHandler(){this.store.dispatch(Z.dO())}addPlayerHandler(o=!0){if(!this.filtredGamers.length)return;let n=this.filtredGamers[0];o||(n=this.filtredGamers[this.filtredGamers.length-1]),this.filtredColors.includes(n.color)?this.store.dispatch(Z.KM({player:Object.assign({},n)})):this.store.dispatch(Z.KM({player:Object.assign(Object.assign({},n),{color:this.filtredColors[0]})}))}createGamerHandler(o){this.gamerService.add(o).subscribe(n=>{console.log(n)})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(y.yh),e.Y36(p.sK),e.Y36(F.E),e.Y36(r.Dh),e.Y36(r.Br),e.Y36(P.F))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-choose-players"]],decls:29,vars:21,consts:[[1,"ion-text-center"],[1,"choose-players"],[1,"choose-players__list"],["lines","none",4,"ngFor","ngForOf"],[1,"choose-players__btn-block"],["expand","block","fill","outline","size","small","color","secondary",3,"disabled","click"],["expand","block","fill","outline","size","small","color","success",3,"disabled","click"],["expand","block","fill","outline","size","small","color","danger",3,"click"],["expand","block",3,"disabled","click"],["lines","none"],[1,"players-list"],[1,"players-list__color"],[1,"select-color",3,"ngStyle","click"],[1,"players-list__name"],["placeholder","Select One","interface","popover","slot","end",3,"value","ionChange"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],["slot","end","color","danger"],["name","trash-outline"],["name","caret-back-outline"],["side","end"],["color","danger",3,"click"]],template:function(o,n){1&o&&(e.TgZ(0,"ion-card"),e.TgZ(1,"ion-card-header"),e.TgZ(2,"ion-card-title",0),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"ion-card-subtitle",0),e._uU(6,"Ticket to the ride"),e.qZA(),e.qZA(),e.TgZ(7,"ion-card-content",1),e.TgZ(8,"ion-list",2),e.YNc(9,G,18,10,"ion-item-sliding",3),e.ALo(10,"async"),e.qZA(),e.TgZ(11,"ion-row",4),e.TgZ(12,"ion-col"),e.TgZ(13,"ion-button",5),e.NdJ("click",function(){return n.addPlayerHandler()}),e._uU(14),e.ALo(15,"translate"),e.qZA(),e.qZA(),e.TgZ(16,"ion-col"),e.TgZ(17,"ion-button",6),e.NdJ("click",function(s){return n.showCreateGamerPopup(s)}),e._uU(18),e.ALo(19,"translate"),e.qZA(),e.qZA(),e.TgZ(20,"ion-col"),e.TgZ(21,"ion-button",7),e.NdJ("click",function(){return n.removeAllPlayersHandler()}),e._uU(22),e.ALo(23,"translate"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(24,"ion-row",4),e.TgZ(25,"ion-col"),e.TgZ(26,"ion-button",8),e.NdJ("click",function(){return n.startGameHandler()}),e._uU(27),e.ALo(28,"translate"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o&&(e.xp6(3),e.Oqu(e.lcZ(4,9,"modules.games.addPlayers")),e.xp6(6),e.Q6J("ngForOf",e.lcZ(10,11,n.players$)),e.xp6(4),e.Q6J("disabled",n.players.length>=5),e.xp6(1),e.hij(" ",e.lcZ(15,13,"elements.button.add")," "),e.xp6(3),e.Q6J("disabled",n.players.length>=5),e.xp6(1),e.hij(" ",e.lcZ(19,15,"elements.button.create")," "),e.xp6(4),e.hij(" ",e.lcZ(23,17,"elements.button.removeAll")," "),e.xp6(4),e.Q6J("disabled",n.players.length<2),e.xp6(1),e.hij(" ",e.lcZ(28,19,"elements.button.startGame")," "))},directives:[r.PM,r.Zi,r.Dq,r.tO,r.FN,r.q_,_.sg,r.Nd,r.wI,r.YG,r.td,r.Ie,_.PC,r.t9,r.QI,r.n0,r.uN,r.gu,r.IK,r.u8],pipes:[p.X$,_.Ov],styles:[""]}),t})();function U(t,c){1&t&&e._UZ(0,"app-choose-players")}function H(t,c){if(1&t){const o=e.EpF();e.TgZ(0,"ion-col",12),e.TgZ(1,"ion-chip",13),e.NdJ("click",function(){const s=e.CHM(o).$implicit,l=e.oxw(2).$implicit,d=e.oxw(2);return d.addToScoresLine(l._id,s*d.inverse[l._id])}),e.TgZ(2,"ion-label"),e._uU(3),e.qZA(),e.qZA(),e.qZA()}if(2&t){const o=c.$implicit,n=e.oxw(2).$implicit,i=e.oxw(2);e.xp6(1),e.Q6J("color",o>19?"secondary":"warning"),e.xp6(2),e.Oqu(o*i.inverse[n._id])}}function Y(t,c){if(1&t){const o=e.EpF();e.TgZ(0,"ion-col",12),e.TgZ(1,"ion-chip",17),e.NdJ("click",function(){const s=e.CHM(o).$implicit,l=e.oxw(2).$implicit;return e.oxw(2).removeFromScoresLine(l._id,s)}),e.TgZ(2,"ion-label"),e._uU(3),e.qZA(),e._UZ(4,"ion-icon",18),e.qZA(),e.qZA()}if(2&t){const o=c.$implicit;e.xp6(1),e.Q6J("color",o>19?"secondary":"warning"),e.xp6(2),e.Oqu(o)}}function j(t,c){if(1&t){const o=e.EpF();e.TgZ(0,"ion-card-content"),e.TgZ(1,"ion-row",10),e.YNc(2,H,4,2,"ion-col",11),e.TgZ(3,"ion-col",12),e.TgZ(4,"ion-chip",13),e.NdJ("click",function(){e.CHM(o);const i=e.oxw().$implicit;return e.oxw(2).inverseScore(i._id)}),e._UZ(5,"ion-icon",14),e._UZ(6,"ion-icon",15),e.qZA(),e.qZA(),e.qZA(),e.TgZ(7,"ion-row",16),e.YNc(8,Y,5,2,"ion-col",11),e.qZA(),e.qZA()}if(2&t){const o=e.oxw().$implicit,n=e.oxw(2);e.xp6(2),e.Q6J("ngForOf",n.routeScoresEnv),e.xp6(2),e.Q6J("color","danger"),e.xp6(4),e.Q6J("ngForOf",n.getMemberByPlayer_id(o._id).scoresLine)}}function I(t,c){if(1&t){const o=e.EpF();e.TgZ(0,"ion-card-content"),e.TgZ(1,"ion-row"),e.TgZ(2,"ion-col",10),e.TgZ(3,"div"),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.TgZ(6,"ion-toggle",19),e.NdJ("ionChange",function(i){e.CHM(o);const s=e.oxw().$implicit;return e.oxw(2).onMarkLongestHandler(i,s._id)}),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&t){const o=e.oxw().$implicit,n=e.oxw(2);e.xp6(4),e.Oqu(e.lcZ(5,2,"games.train.longestRoute")),e.xp6(2),e.Q6J("checked",n.getMemberByPlayer_id(o._id).scoresLine.length)}}function B(t,c){if(1&t){const o=e.EpF();e.TgZ(0,"ion-card-content"),e.TgZ(1,"ion-row",10),e.TgZ(2,"ion-col",20),e.TgZ(3,"ion-label"),e._uU(4),e.qZA(),e.qZA(),e.TgZ(5,"ion-col",21),e.TgZ(6,"div",22),e.TgZ(7,"ion-button",23),e.NdJ("click",function(){e.CHM(o);const i=e.oxw().$implicit;return e.oxw(2).addToScoresLine(i._id,4)}),e._UZ(8,"ion-icon",15),e.qZA(),e.TgZ(9,"span",24),e.TgZ(10,"div"),e._uU(11),e.ALo(12,"translate"),e.qZA(),e.qZA(),e.TgZ(13,"ion-button",25),e.NdJ("click",function(){e.CHM(o);const i=e.oxw().$implicit;return e.oxw(2).removeFromScoresLine(i._id,4)}),e._UZ(14,"ion-icon",14),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&t){const o=e.oxw().$implicit,n=e.oxw(2);e.xp6(4),e.Oqu(3-n.calcScores(o._id)/4),e.xp6(3),e.Q6J("disabled",n.getMemberByPlayer_id(o._id).scoresLine.length>=3),e.xp6(4),e.Oqu(e.lcZ(12,4,"games.train.stationsShort")),e.xp6(2),e.Q6J("disabled",n.getMemberByPlayer_id(o._id).scoresLine.length<=0)}}function z(t,c){if(1&t){const o=e.EpF();e.TgZ(0,"ion-row",10),e.TgZ(1,"ion-col",20),e.TgZ(2,"ion-label"),e._uU(3),e.qZA(),e.qZA(),e.TgZ(4,"ion-col",21),e.TgZ(5,"div",22),e.TgZ(6,"ion-button",27),e.NdJ("click",function(){const s=e.CHM(o).$implicit,l=e.oxw(2).$implicit;return e.oxw(2).removeFromScoresLine(l._id,s.score)}),e._UZ(7,"ion-icon",15),e.qZA(),e.TgZ(8,"span",24),e._UZ(9,"ion-icon",28),e._uU(10),e.qZA(),e.TgZ(11,"ion-button",29),e.NdJ("click",function(){const s=e.CHM(o).$implicit,l=e.oxw(2).$implicit;return e.oxw(2).addToScoresLine(l._id,s.score)}),e._UZ(12,"ion-icon",14),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&t){const o=c.$implicit,n=e.oxw(2).$implicit,i=e.oxw(2);e.xp6(3),e.Oqu(i.calcQtyOfArrItems(n._id,o.score)),e.xp6(7),e.hij(" ",o.qty," ")}}function E(t,c){if(1&t&&(e.TgZ(0,"ion-card-content"),e.YNc(1,z,13,2,"ion-row",26),e.qZA()),2&t){const o=e.oxw(3);e.xp6(1),e.Q6J("ngForOf",o.carsCfg)}}const K=function(t){return{"border-bottom":t}};function D(t,c){if(1&t&&(e.TgZ(0,"ion-card"),e.TgZ(1,"ion-card-header",3),e.TgZ(2,"ion-card-subtitle"),e.TgZ(3,"span",4),e._UZ(4,"ion-icon",5),e.TgZ(5,"span",6),e._uU(6),e.ALo(7,"translate"),e.qZA(),e._UZ(8,"span",7),e.TgZ(9,"span"),e._uU(10),e.qZA(),e.qZA(),e.qZA(),e.TgZ(11,"ion-card-title",8),e._uU(12),e.qZA(),e.qZA(),e.YNc(13,j,9,3,"ion-card-content",9),e.YNc(14,I,7,4,"ion-card-content",9),e.YNc(15,B,15,6,"ion-card-content",9),e.YNc(16,E,2,1,"ion-card-content",9),e.qZA()),2&t){const o=c.$implicit,n=e.oxw(2);e.xp6(1),e.Q6J("ngStyle",e.VKq(11,K,"2px solid "+n.getPlayerColor(o._id))),e.xp6(3),e.Q6J("name",null==n.activeRound?null:n.activeRound.icon),e.xp6(2),e.Oqu(e.lcZ(7,9,"games.train."+(null==n.activeRound?null:n.activeRound._id))),e.xp6(4),e.Oqu(n.calcScores(o._id)),e.xp6(2),e.Oqu(n.getPlayerName(o._id)),e.xp6(1),e.Q6J("ngIf","routes"===n.round._id),e.xp6(1),e.Q6J("ngIf","length"===n.round._id),e.xp6(1),e.Q6J("ngIf","stations"===n.round._id),e.xp6(1),e.Q6J("ngIf","cars"===n.round._id)}}function X(t,c){if(1&t&&e.YNc(0,D,17,13,"ion-card",2),2&t){const o=e.oxw();e.Q6J("ngForOf",o.players)}}let W=(()=>{class t{constructor(o,n){this.route=o,this.store=n,this.roundsCfg=u.N.games.train.rounds,this.carsCfg=u.N.games.train.cars,this.routeScoresEnv=u.N.games.train.routeScores,this.inverse={}}ngOnInit(){this.activeRound$.pipe((0,$.b)(o=>this.activeRound=o),(0,A.w)(o=>this.store.select(T.N_(o._id)))).subscribe(o=>{o&&(this.round=o)}),this.rounds$=this.store.select(T.PK),this.rounds$.subscribe(o=>{this.rounds=o}),this.roundMembers$=this.store.select(q.uW),this.roundMembers$.subscribe(o=>{this.roundMembers=o}),this.players$=this.store.select(f.y1),this.players$.subscribe(o=>{this.players=o,this.players.forEach(n=>this.inverse[n._id]=1)})}calcScores(o){return this.getMemberByPlayer_id(o).scoresLine.reduce((n,i)=>n+i,0)}getPlayerColor(o){return this.players.find(n=>n._id===o).color}getPlayerName(o){return this.players.find(n=>n._id===o).name}getMemberByPlayer_id(o){return this.roundMembers.filter(n=>n.player===o&&this.round.roundMembers.includes(n._id))[0]}calcQtyOfArrItems(o,n){let i=0;return this.getMemberByPlayer_id(o).scoresLine.forEach(s=>{s===n&&i++}),i}inverseScore(o){this.inverse[o]=-1*this.inverse[o]}addToScoresLine(o,n){const i=this.getMemberByPlayer_id(o),s=Object.assign(Object.assign({},i),{scoresLine:[...i.scoresLine,n]});this.store.dispatch(C.hx({roundMember:{id:i._id,changes:s}}))}removeFromScoresLine(o,n){const i=this.getMemberByPlayer_id(o),s=[...i.scoresLine],l=s.indexOf(n);s.splice(l,1);const d=Object.assign(Object.assign({},i),{scoresLine:s});this.store.dispatch(C.hx({roundMember:{id:i._id,changes:d}}))}setScoresLine(o,n){const i=this.getMemberByPlayer_id(o),s=Object.assign(Object.assign({},i),{scoresLine:n});this.store.dispatch(C.hx({roundMember:{id:i._id,changes:s}}))}onMarkLongestHandler(o,n){this.setScoresLine(n,o.target.checked?[10]:[])}onChangeStationsHandler(o){console.log("e-value",o.target.value)}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(m.gz),e.Y36(y.yh))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-train-rounds"]],inputs:{activeRound$:"activeRound$"},decls:4,vars:4,consts:[[4,"ngIf","ngIfElse"],["restRounds",""],[4,"ngFor","ngForOf"],[3,"ngStyle"],[1,"round-subtitle"],["color","primary",1,"round-subtitle__icon",3,"name"],[1,"ion-text-capitalize","round-subtitle__text"],[1,"round-subtitle__blank"],[1,"ion-text-center"],[4,"ngIf"],[1,"round","round_tools"],["size","3",4,"ngFor","ngForOf"],["size","3"],[3,"color","click"],["name","add-outline"],["name","remove-outline"],[1,"round","round_result"],["outline","",3,"color","click"],["name","close-circle"],[3,"checked","ionChange"],[1,"round_tools__score"],[1,"round_tools__btn"],[1,"incDecBtn"],["shape","round","color","danger","fill","outline",3,"disabled","click"],[1,"incDecBtn__caption"],["shape","round","color","success","fill","outline",3,"disabled","click"],["class","round round_tools",4,"ngFor","ngForOf"],["shape","round","color","danger","fill","outline",3,"click"],["name","train-outline"],["shape","round","color","success","fill","outline",3,"click"]],template:function(o,n){if(1&o&&(e.YNc(0,U,1,0,"app-choose-players",0),e.ALo(1,"async"),e.YNc(2,X,1,1,"ng-template",null,1,e.W1O)),2&o){const i=e.MAs(3);e.Q6J("ngIf","start"===(null==n.activeRound?null:n.activeRound._id)&&0===e.lcZ(1,2,n.rounds$).length)("ngIfElse",i)}},directives:[_.O5,L,_.sg,r.PM,r.Zi,_.PC,r.tO,r.gu,r.Dq,r.FN,r.Nd,r.wI,r.hM,r.Q$,r.ho,r.w,r.YG],pipes:[_.Ov,p.X$],styles:[""]}),t})();function V(t,c){if(1&t&&(e.TgZ(0,"ion-segment-button",8),e.ALo(1,"async"),e.ALo(2,"async"),e._UZ(3,"ion-icon",9),e.qZA()),2&t){const o=c.$implicit,n=e.oxw();e.Q6J("value",o)("disabled","start"===o._id&&e.lcZ(1,3,n.rounds$).length||"start"!==o._id&&0===e.lcZ(2,5,n.rounds$).length),e.xp6(3),e.Q6J("name",o.icon)}}const ee=function(t){return{"border-left":t,"padding-left":"10px"}},oe=function(t){return{"border-right":t,"padding-right":"10px"}};function ne(t,c){if(1&t&&(e.TgZ(0,"ion-item"),e.TgZ(1,"ion-label",14),e._uU(2),e.qZA(),e.TgZ(3,"div",15),e._uU(4),e.qZA(),e.qZA()),2&t){const o=c.$implicit,n=e.oxw(2);e.xp6(1),e.Q6J("ngStyle",e.VKq(4,ee,"6px solid "+o.color)),e.xp6(1),e.hij(" ",o.name," "),e.xp6(1),e.Q6J("ngStyle",e.VKq(6,oe,"6px solid "+o.color)),e.xp6(1),e.hij(" ",n.getPlayerTotalScores(o._id)," ")}}function te(t,c){if(1&t){const o=e.EpF();e.TgZ(0,"ion-card"),e.TgZ(1,"ion-card-header"),e.TgZ(2,"ion-card-title",10),e._uU(3,"Ticket to the ride"),e.qZA(),e.qZA(),e.TgZ(4,"ion-card-content"),e.TgZ(5,"ion-list"),e.YNc(6,ne,5,8,"ion-item",11),e.qZA(),e.TgZ(7,"ion-row",12),e.TgZ(8,"ion-button",13),e.NdJ("click",function(){return e.CHM(o),e.oxw().onFinishGameHandler()}),e.ALo(9,"async"),e._uU(10),e.ALo(11,"translate"),e.qZA(),e.TgZ(12,"ion-button",13),e.NdJ("click",function(){return e.CHM(o),e.oxw().onCancelGameHandler()}),e.ALo(13,"async"),e._uU(14),e.ALo(15,"translate"),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&t){const o=e.oxw();e.xp6(6),e.Q6J("ngForOf",o.playersWithTotal),e.xp6(2),e.Q6J("disabled",0===e.lcZ(9,5,o.rounds$).length),e.xp6(2),e.hij(" ",e.lcZ(11,7,"elements.button.finishGame")," "),e.xp6(2),e.Q6J("disabled",0===e.lcZ(13,9,o.rounds$).length),e.xp6(2),e.hij(" ",e.lcZ(15,11,"elements.button.cancelGame")," ")}}const ie=[{path:"",component:(()=>{class t{constructor(o,n,i,s,l){this.route=o,this.router=n,this.store=i,this.sharedService=s,this.gameService=l,this.roundsCfg=u.N.games.train.rounds,this.activeRound$=new S.X(this.roundsCfg[0])}ngOnInit(){this.activeRound$.subscribe(o=>this.activeRound=o),this.rounds$=this.store.select(T.PK),this.rounds$.subscribe(o=>{this.rounds=o,o.length?"start"===this.activeRound._id&&this.activeRound$.next(this.roundsCfg[1]):"start"!==this.activeRound._id&&this.activeRound$.next(this.roundsCfg[0])}),this.roundMembers$=this.store.select(q.uW),this.players$=this.store.select(f.y1),this.players$.pipe((0,A.w)(o=>(this.players=o,this.roundMembers$))).subscribe(o=>{this.roundMembers=o,this.playersWithTotal=this.players.map(n=>Object.assign(Object.assign({},n),{totalScore:this.getPlayerTotalScores(n._id)})).sort((n,i)=>i.totalScore-n.totalScore)})}onMenuClickHandler(o){this.activeRound$.next(o.target.value)}onFinishGameHandler(){const o=this.rounds.map(i=>{const s=i.roundMembers.map(l=>{const d=this.roundMembers.find(x=>x._id===l);return{_id:d._id,score:d.scoresLine.reduce((x,ae)=>x+ae,0)}});return{_id:i._id,players:s}}),n={type:this.rounds[0].clientGame.type,rounds:o};console.log("game",n),this.gameService.add(n).subscribe(i=>{console.log(i),this.store.dispatch((0,b.Tz)())})}onCancelGameHandler(){this.store.dispatch((0,b.Tz)())}getPlayerTotalScores(o){let n=0;return this.roundMembers.forEach(i=>{i.player===o&&(n+=i.scoresLine.reduce((s,l)=>s+l,0))}),n}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(m.gz),e.Y36(m.F0),e.Y36(y.yh),e.Y36(P.F),e.Y36(M.h))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-train"]],decls:15,vars:6,consts:[["slot","end"],["menu","games-menu"],["scrollable","",3,"value","ionChange"],[3,"value","disabled",4,"ngFor","ngForOf"],[1,"ion-no-margin","ion-no-padding"],["size-lg","6","size-md","8","size-sm","10","offset-lg","3","offset-md","2","offset-sm","1"],[4,"ngIf"],[3,"activeRound$"],[3,"value","disabled"],[3,"name"],[1,"ion-text-center"],[4,"ngFor","ngForOf"],[1,"ion-justify-content-around"],["fill","outline","size","small",3,"disabled","click"],[3,"ngStyle"],["slot","end",3,"ngStyle"]],template:function(o,n){1&o&&(e.TgZ(0,"ion-header"),e.TgZ(1,"ion-toolbar"),e.TgZ(2,"ion-buttons",0),e._UZ(3,"ion-menu-button",1),e.qZA(),e.TgZ(4,"ion-segment",2),e.NdJ("ionChange",function(s){return n.onMenuClickHandler(s)}),e.YNc(5,V,4,7,"ion-segment-button",3),e.qZA(),e.qZA(),e.qZA(),e.TgZ(6,"ion-content"),e.TgZ(7,"ion-grid",4),e.TgZ(8,"ion-row"),e.TgZ(9,"ion-col",5),e.YNc(10,te,16,13,"ion-card",6),e.ALo(11,"async"),e.qZA(),e.qZA(),e.TgZ(12,"ion-row"),e.TgZ(13,"ion-col",5),e._UZ(14,"app-train-rounds",7),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o&&(e.xp6(4),e.Q6J("value",n.activeRound),e.xp6(1),e.Q6J("ngForOf",n.roundsCfg),e.xp6(5),e.Q6J("ngIf",0!==e.lcZ(11,4,n.rounds$).length),e.xp6(4),e.Q6J("activeRound$",n.activeRound$))},directives:[r.Gu,r.sr,r.Sm,r.fG,r.cJ,r.QI,_.sg,r.W2,r.jY,r.Nd,r.wI,_.O5,W,r.GO,r.gu,r.PM,r.Zi,r.Dq,r.FN,r.q_,r.YG,r.Ie,r.Q$,_.PC],pipes:[_.Ov,p.X$],styles:[""]}),t})(),pathMatch:"full"},{path:"**",redirectTo:""}];let re=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[m.Bz.forChild(ie)],m.Bz]}),t})(),se=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[g.u5,_.ez,r.Pc,p.aw.forChild({extend:!0})]]}),t})();var ce=a(1173);let le=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[_.ez,g.u5,r.Pc,re,g.UX,ce.D,p.aw.forChild({extend:!0}),se]]}),t})()}}]);