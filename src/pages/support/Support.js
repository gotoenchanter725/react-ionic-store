import { IonTitle, IonCard, IonCol, IonContent, IonHeader, IonIcon, IonImg, IonPage, IonRouterLink, IonRow, IonToolbar, IonButton, IonGrid } from '@ionic/react';
import styles from './Support.module.scss';

import { chatboxEllipsesOutline } from "ionicons/icons";

import { useTranslation } from "react-i18next";

const Support = () => {
    const { t, i18n } = useTranslation('lang');
    const current = new Date();
    const date = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()} ${current.getHours()} : ${current.getMinutes()} : ${current.getSeconds()}`;

    return (
        <IonPage className={styles.recordPage}>
            <IonHeader>
                <IonToolbar>
                    <IonRow className='ion-justify-content-between ion-align-items-center'>
                        <IonCol size='2'>

                        </IonCol>
                        <IonCol size='8'>
                            <h4 className='main-title ion-text-center ion-no-margin'>{t('support.title')}</h4>
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

            </IonContent>
        </IonPage>
    );
};

export default Support;