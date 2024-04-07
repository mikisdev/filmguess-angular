import{A as de,B as ve,C as E,D as fe,E as ge,g as X,h as Y,i as Z,j as P,k as A,m as ee,n as te,o as ie,p as oe,q as ne,r as re,s as ae,t as w,u as me,v as se,w as y,x as pe,y as le,z as ce}from"./chunk-4UWX3PHR.js";import{Fb as L,Gb as c,Hb as f,Ib as J,Lb as _,Mb as u,Nb as h,Ob as j,Pb as K,Q as k,Ra as S,Ua as r,Va as g,Y as R,ga as d,ha as N,kb as v,mb as m,pa as V,qa as q,rb as n,sb as a,tb as l,tc as x,uc as U,vb as H,vc as Q,xb as b,xc as B,yb as F,yc as z,zc as W}from"./chunk-OA72D47S.js";var Fe=t=>["/movies",t],ue=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d({type:e,selectors:[["movies-card"]],inputs:{movie:"movie"},decls:19,vars:15,consts:[[1,"w-52","h-auto","p-4","m-2","rounded-lg","shadow-md","hover:shadow-lg","hover:scale-110","transition-transform","cursor-pointer","group",3,"routerLink"],[1,"rounded-lg","h-64",3,"src","alt"],[1,"p-3","flex","flex-col","gap-5"],[1,"text-lg","font-semibold","text-balance"],[1,"flex-col","gap-5"],[1,"flex","justify-between"],[1,"text-sm","text-slate-500"],[1,"text-sm","text-white"]],template:function(o,s){o&1&&(n(0,"div",0),l(1,"img",1),u(2,"imagePatch"),n(3,"div",2)(4,"span",3),c(5),a(),n(6,"div",4)(7,"div",5)(8,"span",6),c(9,"Estreno"),a(),n(10,"p",7),c(11),u(12,"date"),a()(),n(13,"div",5)(14,"span",6),c(15,"Valoraci\xF3n"),a(),n(16,"p",7),c(17),u(18,"percent"),a()()()()()),o&2&&(m("routerLink",_(13,Fe,s.movie.id)),r(),m("src",h(2,6,s.movie.poster_path),S)("alt",s.movie.title),r(4),f(s.movie.title),r(6),f(j(12,8,s.movie.release_date,"MM/dd/yyyy")),r(6),f(h(18,11,s.movie.vote_average/10)))},dependencies:[P,z,B,w]});let t=e;return t})();var Te=t=>["/movies",t],T=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d({type:e,selectors:[["movies-grid-card"]],inputs:{movie:"movie"},decls:20,vars:15,consts:[[1,"relative"],[1,"w-44","md:w-52","h-auto","p-4","m-2","rounded-lg","shadow-md","hover:shadow-lg","hover:scale-110","hover:z-20","transition-transform","duration-300","cursor-pointer","group",3,"routerLink"],[1,"rounded-lg","h-52","md:h-64",3,"src","alt"],[1,"p-3","flex","flex-col","gap-5"],[1,"text-lg","font-semibold","text-balance"],[1,"flex-col","gap-5","group-hover:flex"],[1,"flex","justify-between"],[1,"text-sm","text-slate-500"],[1,"text-sm","text-white"]],template:function(o,s){o&1&&(n(0,"div",0)(1,"div",1),l(2,"img",2),u(3,"imagePatch"),n(4,"div",3)(5,"span",4),c(6),a(),n(7,"div",5)(8,"div",6)(9,"span",7),c(10,"Estreno"),a(),n(11,"p",8),c(12),u(13,"date"),a()(),n(14,"div",6)(15,"span",7),c(16,"Valoraci\xF3n"),a(),n(17,"p",8),c(18),u(19,"percent"),a()()()()()()),o&2&&(r(),m("routerLink",_(13,Te,s.movie.id)),r(),m("src",h(3,6,s.movie.poster_path),S)("alt",s.movie.title),r(4),f(s.movie.title),r(6),f(j(13,8,s.movie.release_date,"MM/dd/yyyy")),r(6),f(h(19,11,s.movie.vote_average/10)))},dependencies:[P,z,B,w]});let t=e;return t})();var De=t=>["/movies",t];function Oe(t,e){if(t&1&&(n(0,"mat-option",7)(1,"div",8),l(2,"img",9),u(3,"imagePatch"),n(4,"span",10),c(5),a()()()),t&2){let p=e.$implicit;m("routerLink",_(6,De,p.id)),r(2),m("src",h(3,4,p.poster_path),S)("alt",p.title),r(3),f(p.title)}}function ke(t,e){if(t&1&&(n(0,"mat-option"),c(1),a()),t&2){let p=F();r(),J("No se encontr\xF3 nada con el t\xE9rmino ",p.searchInput.value,"")}}var he=(()=>{let e=class e{constructor(i){this.moviesService=i,this.searchInput=new oe(""),this.movies=[]}searchMovie(){let i=this.searchInput.value||"";this.moviesService.searchMovies(i).subscribe(o=>this.movies=o)}};e.\u0275fac=function(o){return new(o||e)(g(y))},e.\u0275cmp=d({type:e,selectors:[["movie-search"]],decls:7,vars:4,consts:[["auto","matAutocomplete"],[1,"container","mx-auto","mt-24"],[1,"flex","justify-center","text-white"],["type","text","placeholder","Busca una pel\xEDcula",1,"w-full","h-10","px-6","mx-24","bg-[#2b2b2b]","text-white","rounded-3xl","my-input",3,"input","formControl","matAutocomplete"],["autoActiveFirstOption",""],[3,"routerLink",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"routerLink"],[1,"flex","items-center"],[1,"h-16","max-w-11","my-2","object-cover",3,"src","alt"],[1,"ml-2"]],template:function(o,s){if(o&1){let M=H();n(0,"div",1)(1,"form",2)(2,"input",3),b("input",function(){return V(M),q(s.searchMovie())}),a(),n(3,"mat-autocomplete",4,0),v(5,Oe,6,8,"mat-option",5)(6,ke,2,1,"mat-option",6),a()()()}if(o&2){let M=L(4);r(2),m("formControl",s.searchInput)("matAutocomplete",M),r(3),m("ngForOf",s.movies),r(),m("ngIf",s.movies.length===0&&s.searchInput.value&&s.searchInput.value.length>0)}},dependencies:[x,U,pe,me,le,ne,ee,te,ie,re,P,w]});let t=e;return t})();var xe=(()=>{let e=class e{constructor(){this.sidebarItems=[{label:"P\xE1gina principal",icon:"label"},{label:"Pel\xEDculas favoritas",icon:"grade"},{label:"Buscar pel\xEDculas",icon:"search"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d({type:e,selectors:[["movies-layout-page"]],decls:5,vars:0,consts:[[1,"container","mx-auto"],[1,"h-56"]],template:function(o,s){o&1&&(l(0,"shared-navbar")(1,"movie-search"),n(2,"div",0),l(3,"router-outlet"),a(),l(4,"div",1))},dependencies:[Y,se,he]});let t=e;return t})();function Ne(t,e){if(t&1&&(n(0,"div",6),l(1,"movies-card",7),a()),t&2){let p=e.$implicit;r(),m("movie",p)}}function Le(t,e){if(t&1&&(n(0,"div",6),l(1,"movies-card",7),a()),t&2){let p=e.$implicit;r(),m("movie",p)}}function je(t,e){if(t&1&&(n(0,"div",6),l(1,"movies-card",7),a()),t&2){let p=e.$implicit;r(),m("movie",p)}}var ye=(()=>{let e=class e{constructor(i){this.movieService=i,this.popularMovies=[],this.nowPlayingMovies=[],this.upcomingMovies=[],this.topRatedMovies=[]}ngOnInit(){this.movieService.getPopular(1).subscribe(i=>this.popularMovies=i),this.movieService.getNowPlaying(1).subscribe(i=>this.nowPlayingMovies=i),this.movieService.getUpcoming(1).subscribe(i=>this.upcomingMovies=i),this.movieService.getTopRated(1).subscribe(i=>this.topRatedMovies=i)}};e.\u0275fac=function(o){return new(o||e)(g(y))},e.\u0275cmp=d({type:e,selectors:[["movie-list-page"]],decls:15,vars:6,consts:[[1,"mt-16","shadow-2xl"],[1,"text-white","text-2xl","cursor-pointer","md:hover:text-violet-700",3,"routerLink"],[1,"flex","flex-nowrap","overflow-x-auto","overflow-y-hidden"],["class","text-white",4,"ngFor","ngForOf"],[1,"mt-24","shadow-2xl"],[1,"flex","flex-nowrap","overflow-x-auto","overflow-y-hidden","shadow-2xl"],[1,"text-white"],[3,"movie"]],template:function(o,s){o&1&&(n(0,"div",0)(1,"a",1),c(2,"En cartelera"),a(),n(3,"div",2),v(4,Ne,2,1,"div",3),a()(),n(5,"div",4)(6,"a",1),c(7,"Proximamente..."),a(),n(8,"div",2),v(9,Le,2,1,"div",3),a()(),n(10,"div",4)(11,"a",1),c(12,"Taquillazos"),a(),n(13,"div",5),v(14,je,2,1,"div",3),a()()),o&2&&(r(),m("routerLink","/movies/now-playing"),r(3),m("ngForOf",s.nowPlayingMovies),r(2),m("routerLink","/movies/upcoming"),r(3),m("ngForOf",s.upcomingMovies),r(2),m("routerLink","/movies/top-rated"),r(3),m("ngForOf",s.topRatedMovies))},dependencies:[x,P,ue]});let t=e;return t})();var Se=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d({type:e,selectors:[["movie-casting-card"]],inputs:{cast:"cast"},decls:8,vars:6,consts:[[1,"w-52","h-auto","p-4","m-2","rounded-lg","shadow-md","hover:shadow-lg","hover:scale-110","transition-transform","cursor-pointer","group"],[1,"rounded-lg","w-52","h-64","object-cover",3,"src","alt"],[1,"p-3","flex","flex-col","gap-5"],[1,"text-lg","font-semibold","text-balance"],[1,"text-lg","text-balance"]],template:function(o,s){o&1&&(n(0,"div",0),l(1,"img",1),u(2,"imagePatch"),n(3,"div",2)(4,"span",3),c(5),a(),n(6,"span",4),c(7),a()()()),o&2&&(r(),m("src",h(2,4,s.cast.profile_path),S)("alt",s.cast.name),r(4),f(s.cast.name),r(2),f(s.cast.character))},dependencies:[w]});let t=e;return t})();var Ce=t=>({"background-image":t});function Be(t,e){t&1&&(n(0,"mat-grid-list",5)(1,"mat-grid-tile"),l(2,"mat-spinner"),a()())}function ze(t,e){if(t&1&&l(0,"div",6),t&2){let p=F();m("ngStyle",_(1,Ce,"url("+p.background+")"))}}function $e(t,e){if(t&1&&(n(0,"div")(1,"a",18),l(2,"img",19),u(3,"imagePatch"),a()()),t&2){let p=e.$implicit;r(2),m("src",h(3,2,p.logo_path),S)("alt",p.provider_name)}}function Ae(t,e){if(t&1&&(n(0,"section",16),v(1,$e,4,4,"div",17),a()),t&2){let p=F(2);r(),m("ngForOf",p.providers)}}function Ge(t,e){if(t&1&&(n(0,"div",7)(1,"div",8),l(2,"div"),n(3,"h2",9),c(4),a(),n(5,"div",10),l(6,"img",11),n(7,"div",12)(8,"span",13),c(9,"Resumen"),a(),n(10,"p",14),c(11),a()()(),v(12,Ae,2,1,"section",15),a()()),t&2){let p=F();m("ngStyle",_(6,Ce,"url("+p.background+")")),r(4),f(p.movie.title),r(2),m("src",p.poster,S)("alt",p.movie.title),r(5),f(p.movie.overview),r(),m("ngIf",p.providers)}}function Ve(t,e){if(t&1&&(n(0,"div",20),l(1,"movie-casting-card",21),a()),t&2){let p=e.$implicit;r(),m("cast",p)}}var we=(()=>{let e=class e{constructor(i,o,s){this.moviesService=i,this.activatedRoute=o,this.router=s,this.providers=[],this.background="",this.poster=""}ngOnInit(){this.activatedRoute.params.pipe(k(({id:i})=>this.moviesService.getMovieById(i))).subscribe(i=>{if(!i)return this.router.navigate(["/movies/home"]);this.movie=i,this.background="https://image.tmdb.org/t/p/original/"+this.movie?.backdrop_path,this.poster="https://image.tmdb.org/t/p/original/"+this.movie?.poster_path}),this.activatedRoute.params.pipe(k(({id:i})=>this.moviesService.getMovieProviders(i))).subscribe(i=>{i&&(this.providers=i.flatrate,console.log(this.providers))}),this.activatedRoute.params.pipe(k(({id:i})=>this.moviesService.getMovieCast(i))).subscribe(i=>{if(i){if(i.length>12){this.casts=i.slice(0,12);return}this.casts=i}})}};e.\u0275fac=function(o){return new(o||e)(g(y),g(X),g(Z))},e.\u0275cmp=d({type:e,selectors:[["app-movie-page"]],decls:6,vars:5,consts:[["divLoading",""],["class","background w-screen h-screen",3,"ngStyle",4,"ngIf","ngIfElse"],["class","container background-image mt-24 ",3,"ngStyle",4,"ngIf","ngIfElse"],[1,"flex","flex-nowrap","overflow-x-auto","overflow-y-hidden","mt-4"],["class","text-white",4,"ngFor","ngForOf"],["cols","1"],[1,"background","w-screen","h-screen",3,"ngStyle"],[1,"container","background-image","mt-24",3,"ngStyle"],[1,"image-filter","w-full","h-full","overflow-hidden","pb-14"],[1,"flex","justify-center","text-white","text-4xl","font-bold","mt-4"],[1,"flex","mt-16","items-center","ml-20"],[1,"w-48","h-auto","rounded-lg",3,"src","alt"],[1,"flex","flex-col","ml-16","md:mr-28","xl:mr-48","2xl:mr-56"],[1,"text-white","text-xl","font-semibold"],[1,"mt-5","text-white"],["class","w-full min-h-full flex gap-6 mt-10 justify-end pr-4",4,"ngIf"],[1,"w-full","min-h-full","flex","gap-6","mt-10","justify-end","pr-4"],[4,"ngFor","ngForOf"],[1,"flex","flex-col"],[1,"w-24","rounded-xl",3,"src","alt"],[1,"text-white"],[3,"cast"]],template:function(o,s){if(o&1&&(v(0,Be,3,0,"ng-template",null,0,K)(2,ze,1,3,"div",1)(3,Ge,13,8,"div",2),n(4,"div",3),v(5,Ve,2,1,"div",4),a()),o&2){let M=L(1);r(2),m("ngIf",s.movie)("ngIfElse",M),r(),m("ngIf",s.movie)("ngIfElse",M),r(2),m("ngForOf",s.casts)}},dependencies:[x,U,Q,de,ce,ve,Se,w],styles:[".background-image[_ngcontent-%COMP%]{height:auto;background-size:cover;background-repeat:no-repeat;border-radius:25px}.image-filter[_ngcontent-%COMP%]{background-color:#0009;border-radius:25px}.background[_ngcontent-%COMP%]{position:fixed;top:0;left:0;background-size:cover;background-repeat:no-repeat;filter:blur(10px);z-index:-1}"]});let t=e;return t})();function qe(t,e){if(t&1&&(n(0,"div",2),l(1,"movies-grid-card",3),a()),t&2){let p=e.$implicit;r(),m("movie",p)}}var _e=(()=>{let e=class e{constructor(i){this.moviesService=i,this.nowPlayingMovies=[],this.page=1}ngOnInit(){this.moviesService.getNowPlaying(1).subscribe(i=>this.nowPlayingMovies=i)}onScroll(){this.page++,this.moviesService.getNowPlaying(this.page).subscribe(i=>this.nowPlayingMovies=[...this.nowPlayingMovies,...i])}};e.\u0275fac=function(o){return new(o||e)(g(y))},e.\u0275cmp=d({type:e,selectors:[["app-now-playing-page"]],decls:2,vars:3,consts:[["infiniteScroll","",1,"grid","grid-cols-2","md:grid-cols-3","lg:grid-cols-5","xl:grid-cols-6","justify-items-center",3,"scrolled","infiniteScrollDistance","infiniteScrollThrottle"],["class","text-white",4,"ngFor","ngForOf"],[1,"text-white"],[3,"movie"]],template:function(o,s){o&1&&(n(0,"div",0),b("scrolled",function(){return s.onScroll()}),v(1,qe,2,1,"div",1),a()),o&2&&(m("infiniteScrollDistance",2)("infiniteScrollThrottle",400),r(),m("ngForOf",s.nowPlayingMovies))},dependencies:[x,E,T]});let t=e;return t})();function He(t,e){if(t&1&&(n(0,"div",2),l(1,"movies-grid-card",3),a()),t&2){let p=e.$implicit;r(),m("movie",p)}}var be=(()=>{let e=class e{constructor(i){this.moviesService=i,this.upcomingMovies=[],this.page=1}ngOnInit(){this.moviesService.getUpcoming(1).subscribe(i=>this.upcomingMovies=i)}onScroll(){this.page++,this.moviesService.getUpcoming(this.page).subscribe(i=>this.upcomingMovies=[...this.upcomingMovies,...i])}};e.\u0275fac=function(o){return new(o||e)(g(y))},e.\u0275cmp=d({type:e,selectors:[["app-upcoming-page"]],decls:2,vars:3,consts:[["infiniteScroll","",1,"grid","grid-cols-1","md:grid-cols-3","lg:grid-cols-5","xl:grid-cols-6","justify-items-center","mt-16",3,"scrolled","infiniteScrollDistance","infiniteScrollThrottle"],["class","text-white",4,"ngFor","ngForOf"],[1,"text-white"],[3,"movie"]],template:function(o,s){o&1&&(n(0,"div",0),b("scrolled",function(){return s.onScroll()}),v(1,He,2,1,"div",1),a()),o&2&&(m("infiniteScrollDistance",2)("infiniteScrollThrottle",400),r(),m("ngForOf",s.upcomingMovies))},dependencies:[x,E,T]});let t=e;return t})();function Je(t,e){if(t&1&&(n(0,"div",2),l(1,"movies-grid-card",3),a()),t&2){let p=e.$implicit;r(),m("movie",p)}}var Pe=(()=>{let e=class e{constructor(i){this.moviesService=i,this.topRatedMovies=[],this.page=1}ngOnInit(){this.moviesService.getTopRated(1).subscribe(i=>this.topRatedMovies=i)}onScroll(){this.page++,this.moviesService.getTopRated(this.page).subscribe(i=>this.topRatedMovies=[...this.topRatedMovies,...i])}};e.\u0275fac=function(o){return new(o||e)(g(y))},e.\u0275cmp=d({type:e,selectors:[["app-top-rated-page"]],decls:2,vars:3,consts:[["infiniteScroll","",1,"grid","grid-cols-1","md:grid-cols-3","lg:grid-cols-5","xl:grid-cols-6","justify-items-center","mt-16",3,"scrolled","infiniteScrollDistance","infiniteScrollThrottle"],["class","text-white",4,"ngFor","ngForOf"],[1,"text-white"],[3,"movie"]],template:function(o,s){o&1&&(n(0,"div",0),b("scrolled",function(){return s.onScroll()}),v(1,Je,2,1,"div",1),a()),o&2&&(m("infiniteScrollDistance",2)("infiniteScrollThrottle",400),r(),m("ngForOf",s.topRatedMovies))},dependencies:[x,E,T]});let t=e;return t})();var Ke=[{path:"",component:xe,children:[{path:"home",component:ye},{path:"now-playing",component:_e},{path:"upcoming",component:be},{path:"top-rated",component:Pe},{path:":id",component:we},{path:"**",redirectTo:"home"}]}],Ie=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=N({type:e}),e.\u0275inj=R({imports:[A.forChild(Ke),A]});let t=e;return t})();var Ht=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=N({type:e}),e.\u0275inj=R({imports:[W,fe,ae,Ie,ge]});let t=e;return t})();export{Ht as a};
