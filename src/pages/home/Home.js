import styles from './Home.module.scss';

import { IonCol, IonContent, IonCard, IonImg, IonGrid, IonPage, IonRow, IonTitle, IonSlides, IonSlide } from '@ionic/react';

import { useTranslation } from "react-i18next";
import HomeSlider1 from '../../components/home-slider/HomeSlider1';

const Home = () => {
    const { t, i18n } = useTranslation('lang');

    return (
        <IonPage className={styles.homePage}>
            <IonContent fullscreen >
                <IonGrid className={`ion-no-padding ${styles.homeBrandBackground}`}>
                    <IonGrid className={`ion-padding-bottom ${styles.homeBrand}`}>
                        <IonRow className='ion-justify-content-center ion-align-items-center ion-padding'>
                            <h4 className='main-title ion-text-center  ion-no-margin'>{t('home.title')}</h4>
                        </IonRow>
                        <IonRow>
                            <HomeSlider1 />
                        </IonRow>
                        <IonCard className={`ion-padding ${styles.brandCard}`}>
                            <IonRow className='ion-justify-content-between ion-align-items-center ion-padding-start ion-padding-end'>
                                <IonCol size='6'>
                                    <span>{t('home.mybalance')}:</span>
                                    <h2 className={`main-number ${styles.balanceAmount}`}>$ 1231.34</h2>
                                </IonCol>
                                <IonImg src="/assets/images/home/14@2x.png" />
                            </IonRow>
                        </IonCard>
                        <IonRow className={`ion-justify-content-center ion-margin-top ion-padding-top ion-margin-bottom ${styles.imageText}`}>
                            <div className='ion-text-center'>
                                <IonImg src="/assets/images/home/11.png" />
                                <span>{t('home.coincharge')}</span>
                            </div>
                            <div>
                                <IonImg src="/assets/images/home/12.png" />
                                <span>{t('home.cashwithdraw')}</span>
                            </div>
                            <div>
                                <IonImg src="/assets/images/home/13.png" />
                                <span>{t('home.promotion')}</span>
                            </div>
                            <div>
                                <IonImg src="/assets/images/home/14.png" />
                                <span>{t('home.invite')}</span>
                            </div>
                        </IonRow>
                    </IonGrid>
                </IonGrid>
                <IonRow className={`main-padding ion-margin-top ion-margin-bottom ${styles.homeCardGroup}`}>
                    <IonCol size='6'>
                        <IonCard className='ion-text-center ion-padding ion-no-margin'>
                            <span>
                                {t('home.commisiontoday')}
                            </span>
                            <h5 className='main-number'>$ 1234.12</h5>
                        </IonCard>
                    </IonCol>
                    <IonCol size='6'>
                        <IonCard class='ion-text-center ion-padding ion-no-margin'>
                            <span>
                                {t('home.totalrevenue')}
                            </span>
                            <h5 className='main-number'>$ 1234.12</h5>
                        </IonCard>
                    </IonCol>
                </IonRow>
                <IonGrid className={`main-padding ${styles.membershipLevelSection}`}>
                    <IonRow class={`ion-align-items-center ${styles.sectionTitle}`}>
                        <div></div>
                        <span className='main-padding'>{t('home.membership-level.title')}</span>
                    </IonRow>
                    <IonGrid>
                        <IonCard className={`ion-padding ion-no-margin ${styles.membershipCard}`}>
                            <IonRow className='ion-justify-content-between ion-align-items-start'>
                                <IonCol size='9'>
                                    <IonRow className='ion-align-items-center'>
                                        <IonImg src="/assets/images/home/01@2x.png" />
                                        <div>
                                            <h4>{t('home.membership-level.ordinary-member')}</h4>
                                            <p>{t('home.membership-level.min-balance')} $ 200.00</p>
                                            <p>{t('home.membership-level.commission')} 0.4 | 60 {t('home.membership-level.orders')}</p>
                                        </div>
                                    </IonRow>
                                </IonCol>
                                <span>
                                    {t('home.membership-level.current-level')}
                                </span>
                            </IonRow>
                        </IonCard>
                        <IonCard className={`ion-padding ion-no-margin ${styles.membershipCard}`}>
                            <IonRow className='ion-justify-content-between ion-align-items-start'>
                                <IonCol size='9'>
                                    <IonRow className='ion-align-items-center'>
                                        <IonImg src="/assets/images/home/02@2x.png" />
                                        <div>
                                            <h4>{t('home.membership-level.silver-member')}</h4>
                                            <p>{t('home.membership-level.min-balance')} $ 200.00</p>
                                            <p>{t('home.membership-level.commission')} 0.4 | 60 {t('home.membership-level.orders')}</p>
                                        </div>
                                    </IonRow>
                                </IonCol>
                                <span>
                                    {t('home.membership-level.join')}
                                </span>
                            </IonRow>
                        </IonCard>
                        <IonCard className={`ion-padding ion-no-margin ${styles.membershipCard}`}>
                            <IonRow className='ion-justify-content-between ion-align-items-start'>
                                <IonCol size='9'>
                                    <IonRow className='ion-align-items-center'>
                                        <IonImg src="/assets/images/home/03@2x.png" />
                                        <div>
                                            <h4>{t('home.membership-level.gold-member')}</h4>
                                            <p>{t('home.membership-level.min-balance')} $ 200.00</p>
                                            <p>{t('home.membership-level.commission')} 0.4 | 60 {t('home.membership-level.orders')}</p>
                                        </div>
                                    </IonRow>
                                </IonCol>
                                <span>
                                    {t('home.membership-level.join')}
                                </span>
                            </IonRow>
                        </IonCard>
                        <IonCard className={`ion-padding ion-no-margin ${styles.membershipCard}`}>
                            <IonRow className='ion-justify-content-between ion-align-items-start'>
                                <IonCol size='9'>
                                    <IonRow className='ion-align-items-center'>
                                        <IonImg src="/assets/images/home/04@2x.png" />
                                        <div>
                                            <h4>{t('home.membership-level.crown-member')}</h4>
                                            <p>{t('home.membership-level.min-balance')} $ 200.00</p>
                                            <p>{t('home.membership-level.commission')} 0.4 | 60 {t('home.membership-level.orders')}</p>
                                        </div>
                                    </IonRow>
                                </IonCol>
                                <span>
                                    {t('home.membership-level.join')}
                                </span>
                            </IonRow>
                        </IonCard>
                    </IonGrid>
                </IonGrid>
                <IonGrid className={`main-padding ${styles.membershipIncommeSection}`}>
                    <IonRow class={`ion-align-items-center ${styles.sectionTitle}`}>
                        <div></div>
                        <span className='main-padding'>{t('home.membership-income.title')}</span>
                    </IonRow>
                    <IonGrid>
                        <IonRow className={`ion-align-items-center ${styles.incomeItem}`}>
                            <IonImg src='/assets/images/home/avatar.png' alt='avatar' />
                            <span className={`ion-padding-end ${styles.incomeUserName}`}>BigStar</span>
                            <span>{t('home.membership-income.amount')}: </span>
                            <h6 className={`main-number ${styles.incomeAmount}`}> $ 1235.12</h6>
                        </IonRow>
                        <IonRow className={`ion-align-items-center ${styles.incomeItem}`}>
                            <IonImg src='/assets/images/home/avatar.png' alt='avatar' />
                            <span className={`ion-padding-end ${styles.incomeUserName}`}>BigStar</span>
                            <span>{t('home.membership-income.amount')}: </span>
                            <h6 className={`main-number ${styles.incomeAmount}`}> $ 1235.12</h6>
                        </IonRow>
                        <IonRow className={`ion-align-items-center ${styles.incomeItem}`}>
                            <IonImg src='/assets/images/home/avatar.png' alt='avatar' />
                            <span className={`ion-padding-end ${styles.incomeUserName}`}>BigStar</span>
                            <span>{t('home.membership-income.amount')}: </span>
                            <h6 className={`main-number ${styles.incomeAmount}`}> $ 1235.12</h6>
                        </IonRow>
                        <IonRow className={`ion-align-items-center ${styles.incomeItem}`}>
                            <IonImg src='/assets/images/home/avatar.png' alt='avatar' />
                            <span className={`ion-padding-end ${styles.incomeUserName}`}>BigStar</span>
                            <span>{t('home.membership-income.amount')}: </span>
                            <h6 className={`main-number ${styles.incomeAmount}`}> $ 1235.12</h6>
                        </IonRow>
                        <IonRow className={`ion-align-items-center ${styles.incomeItem}`}>
                            <IonImg src='/assets/images/home/avatar.png' alt='avatar' />
                            <span className={`ion-padding-end ${styles.incomeUserName}`}>BigStar</span>
                            <span>{t('home.membership-income.amount')}: </span>
                            <h6 className={`main-number ${styles.incomeAmount}`}> $ 1235.12</h6>
                        </IonRow>
                        <IonRow className={`ion-align-items-center ${styles.incomeItem}`}>
                            <IonImg src='/assets/images/home/avatar.png' alt='avatar' />
                            <span className={`ion-padding-end ${styles.incomeUserName}`}>BigStar</span>
                            <span>{t('home.membership-income.amount')}: </span>
                            <h6 className={`main-number ${styles.incomeAmount}`}> $ 1235.12</h6>
                        </IonRow>
                    </IonGrid>
                </IonGrid>
                <IonGrid className={`ion-no-padding ion-margin-top ${styles.homeBottomBackground}`}>
                    <IonGrid className={`ion-padding-top ion-padding-bottom ${styles.homeIntroduction}`}>
                        <IonGrid className={styles.accordionBox}>
                            <IonRow class={`ion-align-items-center ${styles.sectionTitle}`}>
                                <div></div>
                                <span className='main-padding'>{t('home.introduction.title')}</span>
                            </IonRow>
                            <ul className={styles.homeAccordionBox}>
                                <li>
                                    <input type="checkbox" defaultChecked />
                                    <i></i>
                                    <h2>{t('home.introduction.company-profile')}</h2>
                                    <p><br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae debitis iusto voluptatum doloribus rem, qui nesciunt labore tempore fugit iste deserunt incidunt error provident repudiandae laudantium quo ipsa unde perspiciatis, nihil autem distinctio! Deserunt, aspernatur.<br /></p>
                                </li>
                                <li>
                                    <input type="checkbox" defaultChecked />
                                    <i></i>
                                    <h2>{t('home.introduction.rules-description')}</h2>
                                    <p><br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quasi, quia provident facere recusandae itaque assumenda fuga veniam dicta earum dolorem architecto facilis nisi pariatur.<br /></p>
                                </li>
                                <li>
                                    <input type="checkbox" defaultChecked />
                                    <i></i>
                                    <h2>{t('home.introduction.agency-cooperation')}</h2>
                                    <p><br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quas placeat assumenda mollitia magni consequatur dolorum, quod nihil distinctio aperiam officia alias! Voluptate dolore ex officiis sit, magnam non a, eligendi pariatur aut, earum dolores tenetur ipsam id illo deleniti. Laudantium deserunt eaque ipsam voluptatum consequuntur voluptatibus sed minima ad accusamus debitis eos similique laboriosam, molestiae? Consequatur neque tempore quis. Eligendi, in ut aspernatur esse nesciunt libero.<br /></p>
                                </li>
                                <li>
                                    <input type="checkbox" defaultChecked />
                                    <i></i>
                                    <h2>{t('home.introduction.company-qualification')}</h2>
                                    <p><br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quas placeat assumenda mollitia magni consequatur dolorum, quod nihil distinctio aperiam officia alias! Voluptate dolore ex officiis sit, magnam non a, eligendi pariatur aut, earum dolores tenetur ipsam id illo deleniti. Laudantium deserunt eaque ipsam voluptatum consequuntur voluptatibus sed minima ad accusamus debitis eos similique laboriosam, molestiae? Consequatur neque tempore quis. Eligendi, in ut aspernatur esse nesciunt libero.<br /></p>
                                </li>
                                <li>
                                    <input type="checkbox" defaultChecked />
                                    <i></i>
                                    <h2>{t('home.introduction.limit-money-laundering')}</h2>
                                    <p><br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quas placeat assumenda mollitia magni consequatur dolorum, quod nihil distinctio aperiam officia alias! Voluptate dolore ex officiis sit, magnam non a, eligendi pariatur aut, earum dolores tenetur ipsam id illo deleniti. Laudantium deserunt eaque ipsam voluptatum consequuntur voluptatibus sed minima ad accusamus debitis eos similique laboriosam, molestiae? Consequatur neque tempore quis. Eligendi, in ut aspernatur esse nesciunt libero.<br /></p>
                                </li>
                            </ul>
                        </IonGrid>
                        <IonGrid className={styles.homePatners}>
                            <IonRow class={`ion-align-items-center ${styles.sectionTitle}`}>
                                <div></div>
                                <span className='main-padding'>{t('home.partner')}</span>
                            </IonRow>
                            <IonRow className='ion-align-items-center'>
                                <IonCol size='4'>
                                    <IonImg src='/assets/images/home/b@2x.png' alt='partner-img' />
                                </IonCol>
                                <IonCol size='4'>
                                    <IonImg src='/assets/images/home/a@2x.png' alt='partner-img' />
                                </IonCol>
                                <IonCol size='4'>
                                    <IonImg src='/assets/images/home/c@2x.png' alt='partner-img' />
                                </IonCol>
                                <IonCol size='4'>
                                    <IonImg src='/assets/images/home/e@2x.png' alt='partner-img' />
                                </IonCol>
                                <IonCol size='4'>
                                    <IonImg src='/assets/images/home/f@2x.png' alt='partner-img' />
                                </IonCol>
                                <IonCol size='4'>
                                    <IonImg src='/assets/images/home/g@2x.png' alt='partner-img' />
                                </IonCol>
                                <IonCol size='4'>
                                    <IonImg src='/assets/images/home/d@2x.png' alt='partner-img' />
                                </IonCol>
                                <IonCol size='4'>
                                    <IonImg src='/assets/images/home/h@2x.png' alt='partner-img' />
                                </IonCol>
                                <IonCol size='4'>
                                    <IonImg src='/assets/images/home/i@2x.png' alt='partner-img' />
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonGrid>
                </IonGrid>
            </IonContent>
        </IonPage >
    );
};

export default Home;