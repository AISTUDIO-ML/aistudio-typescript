import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/user";
import { toast } from "react-toastify";

const Github = () => {
  const navigate = useNavigate();
  const setUser = useUserStore((state: any) => state.setUser);

  const handleGithubLogin = () => {
    const queryParams = window.location.href.split("callback")[1];
    // console.log(queryParams, "queryParams");
    fetch(
      "https://demoapp.fuzonmedia.com/users/github-auth-callback" + queryParams,
      {
        method: "GET",
      }
    )
      .then((response: any) => {
        // getting token from headers
        console.log(response.headers.get("authorization"));
        if (response.ok) {
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
    console.log("component rendered");
    handleGithubLogin();
  }, []);

  return <div className="text-center">Loading</div>;
};

export default Github;
