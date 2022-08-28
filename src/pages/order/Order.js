import { IonTitle, IonCard, IonCol, IonContent, IonHeader, IonIcon, IonImg, IonPage, IonRouterLink, IonRow, IonToolbar, IonButton } from '@ionic/react';
import styles from './Order.module.scss';

import { chatboxEllipsesOutline } from "ionicons/icons";

import { useTranslation } from "react-i18next";
import OrderSlider from '../../components/slider/OrderSlider';
import { useState, useEffect } from 'react';

const Order = () => {
    const { t, i18n } = useTranslation('lang');
    const [slider, setSlider] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setSlider(true)
        }, 100)
    }, [])

    return (
        <IonPage className={styles.orderPage}>
            <IonHeader>
                <IonToolbar>
                    <IonRow className='ion-justify-content-between ion-align-items-center'>
                        <IonCol size='2'>

                        </IonCol>
                        <IonCol size='8'>
                            <h4 className='main-title ion-text-center ion-no-margin'>{t('order.title')}</h4>
                        </IonCol>
                        <IonCol size='2'>
                            <IonRouterLink routerLink="/app/home">
                                <IonIcon icon={chatboxEllipsesOutline} />
                            </IonRouterLink>
                        </IonCol>
                    </IonRow>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className='ion-padding'>
                <IonCard className={`${styles.orderCard}`}>
                    <IonRow className='ion-justify-content-end'>
                        <IonImg src='/assets/images/3.png' alt='tooltip' />
                    </IonRow>
                    <IonRow className={`ion-justify-content-between ion-margin-bottom ${styles.cardDetail}`}>
                        <IonImg src='/assets/images/home/01@2x.png' alt='badge' />
                        <div>
                            <span>{t('order.account-amount')}:</span>
                            <h4 className='main-number ion-no-margin'>$ 1223.123</h4>
                            <IonRow className='ion-align-items-center'>
                                <span className='ion-margin-end'>{t('order.ordinary-member')}:</span>
                                <span>{t('order.commission')} 0.4% | 60 {t('order.order')}</span>
                            </IonRow>
                        </div>
                        <IonRow className={`ion-justify-content-center ion-margin-bottom ion-align-items-center ion-margin-top ${styles.orderAmount}`}>
                            <span className={`main-number ${styles.roundedNumber}`}>22</span> <span className='main-number'> / </span><span className='main-number'>60</span>
                        </IonRow>
                    </IonRow>
                    {
                        slider ? <OrderSlider /> : ''
                    }
                </IonCard>
                <div className={`text-white ${styles.orderList}`}>
                    <div className='d-flex ion-justify-content-between ion-align-items-center'>
                        <span>{t('order.get-commission')}</span>
                        <span className='main-number'>$ 56.23</span>
                    </div>
                    <div className='d-flex ion-justify-content-between ion-align-items-center'>
                        <span>{t('order.freeze-amount')}</span>
                        <span className='main-number'>$ 1256.23</span>
                    </div>
                    <div className='d-flex ion-justify-content-between ion-align-items-center'>
                        <span>{t('order.quantity-order')}</span>
                        <span className='main-number'>12</span>
                    </div>
                    <div className='d-flex ion-justify-content-between ion-align-items-center'>
                        <span>{t('order.enable-amount')}</span>
                        <span className='main-number'>$ 1256.23</span>
                    </div>
                </div>
                <IonButton className="custom-button ion-padding-top ion-margin-bottom" expand="block">{t('order.start-order')}</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Order;