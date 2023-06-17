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

        <a className="categoryBtn" data-filter="0JSM1SH40401F" 
          href="/bespoke?0JSM1SH40401F" aria-label='0JSM1SH40401F'>
          <div className="thumb">
            <img src="/images/str_bepoke.jpg" alt="" />
          </div>
          <div className="navTitle">Brand<br />Story</div>
        </a>

        <a className="categoryBtn" data-filter="0JSO5CB40303F"
          href="/bespoke?0JSO5CB40303F" aria-label='0JSO5CB40303F'>
          <div className="thumb">
            <img src="/images/str_brandstory.jpg" alt="" />
          </div>
          <div className="navTitle">Celebrity<br />&nbsp;</div>
        </a>

        <a className="categoryBtn" data-filter="0JSN5SH40505F"
          href="/bespoke?0JSN5SH40505F" aria-label='0JSN5SH40505F'>
          <div className="thumb">
            <img src="/images/str_celeb.jpg" alt="" />
          </div>
          <div className="navTitle">The Icon<br />전도연</div>
        </a>

        <a className="categoryBtn" data-filter="0JSM3SF40101F"
            href="/bespoke?0JSM3SF40101F" aria-label='0JSM3SF40101F'>
            <div className="thumb">
              <img src="/images/str_bepoke.jpg" alt="" />
            </div>
            <div className="navTitle">Pleats<br />Gradation</div>
        </a>
      </div>
    </div>
  )
}

export default StoryBanner