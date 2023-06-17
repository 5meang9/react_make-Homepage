import './BespokeDesc.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper';
import 'swiper/css';
// import { Aos } from 'aos';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function BespokeDesc(){

  useEffect(() => {
    Aos.init()
  },[])

  return (
    <>
      {/* <div id='contentsArea'>
        
      </div> */}

      <div id="contentsArea">
        <div className="dx-eenk1-container">
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
            slidesPerGroup={4}
            loop={true}
            speed={600}
            autoplay={{ delay: 2000 }}
            modules={[Autoplay]}
          >
            <SwiperSlide>
              <img src="/images/bespoke_desc_assets/1_1_.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/bespoke_desc_assets/1_2_1_.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/bespoke_desc_assets/2_1_.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/bespoke_desc_assets/2_2_1_.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/bespoke_desc_assets/5_1_.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/bespoke_desc_assets/5_2_1_.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/bespoke_desc_assets/6_1_.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/bespoke_desc_assets/6_2_1_.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        {/* <div className="w-1">
          <div className="img">
            <img src="/images/bespoke_desc_assets/main_1_.gif" alt="" />
          </div>
        </div> */}
        <div>
          <div className="txt center desc-content">
            <p className='desc-content-dan1'>
              조셉앤스테이시 Bespoke 자수 서비스는 나만의 커스텀을 경험하게 합니다.<br />
              소중한 이에게 특별한 날, 특별한 선물을 준비하신다면<br />
              Bespoke를 통해 준비해보세요.
            </p>
            <p className='desc-content-dan2'>
              *시뮬레이션을 통해 자유롭게 비스포크 옵션을 선택할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
      

      <div id="contenetsArea" className='desc-content-main' data-aos="fade-up">
        <img src='/images/bespoke_desc_assets/bespoke_page_8-2.jpg'/>
      </div>

      <div id="contentsArea">
          <div className="fade-in-box">
              <div className="txt center">
                <p className='desc-content-dan1'>
                  [ 비스포크 적용 가능 제품 ]
                </p>
              </div>
          </div>
          <div className="w-1">
              <div className="img center">
                <img src="/images/bespoke_desc_assets/list_1.jpg" alt="" />
              </div>
            </div>
          <div className="link-btn-wrap" data-aos="zoom-in">
              <a className="link-btn" href="/bespoke?0JSM1TT40306F">
                <button>비스포크 하러가기</button>
              </a>
          </div>
      </div>
    </>
  )
}


