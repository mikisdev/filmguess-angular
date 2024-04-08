import{D as Z,E as ee,g as b,h as G,i as y,j as F,k,m as z,n as U,o as W,p as H,q as Q,r as $,s as q,t as I,u as J,v as K,w as S,x as X,y as Y}from"./chunk-4UWX3PHR.js";import{Fb as N,Gb as p,Hb as h,Lb as L,Mb as x,Nb as w,Q as _,Ra as g,Ua as a,Va as c,Y as P,ga as d,ha as A,kb as v,mb as m,pa as R,qa as j,rb as r,sb as n,tb as u,tc as T,uc as C,vb as E,vc as O,xb as B,yb as f,zc as V}from"./chunk-OA72D47S.js";var te=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d({type:e,selectors:[["app-layout-page"]],decls:3,vars:0,consts:[[1,"container","mx-auto","mt-24"]],template:function(o,l){o&1&&(u(0,"shared-navbar"),r(1,"div",0),u(2,"router-outlet"),n())},dependencies:[G,K]});let t=e;return t})();var le=t=>({filter:t});function ce(t,e){if(t&1&&(r(0,"mat-option",10)(1,"span",11),p(2),n()()),t&2){let s=e.$implicit;m("value",s.title),a(2),h(s.title)}}function pe(t,e){if(t&1){let s=E();r(0,"div",2),u(1,"img",3),x(2,"imagePatch"),r(3,"form",4)(4,"input",5),B("input",function(){R(s);let o=f();return j(o.searchMovie())}),n(),r(5,"mat-autocomplete",6,0),v(7,ce,3,2,"mat-option",7),n()(),r(8,"div",8)(9,"button",9),B("click",function(){R(s);let o=f();return j(o.guessMovie())}),p(10," Adivinar "),n()()()}if(t&2){let s=N(6),i=f();a(),m("src",w(2,6,i.movie.poster_path),g)("alt",i.movie.title)("ngStyle",L(8,le,"blur("+i.guessBlur+"px)")),a(3),m("formControl",i.searchInput)("matAutocomplete",s),a(3),m("ngForOf",i.movies)}}var ne=(()=>{let e=class e{constructor(i,o,l){this.moviesService=i,this.activatedRoute=o,this.router=l,this.movie=null,this.movies=[],this.guessBlur=20,this.searchInput=new H(""),this.guessCounter=5}ngOnDestroy(){this.movie=null}ngOnInit(){this.moviesService.getRandomMovie().subscribe(i=>this.movie=i)}searchMovie(){let i=this.searchInput.value||"";this.moviesService.searchMovies(i).subscribe(o=>this.movies=o)}guessMovie(){if(console.log(this.movie?.title),this.searchInput.value===this.movie?.title&&this.router.navigate(["/game/win",this.movie.id]),this.searchInput.value!==this.movie?.title&&this.guessCounter!==0){switch(this.guessCounter){case 5:this.guessBlur=15,this.guessCounter--;break;case 4:this.guessBlur=10,this.guessCounter--;break;case 3:this.guessBlur=7,this.guessCounter--;break;case 2:this.guessBlur=3,this.guessCounter--;break;case 1:this.guessBlur=0,this.guessCounter--,this.router.navigate(["/game/lose",this.movie.id]);break}console.log(this.guessCounter)}this.searchInput.setValue("")}reloadPage(){window.location.reload()}};e.\u0275fac=function(o){return new(o||e)(c(S),c(b),c(y))},e.\u0275cmp=d({type:e,selectors:[["game-page"]],decls:1,vars:1,consts:[["auto","matAutocomplete"],["class","flex flex-col mx-auto items-center w-52 md:w-60 lg:w-72 xl:w-72 3xl:w-96 mt-24",4,"ngIf"],[1,"flex","flex-col","mx-auto","items-center","w-52","md:w-60","lg:w-72","xl:w-72","3xl:w-96","mt-24"],[1,"xl:w-full","rounded-lg","shadow-lg",3,"src","alt","ngStyle"],[1,"flex","text-white","mt-14","w-96"],["type","text","placeholder","Busca una pel\xEDcula",1,"w-full","h-10","px-6","bg-[#202020]","text-white","rounded-3xl","my-input",3,"input","formControl","matAutocomplete"],["autoActiveFirstOption",""],[3,"value",4,"ngFor","ngForOf"],[1,"flex","justify-end","w-full"],[1,"bg-[#2b2b2b]","hover:bg-[#333333]","text-white","font-bold","py-2","px-4","rounded-3xl","mt-5",3,"click"],[3,"value"],[1,"ml-2"]],template:function(o,l){o&1&&v(0,pe,11,10,"div",1),o&2&&m("ngIf",l.movie)},dependencies:[T,C,O,X,J,Y,Q,z,U,W,$,I]});let t=e;return t})();function ue(t,e){if(t&1&&(r(0,"div",1)(1,"div"),u(2,"img",2),x(3,"imagePatch"),r(4,"span",3),p(5),n(),r(6,"h2",4),p(7,"\xA1HAS ACERTADO!"),n(),r(8,"button",5),p(9," \xBFQuieres volver a jugar? "),n()()()),t&2){let s=f();a(2),m("src",w(3,4,s.movie.poster_path),g)("alt",s.movie.title),a(3),h(s.movie.title),a(3),m("routerLink","/game")}}var se=(()=>{let e=class e{constructor(i,o,l){this.moviesService=i,this.activatedRoute=o,this.router=l}ngOnInit(){this.activatedRoute.params.pipe(_(({id:i})=>this.moviesService.getMovieById(i))).subscribe(i=>{if(!i)return this.router.navigate(["../movies/home"]);this.movie=i})}};e.\u0275fac=function(o){return new(o||e)(c(S),c(b),c(y))},e.\u0275cmp=d({type:e,selectors:[["app-win-page"]],decls:1,vars:1,consts:[["class","flex flex-col mx-auto items-center w-52 md:w-60 lg:w-72 xl:w-72 3xl:w-96 mt-24",4,"ngIf"],[1,"flex","flex-col","mx-auto","items-center","w-52","md:w-60","lg:w-72","xl:w-72","3xl:w-96","mt-24"],[1,"xl:w-full","rounded-lg","shadow-lg",3,"src","alt"],[1,"text-white","text-lg","font-semibold","mt-2","text-center"],[1,"text-white","text-2xl","font-bold","mt-10"],[1,"bg-[#2b2b2b]","hover:bg-violet-700","text-white","font-bold","py-2","px-4","rounded-3xl","mt-5",3,"routerLink"]],template:function(o,l){o&1&&v(0,ue,10,6,"div",0),o&2&&m("ngIf",l.movie)},dependencies:[C,F,I],encapsulation:2});let t=e;return t})();function de(t,e){if(t&1&&(r(0,"div",1)(1,"div",2),u(2,"img",3),x(3,"imagePatch"),r(4,"span",4),p(5),n(),r(6,"h2",5),p(7,"HAS FALLADO..."),n(),r(8,"button",6),p(9," \xBFQuieres volver a jugar? "),n()(),u(10,"div"),n()),t&2){let s=f();a(2),m("src",w(3,4,s.movie.poster_path),g)("alt",s.movie.title),a(3),h(s.movie.title),a(3),m("routerLink","/game")}}var me=(()=>{let e=class e{constructor(i,o,l){this.moviesService=i,this.activatedRoute=o,this.router=l}ngOnInit(){this.activatedRoute.params.pipe(_(({id:i})=>this.moviesService.getMovieById(i))).subscribe(i=>{if(!i)return this.router.navigate(["../movies/home"]);this.movie=i})}};e.\u0275fac=function(o){return new(o||e)(c(S),c(b),c(y))},e.\u0275cmp=d({type:e,selectors:[["app-lose-page"]],decls:1,vars:1,consts:[["class","flex flex-col mx-auto items-center w-52 md:w-60 lg:w-72 xl:w-72 3xl:w-96 mt-24",4,"ngIf"],[1,"flex","flex-col","mx-auto","items-center","w-52","md:w-60","lg:w-72","xl:w-72","3xl:w-96","mt-24"],[1,"flex","flex-col","items-center"],[1,"xl:w-full","rounded-lg","shadow-lg",3,"src","alt"],[1,"text-white","text-lg","font-semibold","mt-2","text-center"],[1,"text-white","text-2xl","font-bold","mt-10"],[1,"bg-[#2b2b2b]","hover:bg-violet-700","text-white","font-bold","py-2","px-4","rounded-3xl","mt-5",3,"routerLink"]],template:function(o,l){o&1&&v(0,de,11,6,"div",0),o&2&&m("ngIf",l.movie)},dependencies:[C,F,I]});let t=e;return t})();var fe=[{path:"",component:te,children:[{path:"movie",component:ne},{path:"win/:id",component:se},{path:"lose/:id",component:me},{path:"**",redirectTo:"movie"}]}],ae=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=A({type:e}),e.\u0275inj=P({imports:[k.forChild(fe),k]});let t=e;return t})();var He=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=A({type:e}),e.\u0275inj=P({imports:[V,Z,q,ae,ee]});let t=e;return t})();export{He as GameModule};