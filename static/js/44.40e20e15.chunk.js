(this["webpackJsonpckb-explorer-fronted"]=this["webpackJsonpckb-explorer-fronted"]||[]).push([[44],{590:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return s})),e.d(n,"c",(function(){return p}));var a=e(19),r=e(2);const c=(t,n)=>{t({type:r.c.UpdateUDTStatus,payload:{status:n}})},i=(t,n)=>{t({type:r.c.UpdateUDTFilterStatus,payload:{filterStatus:n}})},o=(t,n)=>{c(n,"InProgress"),Object(a.s)(t).then(t=>{t?(n({type:r.c.UpdateUDT,payload:{udt:t.attributes}}),c(n,"OK")):c(n,"Error")}).catch(()=>{c(n,"Error")})},s=(t,n,e,i)=>{c(i,"InProgress"),Object(a.t)(t,n,e).then(t=>{const n=t,e=n.data,a=n.meta;i({type:r.c.UpdateUDTTransactions,payload:{transactions:e.map(t=>t.attributes)||[]}}),i({type:r.c.UpdateUDTTransactionsTotal,payload:{total:a?a.total:0}}),c(i,"OK")}).catch(()=>{i({type:r.c.UpdateUDTTransactions,payload:{transactions:[]}}),i({type:r.c.UpdateUDTTransactionsTotal,payload:{total:0}}),c(i,"Error")})},p=(t,n,e,c,o)=>{i(o,"InProgress"),Object(a.u)(t,n,e,c).then(t=>{i(o,"OK");const n=t,e=n.data,a=n.meta;o({type:r.c.UpdateUDTTransactions,payload:{transactions:e.map(t=>t.attributes)||[]}}),o({type:r.c.UpdateUDTTransactionsTotal,payload:{total:a?a.total:0}})}).catch(()=>{i(o,"Error"),o({type:r.c.UpdateUDTTransactions,payload:{transactions:[]}}),o({type:r.c.UpdateUDTTransactionsTotal,payload:{total:0}})})}},591:function(t,n,e){"use strict";e.d(n,"a",(function(){return p})),e.d(n,"c",(function(){return d})),e.d(n,"d",(function(){return l})),e.d(n,"b",(function(){return u}));var a=e(19),r=e(2),c=e(42);const i=(t,n)=>{t({type:r.c.UpdateNervosDaoStatus,payload:{status:n}})},o=(t,n)=>{t({type:r.c.UpdateNervosDaoTransactionsStatus,payload:{transactionsStatus:n}})},s=(t,n,e)=>{t({type:r.c.UpdateNervosDaoTransactions,payload:{transactions:n}}),t({type:r.c.UpdateNervosDaoTransactionsTotal,payload:{total:e}})},p=t=>{i(t,"InProgress"),Object(a.k)().then(n=>{n?t({type:r.c.UpdateNervosDao,payload:{nervosDao:n.attributes}}):i(t,"Error")}).catch(()=>{i(t,"Error")})},d=(t,n,e)=>{i(t,"InProgress"),Object(a.m)(n,e).then(n=>{const e=n,a=e.data,r=e.meta;s(t,a.map(t=>t.attributes),void 0===r?1:r.total),i(t,"OK")}).catch(()=>{i(t,"Error")})},l=(t,n)=>{o(n,"InProgress"),t.startsWith("ckt")||t.startsWith("ckb")?Object(a.n)(t).then(t=>{o(n,"OK");const e=t,a=e.data,r=e.meta;s(n,a.map(t=>t.attributes),void 0===r?1:r.total)}).catch(()=>{o(n,"Error")}):Object(a.o)(Object(c.c)(t)).then(t=>{o(n,"OK");const e=t.attributes;s(n,[e],1)}).catch(()=>{o(n,"Error")})},u=t=>{Object(a.l)().then(n=>{const e=n.data;t({type:r.c.UpdateNervosDaoDepositors,payload:{depositors:e.map(t=>t.attributes)}})})}},611:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2BAMAAAB+a3fuAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH6NKgYAAAAMdFJOUwBFQYDlJg6azGa3UDlsNx8AAAEKSURBVDjL7dShUsNAEAbgHzIphRoeAFGFquhMLaYCOsxERCARCASyolNVUVNUBQ9QUVWF6ANggDBA+B+KzSV3XJo9jemKy+18l7vbnUkAnFGLVxTRU+3N2LFqT8ZwodB7STgis4EfCTmuDM9uC3tI7pI2+ePZCzl3SWvJrOuyQ/Lr7m/lDXmpJ0CcMLNLWzJPPSt681hNH2zdNjpyRvWaXHpbM6zItZmckN91QkR+2ib1dwyzsn63xg/Z60Met+SmYVJ/btrn123jnpSRvGpSUUaKuFGAiQPytBxU6xZ93tve/tWisMXLoJ3Lh8ZUt4nQELp5/zHF8jRo2RZBmyJoCwTtOkSIR7v3+AWlwQUc5KbeHwAAAABJRU5ErkJggg=="},613:function(t,n,e){"use strict";e.d(n,"a",(function(){return T}));var a=e(11),r=e(0),c=e.n(r),i=e(147),o=e(611),s=e.n(o),p=e(59),d=e.n(p),l=e(3),u=e(2),m=e(591),x=e(8),h=e(7),b=e(6),g=e(13);function f(){const t=Object(h.a)(["\n  background: #f4f4f4;\n  color: #000000;\n  border-radius: 2px;\n  font-size: 12px;\n  width: 55px;\n  height: 38px;\n  line-height: 38px;\n  cursor: pointer;\n\n  &: hover {\n    background: #dddddd;\n  }\n\n  @media (max-width: 750px) {\n    width: 50px;\n  }\n"]);return f=function(){return t},t}function A(){const t=Object(h.a)(["\n  position: relative;\n  width: ",";\n  height: 100%;\n  font-size: 16px;\n  padding-left: 26px;\n  padding-right: 30px;\n  background: rgba(255, 255, 255, 0);\n  opacity: 1;\n  border: 0px solid white;\n  color: #666666;\n  border-radius: 4px;\n  background-color: #f4f4f4;\n  &: focus {\n    color: #666666;\n    outline: none;\n  }\n  &::placeholder {\n    color: #bababa;\n  }\n\n  @media (max-width: 1200px) {\n    width: ",";\n  }\n\n  @media (max-width: 1000px) {\n    width: ",";\n  }\n\n  @media (max-width: 750px) {\n    width: ",";\n    font-size: 12px;\n  }\n"]);return A=function(){return t},t}function O(){const t=Object(h.a)(["\n  display: inline-block;\n  margin-left: ",";\n  margin-right: ",";\n  width: 30px;\n  z-index: 2;\n  display: flex;\n  justify-content: center;\n  cursor: ",";\n\n  @media (max-width: 750px) {\n    margin-left: ",";\n    margin-right: ",";\n  }\n\n  img {\n    margin-top: 3px;\n    width: ",";\n    height: ",";\n\n    @media (max-width: 750px) {\n      margin-top: 0;\n    }\n  }\n"]);return O=function(){return t},t}function y(){const t=Object(h.a)(["\n  width: 600px;\n  height: 38px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  @media (max-width: 1200px) {\n    width: 450px;\n  }\n\n  @media (max-width: 1000px) {\n    width: 320px;\n  }\n\n  @media (max-width: 750px) {\n    width: 80vw;\n  }\n"]);return y=function(){return t},t}const w=b.c.div(y()),j=Object(b.c)(g.a)(O(),t=>t.isClear?"-40px":"0",t=>t.isClear?"0":"-40px",t=>t.isClear?"pointer":"default !important",t=>t.isClear?"-14%":"0",t=>t.isClear?"0":"-14%",t=>t.isClear?"12px":"18px",t=>t.isClear?"12px":"18px"),U=b.c.input(A(),t=>t.showReset?"530px":"100%",t=>t.showReset?"380px":"100%",t=>t.showReset?"250px":"100%",t=>t.showReset?"82%":"100%"),E=b.c.div(f());var v=e(42),_=e(590),S=e(9);let T;!function(t){t[t.DAO=0]="DAO",t[t.UDT=1]="UDT"}(T||(T={}));const D=t=>{const n=t.current;n.value="",n.blur()};n.b=({content:t,filterType:n=T.DAO,typeHash:e})=>{const o=Object(x.c)(),p=Object(x.b)(),h=p.nervosDaoState.transactionsStatus,b=p.udtState.filterStatus,g=Object(i.a)(),f=Object(a.a)(g,1)[0],A=Object(r.useMemo)(()=>n===T.DAO?f("nervos_dao.dao_search_placeholder"):f("udt.search_placeholder"),[f,n]),O=Object(r.useState)(t||""),y=Object(a.a)(O,2),N=y[0],k=y[1],z=Object(r.useState)(A),R=Object(a.a)(z,2),C=R[0],P=R[1],K=Object(r.useState)(!1),F=Object(a.a)(K,2),H=F[0],B=F[1],I=Object(r.useState)(!1),J=Object(a.a)(I,2),L=J[0],M=J[1],Q=Object(r.useRef)(null),V=({isClear:t})=>c.a.createElement(j,{isClear:t,onClick:()=>{t&&(M(!1),D(Q))}},c.a.createElement("img",{src:t?d.a:s.a,alt:"search logo"})),G=()=>{const t=Object(x.c)();return c.a.createElement(E,{onClick:()=>{B(!1),M(!1),D(Q),n===T.DAO?Object(m.c)(t,1,S.t.PageSize):e&&Object(_.b)(e,1,S.t.PageSize,t)}},l.c.t("nervos_dao.dao_search_reset"))};return Object(r.useEffect)(()=>{n===T.DAO?"OK"===h?B(!0):"Error"===h&&(B(!0),o({type:u.b.UpdateFilterNoResult,payload:{filterNoResult:!0}})):n===T.UDT&&("OK"===b?B(!0):"Error"===b&&(B(!0),o({type:u.b.UpdateFilterNoResult,payload:{filterNoResult:!0}})))},[h,b,o,n]),Object(r.useEffect)(()=>{P(A)},[A]),c.a.createElement(w,null,H&&c.a.createElement(G,null),c.a.createElement(V,null),c.a.createElement(U,{ref:Q,showReset:H,placeholder:C,defaultValue:N||"",onChange:t=>{k(t.target.value),M(!!t.target.value)},onKeyUp:t=>{13===t.keyCode&&(()=>{const t=N.trim().replace(",","");!t||Object(v.d)(t)?o({type:u.b.UpdateFilterNoResult,payload:{filterNoResult:!0}}):n===T.DAO?Object(m.d)(t,o):e&&Object(_.c)(t,e,1,100,o)})()}}),L&&c.a.createElement(V,{isClear:!0}))}},845:function(t,n,e){"use strict";e.r(n),e.d(n,"SimpleUDT",(function(){return xt}));var a=e(11),r=e(558),c=e.n(r),i=e(0),o=e.n(i),s=e(12),p=e(276),d=e(592),l=e(565),u=e(273),m=e(8),x=e(2),h=e(563),b=e(9),g=e(3),f=e(42),A=e(7),O=e(6),y=e(13);function w(){const t=Object(A.a)(["\n  width: 100%;\n  height: 94px;\n  border-radius: 0 0 6px 6px;\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.12);\n  background-color: #ffffff;\n  margin-top: 4px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  > span {\n    white-space: pre-wrap;\n    font-size: 14px;\n    letter-spacing: 0.2px;\n    color: #666666;\n    text-align: center;\n  }\n"]);return w=function(){return t},t}function j(){const t=Object(A.a)(["\n  width: 100%;\n  height: 58px;\n  padding: 0 40px;\n  background: white;\n  border-radius: 6px 6px 0 0;\n  box-shadow: 2px 2px 6px 0 #dfdfdf;\n\n  @media (max-width: 750px) {\n    height: 108px;\n    padding: 16px;\n  }\n\n  .udt__transaction__container {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-size: 18px;\n    margin-bottom: 5px;\n\n    @media (max-width: 750px) {\n      flex-direction: column;\n      align-items: flex-start;\n    }\n  }\n\n  .udt__transaction__title {\n    font-size: 24px;\n    font-weight: 600;\n    font-style: normal;\n    line-height: 0.83;\n  }\n"]);return j=function(){return t},t}function U(){const t=Object(A.a)(["\n  margin-top: 4px;\n  width: 100%;\n"]);return U=function(){return t},t}function E(){const t=Object(A.a)(["\n  width: 100%;\n"]);return E=function(){return t},t}function v(){const t=Object(A.a)(["\n  font-size: 16px;\n  font-weight: 600;\n  margin-top: 10px;\n  cursor: pointer;\n  color: ",";\n  display: flex;\n  align-items: center;\n\n  > img {\n    width: 12px;\n    height: 12px;\n    margin: 2px 0 0 5px;\n  }\n\n  @media (max-width: 750px) {\n    font-size: 14px;\n\n    > img {\n      margin: 0px 0 0 5px;\n    }\n  }\n"]);return v=function(){return t},t}function _(){const t=Object(A.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-items: flex-start;\n  margin-top: 10px;\n\n  @media (min-width: 750px) {\n    height: 20px;\n  }\n\n  @media (max-width: 750px) {\n    flex-direction: column;\n  }\n\n  .address_lock_script__title {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: 130px;\n\n    &:before {\n      content: ' ';\n      width: 9px;\n      height: 9px;\n      border-radius: 50% 50%;\n      background: ",";\n\n      @media (max-width: 750px) {\n        width: 5px;\n        height: 5px;\n      }\n    }\n\n    > span {\n      margin-left: 10px;\n      font-weight: 500;\n\n      @media (max-width: 750px) {\n        margin-left: 5px;\n      }\n    }\n  }\n\n  .address_lock_script__content {\n    flex: 1;\n    margin-left: 20px;\n    display: flex;\n    flex-direction: column;\n    transform: translateY(2px);\n\n    @media (max-width: 750px) {\n      margin-left: 10px;\n      word-wrap: break-word;\n      word-break: break-all;\n      transform: translateY(0px);\n    }\n  }\n"]);return _=function(){return t},t}function S(){const t=Object(A.a)(["\n  width: 100%;\n  margin-top: 20px;\n\n  @media (max-width: 750px) {\n    margin-top: 10px;\n  }\n\n  .address__lock_script_title {\n    font-weight: 500;\n    height: 25px;\n    padding: 0px 0px 5px 0px;\n\n    @media (max-width: 750px) {\n      height: 16px;\n      padding: 0px;\n    }\n  }\n"]);return S=function(){return t},t}function T(){const t=Object(A.a)(["\n  font-size: 16px;\n  font-weight: 600;\n  margin-top: 15px;\n  cursor: pointer;\n  color: ",";\n  display: flex;\n  align-items: center;\n\n  > img {\n    width: 12px;\n    height: 12px;\n    margin: 2px 0 0 5px;\n  }\n\n  @media (max-width: 750px) {\n    font-size: 14px;\n    margin-top: 10px;\n\n    > img {\n      margin: 0px 0 0 5px;\n    }\n  }\n"]);return T=function(){return t},t}function D(){const t=Object(A.a)(["\n  display: flex;\n  flex-direction: row;\n\n  #address__pending_reward_help {\n    margin-left: 20px;\n    width: 20px;\n    height: 20px;\n\n    @media (max-width: 750px) {\n      margin-left: 10px;\n      width: 16px;\n      height: 16px;\n    }\n\n    > img {\n      width: 100%;\n      height: 100%;\n    }\n    &:focus {\n      outline: 0;\n    }\n  }\n"]);return D=function(){return t},t}function N(){const t=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 25px;\n  margin-bottom: 40px;\n\n  @media (max-width: 750px) {\n    margin: 0px;\n    padding: 20px;\n  }\n"]);return N=function(){return t},t}function k(){const t=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 25px;\n  margin-bottom: 40px;\n  width: 100%;\n\n  @media (max-width: 750px) {\n    margin: 0px;\n    padding: 20px;\n  }\n"]);return k=function(){return t},t}O.c.div(k());const z=O.c.div(N()),R=(O.c.div(D()),O.c.div(T(),t=>t.theme.primary),O.c.div(S()),O.c.div(_(),t=>t.theme.primary),Object(O.c)(y.a)(v(),t=>t.theme.primary)),C=O.c.div(E()),P=O.c.div(U()),K=O.c.div(j()),F=O.c.div(w());var H=e(566),B=e(577),I=e(564),J=e(277),L=e(14),M=e(554),Q=e(612),V=e(25);const G=t=>{if(!t)return g.c.t("address.unable_decode_address");const n=Object(L.a)()?Object(f.a)(t,8):Object(f.b)(t,Object(L.c)()?12:8,50);return n.includes("...")?o.a.createElement(Q.a,{placement:"top",title:o.a.createElement(M.a,{content:t})},o.a.createElement(V.b,{to:"/address/".concat(t),className:"monospace"},n)):o.a.createElement(V.b,{to:"/address/".concat(t),className:"monospace"},n)},W=t=>{const n=t.fullName,e=t.issuerAddress,a=t.symbol,r=t.addressesCount,c=t.decimal,i=t.totalAmount;return[{title:g.c.t("udt.name"),content:n},{title:g.c.t("udt.issuer"),content:G(e)},{title:g.c.t("udt.holder_addresses"),content:r},{title:g.c.t("udt.symbol"),content:a},{title:g.c.t("udt.decimal"),content:c},{title:g.c.t("udt.total_amount"),content:Object(J.e)(i,c)}]},Y=({children:t})=>{const n=Object(m.b)().udtState.udt;return o.a.createElement(B.a,{items:W(n),hideShadow:!0},t)};var Z=({currentPage:t,pageSize:n,typeHash:e})=>{const a=Object(m.c)(),r=Object(s.g)(),c=Object(m.b)(),p=c.udtState,d=p.transactions,l=void 0===d?[]:d,u=p.total,h=c.components.filterNoResult,b=Math.ceil(u/n);return Object(i.useEffect)(()=>()=>{a({type:x.b.UpdateFilterNoResult,payload:{filterNoResult:!1}})},[a]),h?o.a.createElement(F,null,o.a.createElement("span",null,g.c.t("search.udt_filter_no_result"))):o.a.createElement(o.a.Fragment,null,o.a.createElement(C,null,l.map((t,n)=>t&&o.a.createElement(I.a,{transaction:t,key:t.transactionHash,circleCorner:{bottom:n===l.length-1&&1===b}}))),b>1&&o.a.createElement(P,null,o.a.createElement(H.a,{currentPage:t,totalPages:b,onChange:t=>{r.replace("/sudt/".concat(e,"?page=").concat(t,"&size=").concat(n))}})))},X=e(29),q=e(590),$=e(589),tt=e.n($),nt=e(585),et=e.n(nt),at=e(586),rt=e.n(at),ct=e(587),it=e.n(ct),ot=e(588),st=e.n(ot),pt=e(10),dt=e(613),lt=e(683);const ut=({typeHash:t,total:n})=>o.a.createElement(K,null,o.a.createElement("div",{className:"udt__transaction__container"},o.a.createElement("div",{className:"udt__transaction__title"},"".concat(g.c.t("transaction.transactions")," (").concat(Object(J.c)(n),")")),o.a.createElement(dt.b,{typeHash:t,filterType:dt.a.UDT}))),mt=({currentPage:t,pageSize:n,typeHash:e})=>{const a=Object(m.b)(),r=a.udtState.status,c=a.app;switch(r){case"Error":return o.a.createElement(l.a,null);case"OK":return o.a.createElement(Z,{currentPage:t,pageSize:n,typeHash:e});case"InProgress":case"None":default:return o.a.createElement(p.a,{show:c.secondLoading})}},xt=()=>{const t=Object(m.c)(),n=Object(s.g)(),e=Object(i.useState)(!1),r=Object(a.a)(e,2),p=r[0],l=r[1],A=Object(s.h)().search,O=Object(s.i)().hash,y=c.a.parse(A),w=Object(m.b)().udtState,j=w.total,U=w.udt,E=U.iconFile,v=U.typeScript,_=w.status,S=Object(f.h)(y.page,b.t.PageNo),T=Object(f.h)(y.size,b.t.PageSize);return Object(i.useEffect)(()=>{Object(h.b)(t)},[t]),Object(i.useEffect)(()=>{T>b.t.MaxPageSize&&n.replace("/sudt/".concat(O,"?page=").concat(S,"&size=").concat(b.t.MaxPageSize)),Object(q.a)(O,t),Object(q.b)(O,S,T,t)},[O,S,T,t,n]),Object(X.b)(()=>{t({type:x.a.UpdateLoading,payload:{loading:"None"===_||"InProgress"===_}})},()=>{t({type:x.c.UpdateUDTStatus,payload:{status:"None"}})},b.m),o.a.createElement(u.a,null,o.a.createElement(z,{className:"container"},o.a.createElement(d.a,{title:g.c.t("udt.sudt"),hash:O,iconUri:E||tt.a},o.a.createElement(Y,null,o.a.createElement(R,{onClick:()=>l(!p)},o.a.createElement("div",null,g.c.t("udt.type_script")),o.a.createElement("img",{alt:"type script",src:(D=p,D?Object(pt.b)()?et.a:it.a:Object(pt.b)()?rt.a:st.a)})),p&&v&&o.a.createElement(lt.a,{script:v}))),o.a.createElement(ut,{typeHash:O,total:j}),o.a.createElement(mt,{currentPage:S,pageSize:T,typeHash:O})));var D};n.default=xt}}]);
//# sourceMappingURL=44.40e20e15.chunk.js.map