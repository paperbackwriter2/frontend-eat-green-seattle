import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { maxWidth } from '@mui/system';

const url = 'http://localhost:5000/get-farm'

const FarmProfile = () => {
    const [farmData, setFarmData] = useState();
    const [isLoading, setLoading] = useState(true);


    let { farm_id } = useParams();
    // console.log(`farm_id outisde function: ${farm_id}`)

    const getProfile = ( farm_id )  => {
        // console.log('getting farm info')
        // console.log(`farm_id inside react ${farm_id}`)
        axios 
        .post(url, {id: farm_id})
        // .get(url)
        .then((response) => {
          const farm = response.data;
        //   console.log(`this is the farm: ${response.data}`)
        //   console.log(farm.farm_name)
          setFarmData(farm)
          setLoading(false)
        //   setLoading(false)
        //   console.log(`this is farmList ${farmList}`)
        })
        .catch((err) => {
          console.log(err.message)
        })
        // return response
        // console.log(response)
      }

    useEffect(() => {
        getProfile(farm_id);
    }, []);

    // useEffect(() => {
    //     async function getProfile( farm_id ) {
    //         // console.log('getting farm info')
    //         // console.log(`farm_id inside react ${farm_id}`)
    //         axios 
    //         .post(url, {id: farm_id})
    //         // .get(url)
    //         .then((response) => {
    //           const farm = response.data;
    //           console.log(`this is the farm: ${response.data}`)
    //           console.log(farm.farm_name)
    //           setFarmData(farm)
    //         //   setLoading(false)
    //         //   console.log(`this is farmList ${farmList}`)
    //         })
    //         .catch((err) => {
    //           console.log(err.message)
    //         })
    //         // return response
    //         // console.log(response)
    //       }
    //     getProfile(farm_id)
    // }, []);

    // return (
    //     <div>
    //         {/* <h1>{farmData.farm_name}</h1> */}
    //         <h3>Farm ID: {farm_id} </h3>
    //         {/* <h1>{farmData.farm_name}</h1> */}
    //     </div>
        

    // )
    if (isLoading) {
        return <div>Loading... {farm_id}</div>
    }

    return (
        <div style={{justifyContent:'center', textAlign:'center'}}>
            {/* <h4>{farm_id}</h4> */}
            <img style={{maxWidth:'70%', justifyContent:'center'}} alt='sunny farm' src='https://images.pexels.com/photos/158179/lake-constance-sheep-pasture-sheep-blue-158179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>
            <h1>{farmData.farm_name}</h1>
            <h3>Phone: {farmData.phone}</h3>
            <h4>Location: {farmData.city}, {farmData.state}</h4>
            <h4>About Us {farmData.farm_bio}</h4>
            <h4>Available shares: {farmData.max_shares}</h4>
        </div>
    )
}

export default FarmProfile