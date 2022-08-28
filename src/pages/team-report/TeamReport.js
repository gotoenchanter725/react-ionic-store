import { IonButton, IonCard, IonDatetime, IonButtons, IonTitle, IonBackButton, IonImg, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRouterLink, IonRow, IonToolbar, IonFooter } from '@ionic/react';
import styles from './TeamReport.module.scss';

import { chevronBackOutline, calendarOutline } from "ionicons/icons";
import { useTranslation } from "react-i18next";


const TeamReport = () => {
    const { t, i18n } = useTranslation('lang');
    const current = new Date();
    const date = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;
    const datetime = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()} ${current.getHours()} : ${current.getMinutes()} : ${current.getSeconds()}`;

    return (
        <IonPage className={styles.teamReportPage}>
            <IonHeader>
                <IonToolbar>
                    <IonRow className='ion-justify-content-between ion-align-items-center'>
                        <IonCol size='2'>
                            <IonButtons>
                                <IonBackButton icon={chevronBackOutline} text="" className="custom-back ion-no-padding ion-no-margin" />
                            </IonButtons>
                        </IonCol>
                        <IonCol size='8'>
                            <h4 className='main-title ion-text-center ion-no-margin'>{t('team-report.title')}</h4>
                        </IonCol>
                        <IonCol size='2'>

                        </IonCol>
                    </IonRow>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className='ion-padding'>
                <IonGrid>
                    <IonRow className={`ion-justify-content-center ${styles.tabBox}`}>
                        <span> {t('team-report.all')} </span>
                        <span> {t('team-report.today')} </span>
                        <span> {t('team-report.yesterday')} </span>
                        <span> {t('team-report.this-week')} </span>
                    </IonRow>
                    <IonRow className={`ion-align-items-center ion-justify-content-around main-radius ion-margin ${styles.diplayRange}`}>
                        <IonIcon icon={calendarOutline} />
                        <IonDatetime
                            value={date}
                            displayFormat='YYYY-MM-DD'
                        ></IonDatetime>
                        <p></p>
                        <IonDatetime
                            value={date}
                            displayFormat='YYYY-MM-DD'
                        ></IonDatetime>
                    </IonRow>
                    <IonCard className='ion-padding main-radius ion-no-margin'>
                        <div className='d-flex ion-justify-content-between ion-margin-bottom'>
                            <span>{t('team-report.all-data')}</span>
                            <span className='main-number'>$ 12345.123</span>
                        </div>
                        <p>{t('team-report.team-size')}: 973</p>
                        <p>{t('team-report.team-commission')}: 3351</p>
                    </IonCard>
                    <IonGrid className={styles.itemBody}>
                        <div className={`d-flex ion-align-items-center ${styles.dataItem}`}>
                            <IonCol size='2'>
                                <IonImg src='/assets/images/personal/avatar.png' alt='avatar' />
                            </IonCol>
                            <div>
                                <p className={styles.userName}>{t('team-report.user-name')}: BigStar</p>
                                <p>{t('team-report.user-level')}: 0</p>
                            </div>
                            <div>
                                <p>{t('team-report.phone')}: 123***123</p>
                                <p>{t('team-report.register-time')}: {datetime}</p>
                            </div>
                        </div>
                        <div className={`d-flex ion-align-items-center ${styles.dataItem}`}>
                            <IonCol size='2'>
                                <IonImg src='/assets/images/personal/avatar.png' alt='avatar' />
                            </IonCol>
                            <div>
                                <p className={styles.userName}>{t('team-report.user-name')}: BigStar</p>
                                <p>{t('team-report.user-level')}: 0</p>
                            </div>
                            <div>
                                <p>{t('team-report.phone')}: 123***123</p>
                                <p>{t('team-report.register-time')}: {datetime}</p>
                            </div>
                        </div>
                        <div className={`d-flex ion-align-items-center ${styles.dataItem}`}>
                            <IonCol size='2'>
                                <IonImg src='/assets/images/personal/avatar.png' alt='avatar' />
                            </IonCol>
                            <div>
                                <p className={styles.userName}>{t('team-report.user-name')}: BigStar</p>
                                <p>{t('team-report.user-level')}: 0</p>
                            </div>
                            <div>
                                <p>{t('team-report.phone')}: 123***123</p>
                                <p>{t('team-report.register-time')}: {datetime}</p>
                            </div>
                        </div>
                        <div className={`d-flex ion-align-items-center ${styles.dataItem}`}>
                            <IonCol size='2'>
                                <IonImg src='/assets/images/personal/avatar.png' alt='avatar' />
                            </IonCol>
                            <div>
                                <p className={styles.userName}>{t('team-report.user-name')}: BigStar</p>
                                <p>{t('team-report.user-level')}: 0</p>
                            </div>
                            <div>
                                <p>{t('team-report.phone')}: 123***123</p>
                                <p>{t('team-report.register-time')}: {datetime}</p>
                            </div>
                        </div>
                    </IonGrid>
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

export default TeamReport;