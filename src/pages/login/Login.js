import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonPage, IonRouterLink, IonRow, IonToolbar } from '@ionic/react';
import styles from './Login.module.scss';

import { arrowBack, globeOutline } from "ionicons/icons";
import LoginField from '../../components/login/LoginField';
import { useLoginFields } from '../../data/fields';
import { useEffect, useState } from 'react';
import { validateForm } from '../../data/utils';
import { useParams } from 'react-router';
import { useIonRouter } from "@ionic/react";

import { useTranslation } from "react-i18next";

import { userLogin } from '../../utils/api';

const Login = () => {
    const { t, i18n } = useTranslation('lang');

    const router = useIonRouter();
    const params = useParams();

    const fields = useLoginFields();
    const [errors, setErrors] = useState(false);

    const login = () => {

        const errors = validateForm(fields);
        setErrors(errors);

        if (!errors.length) {
            var data = {
                loginType: 1, 
                areaCode: '1', 
                loginName: fields[0].input.state.value, 
                password: fields[1].input.state.value, 
                channelId: 0
            };
            // console.log(data);
            userLogin(data, (response) => {
                // console.log(response);
                if (response.code == 200) {
                    router.push("/app/home");
                }
            });
        }
    }

    useEffect(() => {

        return () => {

            fields.forEach(field => field.input.state.reset(""));
            setErrors(false);
        }
    }, [params]);

    return (
        <IonPage className={styles.loginPage}>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                    </IonButtons>

                    <IonButtons slot="end">
                        <IonRouterLink routerLink='/language'>
                            <IonButton className="custom-button">
                                <IonIcon icon={globeOutline} />
                            </IonButton>
                        </IonRouterLink>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className='ion-padding'>
                <IonGrid className="ion-padding">
                    <IonRow className='ion-justify-content-center ion-padding-top'>
                        <IonImg src="/assets/images/app-logo2.png" />
                    </IonRow>

                    <IonRow className="ion-margin-top ion-padding-top">
                        <IonCol size="12" className="ion-margin-top ion-padding-top">

                            {fields.map((field, index) => {

                                return <LoginField className={styles.loginCustomInput} field={field} errors={errors} key={index} />;
                            })}

                            <IonRow className={`ion-padding-bottom ion-padding-start ion-padding-end ion-justify-content-between ${styles.loginCustomRow}`}>
                                <IonCol>
                                    <div className={styles.loginFormGroup}>
                                        <input type="checkbox" id="html" />
                                        <label htmlFor="html">{t('login.remember')}</label>
                                    </div>
                                </IonCol>
                                <IonCol className='ion-text-right'>
                                    <IonRouterLink routerLink='/password'>
                                        {t('login.forgot')}
                                    </IonRouterLink>
                                </IonCol>
                            </IonRow>

                            <IonButton className='ion-margin-top ion-margin-bottom' expand="block" onClick={login}>{t('login.login')}</IonButton>

                            <IonRow className='ion-justify-content-center'>
                                <IonRouterLink routerLink='/signup' className={styles.goToSignup}>
                                    <p>
                                        {t('login.register')}
                                    </p>
                                </IonRouterLink>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Login;