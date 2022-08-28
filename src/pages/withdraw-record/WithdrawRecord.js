import styles from './WithdrawRecord.module.scss';

import { IonButtons, IonBackButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonToolbar, IonFooter, IonTitle, IonCard } from '@ionic/react';
import { chevronBackOutline } from "ionicons/icons";


import { useTranslation } from "react-i18next";


const WithdrawRecord = () => {
    const { t, i18n } = useTranslation('lang');
    const current = new Date();
    const date = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()} ${current.getHours()} : ${current.getMinutes()} : ${current.getSeconds()}`;

    return (
        <IonPage className={styles.withdrawRocordPage}>
            <IonHeader>
                <IonToolbar>
                    <IonRow className='ion-justify-content-between ion-align-items-center'>
                        <IonCol size='2'>
                            <IonButtons>
                                <IonBackButton icon={chevronBackOutline} text="" className="custom-back ion-no-padding ion-no-margin" />
                            </IonButtons>
                        </IonCol>
                        <IonCol size='8'>
                            <h4 className='main-title ion-text-center  ion-no-margin'>{t('withdraw-record.title')}</h4>
                        </IonCol>
                        <IonCol size='2'>

                        </IonCol>
                    </IonRow>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className='ion-padding'>
                <IonGrid className="ion-no-padding">
                    <p>{t('withdraw-record.title')}</p>
                    <IonCard className='ion-no-margin ion-padding main-radius'>
                        <IonRow className='ion-justify-content-between ion-align-items-center'>
                            <span>{t('withdraw-record.order-number')}: DDSG332236424342</span>
                            <span className={`main-number ${styles.totalAmount}`}>$ 1234.123</span>
                        </IonRow>
                        <IonRow className='ion-justify-content-between ion-align-items-center ion-margin-top'>
                            <span className={styles.date}>{t('withdraw-record.time')}: {date}</span>
                            <span className={styles.statusBadge}>{t('withdraw-record.seccessful')}</span>
                        </IonRow>
                    </IonCard>
                    <IonCard className='ion-no-margin ion-padding main-radius'>
                        <IonRow className='ion-justify-content-between ion-align-items-center'>
                            <span>{t('withdraw-record.order-number')}: DDSG332236424342</span>
                            <span className={`main-number ${styles.totalAmount}`}>$ 1234.123</span>
                        </IonRow>
                        <IonRow className='ion-justify-content-between ion-align-items-center ion-margin-top'>
                            <span className={styles.date}>{t('withdraw-record.time')}: {date}</span>
                            <span className={styles.statusBadge}>{t('withdraw-record.seccessful')}</span>
                        </IonRow>
                    </IonCard>
                </IonGrid>
            </IonContent>
            <IonFooter>
                <IonRow className='ion-justify-content-center ion-padding-bottom'>
                    <div className={styles.footerLine}></div>
                </IonRow>
            </IonFooter>
        </IonPage>
    );
};

export default WithdrawRecord;