import React from 'react'
import scale1 from "../assets/images/scale7.jpg";
import scale2 from "../assets/images/scale2.jpg";
import scale3 from "../assets/images/scale8.jpg";
import scale4 from "../assets/images/scale10.jpg";
import scale5 from "../assets/images/scale20.jpg";

function Subsidiary() {
    const subsidiaryCompanies = [scale1, scale2, scale3, scale4,scale5];
    return (
            
                subsidiaryCompanies.map(e => {
                   return <div 
                   key={e.toString()}
                   className='border-2 rounded-md w-fit border-gray-50 md:py-2 md:px-4 my-auto shadow-2xl shadow-black'
                   >
                        <img src={e} alt="image" className='w-full md:w-fit' />
                    </div>
                }
                )
            
    );
}

export default Subsidiary