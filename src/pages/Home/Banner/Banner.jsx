import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./Banner.css";
import baseball from "../../../assets/banner/baseball.png";
import basketball from "../../../assets/banner/basketball.png";
import boxing from "../../../assets/banner/boxing.png";
import golf from "../../../assets/banner/golf.png";
import hockey from "../../../assets/banner/hockey.png";
import pingPong from "../../../assets/banner/ping-pong.png";
import rugby from "../../../assets/banner/rugby.png";
import tennis from "../../../assets/banner/tennis.png";
import volleyball from "../../../assets/banner/volleyball.png";

const Banner = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    
    return (
        <>
            <Swiper 
                pagination={pagination} 
                modules={[Pagination]} 
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="h-full">
                        <img src={baseball} className="w-full h-full" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-full">
                        <img src={basketball} className="w-full h-full" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-full">
                        <img src={boxing} className="w-full h-full" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-full">
                        <img src={golf} className="w-full h-full" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-full">
                        <img src={hockey} className="w-full h-full" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-full">
                        <img src={pingPong} className="w-full h-full" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-full">
                        <img src={rugby} className="w-full h-full" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-full">
                        <img src={tennis} className="w-full h-full" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-full">
                        <img src={volleyball} className="w-full h-full" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;