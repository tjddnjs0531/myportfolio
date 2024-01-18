import './Contact.css'

function Contact() {
    window.addEventListener('scroll', function(){
      if(document.getElementById('section4')){
        const sec4Top = document.querySelector("#section4").offsetTop - 200;
        let scrollY = window.scrollY;
        console.log(sec4Top);
        // console.log( scrollY );
        
        if(sec4Top < scrollY){
          document.querySelector('header').classList.add('bottom');
          // console.log( 'bottom' );
        }else {
          document.querySelector('header').classList.remove('bottom');
        }
      }
    });
    
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