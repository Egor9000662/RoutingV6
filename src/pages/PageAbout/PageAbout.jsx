import React from "react";
import Post from "../../components/Post/Post";
import { useState, useEffect } from "react";

export default function PageAbout() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const responce = await fetch("https://jsonplaceholder.typicode.com/todos");
    const post = await responce.json();
    console.log(post);
    setPosts(post);
  }

  if(!posts){
    return <h1>Please wait...</h1>
  }

  return <div>
    {posts.map(item=> <Post key={item.id} item={item} />)}
  </div>;
}
