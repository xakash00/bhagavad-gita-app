import { useEffect, useRef } from "react";

const UseOutsideAlerter=({handleClose,outSideClickRef})=>  {
  useEffect(() => {
    function handleClickOutside(event) {
      if (outSideClickRef.current && !outSideClickRef.current.contains(event.target)) {
        handleClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [outSideClickRef]);

 
}

export default UseOutsideAlerter;
