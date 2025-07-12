import React, { useState, useEffect } from 'react';

const App = () => {
  const rows = 8;
  const columns = 25;

  // Four sets of blue boxes
  const blueBoxesSet1 = [
    { x: 3, y: 0 }, { x: 7, y: 1 }, { x: 5, y: 2 }, { x: 18, y: 3 },
    { x: 20, y: 4 }, { x: 22, y: 5 }, { x: 24, y: 6 }, { x: 21, y: 7 }
  ];

  const blueBoxesSet2 = [
    { x: 19, y: 0 }, { x: 7, y: 1 }, { x: 19, y: 2 }, { x: 20, y: 3 },
    { x: 21, y: 4 }, { x: 1, y: 5 }, { x: 24, y: 6 }, { x: 13, y: 7 }
  ];

  const blueBoxesSet3 = [
    { x: 15, y: 0 }, { x: 10, y: 1 }, { x: 21, y: 2 }, { x: 18, y: 3 },
    { x: 22, y: 4 }, { x: 10, y: 5 }, { x: 22, y: 6 }, { x: 15, y: 7 }
  ];

  const blueBoxesSet4 = [
    { x: 24, y: 0 }, { x: 21, y: 1 }, { x: 19, y: 2 }, { x: 2, y: 3 },
    { x: 5, y: 4 }, { x: 13, y: 5 }, { x: 0, y: 6 }, { x: 7, y: 7 }
  ];

  const [currentBoxes, setCurrentBoxes] = useState(blueBoxesSet1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBoxes(prevBoxes => {
        if (prevBoxes === blueBoxesSet1) return blueBoxesSet2;
        if (prevBoxes === blueBoxesSet2) return blueBoxesSet3;
        if (prevBoxes === blueBoxesSet3) return blueBoxesSet4;
        return blueBoxesSet1; // Cycle back to Set1 after Set4
      });
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  return (
    <div className="graph-container">
      <div className="graph">
        {/* Vertical lines */}
        <div className="vertical-lines">
          {Array.from({ length: columns + 1 }).map((_, i) => (
            <div key={`v-${i}`} className="vertical-line" style={{ left: `${(i * 100) / columns}%` }} />
          ))}
        </div>
        
        {/* Horizontal lines */}
        <div className="horizontal-lines">
          {Array.from({ length: rows + 1 }).map((_, i) => (
            <div key={`h-${i}`} className="horizontal-line" style={{ top: `${(i * 100) / rows}%` }} />
          ))}
        </div>

        {/* Blue boxes (rotates every 3 seconds) */}
        {currentBoxes.map((box, index) => (
          <div
            key={` #6c55da-${index}`}
            style={{
              position: 'absolute',
              left: `${(box.x * 100) / columns}%`,
              top: `${(box.y * 100) / rows}%`,
              width: `${100 / columns}%`,
              height: `${100 / rows}%`,
              backgroundColor: ' #6c55da',
              opacity: 0.7,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default App;