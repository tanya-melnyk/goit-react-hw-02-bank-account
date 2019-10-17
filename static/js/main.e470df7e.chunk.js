(this["webpackJsonpgoit-react-hw-02-bank-account"]=this["webpackJsonpgoit-react-hw-02-bank-account"]||[]).push([[0],{25:function(n,t,e){n.exports=e(39)},39:function(n,t,e){"use strict";e.r(t);var a=e(0),r=e.n(a),o=e(4),i=e.n(o),c=e(2),u=e(3);function l(){var n=Object(c.a)(["\nhtml {\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nbody {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;\n  font-size: 16px;\n}\n"]);return l=function(){return n},n}var s=Object(u.a)(l()),p=e(16),f=e(7),d=e(8),b=e(10),m=e(9),h=e(11),x=e(6),g=(e(34),e(15)),v=e.n(g);function w(){var n=Object(c.a)(["\n  margin-right: 2px;\n"]);return w=function(){return n},n}function E(){var n=Object(c.a)(["\n  margin-right: 20px;\n"]);return E=function(){return n},n}function O(){var n=Object(c.a)(["\n  padding: 16px;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 700;\n  color: #666;\n"]);return O=function(){return n},n}var y=u.b.p(O()),j=u.b.span(E()),k=u.b.span(w()),S=function(n){return parseFloat(Math.round(100*n)/100).toFixed(2)},z=function(n){var t=n.balance,e=n.income,a=n.expenses;return r.a.createElement(y,null,r.a.createElement(j,null,r.a.createElement(k,null,r.a.createElement("span",{role:"img","aria-label":"upward arrow"},"\u2b06\ufe0f")),S(e),"$"),r.a.createElement(j,null,r.a.createElement(k,null,r.a.createElement("span",{role:"img","aria-label":"downward arrow"},"\u2b07\ufe0f")),S(a),"$"),r.a.createElement("span",null,"Balance: ",S(t),"$"))};function D(){var n=Object(c.a)(["\n  min-width: 200px;\n  border-radius: 3px;\n  border: none;\n  text-indent: 0.4rem;\n"]);return D=function(){return n},n}function W(){var n=Object(c.a)(["\n  display: inline-block;\n  min-width: 144px;\n  border: 0;\n  padding: 4px 16px;\n  margin-left: 16px;\n  background-color: #3884ff;\n  border-radius: 3px;\n  transition: all 200ms ease;\n  font-family: inherit;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 24px;\n  font-style: normal;\n  text-align: center;\n  text-decoration: none;\n  color: #fff;\n  cursor: pointer;\n\n  :hover,\n  :focus {\n    background-color: #1f65d6;\n  }\n"]);return W=function(){return n},n}function A(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 40px;\n  background-color: #002757;\n"]);return A=function(){return n},n}var C=u.b.section(A()),F=u.b.button(W()),V=u.b.input(D()),M=function(n){function t(){var n,e;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=Object(b.a)(this,(n=Object(m.a)(t)).call.apply(n,[this].concat(r)))).state={inputValue:""},e.handleInput=function(n){var t=Number(n.target.value);e.setState({inputValue:t})},e.handleDeposit=function(){e.props.onDeposit(e.state.inputValue),e.reset()},e.handleWithdraw=function(){e.props.onWithdraw(e.state.inputValue),e.reset()},e.reset=function(){e.setState({inputValue:""})},e}return Object(h.a)(t,n),Object(d.a)(t,[{key:"render",value:function(){var n=this.state.inputValue;return r.a.createElement(C,null,r.a.createElement(V,{type:"number",name:"amount",value:n,onChange:this.handleInput}),r.a.createElement(F,{type:"button",onClick:this.handleDeposit},"Deposit"),r.a.createElement(F,{type:"button",onClick:this.handleWithdraw},"Withdraw"))}}]),t}(a.Component);function T(){var n=Object(c.a)(["\n  padding-left: 70px;\n  text-transform: capitalize;\n  text-align: left;\n"]);return T=function(){return n},n}function I(){var n=Object(c.a)(["\n  width: 33.3%;\n  padding: 10px 50px;\n  font-size: 14px;\n  text-align: center;\n  border: 1px solid #eef0f5;\n  color: #85888a;\n"]);return I=function(){return n},n}function $(){var n=Object(c.a)(["\n  padding: 14px 50px;\n  width: 33.3%;\n  background-color: #eef0f5;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  text-align: center;\n  border-right: 1px solid #fff;\n  :last-child {\n    border-right: none;\n  }\n"]);return $=function(){return n},n}function B(){var n=Object(c.a)(["\n  margin: 0 auto;\n  box-shadow: 0px 1px 4px 0px rgba(184, 184, 184, 1);\n  border-width: 1px;\n  border-collapse: collapse;\n  border-radius: 2px;\n  overflow: hidden;\n"]);return B=function(){return n},n}var J=u.b.table(B()),L=u.b.th($()),N=u.b.td(I()),U=Object(u.b)(N)(T()),H=function(n){var t=n.items;return r.a.createElement(J,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement(L,null,"Transaction"),r.a.createElement(L,null,"Amount"),r.a.createElement(L,null,"Date"))),r.a.createElement("tbody",null,t.map((function(n){return r.a.createElement("tr",{key:n.id},r.a.createElement(U,null,n.type),r.a.createElement(N,null,(t=n.amount,parseFloat(Math.round(100*t)/100).toFixed(2)),"$"),r.a.createElement(N,null,n.date));var t}))))};function R(){var n=Object(c.a)(["\n  max-width: 800px;\n  margin: 0 auto;\n"]);return R=function(){return n},n}var q=u.b.div(R()),G={zeroAmount:"\u2b05\ufe0f Enter some amount to create a transaction!",notEnaughMoney:"\u2757\ufe0f There are not enough funds on the account to make a withdrawal!"},K=function(n){function t(){var n,e;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=Object(b.a)(this,(n=Object(m.a)(t)).call.apply(n,[this].concat(r)))).state={transactions:[],balance:0},e.handleDeposit=function(n){e.setState((function(t){var e=t.transactions,a=t.balance;if(0===n||""===n)return x.b.info(G.zeroAmount),{transactions:e,balance:a};var r={id:v()(),type:"deposit",amount:n,date:(new Date).toLocaleString()};return{transactions:[].concat(Object(p.a)(e),[r]),balance:a+n}}))},e.handleWithdraw=function(n){e.setState((function(t){var e=t.transactions,a=t.balance;if(a<n)return x.b.warning(G.notEnaughMoney),{transactions:e,balance:a};if(0===n||""===n)return x.b.info(G.zeroAmount),{transactions:e,balance:a};var r={id:v()(),type:"withdrawal",amount:n,date:(new Date).toLocaleString()};return{transactions:[].concat(Object(p.a)(e),[r]),balance:a-n}}))},e}return Object(h.a)(t,n),Object(d.a)(t,[{key:"countTotalSumOf",value:function(n){return this.state.transactions.filter((function(t){return t.type===n})).reduce((function(n,t){return n+t.amount}),0)}},{key:"render",value:function(){var n=this.state,t=n.transactions,e=n.balance,a=this.countTotalSumOf("deposit"),o=this.countTotalSumOf("withdrawal");return r.a.createElement(q,null,r.a.createElement(M,{onDeposit:this.handleDeposit,onWithdraw:this.handleWithdraw}),r.a.createElement(z,{balance:e,income:a,expenses:o}),r.a.createElement(H,{items:t}),r.a.createElement(x.a,null))}}]),t}(a.Component),P=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,null),r.a.createElement(K,null))};i.a.render(r.a.createElement(P,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.e470df7e.chunk.js.map