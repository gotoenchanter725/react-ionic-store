import axios from 'axios';
import styles from './Password.module.scss';

import { IonButton, IonButtons, IonBackButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonToolbar, IonFooter, IonTitle } from '@ionic/react';
import SignupField from '../../components/signup/SignupField';
import { chevronBackOutline } from "ionicons/icons";
import { useConfirmFields } from '../../data/fields';
import { useEffect, useState } from 'react';
import { validateForm } from '../../data/utils';
import { useParams } from 'react-router';
import { useIonRouter } from "@ionic/react";

import { useTranslation } from "react-i18next";

import { passwordModify } from '../../utils/api';

const Password = () => {
    const { t, i18n } = useTranslation('lang');
    const router = useIonRouter();
    const params = useParams();
    const fields = useConfirmFields();
    const [errors, setErrors] = useState(false);

    const confirmPassword = () => {

        let errors = validateForm(fields);
        if (fields.filter(e => e.id === 'new-password')[0].input.state.value != fields.filter(e => e.id === 'confirm-password')[0].input.state.value) {
            console.log(errors);
            if (errors.filter(item => item.id === 'confirm-password').length) {
                setErrors(errors.map(item => {
                    if (item.id === 'confirm-password') return {
                        ...item,
                        message: t('forgot.confirmpwd')
                    }
                    else return item;
                }));
            } else {
                errors = [...errors, { id: 'confirm-password', message: t('forgot.confirmpwd') }];
                setErrors([
                    ...errors, { id: 'confirm-password', message: t('forgot.confirmpwd') }
                ])
            }

        } else setErrors(errors);

        if (!errors.length) {
            var data = {
                memberId: 1, //varuable
                oldPassword: fields[0].input.state.value,
                password: fields[1].input.state.value,
            };
            // console.log(data);
            passwordModify(data).then((response) => {
                // console.log(response);
                if (response.code == 200) {
                    router.push("/home");
                }
            })
        }
    }

    useEffect(() => {
        return () => {
            fields.forEach(field => field.input.state.reset(""));
            setErrors(false);
        }
    }, [params]);

    return (
        <IonPage className={styles.forgotPage}>
            <IonHeader>
                <IonToolbar>
                    <IonRow className='ion-justify-content-between ion-align-items-center'>
                        <IonCol size='2'>
                            <IonButtons>
                                <IonBackButton icon={chevronBackOutline} text="" className="custom-back ion-no-padding ion-no-margin" />
                            </IonButtons>
                        </IonCol>
                        <IonCol size='8'>
                            <h4 className='main-title ion-text-center ion-no-margin'>{t('forgot.title')}</h4>
                        </IonCol>
                        <IonCol size='2'>

                        </IonCol>
                    </IonRow>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className='ion-padding'>
                <IonGrid className="ion-padding">
                    <IonRow className="ion-margin-top ion-padding-top">
                        <IonCol size="12">
                            {fields.map((field, index) => {
                                return <SignupField field={field} errors={errors} key={index} />;
                            })}
                            <IonButton className="custom-button ion-padding-top ion-margin-bottom" expand="block" onClick={confirmPassword}>{t('forgot.button')}</IonButton>
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

export default Password;