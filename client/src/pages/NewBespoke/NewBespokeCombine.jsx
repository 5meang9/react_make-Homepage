import './Bespoke.scss'

{/* <script type="module" src="./NewBespoke.js"></script> */}

const NewBespokeCombine = () =>{
  return(
      <>
        <div class='wrap'>
          <div class="preview-container active">
            <div class="preview-background"></div>
          </div>
          <div class='setting'>
            <div class="bespoke-container-toggle active">
              비스포크
              <img
                src="/bespoke_assets/icons/arrow-down-new.svg"
                width="16px"
                height="16px"
                alt="" />
            </div>
            <div class="bespoke-container active"></div>
          </div>
          <div class="bespoke-img-result"></div>

        </div>
      </>

  )
}

export default NewBespokeCombine
