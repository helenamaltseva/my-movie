import { useEffect, useState } from "react";
import Card from "../Card"
import { BsSearch } from "react-icons/bs"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

//assets
import "../../assets/styles/components/main.scss"
import "../../assets/styles/components/header.scss"
import "../../assets/styles/container/container.scss"
import logo from "../../assets/images/logo.jpg"


let API_key="&api_key=056bd4b1062af5614a130c8953a04a6d";
let base_url="https://api.themoviedb.org/3";
let url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
let genres=["fantasy", "crime", "animation", "drama", "comedy", "horror", "history"];


const Main = () => {
  
  const [data, setData]=useState([]);
  const [url_set, setUrl]=useState(url);
  const [search, setSearch]=useState("");
  const [nav, setNav] = useState(false);
   
  useEffect(() => {
    fetch(url_set)
      .then(res=>res.json())
      .then(data=>{setData(data.results);
      });
  },[url_set])

  const getData=(genres)=>{
    if(genres==="fantasy")
    {
      url=base_url+"/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=14"+API_key;
    }
    if(genres==="crime")
    {
      url=base_url+"/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=80"+API_key;
    }
    if(genres==="animation")
    {
      url=base_url+"/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=16"+API_key;
    }
    if(genres==="drama")
    {
      url=base_url+"/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=18"+API_key;
    }
    if(genres==="comedy")
    {
      url=base_url+"/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=35"+API_key;
    }
    if(genres==="horror")
    {
      url=base_url+"/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=27"+API_key;
    }
    if(genres==="history")
    {
      url=base_url+"/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=36"+API_key;
    }
    setUrl(url);
  }
  
  const searchMovie = (evt) => {
    evt.preventDefault(); 
  
    url = base_url + "/search/movie?api_key=056bd4b1062af5614a130c8953a04a6d&query=" + search;
    setUrl(url);
    setSearch(" ");
  }



  return (
    <>        
      {/* <div className="header">
        <div className={`logo-nav ${nav ? "open" : ""}`}>
          <div className="header-logo">
            <img className="header-logo__img" src={logo} alt="" />
          </div>
          <nav className="header-navigation">
            <ul className="header-navigation__list">
              {genres.map((value, pos) => (
                <li className="header-navigation__list-item" key={pos}>
                  <a href="#" name={value} onClick={(e) => { getData(e.target.name) }}>
                    {value}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="logo-nav__burger-btn" onClick={() => setNav(!nav)}>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>   
        </div> */}

      <div className="header">
        <div className={`logo-nav ${nav ? "open" : ""}`}>
          <div className="header-logo">
            <img className="header-logo__img" src={logo} alt="" />
          </div>
          <nav className={`header-navigation ${nav ? "header-navigation_list_active" : ""}`}>
            <ul className="header-navigation__list">
              {genres.map((value, pos) => (
                <li className="header-navigation__list-item" key={pos}>
                  <a href="#" name={value} onClick={(e) => { getData(e.target.name); setNav(false); }}>
                    {value}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="logo-nav__burger-btn" onClick={() => setNav(!nav)}>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>   
        </div>
        
        <form className="header-form" onSubmit={searchMovie}>
          <div className="header-form__search">
            <input
              className="header-form__search-input"
              type="text"
              placeholder="Enter search"
              onChange={(e) => { setSearch(e.target.value) }}
              value={search}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  searchMovie(e);
                }
              }}
            />
            <button className="header-form__search-btn" type="submit">
              <i className="header-form__search-btn__icon"><BsSearch /></i>
            </button>
          </div>
        </form>

      </div>


      
      <div className="main">

        {
          (data.length===0)?<p className="error">ERROR</p>: data.map((res,pos)=>{


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