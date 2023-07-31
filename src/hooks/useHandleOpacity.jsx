import { useEffect, useState } from "react";

export const useHandleOpacity = (imgRef) => {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleOpacityScroll = () => {
          const heightVideo = imgRef.current.clientHeight;
          const scrollY = window.scrollY;
          const opacityCalc = Math.max(0.2, 1 - (scrollY * 2.3) / heightVideo); // Asegura que el valor no sea menor que 0.2
          setOpacity(opacityCalc);
          
          if (imgRef.current.style.opacity != 0) {
            imgRef.current.style.opacity = opacity;
          }
        };
    
        window.addEventListener("scroll", handleOpacityScroll);

        return () => {
          window.removeEventListener("scroll", handleOpacityScroll);
        };
    }, [opacity]);
    
    return opacity
}
