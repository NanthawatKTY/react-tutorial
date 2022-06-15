import React, {useEffect, useState} from 'react';
import '../App.css';
import './AppContainer.css';
import Popup from '../components/Popup';
import { Routes, Route } from 'react-router-dom';

function UseEffect() {

  const [count, setCount] = useState(0);
  // const [isPopupOpen, setIsPopupOpen] = useState(false);

  //initialize the state
  // useEffect(() => {
  //   console.log('useEffect');
  // }, []); //[] dependency array = ไม่มีปัจจัยอะไรที่ทำให้ fx ทำงานอีกครั้งได้ รันครั้งเดียว

  //ตัวที่ 2 เมื่อ count state มีการเปลี่ยนแปลง จะทำการรันคำสั่งใหม่
  //จะทำหลังจากที่ return ทำงานเสร็จ
  // useEffect(() => {
  //     console.log('useEffect count = ' + count);
  // }, [count]) //จะเกิดขึ้นเมื่อค่าใดเปลี่ยน


  //Unmounting
  useEffect(() => {
    console.log( `useEffect NOW = ${count}`);
    return () => {
      console.log( `useEffect CLEAR = ${count}`);
    }
  }, [count])

  // useEffect(() => {
  //   console.log( `useEffect NOW`);
  //   return () => {
  //     console.log( `useEffect CLEAR`);
  //   }
  // }, [])


  // let popup = null;
  // if (isPopupOpen) {
  //     popup = <Popup onPopupClose={() => setIsPopupOpen(false)} />;
  // }

  return (
    <section className="app-section">
      <div className="app-container">
          <h1>UseEffect Page</h1>
          <button className="btn btn-primary title" onClick={() => {setCount(prev => prev + 1)}}>{count}</button>
      </div>    
    </section>

    // <section className="app-section">
    //   <div className="app-container">
    //       <h1>เก็บโค้ดส่วนลดไม่ทัน</h1>
    //       <button onClick={() => setIsPopupOpen(true)}>เปิดป๊อปอัพ</button>
    //       <p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p>
    //   </div>
    //   {popup}
    // </section>
  );
}

export default UseEffect;