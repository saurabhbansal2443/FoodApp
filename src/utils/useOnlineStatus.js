import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineState, setOnlineState] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setOnlineState(true);
    const handleOffline = () => setOnlineState(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return onlineState;
};

export default useOnlineStatus;
