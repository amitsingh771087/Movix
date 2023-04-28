import React , {useState} from 'react'
import "./style.scss";
import ContentWrapper from '../../../components/contantWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';

import Carousel from '../../../components/carousel/Carousel';


const Trending = () => {
  const [endPoint , setEndPoint] = useState("day")

  const {data , loading} = useFetch(`/trending/all/${endPoint}`);

  const onTabChange = (tab)=>{
    setEndPoint(tab === "Day" ? "day" : "week")
  }

  return (
    <div className='carouseSection'>
        <ContentWrapper>
            <span className='carouseTiitle'>Trending</span>
            <SwitchTabs data = {["Day" , "Week"]} onTabChange= {onTabChange}/>
        </ContentWrapper>
        <Carousel data = {data?.results} loading = {loading} />
    </div>
  )
}

export default Trending