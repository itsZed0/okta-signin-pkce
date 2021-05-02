import React from "react";
import axios from "axios";

export const fetchHome = async () => {
  return axios
    .get("http://localhost:8080/home")
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log("Error happened during fetching!", err);
    });
};
