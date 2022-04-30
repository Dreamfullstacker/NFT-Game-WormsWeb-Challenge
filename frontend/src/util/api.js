import axios from "axios";

// using aws ip 52.15.191.202

export default axios.create({
  //baseURL: "http://52.15.191.202:5000",  //modified by tuktuk
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});
