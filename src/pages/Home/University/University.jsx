import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const University = () => {
    return (
        <div>
            <div className='mt-20 hidden lg:block'>
                <div className='grid grid-cols-5 place-items-center'>
                    <img src='https://eduma.thimpress.com/wp-content/uploads/2022/08/icon-partner-5.png' alt='' className='grayscale hover:grayscale-0' />
                    <img src='https://eduma.thimpress.com/wp-content/uploads/2022/08/icon-partner-4.png' alt='' className='grayscale hover:grayscale-0' />
                    <img src='https://eduma.thimpress.com/wp-content/uploads/2022/08/icon-partner-3.png' alt='' className='grayscale hover:grayscale-0' />
                    <img src='https://eduma.thimpress.com/wp-content/uploads/2022/08/icon-partner-2.png' alt='' className='grayscale hover:grayscale-0' />
                    <img src='https://eduma.thimpress.com/wp-content/uploads/2022/08/icon-partner-1.png' alt='' className='grayscale hover:grayscale-0' />
                </div>
            </div>
            <Swiper 
                spaceBetween={30}
                effect={'fade'}
                pagination={{
                    clickable: true,
                }} 
                modules={[EffectFade, Pagination]} 
                className="mySwiper mt-14 lg:hidden"
            >
                <SwiperSlide className='flex justify-center items-center'>
                    <div>
                        <img src='https://eduma.thimpress.com/wp-content/uploads/2022/08/icon-partner-5.png' alt='' className='grayscale hover:grayscale-0' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center'>
                    <div>
                        <img src='https://eduma.thimpress.com/wp-content/uploads/2022/08/icon-partner-4.png' alt='' className='grayscale hover:grayscale-0' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center'>
                    <div className='pb-3'>
                        <img src='https://eduma.thimpress.com/wp-content/uploads/2022/08/icon-partner-3.png' alt='' className='grayscale hover:grayscale-0' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center'>
                    <div>
                        <img src='https://eduma.thimpress.com/wp-content/uploads/2022/08/icon-partner-2.png' alt='' className='grayscale hover:grayscale-0' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center'>
                    <div>
                        <img src='https://eduma.thimpress.com/wp-content/uploads/2022/08/icon-partner-1.png' alt='' className='grayscale hover:grayscale-0' />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default University;