/*
================================================================================

Copied from QoP (https://stackoverflow.com/users/4484822/qop) on 
Stack Overflow

Retrieved from thread: 
https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs

================================================================================
*/


import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

// ============= ** USAGE ** ==============
// const Component = () => {
//     const { height, width } = useWindowDimensions();
  
//     return (
//       <div>
//         width: {width} ~ height: {height}
//       </div>
//     );
// }

