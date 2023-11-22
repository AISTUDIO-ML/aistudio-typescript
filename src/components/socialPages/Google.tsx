import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/user";
import { toast } from "react-toastify";

const Google = () => {
  const navigate = useNavigate();
  const setUser = useUserStore((state: any) => state.setUser);

  const handleGoogleLogin = () => {
    const queryParams = window.location.href.split("callback")[1];
    // console.log(queryParams, "queryParams");
    fetch(
      "https://demoapp.fuzonmedia.com/users/google-auth-callback/" +
        queryParams,
      {
        method: "GET",
      }
    )
      .then((response: any) => {
        // getting token from headers
        console.log(response.headers.get("authorization"));
        return response.json();
      })
      .then((data) => {
        if (data.status === "success") {
          navigate("/");
          setUser(true);
          toast.success("Logged in Successfully!");
        }
      })
      .catch((error) => {
        toast.error("Something went wrong!");
        console.log("An error occurred:", error);
      });
  };

  useEffect(() => {
    handleGoogleLogin();
  }, []);

  return <div className="text-center">Loading...</div>;
};

export default Google;
