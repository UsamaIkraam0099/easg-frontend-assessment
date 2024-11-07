import { useState } from "react";

// others
import axios from "axios";
import { en } from "../language";
import { APP_URL } from "../constants";
import { toast } from "react-toastify";
import { STORAGE_KEYS } from "../utils";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

type AuthStateProps = {
  type: string;
};

type SignUp = {
  name: string;
  email: string;
  password: string;
};

const useAuthState = ({ type }: AuthStateProps) => {
  // hooks initialization
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUp>();

  const handleRequest = async (url: string, data: object) => {
    const config: any = {
      url,
      data,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Origin": "http://localhost:3300",
      },
    };

    try {
      const response = await axios(config);
      const { accessToken, userDetails } = response.data;

      localStorage.setItem(
        STORAGE_KEYS["access_token"],
        JSON.stringify(accessToken)
      );
      localStorage.setItem(
        STORAGE_KEYS["user_details"],
        JSON.stringify(userDetails)
      );

      navigate("/home", { replace: true });
    } catch (error: any) {
      const message = error?.response?.data?.message || en.error_msg;
      toast.error(message);
    }

    setDisabled(false);
  };

  const onSubmit: SubmitHandler<SignUp> = (data) => {
    setDisabled(true);

    setTimeout(() => {
      handleRequest(APP_URL[type], { ...data, ...{ type } });
    }, 3000);
  };

  const getAccessToken = () => {
    const accessToken: any = localStorage.getItem(STORAGE_KEYS["access_token"]);
    return JSON.parse(accessToken);
  };

  return {
    errors,
    disabled,
    register,
    onSubmit,
    handleSubmit,
    getAccessToken,
  };
};

export default useAuthState;
