(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(85)}])},85:function(e,o,t){"use strict";t.r(o);var n=t(5893),l=t(7294),s=t(2729),r=t.n(s);let c=()=>{let[e,o]=(0,l.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),[t,s]=(0,l.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]);e.some(e=>e.some(e=>0!==e));let c=[];c.push([-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1]);let a=()=>{o([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),s([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]])},i=!1,f=JSON.parse(JSON.stringify(e)),_=(t,n)=>{for(let l=-1;l<=1;l++)for(let s=-1;s<=1;s++){let r=t+l,a=n+s;r>=0&&r<=8&&a>=0&&a<=8&&l*s==0&&0===e[r][a]&&(f[r][a]=1,o(f),0===c[r][a]&&_(a,r))}},u=(n,l)=>{if(!1===i){let r=JSON.parse(JSON.stringify(e));0===e[l][n]&&(r[l][n]=1),o(r),console.log(e,"1回目"),console.log(l,n);let c=0,a=0;for(let e=0;e<=8;e+=1)for(let o=0;o<=8;o+=1)1===t[e][o]&&(a+=1);if(0===a){console.log("ボム作成！"),console.log("ボムuserInputs",r);let e=JSON.parse(JSON.stringify(t));for(;c<10;){let o=Math.floor(9*Math.random()),n=Math.floor(9*Math.random());0===r[o][n]&&0===t[o][n]&&(e[o][n]=1,c+=1),s(e)}console.log("bomb_number",c)}}};for(let o=0;o<=8;o+=1)for(let n=0;n<=8;n+=1){let l=0;if(1===e[o][n]){if(1===t[o][n])for(let e=0;e<=8;e+=1)for(let o=0;o<=8;o+=1)1===t[e][o]&&(c[e][o]=11);else{for(let e=-1;e<=1;e+=1)for(let s=-1;s<=1;s+=1)o+e>=0&&o+e<t.length&&n+s>=0&&n+s<t[o+e].length&&1===t[o+e][n+s]&&(l+=1);0===l?c[o][n]=0:c[o][n]=l}}1===e[o][n]&&0===c[o][n]&&(console.log("ok"),_(o,n))}let d=0;for(let o=0;o<=8;o+=1)for(let t=0;t<=8;t+=1)1===e[o][t]&&(d+=1);return 71===d&&(i=!0),console.log("最後userInput",e),console.log("最後board",c),console.log("最後bombMap",t),(0,n.jsxs)("div",{className:r().container,children:[(0,n.jsx)("button",{className:r()["reset-button"],onClick:a,style:{backgroundPosition:!0===i?-360:-330}}),(0,n.jsx)("div",{className:r().board,children:c.map((e,o)=>e.map((e,t)=>(0,n.jsx)(n.Fragment,{children:-1===c[o][t]?(0,n.jsx)("div",{className:r().cell,onClick:()=>u(t,o)},"cell-".concat(t,"-").concat(o)):(0,n.jsx)("div",{className:r().hoge,onClick:()=>u(t,o),style:{backgroundPosition:30*(1-c[o][t])}},"hoge-".concat(t,"-").concat(o))})))})]})};o.default=c},2729:function(e){e.exports={container:"index_container__gnN1f",hoge:"index_hoge__UVxRa","reset-button":"index_reset-button__5okxv",main:"index_main__kAcUb",board:"index_board__2d6xe",cell:"index_cell__3W8ZQ"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);