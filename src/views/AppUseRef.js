import React, {useState, useRef} from 'react'
import '../App.css'

const AppUseRef = () => {
  const textAreaRef = useRef(null);
  const fileRef = useRef(null);

  function onAllTextChoose() {
    textAreaRef.current.focus()
    textAreaRef.current.select()
  }

  function onUploadClick() {
    const myFile = fileRef.current.files[0];
    console.log(myFile)
  }

  return (
    <section className='app-section'>
        <div className="app-container">
            <h2>ไม่ใช่แฟนทำแทนก็ได้</h2>
            <p>
              <textarea ref={textAreaRef}/>
            </p>
            <p>
              <button onClick={onAllTextChoose}>Choose all text</button>
            </p>
            <p>
                <input type="file" ref={fileRef}/>
            </p>
            <p>
                <button onClick={onUploadClick}>Upload file</button>
            </p>
        </div>
    </section>
  )
}

export default AppUseRef