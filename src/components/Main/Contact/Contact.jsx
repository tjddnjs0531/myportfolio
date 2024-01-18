import { useEffect, useState } from 'react';
import './Contact.css'

function Contact() {
    // const [position, setposition] = useState(0);
    // const [position2, setposition2] = useState(0);
    // function onScroll(){
    //   setposition(window.scrollY);
    //   setposition2(document.querySelector("#section4").offsetTop - 200);
    // }
    // useEffect(() => {
    //   window.addEventListener('scroll', onScroll);
    //   return () => {
    //     window.removeEventListener('scroll', onScroll)
    //   }
    // })

    // console.log(position);
    // console.log(position2);

    // if(position >= position2){
    //   document.querySelector('header').classList.add('bottom');
    // }else {
    //   // document.querySelector('header').classList.remove('bottom');
    // }
    
    return (
      <>
      <section id="section4" className="section">
            <div className="contact inner layout">
                <div className="fade-g">
                    <h2 className="title">CONTACT</h2>
                    <p className="t1">기본기가 탄탄하고, 끊임없이 성장하는 인재</p>
                    <a href="mailto:tjddnjs0531@gmail.com" className="mail">tjddnjs0531@gmail.com</a>
                    <p className="t2">메일을 보내주시면 확인 후 최대한 빠르게 회신 드리겠습니다.</p>
                </div>
            </div>
        </section>
      </>
    );
  }
  
  export default Contact;