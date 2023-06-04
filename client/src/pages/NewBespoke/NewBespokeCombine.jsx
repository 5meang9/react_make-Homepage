import './Bespoke.scss'
import * as bespoke from './NewBespoke';
import { useEffect } from 'react';

const NewBespokeCombine = () => {

  let buttons;
  let getOwnProductCode = '';
  useEffect(() => {
    buttons = document.querySelectorAll(".categoryBtn");
    buttons.forEach(e => {
      if(e.classList.contains('active')){
        getOwnProductCode = e.ariaLabel;
        console.log(getOwnProductCode);
      } 
    })
    // bespoke.getPrdCode();
    bespoke.bespokeAppearCheck(getOwnProductCode);
    var jnsBespoke;
    if(bespoke.bespokeAppearCheck(getOwnProductCode)){
      jnsBespoke = new bespoke.JnsBespoke(getOwnProductCode, document.querySelector('.bespoke-container'), document.querySelector('.preview-container'));

      document.addEventListener("DOMContentLoaded", function(){
        jnsBespoke.bespokeToggle.addEventListener('click', function(e){
          jnsBespoke.bespokeToggleClick(e, jnsBespoke)
        });
      })
    }
  },[getOwnProductCode])

  return(
      <>
        <div className='wrap'>
          <div className="preview-container active">
            <div className="preview-background"></div>
          </div>
          <div className='setting'>
            <div className="bespoke-container-toggle active">
              비스포크
              <img
                src="/bespoke_assets/icons/arrow-down-new.svg"
                width="16px"
                height="16px"
                alt="" />
            </div>
            <div className="bespoke-container active"></div>
          </div>
          <div className="bespoke-img-result"></div>

        </div>
      </>

  )
}

export default NewBespokeCombine
