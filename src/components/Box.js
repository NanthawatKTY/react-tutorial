import styles from './Box.module.css';

function Box(props) {
    return(
       <div className={styles.box}>
           <h3 className={styles.title}>{props.title}</h3>

           {/* children = data that was passed from html tag in AppLayoutComponent */}
           {props.children}
       </div> 
    )
}

export default Box;