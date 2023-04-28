import React , {useState , useEffect} from 'react'
import {useNavigate}from "react-router-dom";
import "../heroBanner/style.scss";
import { useSelector } from 'react-redux';
import "./style.scss"
import Img from '../../../components/lazyLoadImage/Img';
import ContentWrapper from "../../../components/contantWrapper/ContentWrapper"

import useFetch from '../../../hooks/useFetch';

const HeroBanner = () => {

    const [backgroung , setBackground] = useState("");
    const [query , setQuery] = useState("");

    const navigate = useNavigate();

    const {url} = useSelector((state)=>state.home)

    const {data , loading} = useFetch("/movie/upcoming")

    useEffect(()=>{
        const bg =url.backdrop +  data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path
        setBackground(bg);
    },[data]);

    const searchQueryHandler = (e)=>{
        if(e.key === "Enter" && query.length >0)
        {
            console.log("hiii")
            navigate(`/search/${query}`);
        }
    }

  return (
   <div className="heroBanner">

   {!loading &&  <div className="backdrop_img">
       <Img src={backgroung} />
    </div>}

    <div className="opacity">

    </div>

    <ContentWrapper>

   
        <div className="heroBannerContent">
            <span className='title'>welcome.</span>
            <span className='SubTitle'>Millions of movies, TV shows and people to discover.
                        Explore now.</span>
            <div className="searchInput">
                <input
                 type="text" 
                 placeholder='Search For Movie Or TV Show ...'
                 onChange={(e)=> setQuery(e.target.value)}
                 onKeyUp={searchQueryHandler}
                 />
                <button>Search</button>
            </div>
        </div>
   
    </ContentWrapper>
   </div>
  
  )
}

export default HeroBanner