
import '../styles/Scroll.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useEffect } from 'react'
export const Scroll = () => {
    useEffect(()=> {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to("progress",{
            value:100,
            scrollTrigger:{
                scrub:0.5,
            },
        });
    },[]);

  return (
    <>
    <progress max="100" value="0"></progress>
    <section></section>
    <section></section>
    <section></section>
    </>
  );
};

export default Scroll