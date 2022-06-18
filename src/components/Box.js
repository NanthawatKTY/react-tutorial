import './Box.css';

function Box(props) {
    return(
       <div className='box'>
           {/* children = data that was passed from html tag in AppLayoutComponent */}
           {props.children}
       </div> 
    )
}

export default Box;