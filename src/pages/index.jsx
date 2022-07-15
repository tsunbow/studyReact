import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Header} from "../components/Header/Header";
import { useCallback, useEffect, useState } from 'react';

const Home = (props) => {
  const [post, setPosts] = useState([]);

  const getPosts = useCallback(async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    setPosts(json);
  },[])

  useEffect(() => {
    getPosts();
  },[getPosts])

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      {post.length > 0 ? (
      <ol>
      {post.map((post) => {
        return (
          <li key={post.id}>{post.title}</li>
        )
      })}
      </ol>
      ) : null}
    </div>
  )
}

export default Home;
