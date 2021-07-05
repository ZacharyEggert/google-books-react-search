(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{33:function(e,t,s){},61:function(e,t,s){"use strict";s.r(t);var r=s(1),c=s(27),a=s.n(c),n=(s(33),s(11)),l=s(2),o=s(13),i=s(0),d=function(){return Object(i.jsxs)("div",{className:"w-full py-4 my-4 border-2 border-black border-solid",children:[Object(i.jsxs)("h1",{className:"text-2xl text-center sm:text-4xl md:text-5xl g-font",children:["(React)",Object(i.jsx)("br",{className:"hidden"})," Google Books Search"]}),Object(i.jsx)("h3",{className:"py-4 text-lg text-center sm:text-xl md:text-2xl",children:"Search for and Save Books of Interest"})]})},b=s(8),j=s.n(b),h=function(e){var t=e.book,s=e.saved,r=t.title,c=t.authors,a=t.description,n=t.image,l=t.link,o=t.id,d=function(){s?j.a.delete("/api/saved"+o):j.a.post("/api/saved/"+o,{book:t})};return Object(i.jsxs)("div",{className:"w-full p-2 border-2 border-black border-solid",children:[Object(i.jsxs)("div",{className:"flex justify-between",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{className:"text-lg",children:r}),Object(i.jsxs)("p",{className:"text-xs",children:["Written By ",c.join(", ")]})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{href:l,children:Object(i.jsx)("button",{className:"px-2 m-1 bg-white border-2 border-black border-solid shadow-md",children:"View"})}),s?Object(i.jsx)("button",{className:"px-2 m-1 bg-white border-2 border-black border-solid shadow-md",onClick:d,children:"Unsave"}):Object(i.jsx)("button",{className:"px-2 m-1 bg-white border-2 border-black border-solid shadow-md",onClick:d,children:"Save"})]})]}),Object(i.jsxs)("div",{className:"flex mt-4",children:[Object(i.jsx)("img",{alt:r,src:n,className:"w-32 mr-4 md:w-48"}),Object(i.jsx)("p",{className:"",children:a})]})]})},x=function(e){var t=e.savedBooks;return Object(i.jsxs)("div",{className:"w-full px-2 py-2 pb-4 my-4 border-2 border-black border-solid",children:[Object(i.jsx)("h4",{className:"mb-2 text-lg",children:"Saved Books"}),t?t.map((function(e){return Object(i.jsx)(h,{book:e,saved:!0},e.id+"res")})):null]})},m=function(){return Object(i.jsx)("div",{className:"w-full py-4 my-4 border-2 border-black border-solid",children:Object(i.jsx)("h3",{className:"py-4 text-lg text-center sm:text-xl md:text-2xl",children:"No books saved yet... Go do some searching."})})},u=function(){return Object(i.jsx)("div",{className:"w-full py-4 my-4 border-2 border-black border-solid",children:Object(i.jsx)("h3",{className:"py-4 text-lg text-center sm:text-xl md:text-2xl",children:"Loading..."})})},p=function(){var e=[],t=Object(r.useState)(!0),s=Object(o.a)(t,2),c=s[0],a=s[1];return Object(r.useEffect)((function(){j.a.get("/api/saved").then((function(e){if(e.status<300)return e;throw new Error(e)})).then((function(e){console.log(e),a(!1)})).catch((function(e){return console.error(e)}))}),[]),Object(i.jsxs)("div",{className:"h-[calc(100vh-82px)] px-4 pt-4",children:[Object(i.jsx)(d,{}),c?Object(i.jsx)(u,{}):e?Object(i.jsx)(x,{savedBooks:e}):Object(i.jsx)(m,{})]})},O=s(12),f=s(16),v=function(e){var t=e.state,s=t.searchState,r=t.setSearchState;return Object(i.jsxs)("div",{className:"w-full px-2 py-2 my-4 border-2 border-black border-solid",children:[Object(i.jsx)("h4",{className:"text-lg",children:"Book Search"}),Object(i.jsx)("p",{className:"py-4 text-xs",children:"Book"}),Object(i.jsx)("input",{className:"w-full px-1 border-2 border-black outline-none",value:s.search,onChange:function(e){r(Object(f.a)(Object(f.a)({},s),{},Object(O.a)({},e.target.name,e.target.value)))},name:"search"}),Object(i.jsx)("div",{className:"flex flex-row-reverse",children:Object(i.jsx)("button",{className:"px-2 my-2 bg-white border-2 border-black border-solid shadow-md",onClick:function(e){e.preventDefault(),j.a.get("/api/search/".concat(s.search)).then((function(e){if(e.status<300)return e;throw new Error(e)})).then((function(e){})).catch((function(e){return console.error(e)}))},children:"Search"})})]})},g=function(e){var t=e.state.searchState.results;return Object(i.jsxs)("div",{className:"w-full px-2 py-2 pb-4 my-4 border-2 border-black border-solid",children:[Object(i.jsx)("h4",{className:"mb-2 text-lg",children:"Results"}),t.map((function(e){return Object(i.jsx)(h,{book:e},e.id+"res")}))]})},k=function(){var e=Object(r.useState)({search:"Harry Potter",results:[{title:"Harry Potter and That Time Hermione Was a Cat",authors:["J.K. Rowling"],description:"Harry Potter hopes this doesn't awaken anything inside him, in this all new instant classic set in between years 3 and 4 at Hogwarts.",image:"https://placekitten.com/g/200/250",link:"https://google.com/",id:"444"},{title:"Harry Potter and That Time Hermione Was a Cat",authors:["J.K. Rowling"],description:"Harry Potter hopes this doesn't awaken anything inside him, in this all new instant classic set in between years 3 and 4 at Hogwarts.",image:"https://placekitten.com/g/200/250",link:"https://google.com/",id:"445"}]}),t=Object(o.a)(e,2),s=t[0],c=t[1];return Object(i.jsxs)("div",{className:"h-[calc(100vh-82px)] px-4 pt-4",children:[Object(i.jsx)(d,{}),Object(i.jsx)(v,{state:{searchState:s,setSearchState:c}}),0!==s.results.length?Object(i.jsx)(g,{state:{searchState:s,setSearchState:c}}):null]})},w=function(){return Object(i.jsx)("div",{className:"w-full pb-4 border-b-[2px] border-black border-solid",children:Object(i.jsxs)("nav",{className:"flex items-end px-4 pt-4 align-middle",children:[Object(i.jsx)("h3",{className:"text-2xl g-font",children:"Google Books"}),Object(i.jsx)(n.b,{to:"/",className:"pb-0.5 pl-6 hover:text-[#555]",children:"Search"}),Object(i.jsx)(n.b,{to:"/saved",className:"pb-0.5 pl-6 hover:text-[#555]",children:"Saved"})]})})},N=function(){return Object(i.jsxs)(n.a,{children:[Object(i.jsx)(w,{}),Object(i.jsxs)(l.c,{children:[Object(i.jsx)(l.a,{path:"/saved",component:p}),Object(i.jsx)(l.a,{path:"/",component:k})]})]})};a.a.render(Object(i.jsx)(N,{}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.e2a4d197.chunk.js.map