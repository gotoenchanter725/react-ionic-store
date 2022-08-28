import { IonButton, IonButtons, IonTitle, IonBackButton, IonImg, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRouterLink, IonRow, IonToolbar, IonFooter } from '@ionic/react';
import styles from './Shipping.module.scss';

import SignupField from '../../components/signup/SignupField';
import { chevronBackOutline } from "ionicons/icons";
import { ShippingAddress } from '../../data/fields';
import { useEffect, useState } from 'react';
import { validateForm } from '../../data/utils';
import { useParams } from 'react-router';
import { useIonRouter } from "@ionic/react";

import { useTranslation } from "react-i18next";


const Shipping = () => {
    const { t, i18n } = useTranslation('lang');
    const router = useIonRouter();
    const params = useParams();
    const fields = ShippingAddress();
    const [errors, setErrors] = useState(false);

    const changeAddress = () => {

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
        <IonPage className={styles.signupPage}>
            <IonHeader>
                <IonToolbar>
                    <IonRow className='ion-justify-content-between ion-align-items-center'>
                        <IonCol size='2'>
                            <IonButtons>
                                <IonBackButton icon={chevronBackOutline} text="" className="custom-back ion-no-padding ion-no-margin" />
                            </IonButtons>
                        </IonCol>
                        <IonCol size='8'>
                            <h4 className='main-title ion-text-center ion-no-margin'>{t('shipping.title')}</h4>
                        </IonCol>
                        <IonCol size='2'>

                        </IonCol>
                    </IonRow>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className='ion-padding'>
                <IonGrid className="ion-padding">
                    <IonRow>
                        <IonCol size="12">
                            {fields.map((field, index)  => {
                                return <SignupField field={field} errors={errors} />;
                            })}
                            <IonRow className={`ion-justify-content-between ion-padding-top ${styles.setAddress}`}>
                                <span>{t('shipping.common-add')}</span>
                                <label className={`${styles.togglerWrapper} ${styles.customCheck}`}>
                                    <input type="checkbox" />
                                    <div className={styles.togglerSlider}>
                                        <div className={styles.togglerKnob}></div>
                                    </div>
                                </label>
                            </IonRow>
                            <IonButton className="custom-button ion-padding-top ion-margin-bottom" expand="block" onClick={changeAddress}>{t('shipping.confirm')}</IonButton>
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

export default Shipping;