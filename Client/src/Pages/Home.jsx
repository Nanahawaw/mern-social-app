import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);
  //when the page loads
  useEffect(() => {
    //get request
    axios.get("http://localhost:5000/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);
  return (
    <div>
      {" "}
      {listOfPosts.map((value, key) => {
        return (
          <div className="post">
            <div className="title">{value.title}</div>
            <div className="body">{value.postText}</div>
            <div className="footer">{value.username}</div>
          </div>
        );
      })}
    </div>
  );
}
