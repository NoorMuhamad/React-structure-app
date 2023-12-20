import { useLayoutEffect, useRef } from 'react';

/**
 * useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.
 * it fires synchronously after all DOM mutations. This makes it suitable for tasks that need to be executed immediately after the DOM has been updated, but before the browser has had a chance to paint those changes on the screen.
 * 
 */
const LayoutEffectHook = () => {
  const myRef = useRef();

  useLayoutEffect(() => {
    // Access the DOM element's dimensions immediately after render
    console.log(myRef.current.offsetWidth);
  }, []); // Empty dependency array ensures it runs once after the initial render

  return (
    <div ref={myRef}>
      useLayoutEffect</div>
  );
}
export default LayoutEffectHook;