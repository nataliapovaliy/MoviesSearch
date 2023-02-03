"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[115],{115:function(n,e,r){r.r(e),r.d(e,{default:function(){return E}});var t,i,a,s,c,u,o,p,l,d,f=r(439),h=r(791),x=r(87),v=r(689),m=r(565),Z=r(168),g=r(444),j=g.ZP.button(t||(t=(0,Z.Z)(["\n    margin: 10px 20px;\n"]))),w=g.ZP.div(i||(i=(0,Z.Z)(["\n    margin-left: 20px;\n    padding-bottom: 20px;\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n    border-bottom: 2px solid lightgray;\n"]))),y=g.ZP.div(a||(a=(0,Z.Z)(["\n    display: flex;\n    flex-direction: column;\n"]))),b=g.ZP.h3(s||(s=(0,Z.Z)(["\n    font-size: large;\n"]))),k=g.ZP.p(c||(c=(0,Z.Z)(["\n    /* max-width: 500px; */\n"]))),_=g.ZP.p(u||(u=(0,Z.Z)(["\n    font-weight: 700;\n"]))),P=g.ZP.div(o||(o=(0,Z.Z)(["\n    display: flex;\n    flex-direction: column;\n    \n"]))),U=g.ZP.div(p||(p=(0,Z.Z)(["\n    display: flex;\n    flex-direction: row;\n    gap: 10px;\n"]))),C=g.ZP.li(l||(l=(0,Z.Z)(["\n    list-style: none;\n"]))),M=g.ZP.div(d||(d=(0,Z.Z)(["\n    margin-left: 20px;\n    margin-bottom: 10px;\n    border-bottom: 2px solid lightgray;\n"]))),z=r(184),E=function(){var n=(0,v.s0)(),e=(0,h.useState)(null),r=(0,f.Z)(e,2),t=r[0],i=r[1],a=(0,v.UO)().movieId,s=(0,v.TH)();return(0,h.useEffect)((function(){(0,m.Mc)(a).then(i)}),[a]),(0,z.jsx)(z.Fragment,{children:t&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(j,{onClick:function(){var e,r;return n(null!==(e=null===(r=s.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/")},children:"Go back"}),(0,z.jsxs)(w,{children:[(0,z.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(t.poster_path),alt:t.title}),(0,z.jsxs)(y,{children:[(0,z.jsx)("h2",{children:t.title}),(0,z.jsxs)("p",{children:["User Score: ",Math.round(10*t.vote_average),"%"]}),(0,z.jsx)(b,{children:"Overview"}),(0,z.jsx)(k,{children:t.overview}),(0,z.jsxs)(P,{children:[(0,z.jsx)(_,{children:"Genres"}),(0,z.jsx)(U,{children:t.genres.map((function(n){var e=n.name,r=n.id;return(0,z.jsx)(C,{children:(0,z.jsx)("p",{children:e})},r)}))})]})]})]}),(0,z.jsxs)(M,{children:[(0,z.jsx)("p",{children:"Additional information"}),(0,z.jsxs)("ul",{children:[(0,z.jsx)("li",{children:(0,z.jsx)(x.rU,{to:"cast",children:"Cast"})}),(0,z.jsx)("li",{children:(0,z.jsx)(x.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,z.jsx)(v.j3,{})]})})}},565:function(n,e,r){r.d(e,{E9:function(){return u},Hx:function(){return v},Mc:function(){return p},WK:function(){return d},uV:function(){return h}});var t=r(861),i=r(757),a=r.n(i),s=r(912),c="2f1ef3830286d020340d6039bd2ecd1f";function u(){return o.apply(this,arguments)}function o(){return(o=(0,t.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Z)("/trending/movie/day",{params:{api_key:c,size:20}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Z)("/movie/".concat(e),{params:{api_key:c}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return f.apply(this,arguments)}function f(){return(f=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Z)("/search/movie",{params:{api_key:c,query:e}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Z)("/movie/".concat(e,"/credits"),{params:{api_key:c}});case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Z)("/movie/".concat(e,"/reviews"),{params:{api_key:c}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=115.1c350b57.chunk.js.map