import React, { use } from 'react'
import { useState } from 'react';

export default function UseParams() {
    const [tshirt , setTshirt] = useState([{
        id : 1 , name : "T-tshirt 1", price : 1000, image : "https://tse4.mm.bing.net/th/id/OIP.RHzRocDQ-VPOif5AmSbAeQHaKl?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3"
    }
    , {
        id : 2 , name : "T-tshirt 2", price : 1200, image : "https://tse4.mm.bing.net/th/id/OIP.RHzRocDQ-VPOif5AmSbAeQHaKl?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3"
    }
    , {
        id : 3 , name : "T-tshirt 3", price : 1500, image : "https://tse4.mm.bing.net/th/id/OIP.RHzRocDQ-VPOif5AmSbAeQHaKl?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3"
    }]);
    console.log(tshirt, "tshirt");
  return (
    <div  style={{ display: 'flex', flexWrap: 'wrap', gap: '16px',  height : `10px` , width : `100%` }} className='tshirt-list'>
      {tshirt.map((item) => (
        <div key={item.id} className='tshirt'>
          <h2>{item.name}</h2>
          <p>Price: {item.price}</p>
          <img src={item.image} alt={item.name} />
        </div>
      ))}
    </div>
  )
}


