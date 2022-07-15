import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Footer} from "../components/Footer/Footer";
import {Main} from "../components/Main/Main";
import {Header} from "../components/Header/Header"

export　default function About({
  doubleCount,
  isShow, 
  handleClick, 
  handleDisplay, 
  text, 
  array, 
  handleChange, 
  handleAdd
}) {

  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      {isShow ? <h1>{doubleCount}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>

      <input type="text" value={text} onChange={handleChange}/>
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return (
            <li key={item}>{item}</li>
          )
        })}
      </ul>
      <Main page={"about"} />

      <Footer/>
    </div>
  )
}
