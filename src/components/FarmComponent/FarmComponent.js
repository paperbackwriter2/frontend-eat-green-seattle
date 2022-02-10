// import React from 'react';
// import { Link } from 'react-router-dom'

// export default function FarmComponent(props) {
    
//     // console.log(farms)
//     // console.log(farms.length)
//     // console.log(farms[0])
//     // console.log(farms[0].farm_name)
//     // console.log(farms[0])
//     // console.log(farms.length)
//     const displayFarms = (props) => {
//         const { farms } = props;
//         // console.log(`farmList from inside of farm component ${farms}`)
//         // console.log(`inside displayFarms: ${farms.length}`)
//         if (farms.length > 0) {
//             return(
//                 farms.map((farm) => {
//                     console.log(farm);
//                     return (
//                         <div className='farm' key={farm.id}>
//                             <h3>{farm.farm_name}</h3>
//                         </div>
//                     )
//                 })
//             )
//         } else {
//             // console.log(`length = ${farms.length}`)
//             return (<h3>No CSAs available</h3>)
//         }
//     }
//     return(
//         <>
//             {displayFarms(props)}
//         </>

//     )

// }
    
//     // // const myName = props.FarmList
//     // // console.log(`farmLIst passed in: ${props.FarmList}`)
//     // console.log(farmList)
//     // console.log('hello from farmComponent')
//     // const displayFarms = (farmList) => {
//     //     return(
//     //         farmList.map((farm) => {
//     //             return (
//     //                 <h3>farm name is: {farm.farm_name}</h3>
//     //             )
//     //         })
//     //     )
//     // }

//    // <div>
//         //     <h2>Happy Meadows Farm</h2> 
//         //     <h3>Carnation, WA</h3>
//         //     <h3>Methods: Permaculture</h3> 
//         //     <h3>Products: Vegetables, Dairy</h3>
//         //     <Link
//         //     style={{ display: "block", margin: '1rem 0'}}
//         //     to='/browse'>
//         //         View CSA Details
//         //     </Link>
//         // </div>

import React from 'react';



const FarmComponent = (props) => {
    const {
        id,
        farm_name,
        first_name,
        last_name,
        address_1,
        address_2,
        city,
        created_at,
        customer_id,
        farm_bio,
        organic,
        phone,
        state,
    } = props;

    return(
        <div key={id}>
            <h2>{farm_name}</h2>
            <h3>Location: {city}, {state} </h3>
        </div>
    )
}

export default FarmComponent;

// {
//     id,
//     farm_name,
//     first_name,
//     last_name,
//     address_1,
//     address_2,
//     city,
//     created_at,
//     customer_id,
//     farm_bio,
//     organic,
//     phone,
//     state,
// }