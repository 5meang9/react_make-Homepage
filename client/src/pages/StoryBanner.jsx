import './StoryBanner.scss';
import { useEffect } from 'react';

const StoryBanner = () => {

  useEffect(() => {
    let categoryNavWrap = document.querySelector(".categoryNavWrap");
    const buttons = document.querySelectorAll(".categoryBtn");
    const link = window.location.href;
  
    categoryNavWrap.classList.add('active');
    buttons.forEach((button) => {
      let filter = button.dataset.filter;
      // eslint-disable-next-line no-restricted-globals
      if (link.includes(filter)) {
        button.classList.add("active");
      }
    });
    
  },[])
  

  return(
    <div className="categoryNavWrap active">
      <div className="categoryNav">
        <a className="categoryBtn" data-filter="0JSM1TT40306F"
          href="/bespoke?0JSM1TT40306F" aria-label='0JSM1TT40306F'>
          <div className="thumb">
            <img src="/images/str.gif" alt="" />
          </div>
          <div className="navTitle">HELLO<br />SANRIO</div>
        </a>

        <a className="categoryBtn" data-filter="0JSM1SH40401F" href="/bespoke?0JSM1SH40401F" aria-label='0JSM1SH40401F'>
          <div className="thumb">
            <img src="/images/str_bepoke.jpg" alt="" />
          </div>
          <div className="navTitle">Brand<br />Story</div>
        </a>

        <a className="categoryBtn" data-filter="0JSM3CB40502F"
          href="/bespoke?0JSM3CB40502F" aria-label='0JSM3CB40502F'>
          <div className="thumb">
            <img src="/images/str_brandstory.jpg" alt="" />
          </div>
          <div className="navTitle">Celebrity<br />&nbsp;</div>
        </a>

        <a className="categoryBtn" data-filter="2023jeondoyeon"
          href="/brand/page/2023jeondoyeon.html?adcode=20230509_stb_dy">
          <div className="thumb">
            <img src="/images/str_celeb.jpg" alt="" />
          </div>
          <div className="navTitle">The Icon<br />전도연</div>
        </a>

        <a className="categoryBtn" data-filter="0511pleatsgradation"
            href="/brand/page/0511pleatsgradation.html?adcode=20230511_stb_lpc">
            <div className="thumb">
              <img src="/images/str_bepoke.jpg" alt="" />
            </div>
            <div className="navTitle">Pleats<br />Gradation</div>
        </a>

        <a className="categoryBtn" data-filter="0420oz"
          href="/brand/page/0420oz.html?adcode=20230420_stb_oz">
          <div className="thumb">
            <img src="/images/str_celeb.jpg" alt="" />
          </div>
          <div className="navTitle">Tenderness<br />of Heart</div>
        </a>

        <a className="categoryBtn" data-filter="BESPOKE2022"
          href="/brand/page/BESPOKE2022.html?adcode=20220512_bn_stb_bespoke">
          <div className="thumb">
            <img src="/images/str_bepoke.jpg" alt="" />
          </div>
          <div className="navTitle">특별한<br />자수 서비스</div>
        </a>
        <a className="categoryBtn" data-filter="collection" href="/brand/collection.html?adcode=20211008_bn_stb_collection">
          <div className="thumb">
            <img src="/images/str_brandstory.jpg" alt="" />
          </div>
          <div className="navTitle">컬렉션<br />&nbsp;</div>
        </a>
      </div>
    </div>
  )
}

export default StoryBanner