(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t.p+"static/media/arya.a4b00d5b.jpg"},function(e,a,t){e.exports=t.p+"static/media/bran.25ec6355.jpg"},function(e,a,t){e.exports=t.p+"static/media/brienne.205a4cce.jpg"},function(e,a,t){e.exports=t.p+"static/media/bronn.1fd813bb.jpg"},function(e,a,t){e.exports=t.p+"static/media/cerci.094ac147.jpg"},function(e,a,t){e.exports=t.p+"static/media/daenerys.d0445104.jpg"},function(e,a,t){e.exports=t.p+"static/media/davos.9354b6b8.jpg"},function(e,a,t){e.exports=t.p+"static/media/gendry.7c247be7.jpg"},function(e,a,t){e.exports=t.p+"static/media/jaime.8537eb84.jpg"},function(e,a,t){e.exports=t.p+"static/media/jon.888ce090.jpg"},function(e,a,t){e.exports=t.p+"static/media/jorah.57d9863f.jpg"},function(e,a,t){e.exports=t.p+"static/media/sam.7a976e5f.jpg"},function(e,a,t){e.exports=t.p+"static/media/sandor.c6f62e98.jpg"},function(e,a,t){e.exports=t.p+"static/media/sansa.4664a5d8.jpg"},function(e,a,t){e.exports=t.p+"static/media/theon.91493552.jpg"},function(e,a,t){e.exports=t.p+"static/media/tormund.43427a09.jpg"},function(e,a,t){e.exports=t.p+"static/media/tyrion.01ed5bff.jpg"},function(e,a,t){e.exports=t.p+"static/media/varys.41497cb6.jpg"},,,function(e,a,t){e.exports=t(35)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(2),o=t.n(r),s=(t(33),t(3)),i=t(4),l=t(25),m=t(5),d=t(26),u=(t(34),{fontFamily:"Times New Roman', Times, serif"});function g(e){var a=e.correctGuess,t=e.score,n=e.topScore;return c.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},c.a.createElement("ul",null,c.a.createElement("li",{className:"brand",name:"title"},"Clicky Game"),c.a.createElement("li",{name:"guessStatus"},a?"You guessed Correctly!":"You guessed Incorrectly"),c.a.createElement("li",{name:"score"},"Score: ",t," || Top Score: ",n)))}function p(){return c.a.createElement("div",{className:"header",style:u},c.a.createElement("h1",null,"Game of Clicks"),c.a.createElement("h2",null,"The North remembers.",c.a.createElement("br",null),c.a.createElement("br",null),"Do you?"),c.a.createElement("br",null),c.a.createElement("h4",null,"Click on an image to earn points, but don't click it one more than once!"))}var b=function(e){return c.a.createElement("div",{id:"header",style:u},c.a.createElement(g,{correctGuess:e.correct,score:e.score,topScore:e.topScore}),c.a.createElement(p,null))};var y=function(e){return c.a.createElement("div",{className:"container"},e.images.map(function(a){return c.a.createElement("div",{id:a.id,key:a.id,name:a.name,onClick:e.handleOnClick,"aria-label":"click-item",className:e.imageClass,style:a.style})}))},k=t(6),f=t.n(k),h=t(7),j=t.n(h),v=t(8),E=t.n(v),C=t(9),I=t.n(C),x=t(10),S=t.n(x),O=t(11),w=t.n(O),N=t(12),G=t.n(N),T=t(13),A=t.n(T),J=t(14),Y=t.n(J),B=t(15),D=t.n(B),F=t(16),R=t.n(F),q=t(17),z=t.n(q),H=t(18),K=t.n(H),L=t(19),M=t.n(L),P=t(20),Q=t.n(P),U=t(21),V=t.n(U),W=t(22),X=t.n(W),Z=t(23),$=t.n(Z),_=t(24),ee=t.n(_),ae=[{id:1,name:"arya",style:{backgroundImage:"url(".concat(j.a,")")}},{id:2,name:"bran",style:{backgroundImage:"url(".concat(E.a,")")}},{id:3,name:"brienne",style:{backgroundImage:"url(".concat(I.a,")")}},{id:4,name:"bronn",style:{backgroundImage:"url(".concat(S.a,")")}},{id:5,name:"cerci",style:{backgroundImage:"url(".concat(w.a,")")}},{id:6,name:"daenerys",style:{backgroundImage:"url(".concat(G.a,")")}},{id:7,name:"davos",style:{backgroundImage:"url(".concat(A.a,")")}},{id:8,name:"gendry",style:{backgroundImage:"url(".concat(Y.a,")")}},{id:9,name:"jaime",style:{backgroundImage:"url(".concat(D.a,")")}},{id:10,name:"jon",style:{backgroundImage:"url(".concat(R.a,")")}},{id:11,name:"jorah",style:{backgroundImage:"url(".concat(z.a,")")}},{id:12,name:"sam",style:{backgroundImage:"url(".concat(K.a,")")}},{id:13,name:"sandor",style:{backgroundImage:"url(".concat(M.a,")")}},{id:14,name:"sansa",style:{backgroundImage:"url(".concat(Q.a,")")}},{id:15,name:"theon",style:{backgroundImage:"url(".concat(V.a,")")}},{id:16,name:"tormund",style:{backgroundImage:"url(".concat(X.a,")")}},{id:17,name:"tyrion",style:{backgroundImage:"url(".concat($.a,")")}},{id:18,name:"varys",style:{backgroundImage:"url(".concat(ee.a,")")}}],te=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={imageClass:"click-item",images:ae,alreadyClicked:[],correct:!0,score:0,topScore:0},t.handleOnClick=function(e){var a=e.target.id;if(t.state.alreadyClicked.includes(a))console.log("game over, man"),t.setState({alreadyClicked:[],imageClass:"click-item shake",correct:!1}),t.state.score>t.state.topScore&&t.setState({topScore:t.state.score}),t.setState({score:0});else{t.state.alreadyClicked.push(a),console.log(t.state.alreadyClicked);var n=f()(t.state.images);t.setState({images:n,imageClass:"click-item",correct:!0,score:t.state.score+1})}},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(b,{correct:this.state.correct,score:this.state.score,topScore:this.state.topScore}),c.a.createElement(y,{handleOnClick:this.handleOnClick,imageClass:this.state.imageClass,images:this.state.images}))}}]),a}(n.Component);o.a.render(c.a.createElement(te,null),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.3bb645ae.chunk.js.map