"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{387:function(A,o,t){t.r(o),t.d(o,{default:function(){return p}});var n,i,r=t(439),e=t(791),U=t(689),a=t(565),F=t(168),K=t(444),s=K.ZP.ul(n||(n=(0,F.Z)(["\n    list-style: none;\n    display: flex;\n    gap: 10px;\n    flex-direction: row;\n    flex-wrap: wrap;\n"]))),u=K.ZP.img(i||(i=(0,F.Z)(["\nwidth: 150px;\n"]))),R=t(609),c=t(184),p=function(){var A=(0,e.useState)(null),o=(0,r.Z)(A,2),t=o[0],n=o[1],i=(0,U.UO)().movieId;return(0,e.useEffect)((function(){(0,a.uV)(i).then((function(A){console.log("casts >>>>",A),n(A)}))}),[i]),(0,c.jsx)(c.Fragment,{children:t&&t.length>0?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(s,{children:t.map((function(A){var o=A.id,t=A.profile_path,n=A.original_name,i=A.character;return(0,c.jsxs)("li",{children:[(0,c.jsx)(u,{src:t?"https://image.tmdb.org/t/p/w200".concat(t):R,alt:n}),(0,c.jsx)("p",{children:n}),(0,c.jsx)("p",{children:i})]},o)}))})}):(0,c.jsx)("p",{children:"We don't have any casts for this movie."})})}},565:function(A,o,t){t.d(o,{E9:function(){return a},Hx:function(){return Q},Mc:function(){return K},WK:function(){return u},uV:function(){return c}});var n=t(861),i=t(757),r=t.n(i),e=t(912),U="2f1ef3830286d020340d6039bd2ecd1f";function a(){return F.apply(this,arguments)}function F(){return(F=(0,n.Z)(r().mark((function A(){var o;return r().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,(0,e.Z)("/trending/movie/day",{params:{api_key:U,size:20}});case 2:return o=A.sent,A.abrupt("return",o.data.results);case 4:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function K(A){return s.apply(this,arguments)}function s(){return(s=(0,n.Z)(r().mark((function A(o){var t;return r().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,(0,e.Z)("/movie/".concat(o),{params:{api_key:U}});case 2:return t=A.sent,console.log(t.data),A.abrupt("return",t.data);case 5:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function u(A){return R.apply(this,arguments)}function R(){return(R=(0,n.Z)(r().mark((function A(o){var t;return r().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,(0,e.Z)("/search/movie",{params:{api_key:U,query:o}});case 2:return t=A.sent,A.abrupt("return",t.data.results);case 4:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function c(A){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(r().mark((function A(o){var t;return r().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,(0,e.Z)("/movie/".concat(o,"/credits"),{params:{api_key:U}});case 2:return t=A.sent,A.abrupt("return",t.data.cast);case 4:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function Q(A){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(r().mark((function A(o){var t;return r().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,(0,e.Z)("/movie/".concat(o,"/reviews"),{params:{api_key:U}});case 2:return t=A.sent,A.abrupt("return",t.data.results);case 4:case"end":return A.stop()}}),A)})))).apply(this,arguments)}e.Z.defaults.baseURL="https://api.themoviedb.org/3"},609:function(A){A.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=387.c6a79395.chunk.js.map