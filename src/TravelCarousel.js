import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Direkte bruk av moduler via props
export default function TravelCarousel() {
    const travelImages = [
        { src: 'public/trips/buddhadn.JPEG', country: 'Vietnam' },
        { src: 'public/trips/topluang.JPEG', country: 'Laos' }, 
        { src: 'public/trips/kohtao.JPEG', country: 'Thailand' },
        { src: 'public/trips/cameronhighlands.JPEG', country: 'Malaysia' },
        { src: 'public/trips/singapore.JPEG', country: 'Singapore' },
        { src: 'public/trips/bohol.JPEG', country: 'Philippines' },
        { src: 'public/trips/ninearch.JPEG', country: 'Sri Lanka' },
        { src: 'public/trips/tajmahal.jpg', country: 'India' },
    ];

    return (
        <Swiper
            modules={[Swiper.Autoplay, Swiper.Navigation, Swiper.Pagination]} // Legg til moduler her
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            className="mySwiper"
        >
            {travelImages.map((image, index) => (
                <SwiperSlide key={index}>
                    <div className="carousel-image" style={{ position: 'relative' }}>
                        <img src={image.src} alt={image.country} style={{ width: '100%', borderRadius: '10px' }} />
                        <div className="image-caption" style={{
                            position: 'absolute',
                            bottom: '10px',
                            left: '10px',
                            color: 'white',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            padding: '5px 10px',
                            borderRadius: '5px',
                        }}>
                            {image.country}
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
