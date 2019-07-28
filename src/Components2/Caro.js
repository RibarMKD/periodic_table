import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Caro = () => {
   return (
       <div className="Carousel d-flex" style={{
           height: '100vh', width: '100vw', overflow: 'hidden', marginTop: '-220px'
       }}>
           <div className='widthPic' width='20%'>
               <img src="/img/main.jpg" style={{ width: '400px', height: '200px' }} />
           </div>
           <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false} width='20%'>
               <div style={{ width: '400px', height: '200px' }}>
                   <img src="/img/one.jpg" style={{ width: '400px', height: '200px' }} />
               </div>
               <div>
                   <img src="/img/two.jpg" style={{ width: '400px', height: '200px' }} />
               </div>
               <div>
                   <img src="/img/three.jpg" style={{ width: '400px', height: '200px' }} />
               </div>
           </Carousel>

       </div >
   )
}

export default Caro;