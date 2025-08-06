import React, { use } from 'react'
import { useState } from 'react';

export default function UseParams() {
    const [tshirt , setTshirt] = useState([{
        id : 1 , name : "T-tshirt 1", price : 1000, image : "https://example.com/tshirt1.jpg"
    }
    , {
        id : 2 , name : "T-tshirt 2", price : 1200, image : "https://example.com/tshirt2.jpg"
    }
    , {
        id : 3 , name : "T-tshirt 3", price : 1500, image : "https://example.com/tshirt3.jpg"
    }]);
    console.log(tshirt, "tshirt");
  return (

  )
}


