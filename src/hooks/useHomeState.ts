import { useState, useEffect } from "react";

// others
import { STORAGE_KEYS } from "../utils";
import { useNavigate } from "react-router-dom";

type UserType = {
  id: string;
  name: string;
};

const useHomeState = () => {
  // hooks initialization
  const navigate = useNavigate();
  const [delay, setDelay] = useState(false);
  const [user, setUser] = useState<UserType>();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const user: any = localStorage.getItem(STORAGE_KEYS["user_details"]);
    setUser(JSON.parse(user));
  }, []);

  const handleLogout = () => {
    setDelay(true);
    setTimeout(() => {
      localStorage.removeItem(STORAGE_KEYS["access_token"]);
      localStorage.removeItem(STORAGE_KEYS["user_details"]);

      navigate("/signIn", { replace: true });
    }, 3000);
  };

  return { user, delay, position, setPosition, handleLogout };
};

export default useHomeState;
