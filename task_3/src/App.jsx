import React, { useState } from 'react';
import pen from "./assets/pen.png";
import rect from "./assets/react.png";
import like from "./assets/like.png";
import vue from "./assets/vue.png";
import { FaArrowRight } from "react-icons/fa6";

const App = () => {
  const [activeContainer, setActiveContainer] = useState('box-container1');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleBoxClick = (container) => {
    if (activeContainer === container || isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveContainer(container);
      setIsTransitioning(false);
    }, 300); // Match this duration with your CSS transition time
  };

  const getContainerClass = (containerName) => {
    if (activeContainer === containerName) return 'active';
    if (isTransitioning && activeContainer !== containerName) return 'fade-out';
    return 'hidden';
  };

  return (
    <div className="container">
      <div className="content">
        <div className="text-section">
          <p className="subtitle">Explore our master class training skills</p>
          <h5 className="title">Dive Into <span className='highlight'>What's Hot Right Now!</span> 🔥</h5>
        </div>

        {/* Box Container 1 */}
        <div 
          className={`box-container1 ${getContainerClass('box-container1')}`}
          onClick={() => handleBoxClick('box-container2')}
        >
          <div className="box box1">
            <div>
              <span>View All Course</span> <FaArrowRight />
            </div>
            <div className='logos'>
              <img src={rect} alt="React" />
              <img src={like} alt="Like" />
              <img src={vue} alt="Vue" />
              <img src={pen} alt="Pen" />
            </div>
            <div className='text'>
              <div className='text-lf'>
                <span className='span1'>23</span>
                <span className='span2'>+</span>
              </div>
              <div className='text-rf'>
                <p className='p1'>All courses</p>
                <p className='p2'>courses you're powering right now</p>
              </div>
            </div>
          </div>

          <div className="box box2">
            <div className='horiz'>
              <div className='upcoming-text'>
                <span className='upcoming'>Upcoming</span>
                <br />
                <span className='courses'>Courses</span>
              </div>
              <div className='description'>
                <p>exciting new Courses<br />waiting to boost your skills</p>
              </div>
            </div>
            <div className='count-container'>
              <span className='count'>05</span>
              <span className='plus'>+</span>
            </div>
          </div>

          <div className="box box3">
            <div className='horiz'>
              <div className='outgoing-text'>
                <span className='outgoing'>Outgoing</span>
                <br />
                <span className='courses'>Courses</span>
              </div>
              <div className='description'>
                <p>currently happening<br />don't miss out on the action</p>
              </div>
            </div>
            <div className='count-container'>
              <span className='count'>10</span>
              <span className='plus'>+</span>
            </div>
          </div>
        </div>

        {/* Box Container 2 */}
        <div 
          className={`box-container2 ${getContainerClass('box-container2')}`}
          onClick={() => handleBoxClick('box-container3')}
        >
          <div className="box box2">
            <div className='horiz'>
              <div className='upcoming-text'>
                <span className='upcoming'>All</span>
                <br />
                <span className='courses'>Courses</span>
              </div>
              <div className='description'>
                <p>courses you're powering<br />right now</p>
              </div>
            </div>
            <div className='count-container'>
              <span className='count'>23</span>
              <span className='plus'>+</span>
            </div>
          </div>

          <div className="box box1">
            <div>
              <span>View All Course</span> <FaArrowRight />
            </div>
            <div className='logos'>
              <img src={rect} alt="React" />
              <img src={like} alt="Like" />
              <img src={vue} alt="Vue" />
              <img src={pen} alt="Pen" />
            </div>
            <div className='text'>
              <div className='text-lf'>
                <span className='span1'>05</span>
                <span className='span2'>+</span>
              </div>
              <div className='text-rf'>
                <p className='p1'>Upcoming Courses</p>
                <p className='p2'>exciting new Courses waiting to boost your skills</p>
              </div>
            </div>
          </div>

          <div className="box box3">
            <div className='horiz'>
              <div className='outgoing-text'>
                <span className='outgoing'>Outgoing</span>
                <br />
                <span className='courses'>Courses</span>
              </div>
              <div className='description'>
                <p>currently happening<br />don't miss out on the action</p>
              </div>
            </div>
            <div className='count-container'>
              <span className='count'>10</span>
              <span className='plus'>+</span>
            </div>
          </div>
        </div>

        {/* Box Container 3 */}
        <div 
          className={`box-container3 ${getContainerClass('box-container3')}`}
          onClick={() => handleBoxClick('box-container1')}
        >
          <div className="box box2">
            <div className='horiz'>
              <div className='upcoming-text'>
                <span className='upcoming'>All</span>
                <br />
                <span className='courses'>Courses</span>
              </div>
              <div className='description'>
                <p>courses you're powering<br />right now</p>
              </div>
            </div>
            <div className='count-container'>
              <span className='count'>23</span>
              <span className='plus'>+</span>
            </div>
          </div>

          <div className="box box2">
            <div className='horiz'>
              <div className='upcoming-text'>
                <span className='upcoming'>UpComing</span>
                <br />
                <span className='courses'>Courses</span>
              </div>
              <div className='description'>
                <p>exciting new Courses<br />waiting to boost your skills</p>
              </div>
            </div>
            <div className='count-container'>
              <span className='count'>05</span>
              <span className='plus'>+</span>
            </div>
          </div>

          <div className="box box1">
            <div>
              <span>View All Course</span> <FaArrowRight />
            </div>
            <div className='logos'>
              <img src={rect} alt="React" />
              <img src={like} alt="Like" />
              <img src={vue} alt="Vue" />
              <img src={pen} alt="Pen" />
            </div>
            <div className='text'>
              <div className='text-lf'>
                <span className='span1'>10</span>
                <span className='span2'>+</span>
              </div>
              <div className='text-rf'>
                <p className='p1'>Outgoing Courses</p>
                <p className='p2'>currently happening don't miss out on the action</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;