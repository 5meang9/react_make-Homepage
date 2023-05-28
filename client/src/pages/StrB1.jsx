import './StrB1.scss';

const StrB1 = () => {
  
  // let categoryNavWrap = document.querySelector(".categoryNavWrap");
  // const buttons = document.querySelectorAll(".categoryBtn");
  // // eslint-disable-next-line no-restricted-globals
  // const link = window.location.href;
  // // 골프 페이지 일시 

  // categoryNavWrap.classList.add('active');
  // buttons.forEach((button) => {
  //   let filter = button.dataset.filter;
  //   // eslint-disable-next-line no-restricted-globals
  //   if (link.includes(filter)) {
  //     button.classList.add("active");
  //   }
  // });

  return(
    <div class="categoryNavWrap active">
      <div class="categoryNav">
        <a class="categoryBtn" data-filter="sanrio"
          href="/brand/page/hellosanrio.html?adcode=20230427_stb_sanrio">
          <div class="thumb">
            <img src="/images/str.gif" alt="" />
          </div>
          <div class="navTitle">HELLO<br />SANRIO</div>
        </a>

        <a class="categoryBtn" data-filter="brandstory" href="/brand/brandstory.html?adcode=20220729_bn_stb_brandstory">
          <div class="thumb">
            <img src="/images/str_bepoke.jpg" alt="" />
          </div>
          <div class="navTitle">Brand<br />Story</div>
        </a>

        <a class="categoryBtn" data-filter="Celebrity"
          href="/board/gallery/list.html?adcode=20211008_bn_stb_celeb">
          <div class="thumb">
            <img src="/images/str_brandstory.jpg" alt="" />
          </div>
          <div class="navTitle">Celebrity<br />&nbsp;</div>
        </a>

        <a class="categoryBtn" data-filter="2023jeondoyeon"
          href="/brand/page/2023jeondoyeon.html?adcode=20230509_stb_dy">
          <div class="thumb">
            <img src="/images/str_celeb.jpg" alt="" />
          </div>
          <div class="navTitle">The Icon<br />전도연</div>
        </a>

        <a class="categoryBtn" data-filter="0511pleatsgradation"
            href="/brand/page/0511pleatsgradation.html?adcode=20230511_stb_lpc">
            <div class="thumb">
              <img src="/images/str_bepoke.jpg" alt="" />
            </div>
            <div class="navTitle">Pleats<br />Gradation</div>
        </a>

        <a class="categoryBtn" data-filter="0420oz"
          href="/brand/page/0420oz.html?adcode=20230420_stb_oz">
          <div class="thumb">
            <img src="/images/str_celeb.jpg" alt="" />
          </div>
          <div class="navTitle">Tenderness<br />of Heart</div>
        </a>

        <a class="categoryBtn" data-filter="BESPOKE2022"
          href="/brand/page/BESPOKE2022.html?adcode=20220512_bn_stb_bespoke">
          <div class="thumb">
            <img src="/images/str_bepoke.jpg" alt="" />
          </div>
          <div class="navTitle">특별한<br />자수 서비스</div>
        </a>
        <a class="categoryBtn" data-filter="collection" href="/brand/collection.html?adcode=20211008_bn_stb_collection">
          <div class="thumb">
            <img src="/images/str_brandstory.jpg" alt="" />
          </div>
          <div class="navTitle">컬렉션<br />&nbsp;</div>
        </a>
      </div>
    </div>
  )
}

export default StrB1