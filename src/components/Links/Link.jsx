import classes from './Links.module.css'

export const Link = (props) => {
  return (
    <div className={classes.grid}>
      {props.items.map((item) => {
        return (
          <a key={item.href} href={item.href} className={classes.card}>
            <h2 className={classes.title}>{item.title}</h2>
            <p className={classes.description}>{item.description}</p>
          </a>
        )
      })}
    </div>
  )
}
