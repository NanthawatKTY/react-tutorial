import React from 'react'

const SelectTextArea = React.forwardRef((props, ref) => {
  return (
    <div>
      <p>
          <textarea ref={ref}/>
      </p>
      <p>
          <button onClick={props.onAllTextChoose}>Choose all text</button>
      </p> 
    </div>
  )
}) 

export default SelectTextArea