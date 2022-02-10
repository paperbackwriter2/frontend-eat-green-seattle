import React, { useEffect, useState } from 'react';
import './Browse.css'
import FarmComponent from '../FarmComponent/FarmComponent';
import axios from 'axios'

// This is going to display a bunch of components that 
// individually load info from farms

const url = 'http://localhost:5000/get-all-farms'

export default function Browse() {
    const [farmList, setFarmList] = useState([{farm_name: 'loading Farm'}])
    // const [isLoading, setLoading] = useState(true);

    const getFarms = ()  => {
        // console.log('getting farm info')
        const farms = axios 
        .get(url)
        .then((response) => {
          const farms = response.data;
          console.log(`this is farms: ${farms}`)
          console.log(farms[0])
          setFarmList(farms)
        //   setLoading(false)
        //   console.log(`this is farmList ${farmList}`)
        })
        .catch((err) => {
          console.log(err)
        })
        // return response
        // console.log(response)
      }
    
    //   getFarms()
    useEffect(() => {
        getFarms();
    }, []);

    // if (isLoading) {
    //     return <div>Loading</div>
    // }
    const farmComponents = farmList.map((farm) => {
        return (
            <FarmComponent
            id={farm._id}
            farm_name={farm.farm_name}
            first_name={farm.first_name}
            last_name={farm.last_name}
            address_1={farm.address_1}
            address_2={farm.address_2}
            city= {farm.city}
            created_at= {farm.created_at}
            customer_id= {farm.customer_id}
            farm_bio= {farm.farm_bio}
            organic={farm.organic}
            phone={farm.phone}
            state={farm.state}
            // zipcode: 98053
            // _id: '620208626955820f0ba02a98', 
            // farm_name: "Bob's Apple Farm", 
            // first_name: 'Bob', 
            // last_name: 'Gala', …}
            // address_1: "311 Chestnut Way"
            // address_2: ""
            // city: "Duvall"
            // created_at: "2022-02-08T06:06:26.317Z"
            // customer_id: []
            // email: "gala@gmail.com"
            // farm_bio: "We are Oregon Tilth and USDA certified organic. We follow permaculture and regenerative methodology in growing vegetables and apples."
            // farm_name: "Bob's Apple Farm"
            // first_name: "Bob"
            // last_name: "Gala"
            // organic: true
            // phone: 4254488798
            // state: "WA"
            // zipcode: 98053
            // __v: 0
            // _id: "620208626955820f0ba02a98"

            />
        )
    })
    return <ul>{farmComponents}</ul>
}


//     return(
//         <div className='browse-wrapper'>
//             <FarmComponent farms={farmList}/>
//             {/* <div className='farm-box'>
//                 <h3>Willow Creek Farm</h3>
//                 <h5>Maple Valley, WA</h5>
//                 <h5>Methods: Permaculture</h5>
//                 <h5>Certified Organic: Yes</h5>
//                 <h5>Products: Vegetables, Dairy</h5>
//                 <a href='#'>View CSA Details</a>
//             </div>
//             <div className='farm-box'>
//                 <h3>Duvall Family Farm</h3>
//                 <h5>Duvall, WA</h5>
//                 <h5>Methods: Permaculture</h5>
//                 <h5>Certified Organic: No</h5>
//                 <h5>Products: Vegetables, Eggs, Pork, Honey</h5>
//                 <a href='#'>View CSA Details</a>
//             </div> */}
//         </div>
//     )
// }

// import React, { useEffect, useState } from 'react';
// import './Browse.css'
// import FarmComponent from '../FarmComponent/FarmComponent';
// import axios from 'axios'

// const Browse = () => {
//     const farmComponents = farmList.map((farm) => {
//         return (
//             <FarmComponent
//             />
//         )
//     })
//     return <li>{farmComponents}</li>
// }

// export default Browse;