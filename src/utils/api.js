import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGU4ODEzNDY2YjFhNWE4OTgxMjc4OGViN2NlNWMyZSIsInN1YiI6IjY0MTk3ZDJmMGQ1ZDg1MDA5YmEzMWM0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2cZAriQZJOspgJXbHBBOtE6cdm2NmZDAf6oCA9Femxg"

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};




// import axios from "axios";


// const BASE_URL = "https://api.themoviedb.org/3" ;

// const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
// const headers = {
//    Authorization : "bearer " + TMDB_TOKEN,

// }

// export const fetchDataFromApi = async (url,params)=>{
//     try{

//         const {data} = await axios.get(BASE_URL + url , {
//             headers,
//             params, 
//         })
//         return data;

//     } catch(err){
//         console.log(err);
//         return err;
//     }
// }