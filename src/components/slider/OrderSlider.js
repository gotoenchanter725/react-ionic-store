import { IonImg } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCards, Autoplay } from "swiper";
import { useTranslation } from "react-i18next";
import 'swiper/swiper.min.css';

import 'swiper/modules/effect-cards/effect-cards.scss';
import './Order.scss';


export default () => {
    const { t, i18n } = useTranslation('lang');
    SwiperCore.use([Autoplay]);
    return (
        <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[Autoplay, EffectCards]}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            className="orderSwiper"
        >
            <SwiperSlide><IonImg src="/assets/images/product/1.png" alt='product' /><h4>{t('order.product-name')}</h4></SwiperSlide>
            <SwiperSlide><IonImg src="/assets/images/product/1.png" alt='product' /><h4>{t('order.product-name')}</h4></SwiperSlide>
            <SwiperSlide><IonImg src="/assets/images/product/1.png" alt='product' /><h4>{t('order.product-name')}</h4></SwiperSlide>
            <SwiperSlide><IonImg src="/assets/images/product/1.png" alt='product' /><h4>{t('order.product-name')}</h4></SwiperSlide>
        </Swiper >
    );
};