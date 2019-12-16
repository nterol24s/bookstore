import { useEffect, useState } from "react";

function useSelfUntoggle(time) {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    let timer;
    if (toggle) {
      timer = setTimeout(() => setToggle(false), time);
      return () => clearTimeout(timer);
    }
  }, [time, toggle]);

  const handleToggle = () => setToggle(true);

  return [toggle, handleToggle];
}

export default useSelfUntoggle;
