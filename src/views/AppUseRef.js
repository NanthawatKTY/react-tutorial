import React, {useState, useRef} from 'react'
import '../App.css'
import SelectTextArea from '../components/fowradRef_compo/SelectTextArea';
import SendFile from '../components/fowradRef_compo/SendFile';

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
            <SelectTextArea onAllTextChoose={onAllTextChoose} ref={textAreaRef}/>
            <SendFile onUploadClick={onUploadClick} ref={fileRef}/>
        </div>
    </section>
  )
}

export default AppUseRef