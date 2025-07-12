import React, { useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import img4 from './assets/img4.png';
import img5 from './assets/img5.png';
import img6 from './assets/img6.png';
import icon1 from './assets/icon1.png';
import icon2 from './assets/icon2.png';
import icon4 from './assets/icon4.png';
import icon5 from './assets/icon5.png';
import video from './assets/video1.mp4';
import testi1 from './assets/testi1.png';
import testi2 from './assets/test2.png';

const App = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showTesti1, setShowTesti1] = useState(false);
  const [showTesti2, setShowTesti2] = useState(false);

  const handleImage4Click = () => {
    setShowVideo(!showVideo);
    setSelectedImage(showVideo ? null : 'image-4');
    setShowTesti1(false);
    setShowTesti2(false);
  };

  const handleImage1Click = () => {
    setShowTesti1(!showTesti1);
    setShowTesti2(!showTesti2);
    setSelectedImage(showTesti1 ? null : 'image-1');
    setShowVideo(false);
  };

  return (
    <>
      <div className="container">
        <div className="content-wrapper">
          <div className="text-section">
            <div className="subtitle"><p>Here How they Level Up Their Game !</p></div>
            <div className="title"><h5>Skill <span className="highlight"> Masters </span> Unite! 🤝 </h5></div>
            <div className="view-all"><span>View All Testimonial</span><FaArrowRightLong /></div>
          </div>
          <div className="image-section">
            <div className="image-grid">
              {/* Images positioned in a circle */}
              <img 
                src={img1} 
                alt="Team collaboration" 
                className={`main-image image-1 ${selectedImage === 'image-1' ? 'selected' : ''}`} 
                onClick={handleImage1Click}
              />
              {showTesti1 && <img src={testi1} alt="test1" className='testi1'/>}
              {showTesti2 && <img src={testi2} alt="test2" className='testi2'/>}
              <img src={icon1} alt="Icon 1" className="icon-image icon-1" />
              <img src={img2} alt="Coding session" className="main-image image-2" />
              <img src={img3} alt="Design workshop" className="main-image image-3" />
              <img src={icon2} alt="Icon 2" className="icon-image icon-2" />
              <img 
                src={img4} 
                alt="Presentation" 
                className={`main-image image-4 ${selectedImage === 'image-4' ? 'selected' : ''}`} 
                onClick={handleImage4Click}
              />
              <img src={icon4} alt="Icon 4" className="icon-image icon-4" />
              <img src={img5} alt="Group discussion" className="main-image image-5" />
              <img src={icon5} alt="Icon 5" className="icon-image icon-5" />
              <img src={img6} alt="Learning session" className="main-image image-6" />
              
              {showVideo && (
                <video 
                  src={video} 
                  alt="video" 
                  className="video" 
                  autoPlay 
                  loop 
                  muted
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;