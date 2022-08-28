import { IonButton, IonButtons, IonTitle, IonBackButton, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRouterLink, IonRow, IonToolbar, IonFooter } from '@ionic/react';
import styles from './Withdraw.module.scss';

import SignupField from '../../components/signup/SignupField';
import { chevronBackOutline } from "ionicons/icons";
import { WithdrawField } from '../../data/fields';
import { useEffect, useState } from 'react';
import { validateForm } from '../../data/utils';
import { useParams } from 'react-router';
import { useIonRouter } from "@ionic/react";

import { useTranslation } from "react-i18next";


const Withdraw = () => {
    const { t, i18n } = useTranslation('lang');
    const router = useIonRouter();
    const params = useParams();
    const fields = WithdrawField();
    const [errors, setErrors] = useState(false);

    const withdrawAction = () => {

        const errors = validateForm(fields);
        setErrors(errors);

        if (!errors.length) {
            router.push("/login");
            //  Submit your form here
        }
    }

    useEffect(() => {
        return () => {
            fields.forEach(field => field.input.state.reset(""));
            setErrors(false);
        }
    }, [params]);

    return (
        <IonPage className={styles.withdrawPage}>
            <IonHeader>
                <IonToolbar>
                    <IonRow className='ion-justify-content-between ion-align-items-center'>
                        <IonCol size='2'>
                            <IonButtons>
                                <IonBackButton icon={chevronBackOutline} text="" className="custom-back ion-no-padding ion-no-margin" />
                            </IonButtons>
                        </IonCol>
                        <IonCol size='8'>
                            <h4 className='main-title ion-text-center ion-no-margin'>{t('withdraw.title')}</h4>
                        </IonCol>
                        <IonCol size='2'>

                        </IonCol>
                    </IonRow>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className='ion-padding'>
                <IonCard className='ion-padding main-radius'>
                    <span className='text-white'>{t('withdraw.avaliable-amount')}:</span>
                    <h2 className='ion-text-center main-number text-white'>$ 12345.12</h2>
                    <p className='text-white'>
                        <span>{t('withdraw.acc-name')}: </span>
                        <span>123456778</span>
                    </p>
                    <p className='text-white'>
                        <span>{t('withdraw.phone')}: </span>
                        <span>123456778</span>
                    </p>
                    <p>
                        * {t('withdraw.comment')}
                    </p>

                </IonCard>
                <IonGrid className="ion-padding">
                    <IonRow>
                        <IonCol size="12">
                            {fields.map((field, index)  => {
                                return <SignupField field={field} errors={errors} />;
                            })}
                            <IonButton className="custom-button ion-padding-top ion-margin-bottom" expand="block" onClick={withdrawAction}>{t('withdraw.title')}</IonButton>
                        </IonCol>
                    </IonRow>
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

export default Withdraw;