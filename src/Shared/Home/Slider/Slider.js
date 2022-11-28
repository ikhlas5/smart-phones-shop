import React from 'react';
import img1 from '../../../assets/anomaly-16aIvW0lxOk-unsplash.jpg'
import img2 from '../../../assets/balazs-ketyi-6ba_vdgx_go-unsplash.jpg'
import img3 from '../../../assets/ben-kolde-xdLXPic3Wfk-unsplash.jpg'
import img4 from '../../../assets/fernando-hernandez-41yF2vjjk0g-unsplash.jpg'
import img5 from '../../../assets/olivier-bergeron-sDwhXKJijyE-unsplash.jpg'
import img6 from '../../../assets/v-a-tao-9TqCQNs0kTg-unsplash.jpg'
const Slider = () => {
    return (
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} alt='' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} alt='' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} alt='' className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} alt='' className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
    <img src={img5} alt='' className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Slider;