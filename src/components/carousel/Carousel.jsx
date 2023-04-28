import React, { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../contantWrapper/ContentWrapper";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";
import WatchListImg from "../../assets/addWatchList.png";

import "./style.scss";

const Carousel = ({ data, loading, endpoint, title }) => {
  const cauraselContainer = useRef();

  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();
  const navigation = (dir) => {
    const container = cauraselContainer.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behaviour: "smooth",
    });
  };

  const skItem = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock skeleton"></div>
        <div className="textBlock">
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    );
  };

  // const [watchLaterList, setWatchLaterList] = useState([]);
  // function addToWatchLater(movie) {
  //   setWatchLaterList((prevList) => [...prevList, movie]);
  // }

  return (
    <div className="carousel">
      <ContentWrapper>
        {title && <div className="carouselTitle">{title}</div>}
        <BsFillArrowLeftCircleFill
          className="carouselLeftNav arrow"
          onClick={() => navigation("left")}
        />
       
        

        <BsFillArrowRightCircleFill
          className="carouselRighttNav arrow"
          onClick={() => navigation("right")}
        />
       
        {!loading ? (
          <div className="carouselItems" ref={cauraselContainer}>
            
            {data?.map((item) => {
              const posterUrl = item.poster_path
                ? url.poster + item.poster_path
                : PosterFallback;
                // console.log(item)
                
              return (
                <>
                 {/* <img src={WatchListImg} alt="" 
        onClick={()=>console.log("you click on watchList")}
        /> */}

                <div
                  // onClick={()=>navigate(`/${item.media_type || endpoint}/${item.id}`)}
                  className="carouselItem"
                  key={item.id}
                  onClick={
                    () => {
                      navigate(`/${item.media_type || endpoint}/${item.id}`);
                    }

                   
                  }
                 
                >
                   <Img src={WatchListImg} alt="" 
                      onClick={()=>console.log(`YOU click on Movie title is ${item.title || item.name}`)}
                    />
                  <div className="posterBlock">
                  
                    <Img src={posterUrl} 
                      // onClick={console.log(item.index)}
                    />
                    {/* <div className="watchList">
                      <Img>{WatchListImg}</Img>
                    </div> */}

                    <CircleRating rating={item.vote_average.toFixed(1)} />

                    <Genres data={item.genre_ids} />
                  </div>

                  <div className="textBlock">
                    <span className="title"
                      
                    >{item.title || item.name}</span>
                    <span className="date">
                      {dayjs(item.release_date).format("MMM D , YYYY")}
                      
                    </span>
                    
                  </div>
                  
                </div>
                
              </>
              );
            })}
            
          </div>
        ) : (
          <div className="loadingScleton">
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
