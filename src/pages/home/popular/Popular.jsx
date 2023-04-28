import React , {useState} from 'react'
// import "./style.scss";
import ContentWrapper from '../../../components/contantWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';

import Carousel from '../../../components/carousel/Carousel';


const Popular = () => {
  const [endPoint , setEndPoint] = useState("movie")

  const {data , loading} = useFetch(`/${endPoint}/popular`);

  const onTabChange = (tab)=>{
    setEndPoint(tab === "Movies" ? "movie" : "tv")
  }

  return (
    <div className='carouseSection'>
        <ContentWrapper>
            <span className='carouseTiitle'>What's Popular</span>
            <SwitchTabs data = {["Movies" , "TV Shows"]} onTabChange= {onTabChange}/>
        </ContentWrapper>
        <Carousel 
            data = {data?.results} 
            loading = {loading}  
            endpoint = {endPoint}
        />
    </div>
  )
}

export default Popular;