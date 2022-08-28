import styles from './Invite.module.scss';

import { IonButtons, IonIcon, IonBackButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonToolbar, IonFooter, IonTitle, IonButton } from '@ionic/react';
import { chevronBackOutline, linkOutline } from "ionicons/icons";


import { useTranslation } from "react-i18next";


const Invite = () => {
    const { t, i18n } = useTranslation('lang');

    return (
        <IonPage className={styles.invitePage}>
            <IonHeader>
                <IonToolbar>
                    <IonRow className='ion-justify-content-between ion-align-items-center'>
                        <IonCol size='2'>
                            <IonButtons>
                                <IonBackButton icon={chevronBackOutline} text="" className="ion-no-padding ion-no-margin" />
                            </IonButtons>
                        </IonCol>
                        <IonCol size='8'>
                            <h4 className='main-title ion-text-center ion-no-margin'>{t('invite.title')}</h4>
                        </IonCol>
                        <IonCol size='2'>

                        </IonCol>
                    </IonRow>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className='ion-padding'>
                <IonGrid className="ion-padding">
                    <span className='text-white ion-text-justify'>{t('invite.content')}</span>
                    <p className='ion-text-center text-white main-number ion-padding-top'>{t('invite.invite-code')}: AC12345</p>
                    <IonButton expand="block"><IonIcon icon={linkOutline} />{t('invite.button-text')}</IonButton>
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

export default Invite;