// import { useEffect, useState } from "react";
// // import { useEffect } from "react/cjs/react.development";
// import Card from "../Card"
// import { BsSearch } from "react-icons/bs"

// //assets
// import "../../assets/styles/components/main.scss"
// import "../../assets/styles/components/header.scss"
// import "../../assets/styles/container/container.scss"
// import logo from "../../assets/images/logo.jpg"


// let API_key="&api_key=056bd4b1062af5614a130c8953a04a6d";
// let base_url="https://api.themoviedb.org/3";
// let url=base_url+"/genre/movie/list"+API_key;
// let arr=["fantasy", "crime", "animation", "drama", "comedy"];


// const Main = () => {
  
//   const [movieData, setData]=useState([]);
//   const [url_set, setUrl]=useState(url);
//   const [search, setSearch]=useState();
   
//   useEffect(() => {
//     fetch(url_set)
//       .then(res=>res.json())
//       .then(data=>{setData(data.results);
//       });
//   },[url_set])

//   const getData=(movieType)=>{
   
//     if(movieType==="fantasy")
//     {
//       url=base_url+"/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=14"+API_key;
//     }
//     if(movieType==="crime")
//     {
//       url=base_url+"/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=80"+API_key;
//     }
//     if(movieType==="animation")
//     {
//       url=base_url+"/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=16"+API_key;
//     }
//     if(movieType==="drama")
//     {
//       url=base_url+"/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=18"+API_key;
//     }
//     if(movieType==="comedy")
//     {
//       url=base_url+"/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=35"+API_key;
//     }
    
//     setUrl(url);
//   }

//   const searchMovie=(evt)=>{
//     if(evt.key==="Enter")
//     {
//       url=base_url+"/search/movie?api_key=056bd4b1062af5614a130c8953a04a6d&query="+search;
//       setUrl(url);
//       setSearch(" ");
//     }
//   } 

//   return (
//     <>
//       <div className="header">
//         <div className="header-logo">
//           <img className="header-logo__img" src={logo} alt="" />
//         </div>
//         <nav className="header-navigation">
//           <ul className="header-navigation__list">

//             {
//               arr.map((value,pos)=>{
               
//                 return(
//                   <li><a href="https://www.themoviedb.org/3/discover/movie&api_key=056bd4b1062af5614a130c8953a04a6d" key={pos} name={value} onClick={(e)=>{getData(e.target.name)}}>{value}</a></li>
//                 )
//               })
//             }


//           </ul>
//         </nav>
//         <form className="header-form">
//           <div className="header-form__search">
//             <input className="header-form__search-input" type="text" placeholder="Enter search" 
//               onChange={(e)=>{setSearch(e.target.value)}} 
//               value={search} onClick={searchMovie}/>
//             <button className="header-form__search-btn">
//               <span className="header-form__search-btn__icon"><BsSearch/></span>
//             </button>
//           </div>
//         </form>
//       </div>
//       <div className="main">
                           
//         {
//           (movieData.length===0)?<p className="error">Error</p>: movieData.map((res,pos) => {
                 
//             return(
//               <Card info={res} key={pos}/>
//             )
//           })
//         }
                       
//       </div>

//     </>
//   )
// }

// export default Main;



import { useEffect, useState } from "react";
// import { useEffect } from "react/cjs/react.development";
import Card from "../Card"
import { BsSearch } from "react-icons/bs"

//assets
import "../../assets/styles/components/main.scss"
import "../../assets/styles/components/header.scss"
import "../../assets/styles/container/container.scss"
import logo from "../../assets/images/logo.jpg"


let API_key="&api_key=056bd4b1062af5614a130c8953a04a6d";
let base_url="https://api.themoviedb.org/3";
let url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
let arr=["fantasy", "crime", "animation", "drama", "comedy"];

const Main = () => {
  
  const [movieData, setData]=useState([]);
  const [url_set, setUrl]=useState(url);
  const [search, setSearch]=useState();
   
  useEffect(() => {
    fetch(url_set)
      .then(res=>res.json())
      .then(data=>{setData(data.results);
      });
  },[url_set])

  const getData=(movieType)=>{
    if(movieType==="fantasy")
    {
      url=base_url+"/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=14"+API_key;
    }
    if(movieType==="crime")
    {
      url=base_url+"/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=80"+API_key;
    }
    if(movieType==="animation")
    {
      url=base_url+"/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=16"+API_key;
    }
    if(movieType==="drama")
    {
      url=base_url+"/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=18"+API_key;
    }
    if(movieType==="comedy")
    {
      url=base_url+"/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=35"+API_key;
    }
    setUrl(url);
  }

  const searchMovie=(evt)=>{
    if(evt.key==="Enter")
    {
      url=base_url+"/search/movie?api_key=056bd4b1062af5614a130c8953a04a6d&query="+search;
      setUrl(url);
      setSearch(" ");
    }
  } 

  return (
    <>
      <div className="header">
        <div className="header-logo">
          <img className="header-logo__img" src={logo} alt="" />
        </div>
        <nav className="header-navigation">
          <ul className="header-navigation__list">

            {
              arr.map((value,pos)=>{
               
                return(
                  <li><a href="https://www.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=056bd4b1062af5614a130c8953a04a6d" key={pos} name={value} onClick={(e)=>{getData(e.target.name)}}>{value}</a></li>
                )
              })
            }

          </ul>
        </nav>
        <form className="header-form">
          <div className="header-form__search">
            <input className="header-form__search-input" type="text" placeholder="Enter search" 
              onChange={(e)=>{setSearch(e.target.value)}} 
              value={search} onClick={searchMovie}/>
            <button className="header-form__search-btn">
              <span className="header-form__search-btn__icon"><BsSearch/></span>
            </button>
          </div>
        </form>
      </div>
      <div className="main">
                           
        {
          (movieData.length===0)?<p className="error">Error</p>: movieData.map((res,pos) => {
                 
            return(
              <Card info={res} key={pos}/>
            )
          })
        }
                       
      </div>

    </>
  )
}

export default Main;