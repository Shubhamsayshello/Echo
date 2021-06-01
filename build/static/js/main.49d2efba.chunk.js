(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){e.exports={header:"MainNavigation_header__VQVRv",logo:"MainNavigation_logo__1U2-v",nav:"MainNavigation_nav__2Evsh",active:"MainNavigation_active__75clO"}},function(e,t,n){e.exports={form:"QuoteForm_form__CvoQv",loading:"QuoteForm_loading__34ZZJ",control:"QuoteForm_control__1N_jZ",actions:"QuoteForm_actions__3s2dn"}},,function(e,t,n){e.exports={list:"QuoteList_list__3kyZS",sorting:"QuoteList_sorting__1w36n",mainlabel:"QuoteList_mainlabel__2PJRb"}},function(e,t,n){e.exports={form:"NewCommentForm_form__3u7Zg",loading:"NewCommentForm_loading__2r8Qz",control:"NewCommentForm_control__3axVT",actions:"NewCommentForm_actions__11FnC"}},,,,,,,function(e,t,n){e.exports={main:"Layout_main__2wltl"}},function(e,t,n){e.exports={item:"QuoteItem_item__Q9UKe"}},function(e,t,n){e.exports={noquotes:"NoQuotesFound_noquotes__1G9sw"}},function(e,t,n){e.exports={spinner:"LoadingSpinner_spinner__3Gl4H"}},function(e,t,n){e.exports={card:"Card_card__2sBQ0"}},function(e,t,n){e.exports={comments:"Comments_comments__3oZ9g"}},function(e,t,n){e.exports={item:"CommentItem_item__2dhd6"}},function(e,t,n){e.exports={comments:"CommentsList_comments__3vGEG"}},function(e,t,n){e.exports={quote:"HighlightedQuote_quote__2p5-I"}},,,,,function(e,t,n){},,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var c=n(22),s=n.n(c),r=(n(37),n(2)),a=n(1),o=n(13),i=n.n(o),u=n(4),j=n(0),l=function(){return Object(j.jsxs)("header",{className:i.a.header,children:[Object(j.jsx)(u.c,{className:i.a.logo,style:{textDecoration:"none"},to:"/quotes",children:"Echo."}),Object(j.jsx)("nav",{className:i.a.nav,children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(u.c,{to:"/quotes",activeClassName:i.a.active,children:"All Quotes"})}),Object(j.jsx)("li",{children:Object(j.jsx)(u.c,{to:"/new-quotes",activeClassName:i.a.active,children:"Add New Quote"})})]})})]})},d=n(24),m=n.n(d),b=function(e){return Object(j.jsxs)(a.Fragment,{children:[Object(j.jsx)(l,{}),Object(j.jsx)("main",{className:m.a.main,children:e.children})]})},h=n(25),x=n.n(h),O=function(e){return Object(j.jsxs)("li",{className:x.a.item,children:[Object(j.jsxs)("figure",{children:[Object(j.jsx)("blockquote",{children:Object(j.jsx)("p",{children:e.text})}),Object(j.jsx)("figcaption",{children:e.author})]}),Object(j.jsx)(u.b,{className:"btn",to:"/quotes/".concat(e.id),children:"View Fullscreen"})]})},f=n(16),p=n.n(f),v=function(e){var t,n,c=Object(r.h)(),s=Object(r.i)(),o="asc"===new URLSearchParams(s.search).get("sort"),i=(t=e.quotes,n=o,t.sort((function(e,t){return n?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(j.jsxs)(a.Fragment,{children:[Object(j.jsx)("div",{children:Object(j.jsx)("h1",{className:p.a.mainlabel,children:"Share Your Inspirational Quotes"})}),Object(j.jsx)("div",{className:p.a.sorting,children:Object(j.jsxs)("button",{onClick:function(){c.push("/quotes?sort="+(o?"desc":"asc"))},children:["Sort ",o?"Descending":"Ascending"]})}),Object(j.jsx)("ul",{className:p.a.list,children:i.map((function(e){return Object(j.jsx)(O,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},_=n(26),g=n.n(_),N=function(){return Object(j.jsxs)("div",{className:g.a.noquotes,children:[Object(j.jsx)("p",{children:"No quotes found!"}),Object(j.jsx)(u.b,{className:"btn",to:"/new-quotes",children:"Add a Quote"})]})},w=n(27),q=n.n(w),C=function(){return Object(j.jsx)("div",{className:q.a.spinner})},y=n(12),k=n(5),Q=n.n(k),S=n(9),E=n(11);function F(e,t){return"SEND"===t.type?{data:null,error:null,status:"pending"}:"SUCCESS"===t.type?{data:t.responseData,error:null,status:"completed"}:"ERROR"===t.type?{data:null,error:t.errorMessage,status:"completed"}:e}var R=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(a.useReducer)(F,{status:t?"pending":null,data:null,error:null}),c=Object(E.a)(n,2),s=c[0],r=c[1],o=Object(a.useCallback)(function(){var t=Object(S.a)(Q.a.mark((function t(n){var c;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:"SEND"}),t.prev=1,t.next=4,e(n);case 4:c=t.sent,r({type:"SUCCESS",responseData:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),r({type:"ERROR",errorMessage:t.t0.message||"Something went wrong!"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return Object(y.a)({sendRequest:o},s)},A="https://echo-14604-default-rtdb.firebaseio.com";function I(){return D.apply(this,arguments)}function D(){return(D=Object(S.a)(Q.a.mark((function e(){var t,n,c,s,r;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(A,"/quotes.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=8;break}throw new Error(n.message||"Could not fetch quotes.");case 8:for(s in c=[],n)r=Object(y.a)({id:s},n[s]),c.push(r);return e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){return J.apply(this,arguments)}function J(){return(J=Object(S.a)(Q.a.mark((function e(t){var n,c,s;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(A,"/quotes/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not fetch quote.");case 8:return s=Object(y.a)({id:t},c),e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e){return T.apply(this,arguments)}function T(){return(T=Object(S.a)(Q.a.mark((function e(t){var n,c;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(A,"/quotes.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not create quote.");case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e){return Z.apply(this,arguments)}function Z(){return(Z=Object(S.a)(Q.a.mark((function e(t){var n,c;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(A,"/comments/").concat(t.quoteId,".json"),{method:"POST",body:JSON.stringify(t.commentData),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not add comment.");case 8:return e.abrupt("return",{commentId:c.name});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e){return G.apply(this,arguments)}function G(){return(G=Object(S.a)(Q.a.mark((function e(t){var n,c,s,r,a;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(A,"/comments/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not get comments.");case 8:for(r in s=[],c)a=Object(y.a)({id:r},c[r]),s.push(a);return e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var V=function(){var e=R(I,!0),t=e.sendRequest,n=e.status,c=e.data,s=e.error;return Object(a.useEffect)((function(){t()}),[t]),"pending"===n?Object(j.jsxs)("div",{className:"centered",children:[Object(j.jsx)(C,{})," "]}):s?Object(j.jsx)("p",{className:"centered focus",children:s}):"completed"!==n||c&&0!==c.length?Object(j.jsx)(v,{quotes:c}):Object(j.jsx)(N,{})},B=n(28),H=n.n(B),Y=function(e){return Object(j.jsx)("div",{className:H.a.card,children:e.children})},z=n(14),K=n.n(z),W=function(e){var t=Object(a.useState)(!1),n=Object(E.a)(t,2),c=n[0],s=n[1],o=Object(a.useRef)(),i=Object(a.useRef)();return Object(j.jsxs)(a.Fragment,{children:[Object(j.jsx)(r.a,{when:c,message:function(e){return"Are you sure you want to leave. All your entered data will be lost."}}),Object(j.jsx)(Y,{children:Object(j.jsxs)("form",{onFocus:function(){s(!0)},className:K.a.form,onSubmit:function(t){t.preventDefault();var n=o.current.value,c=i.current.value;e.onAddQuote({author:n,text:c})},children:[e.isLoading&&Object(j.jsx)("div",{className:K.a.loading,children:Object(j.jsx)(C,{})}),Object(j.jsxs)("div",{className:K.a.control,children:[Object(j.jsx)("label",{htmlFor:"author",children:"Author"}),Object(j.jsx)("input",{type:"text",id:"author",ref:o})]}),Object(j.jsxs)("div",{className:K.a.control,children:[Object(j.jsx)("label",{htmlFor:"text",children:"Text"}),Object(j.jsx)("textarea",{id:"text",rows:"5",ref:i})]}),Object(j.jsx)("div",{className:K.a.actions,children:Object(j.jsx)("button",{onClick:function(){s(!1)},className:"btn",children:"Add Quote"})})]})})]})},X=function(){var e=R(M),t=e.sendRequest,n=e.status,c=Object(r.h)();Object(a.useEffect)((function(){"completed"===n&&c.push("/quotes")}),[n,c]);return Object(j.jsx)(W,{isLoading:"pending"===n,onAddQuote:function(e){t(e)}})},$=function(){return Object(j.jsxs)("div",{className:"centered",children:[" ",Object(j.jsx)("p",{children:"Page Not Found!"})]})},ee=n(29),te=n.n(ee),ne=n(17),ce=n.n(ne),se=function(e){var t=Object(a.useRef)(),n=R(U),c=n.sendRequest,s=n.status,r=n.error,o=e.onAddedComment;Object(a.useEffect)((function(){"completed"!==s||r||o()}),[s,r,o]);var i=function(n){n.preventDefault();var s=t.current.value;c({commentData:{text:s},quoteId:e.quoteId})};return Object(j.jsxs)("form",{className:ce.a.form,onSubmit:i,children:["pending"===s&&Object(j.jsx)("div",{className:"centered",children:Object(j.jsx)(C,{})}),Object(j.jsxs)("div",{className:ce.a.control,onSubmit:i,children:[Object(j.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(j.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(j.jsx)("div",{className:ce.a.actions,children:Object(j.jsx)("button",{className:"btn",children:"Add Comment"})})]})},re=n(30),ae=n.n(re),oe=function(e){return Object(j.jsx)("li",{className:ae.a.item,children:Object(j.jsx)("p",{children:e.text})})},ie=n(31),ue=n.n(ie),je=function(e){return Object(j.jsx)("ul",{className:ue.a.comments,children:e.comments.map((function(e){return Object(j.jsx)(oe,{text:e.text},e.id)}))})},le=function(){var e=Object(a.useState)(!1),t=Object(E.a)(e,2),n=t[0],c=t[1],s=Object(r.j)().quoteId,o=R(P),i=o.sendRequest,u=o.status,l=o.data;Object(a.useEffect)((function(){i(s)}),[s,i]);var d,m=Object(a.useCallback)((function(){i(s)}),[i,s]);return"pending"===u&&(d=Object(j.jsx)("div",{className:"centered",children:Object(j.jsx)(C,{})})),"completed"===u&&(l||l.lenght>0)&&(d=Object(j.jsx)(je,{comments:l})),"completed"!==u||l&&0!==l.length||(d=Object(j.jsx)("p",{className:"centered",children:" No comments added yet."})),Object(j.jsxs)("section",{className:te.a.comments,children:[Object(j.jsx)("h2",{children:"User Comments"}),!n&&Object(j.jsx)("button",{className:"btn",onClick:function(){c(!0)},children:"Add a Comment"}),n&&Object(j.jsx)(se,{quoteId:s,onAddedComment:m}),d]})},de=n(32),me=n.n(de),be=function(e){return Object(j.jsxs)("figure",{className:me.a.quote,children:[Object(j.jsx)("p",{children:e.text}),Object(j.jsx)("figcaption",{children:e.author})]})},he=function(){var e=R(L,!0),t=e.sendRequest,n=e.status,c=e.data,s=e.error,o=Object(r.j)(),i=o.quoteId,l=Object(r.k)();return Object(a.useEffect)((function(){t(i)}),[t,i]),"pending"===n?Object(j.jsxs)("div",{className:"centered",children:[Object(j.jsx)(C,{})," "]}):s?Object(j.jsx)("p",{className:"centered focus",children:s}):c.text?Object(j.jsxs)("div",{children:[Object(j.jsx)(be,{text:c.text,author:c.author}),Object(j.jsx)(r.c,{path:l.path,exact:!0,children:Object(j.jsx)("div",{className:"centered",children:Object(j.jsx)(u.b,{className:"btn--flat",to:"/quotes/".concat(o.quoteId,"/comments"),children:"Load Comments"})})}),Object(j.jsx)(r.c,{path:"".concat(l.path,"/comments"),children:Object(j.jsx)(le,{})})]}):Object(j.jsx)("p",{children:"No Quote Found."})};var xe=function(){return Object(j.jsx)(b,{children:Object(j.jsxs)(r.e,{children:[Object(j.jsx)(r.c,{path:"/",exact:!0,children:Object(j.jsx)(r.b,{to:"/quotes"})}),Object(j.jsx)(r.c,{path:"/quotes",exact:!0,children:Object(j.jsx)(V,{})}),Object(j.jsx)(r.c,{path:"/quotes/:quoteId",children:Object(j.jsx)(he,{})}),Object(j.jsx)(r.c,{path:"/new-quotes",children:Object(j.jsx)(X,{})}),Object(j.jsx)(r.c,{path:"*",children:Object(j.jsx)($,{})})]})})};s.a.render(Object(j.jsx)(u.a,{children:Object(j.jsx)(xe,{})}),document.getElementById("root"))}],[[48,1,2]]]);
//# sourceMappingURL=main.49d2efba.chunk.js.map