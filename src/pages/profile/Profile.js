import { IonBackButton, IonButton, IonButtons, IonImg, IonCard, IonContent, IonHeader, IonIcon, IonPage, IonRouterLink, IonRow, IonToolbar, IonCol } from '@ionic/react';
import styles from './Profile.module.scss';
import React, { useState } from 'react';
import { arrowBack, notificationsSharp, logoUsd } from "ionicons/icons";

const Profile = () => {
    const [items, setItems] = useState([
        { id: 0, url: '/assets/img/avatar/1.png' },
        { id: 1, url: '/assets/img/avatar/2.png' },
        { id: 1, url: '/assets/img/avatar/3.png' },
        { id: 1, url: '/assets/img/avatar/4.png' },
        { id: 1, url: '/assets/img/avatar/5.png' },
        { id: 1, url: '/assets/img/avatar/6.png' },
        { id: 1, url: '/assets/img/avatar/7.png' },
        { id: 1, url: '/assets/img/avatar/1.png' },
        { id: 1, url: '/assets/img/avatar/2.png' },
        { id: 1, url: '/assets/img/avatar/3.png' },
        { id: 1, url: '/assets/img/avatar/4.png' },
        { id: 1, url: '/assets/img/avatar/5.png' },
        { id: 1, url: '/assets/img/avatar/6.png' },
        { id: 1, url: '/assets/img/avatar/7.png' },
    ]);

    const [selectedImg, setSelectedImg] = useState("/assets/img/avatar/0.png");

    const clickImg = (e) => {
        setSelectedImg(e.target.getAttribute('src'));
    }

    return (
        <IonPage className={styles.profilePage}>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton icon={arrowBack} text="" className="custom-back" />
                    </IonButtons>

                    <IonButtons slot="end">
                        <IonRouterLink routerLink='/app/notification'>
                            <IonButton className="custom-button">
                                <IonIcon icon={notificationsSharp} />
                            </IonButton>
                        </IonRouterLink>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <div className={styles.profileContainer}>
                    <IonCard className={`ion-padding-start ion-padding-end ${styles.profileContent}`}>
                        <IonRow className='ion-margin-top'>
                            <div className={styles.profileContentLogo}>
                                <IonImg src={selectedImg} />
                            </div>
                        </IonRow>
                        <IonRow className='ion-justify-content-center'>
                            <IonButton className='ion-text-center'>
                                Select your avatar
                            </IonButton>
                        </IonRow>
                    </IonCard>
                    <IonCard className={styles.profileContent}>
                        <IonRow className={`ion-padding ion-justify-content-center ${styles.profileImageBox}`}>
                            {items.map(item => {
                                return (
                                    <IonCol size='3' key={item.id}>
                                        <IonImg src={item.url} onClick={clickImg} />
                                    </IonCol>
                                )
                            })}

                        </IonRow>
                    </IonCard>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Profile;