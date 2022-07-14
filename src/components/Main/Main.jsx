import classes from 'src/components/Main/Main.module.css'
import {Link} from "src/components/Links/Link";
import {Headline} from "src/components/Headline/Headline";

export function Main(props) {

  return (
    <main className={classes.main}>
      <Headline page={props.page}>
        <code className={classes.code}>pages/{props.page}.js</code>
      </Headline>
      <Link/>

    </main>
  )
}
