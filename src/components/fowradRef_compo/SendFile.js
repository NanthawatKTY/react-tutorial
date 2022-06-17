import React from 'react'

const SendFile = React.forwardRef((props, ref) => {
  return (
    <div>
      <p>
        <input type="file" ref={ref}/>
      </p>
      <p>
        <button onClick={props.onUploadClick}>Upload file</button>
      </p> 
    </div>
  )
}) 

export default SendFile