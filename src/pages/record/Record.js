import { IonTitle, IonCard, IonCol, IonContent, IonHeader, IonIcon, IonImg, IonPage, IonRouterLink, IonRow, IonToolbar, IonButton, IonGrid } from '@ionic/react';
import styles from './Record.module.scss';

import { chatboxEllipsesOutline } from "ionicons/icons";

import { useTranslation } from "react-i18next";

const Record = () => {
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
                            <h4 className='main-title ion-text-center ion-no-margin'>{t('record.title')}</h4>
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
                <div className={styles.wrapperContent}>
                    <div className={styles.tabBox}>
                        <div className={styles.tabPart}>
                            <input type="radio" name="css-tabs" id="tab-1" defaultChecked className={styles.tabSwitch} />
                            <label htmlFor="tab-1" className={styles.tabLabel}>{t('record.status-processing')}</label>
                            <div className={styles.tabContent}>
                                <IonGrid>
                                    <span>{t('record.account-amount')}:</span>
                                    <h2 className='main-number'>$ 1234.123</h2>
                                </IonGrid>
                                <IonCard className='main-radius ion-no-margin ion-padding'>
                                    <IonRow className='ion-justify-content-between'>
                                        <span>{date}</span>
                                        <span className={styles.recordStatus}>{t('record.status-processing')}</span>
                                    </IonRow>
                                    <IonRow className={`ion-align-items-center ${styles.productInfo}`}>
                                        <IonCol size='3'>
                                            <IonImg src='/assets/images/record/product.png' alt='product' />
                                        </IonCol>
                                        <IonCol size='9'>
                                            <h6 className=''>Haier 15.6-inch narrow-bezel thin and light laptop</h6>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow className='ion-justify-content-between'>
                                        <span>{t('record.order-amount')}</span>
                                        <span className='main-number'>$ 1234.12</span>
                                    </IonRow>
                                    <IonRow className='ion-justify-content-between'>
                                        <span>{t('record.commission')}</span>
                                        <span className='main-number'>$ 56.12</span>
                                    </IonRow>
                                    <IonRow className='ion-justify-content-between'>
                                        <span>{t('record.returned-amount')}</span>
                                        <span className='main-number'>$ 1234.12</span>
                                    </IonRow>
                                </IonCard>
                                <IonCard className='main-radius ion-no-margin ion-padding'>
                                    <IonRow className='ion-justify-content-between'>
                                        <span>{date}</span>
                                        <span className={styles.recordStatus}>{t('record.status-processing')}</span>
                                    </IonRow>
                                    <IonRow className={`ion-align-items-center ${styles.productInfo}`}>
                                        <IonCol size='3'>
                                            <IonImg src='/assets/images/record/product.png' alt='product' />
                                        </IonCol>
                                        <IonCol size='9'>
                                            <h6 className=''>Haier 15.6-inch narrow-bezel thin and light laptop</h6>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow className='ion-justify-content-between'>
                                        <span>{t('record.order-amount')}</span>
                                        <span className='main-number'>$ 1234.12</span>
                                    </IonRow>
                                    <IonRow className='ion-justify-content-between'>
                                        <span>{t('record.commission')}</span>
                                        <span className='main-number'>$ 56.12</span>
                                    </IonRow>
                                    <IonRow className='ion-justify-content-between'>
                                        <span>{t('record.returned-amount')}</span>
                                        <span className='main-number'>$ 1234.12</span>
                                    </IonRow>
                                </IonCard>
                            </div>
                        </div>
                        <div className={styles.tabPart}>
                            <input type="radio" name="css-tabs" id="tab-2" className={styles.tabSwitch} />
                            <label htmlFor="tab-2" className={styles.tabLabel}>{t('record.status-completed')}</label>
                            <div className={styles.tabContent}>
                                <IonGrid>
                                    <span>{t('record.account-amount')}:</span>
                                    <h2 className='main-number'>$ 1234.123</h2>
                                </IonGrid>
                                <IonCard className='main-radius ion-no-margin ion-padding'>
                                    <IonRow className='ion-justify-content-between'>
                                        <span>{date}</span>
                                        <span className={styles.recordStatus}>{t('record.status-completed')}</span>
                                    </IonRow>
                                    <IonRow className={`ion-align-items-center ${styles.productInfo}`}>
                                        <IonCol size='3'>
                                            <IonImg src='/assets/images/record/product.png' alt='product' />
                                        </IonCol>
                                        <IonCol size='9'>
                                            <h6 className=''>Haier 15.6-inch narrow-bezel thin and light laptop</h6>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow className='ion-justify-content-between'>
                                        <span>{t('record.order-amount')}</span>
                                        <span className='main-number'>$ 1234.12</span>
                                    </IonRow>
                                    <IonRow className='ion-justify-content-between'>
                                        <span>{t('record.commission')}</span>
                                        <span className='main-number'>$ 56.12</span>
                                    </IonRow>
                                    <IonRow className='ion-justify-content-between'>
                                        <span>{t('record.returned-amount')}</span>
                                        <span className='main-number'>$ 1234.12</span>
                                    </IonRow>
                                </IonCard>
                                <IonCard className='main-radius ion-no-margin ion-padding'>
                                    <IonRow className='ion-justify-content-between'>
                                        <span>{date}</span>
                                        <span className={styles.recordStatus}>{t('record.status-completed')}</span>
                                    </IonRow>
                                    <IonRow className={`ion-align-items-center ${styles.productInfo}`}>
                                        <IonCol size='3'>
                                            <IonImg src='/assets/images/record/product.png' alt='product' />
                                        </IonCol>
                                        <IonCol size='9'>
                                            <h6 className=''>Haier 15.6-inch narrow-bezel thin and light laptop</h6>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow className='ion-justify-content-between'>
                                        <span>{t('record.order-amount')}</span>
                                        <span className='main-number'>$ 1234.12</span>
                                    </IonRow>
                                    <IonRow className='ion-justify-content-between'>
                                        <span>{t('record.commission')}</span>
                                        <span className='main-number'>$ 56.12</span>
                                    </IonRow>
                                    <IonRow className='ion-justify-content-between'>
                                        <span>{t('record.returned-amount')}</span>
                                        <span className='main-number'>$ 1234.12</span>
                                    </IonRow>
                                </IonCard>
                            </div>
                        </div>
                        <div className={styles.tabPart}>
                            <input type="radio" name="css-tabs" id="tab-3" className={styles.tabSwitch} />
                            <label htmlFor="tab-3" className={styles.tabLabel}>{t('record.status-freezing')}</label>
                            <div className={styles.tabContent}>
                                <IonGrid>
                                    <span>{t('record.account-amount')}:</span>
                                    <h2 className='main-number'>$ 1234.123</h2>
                                </IonGrid>
                                <IonCard className='main-radius ion-no-margin ion-padding'>
                                    <IonRow className='ion-justify-content-between'>
                                        <span>{date}</span>
                                        <span className={styles.recordStatus}>{t('record.status-freezing')}</span>
                                    </IonRow>
                                    <IonRow className={`ion-align-items-center ${styles.productInfo}`}>
                                        <IonCol size='3'>
                                            <IonImg src='/assets/images/record/product.png' alt='product' />
                                        </IonCol>
                                        <IonCol size='9'>
                                            <h6 className=''>Haier 15.6-inch narrow-bezel thin and light laptop</h6>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow className='ion-justify-content-between'>
                                        <span>{t('record.order-amount')}</span>
                                        <span className='main-number'>$ 1234.12</span>
                                    </IonRow>
                                    <IonRow className='ion-justify-content-between'>
                                        <span>{t('record.commission')}</span>
                                        <span className='main-number'>$ 56.12</span>
                                    </IonRow>
                                    <IonRow className='ion-justify-content-between'>
                                        <span>{t('record.returned-amount')}</span>
                                        <span className='main-number'>$ 1234.12</span>
                                    </IonRow>
                                </IonCard>
                                <IonCard className='main-radius ion-no-margin ion-padding'>
                                    <IonRow className='ion-justify-content-between'>
                                        <span>{date}</span>
                                        <span className={styles.recordStatus}>{t('record.status-freezing')}</span>
                                    </IonRow>
                                    <IonRow className={`ion-align-items-center ${styles.productInfo}`}>
                                        <IonCol size='3'>
                                            <IonImg src='/assets/images/record/product.png' alt='product' />
                                        </IonCol>
                                        <IonCol size='9'>
                                            <h6 className=''>Haier 15.6-inch narrow-bezel thin and light laptop</h6>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow className='ion-justify-content-between'>
                                        <span>{t('record.order-amount')}</span>
                                        <span className='main-number'>$ 1234.12</span>
                                    </IonRow>
                                    <IonRow className='ion-justify-content-between'>
                                        <span>{t('record.commission')}</span>
                                        <span className='main-number'>$ 56.12</span>
                                    </IonRow>
                                    <IonRow className='ion-justify-content-between'>
                                        <span>{t('record.returned-amount')}</span>
                                        <span className='main-number'>$ 1234.12</span>
                                    </IonRow>
                                </IonCard>
                            </div>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Record;