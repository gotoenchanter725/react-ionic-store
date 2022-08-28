import { IonButtons, IonBackButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonToolbar, IonFooter, IonTitle } from '@ionic/react';
import styles from './Language.module.scss';

import LanguageButton from '../../components/language/LanguageButton';
import { chevronBackOutline } from "ionicons/icons";
import { useLanguageBox } from '../../data/fields';
import { useEffect } from 'react';
import { useParams } from 'react-router';

import { useTranslation } from "react-i18next";


const Language = () => {
    const { t, i18n } = useTranslation('lang');
    const params = useParams();
    const fields = useLanguageBox();

    useEffect(() => {
        return () => {
            fields.forEach(field => field.img);
        }
    }, [params]);

    return (
        <IonPage className={styles.languagePage}>
            <IonHeader>
                <IonToolbar>
                    <IonRow className='ion-justify-content-between ion-align-items-center'>
                        <IonCol size='2'>
                            <IonButtons>
                                <IonBackButton icon={chevronBackOutline} text="" className="custom-back ion-no-padding ion-no-margin" />
                            </IonButtons>
                        </IonCol>
                        <IonCol size='8'>
                            <h4 className='main-title ion-text-center ion-no-margin'>{t('language.title')}</h4>
                        </IonCol>
                        <IonCol size='2'>

                        </IonCol>
                    </IonRow>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className='ion-padding'>
                <IonGrid>
                    <IonRow>
                        <IonCol size="12">
                            {fields.map((field, index) => {
                                return <LanguageButton field={field} key={index} />;
                            })}
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

export default Language;