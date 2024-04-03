import{D as Z,E as ee,g as C,h as G,i as y,j as A,k as B,m as z,n as U,o as W,p as H,q as Q,r as $,s as q,t as I,u as J,v as K,w as M,x as X,y as Y}from"./chunk-S6ZGPVB5.js";import{Fb as E,Gb as c,Hb as h,Lb as L,Mb as x,Nb as w,Q as P,Ra as g,Ua as a,Va as p,Y as _,ga as d,ha as R,kb as v,mb as s,pa as F,qa as N,rb as r,sb as n,tb as u,tc as T,uc as b,vb as D,vc as O,xb as j,yb as f,zc as V}from"./chunk-OA72D47S.js";var te=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d({type:e,selectors:[["app-layout-page"]],decls:3,vars:0,consts:[[1,"container","mx-auto","mt-24"]],template:function(o,l){o&1&&(u(0,"shared-navbar"),r(1,"div",0),u(2,"router-outlet"),n())},dependencies:[G,K]});let i=e;return i})();var le=i=>({filter:i});function pe(i,e){if(i&1&&(r(0,"mat-option",10)(1,"span",11),c(2),n()()),i&2){let m=e.$implicit;s("value",m.title),a(2),h(m.title)}}function ce(i,e){if(i&1){let m=D();r(0,"div",2),u(1,"img",3),x(2,"imagePatch"),r(3,"form",4)(4,"input",5),j("input",function(){F(m);let o=f();return N(o.searchMovie())}),n(),r(5,"mat-autocomplete",6,0),v(7,pe,3,2,"mat-option",7),n()(),r(8,"div",8)(9,"button",9),j("click",function(){F(m);let o=f();return N(o.guessMovie())}),c(10," Adivinar "),n()()()}if(i&2){let m=E(6),t=f();a(),s("src",w(2,6,t.movie.poster_path),g)("alt",t.movie.title)("ngStyle",L(8,le,"blur("+t.guessBlur+"px)")),a(3),s("formControl",t.searchInput)("matAutocomplete",m),a(3),s("ngForOf",t.movies)}}var ne=(()=>{let e=class e{constructor(t,o,l){this.moviesService=t,this.activatedRoute=o,this.router=l,this.movie=null,this.movies=[],this.guessBlur=20,this.searchInput=new H(""),this.guessCounter=5}ngOnDestroy(){this.movie=null}ngOnInit(){this.moviesService.getPopular(this.getRandomNumber(1,100)).subscribe(t=>this.movie=t[this.getRandomNumber(0,19)])}getRandomNumber(t,o){return Math.floor(Math.random()*o)-t}searchMovie(){let t=this.searchInput.value||"";this.moviesService.searchMovies(t).subscribe(o=>this.movies=o)}guessMovie(){if(console.log(this.movie?.title),this.searchInput.value===this.movie?.title&&this.router.navigate(["/game/win",this.movie.id]),this.searchInput.value!==this.movie?.title&&this.guessCounter!==0){switch(this.guessCounter){case 5:this.guessBlur=15,this.guessCounter--;break;case 4:this.guessBlur=10,this.guessCounter--;break;case 3:this.guessBlur=7,this.guessCounter--;break;case 2:this.guessBlur=3,this.guessCounter--;break;case 1:this.guessBlur=0,this.guessCounter--,this.router.navigate(["/game/lose",this.movie.id]);break}console.log(this.guessCounter)}this.searchInput.setValue("")}reloadPage(){window.location.reload()}};e.\u0275fac=function(o){return new(o||e)(p(M),p(C),p(y))},e.\u0275cmp=d({type:e,selectors:[["game-page"]],decls:1,vars:1,consts:[["auto","matAutocomplete"],["class","flex flex-col mx-auto items-center w-52 md:w-60 lg:w-72 xl:w-72 3xl:w-96 mt-24",4,"ngIf"],[1,"flex","flex-col","mx-auto","items-center","w-52","md:w-60","lg:w-72","xl:w-72","3xl:w-96","mt-24"],[1,"xl:w-full","rounded-lg","shadow-lg",3,"src","alt","ngStyle"],[1,"flex","text-white","mt-14","w-96"],["type","text","placeholder","Busca una pel\xEDcula",1,"w-full","h-10","px-6","bg-[#202020]","text-white","rounded-3xl","my-input",3,"input","formControl","matAutocomplete"],["autoActiveFirstOption",""],[3,"value",4,"ngFor","ngForOf"],[1,"flex","justify-end","w-full"],[1,"bg-[#2b2b2b]","hover:bg-[#333333]","text-white","font-bold","py-2","px-4","rounded-3xl","mt-5",3,"click"],[3,"value"],[1,"ml-2"]],template:function(o,l){o&1&&v(0,ce,11,10,"div",1),o&2&&s("ngIf",l.movie)},dependencies:[T,b,O,X,J,Y,Q,z,U,W,$,I]});let i=e;return i})();function ue(i,e){if(i&1&&(r(0,"div",1)(1,"div"),u(2,"img",2),x(3,"imagePatch"),r(4,"span",3),c(5),n(),r(6,"h2",4),c(7,"\xA1HAS ACERTADO!"),n(),r(8,"button",5),c(9," \xBFQuieres volver a jugar? "),n()()()),i&2){let m=f();a(2),s("src",w(3,4,m.movie.poster_path),g)("alt",m.movie.title),a(3),h(m.movie.title),a(3),s("routerLink","/game")}}var me=(()=>{let e=class e{constructor(t,o,l){this.moviesService=t,this.activatedRoute=o,this.router=l}ngOnInit(){this.activatedRoute.params.pipe(P(({id:t})=>this.moviesService.getMovieById(t))).subscribe(t=>{if(!t)return this.router.navigate(["../movies/home"]);this.movie=t})}};e.\u0275fac=function(o){return new(o||e)(p(M),p(C),p(y))},e.\u0275cmp=d({type:e,selectors:[["app-win-page"]],decls:1,vars:1,consts:[["class","flex flex-col mx-auto items-center w-52 md:w-60 lg:w-72 xl:w-72 3xl:w-96 mt-24",4,"ngIf"],[1,"flex","flex-col","mx-auto","items-center","w-52","md:w-60","lg:w-72","xl:w-72","3xl:w-96","mt-24"],[1,"xl:w-full","rounded-lg","shadow-lg",3,"src","alt"],[1,"text-white","text-lg","font-semibold","mt-2","text-center"],[1,"text-white","text-2xl","font-bold","mt-10"],[1,"bg-[#2b2b2b]","hover:bg-[#333333]","text-white","font-bold","py-2","px-4","rounded-3xl","mt-5",3,"routerLink"]],template:function(o,l){o&1&&v(0,ue,10,6,"div",0),o&2&&s("ngIf",l.movie)},dependencies:[b,A,I],encapsulation:2});let i=e;return i})();function de(i,e){if(i&1&&(r(0,"div",1)(1,"div"),u(2,"img",2),x(3,"imagePatch"),r(4,"span",3),c(5),n(),r(6,"h2",4),c(7,"HAS FALLADO..."),n(),r(8,"button",5),c(9," \xBFQuieres volver a jugar? "),n()(),u(10,"div"),n()),i&2){let m=f();a(2),s("src",w(3,4,m.movie.poster_path),g)("alt",m.movie.title),a(3),h(m.movie.title),a(3),s("routerLink","/game")}}var se=(()=>{let e=class e{constructor(t,o,l){this.moviesService=t,this.activatedRoute=o,this.router=l}ngOnInit(){this.activatedRoute.params.pipe(P(({id:t})=>this.moviesService.getMovieById(t))).subscribe(t=>{if(!t)return this.router.navigate(["../movies/home"]);this.movie=t})}};e.\u0275fac=function(o){return new(o||e)(p(M),p(C),p(y))},e.\u0275cmp=d({type:e,selectors:[["app-lose-page"]],decls:1,vars:1,consts:[["class","flex flex-col mx-auto items-center w-52 md:w-60 lg:w-72 xl:w-72 3xl:w-96 mt-24",4,"ngIf"],[1,"flex","flex-col","mx-auto","items-center","w-52","md:w-60","lg:w-72","xl:w-72","3xl:w-96","mt-24"],[1,"xl:w-full","rounded-lg","shadow-lg",3,"src","alt"],[1,"text-white","text-lg","font-semibold","mt-2","text-center"],[1,"text-white","text-2xl","font-bold","mt-10"],[1,"bg-[#2b2b2b]","hover:bg-[rgba(255,","104,","58,","183)]","text-white","font-bold","py-2","px-4","rounded-3xl","mt-5",3,"routerLink"]],template:function(o,l){o&1&&v(0,de,11,6,"div",0),o&2&&s("ngIf",l.movie)},dependencies:[b,A,I]});let i=e;return i})();var fe=[{path:"",component:te,children:[{path:"movie",component:ne},{path:"win/:id",component:me},{path:"lose/:id",component:se},{path:"**",redirectTo:"movie"}]}],ae=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=R({type:e}),e.\u0275inj=_({imports:[B.forChild(fe),B]});let i=e;return i})();var He=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=R({type:e}),e.\u0275inj=_({imports:[V,Z,q,ae,ee]});let i=e;return i})();export{He as GameModule};
