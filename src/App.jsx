import { useState  , useEffect} from 'react'

import {BrowserRouter , Routes , Route, Await} from "react-router-dom";
import {fetchDataFromApi} from "./utils/api";

import { useSelector, useDispatch } from 'react-redux'

import { getApiConfiguration , getGenres } from './store/homeSclice';

import Home from './pages/home/Home';
import Explore from './pages/explore/Explore';
import SearchResult from './pages/searchResult/SearchResult';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Details from './pages/details/Details';
import PageNotFound from './pages/404/PageNotFound';
import WatchList from './components/watchList/WatchList';


function App() {
  const dispatch = useDispatch();


  const {url} = useSelector((state)=> state.home);

  // console.log(url);


  const fetchApiConfig = ()=>{
    fetchDataFromApi("/configuration")
      .then((res)=>{
        // console.log(res);

        const url = {
          backdrop:res.images.secure_base_url +  "original",
          poster:res.images.secure_base_url +  "original",
          profile:res.images.secure_base_url +  "original",
        }

        dispatch(getApiConfiguration(url));
      })
  }

  const genersCall = async ()=>{
    let promises = []
    let endPoints  = ["tv" , "movie"]
    let allGeners = {}

    endPoints.forEach((url)=>{
    promises.push(fetchDataFromApi(`/genre/${url}/list`))
    })

    const data =  await Promise.all(promises)
    // console.log(data);
    data.map(({genres})=>{
      return genres.map((item)=>(allGeners[item.id] = item))
    });
    
      dispatch(getGenres(allGeners))

  }
  useEffect(()=>{
    fetchApiConfig();
    genersCall();
  } , [])

  return (
    <BrowserRouter>
    
    <Header />

      <Routes>
         
          <Route path='/' element={<Home />} />
          <Route path='/:mediaType/:id' element={<Details />} />
          <Route path='/watchList' element={<WatchList/>} />
          <Route path='/search/:query' element={<SearchResult />} />
          <Route path='/explore/:mediaType' element={<Explore />} />
          <Route path='*' element={<PageNotFound />} />
          {/* <Route path='/' element={<Home />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
