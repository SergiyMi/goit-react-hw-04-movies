(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{34:function(e,t,a){e.exports=a(63)},39:function(e,t,a){},40:function(e,t,a){e.exports={App:"App_App__2zNH3"}},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),o=a.n(c),i=(a(39),a(2)),l=a(3),u=a(5),s=a(4),m=a(6),h=a(8),p=a(12),v=(a(40),a(15)),f="/",b="/movies",E="/movies/:movieId",d="/movies/:movieId/cast",y="/movies/:movieId/reviews",j=a(33),O=a(13),g=a.n(O),k={URL:"https://api.themoviedb.org/3/movie",KEY:"f61e3fe1218b86c7045eec558be98cb0",IMAGE_URL:"https://image.tmdb.org/t/p/w500/"},w={fetchShowDetails:function(e){return g.a.get("".concat(k.URL,"/").concat(e,"?api_key=").concat(k.KEY)).then((function(e){return e.data}))},fetchMoviesQuery:function(e){var t="https://api.themoviedb.org/3/search/movie?api_key=".concat(k.KEY,"&query=").concat(e);return g.a.get(t).then((function(e){return e.data}))},fetchCast:function(e){return g.a.get("".concat(k.URL,"/").concat(e,"/credits?api_key=").concat(k.KEY)).then((function(e){return e.data}))},fetchReview:function(e){return g.a.get("".concat(k.URL,"/").concat(e,"/reviews?api_key=").concat(k.KEY)).then((function(e){return e.data}))}},S=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={casts:[]},a.fetchDetails=function(){var e=a.props.match.params.movieId;return w.fetchCast(e)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.fetchDetails().then((function(t){return e.setState({casts:t.cast})}))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.casts&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Movie Cast"),r.a.createElement("ul",null,this.state.casts.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("img",{src:e.profile_path?k.IMAGE_URL+e.profile_path:e.name,width:"320",alt:e.name}),r.a.createElement("h3",null,e.name),r.a.createElement("p",null,"Character: ",e.character))})))))}}]),t}(n.Component),M=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={reviews:[]},a.fetchDetails=function(){var e=a.props.match.params.movieId;return w.fetchReview(e)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.fetchDetails().then((function(t){return e.setState({reviews:t.results})}))}},{key:"render",value:function(){var e=this.state.reviews;return r.a.createElement("div",null,e.length<=0&&r.a.createElement("p",null,"We do not have any description about this movie"),e.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Movie Review"),r.a.createElement("ul",null,e.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("h3",null,"Autor: ".concat(e.author)),r.a.createElement("p",null,e.content))})))))}}]),t}(n.Component),_=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={movie:null,isCast:!1},a.fetchDetails=function(){var e=a.props.match.params.movieId;return w.fetchShowDetails(e)},a.onGoBack=function(){var e=a.props;e.location;e.history.push("/movies")},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.fetchDetails().then((function(t){return e.setState({movie:t})}))}},{key:"render",value:function(){var e=this.state.movie,t=this.props.match;return r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:this.onGoBack},"Go to back"),r.a.createElement("h2",null,"Movie Details Page"),e&&r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:k.IMAGE_URL+e.poster_path,width:"320",alt:e.original_title}),r.a.createElement("h3",null,e.original_title),r.a.createElement("p",null,"Movie Id: ",t.params.movieId)),r.a.createElement("div",null,r.a.createElement("h2",null,"Additional information"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(h.b,{to:{pathname:"".concat(t.url,"/cast"),state:{from:this.props.location}}},"Cast")),r.a.createElement("li",null,r.a.createElement(h.b,{to:{pathname:"".concat(t.url,"/reviews"),state:{from:this.props.location}}},"Review")))),r.a.createElement(p.d,null,r.a.createElement(p.b,{path:d,component:S}),r.a.createElement(p.b,{path:y,component:M})))}}]),t}(n.Component),C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={movies:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://api.themoviedb.org/3/trending/all/day?api_key=f61e3fe1218b86c7045eec558be98cb0").then((function(t){return e.setState({movies:(a=t.data.results,a.map((function(e){var t=e.name,a=e.original_name,n=Object(j.a)(e,["name","original_name"]);return Object(v.a)({title:t,original_title:a},n)})))});var a}))}},{key:"render",value:function(){var e=this,t=this.props.match;return r.a.createElement("div",null,r.a.createElement("h1",null,"Trending Today"),r.a.createElement("ul",null,this.state.movies.map((function(a){return r.a.createElement("li",{key:a.id},r.a.createElement(h.b,{to:{pathname:"".concat(t.url,"movies/").concat(a.id),state:{from:e.props.location}}},a.title))}))),r.a.createElement(p.b,{path:"".concat(t.path,"/movies/:movieId"),component:_}))}}]),t}(n.Component),D=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={movies:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e,t){this.props.history.push(Object(v.a)({},this.props.location))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.b,{path:f,component:C}),r.a.createElement(p.b,{path:E,component:_}))}}]),t}(n.Component),A=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.onChange=function(e){a.setState({value:e.target.value})},a.onSubmit=function(e){e.preventDefault(),a.state.value&&(a.props.onSearch(a.state.value),a.setState({value:""}))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",value:this.state.value,onChange:this.onChange}),r.a.createElement("button",{type:"submit"},"Search"))}}]),t}(n.Component),R=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={movies:[]},a.setSearchQuery=function(e){a.props.history.push(Object(v.a)({},a.props.location,{search:"query=".concat(e)})),a.fetchMovies(e).then((function(e){return a.setState({movies:e.results})}))},a.fetchMovies=function(e){return w.fetchMoviesQuery(e)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=new URLSearchParams(this.props.location.search).get("query");t&&this.fetchMovies(t).then((function(t){return e.setState({movies:t.results})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this,n=new URLSearchParams(e.location.search).get("query"),r=new URLSearchParams(this.props.location.search).get("query");n!==r&&this.fetchMovies(r).then((function(e){return a.setState({movies:e.results})}))}},{key:"render",value:function(){var e=this,t=this.props.match;return r.a.createElement("div",null,r.a.createElement("h1",null,"Movies"),r.a.createElement(A,{onSearch:this.setSearchQuery}),r.a.createElement("ul",null,this.state.movies.map((function(a){return r.a.createElement("li",{key:a.id},r.a.createElement(h.b,{to:{pathname:"".concat(t.url,"/").concat(a.id),state:{from:e.props.location}}},a.title))}))))}}]),t}(n.Component),I=function(){return r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(h.c,{exact:!0,to:f,style:{color:"blue"},activeStyle:{color:"black"}},"HomePage")),r.a.createElement("li",null,r.a.createElement(h.c,{to:b,style:{color:"blue"},activeStyle:{color:"black"}},"Movies")))},U=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(I,null),r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:f,component:D}),r.a.createElement(p.b,{path:E,component:_}),r.a.createElement(p.b,{path:b,component:R}),r.a.createElement(p.a,{to:f}))))}}]),t}(n.Component);o.a.render(r.a.createElement(U,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.af98dfc1.chunk.js.map