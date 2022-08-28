import { IonRow, IonLabel, IonImg } from "@ionic/react";
import styles from "./LanguageButton.module.scss";
import { useTranslation } from "react-i18next";

const LanguageButton = ({ field }) => {
    const { t, i18n } = useTranslation('lang');

    return (
        <div className={styles.languageBox} onClick={() => i18n.changeLanguage(field.id)}>
            <IonRow className="ion-align-items-center">
                <IonImg src={field.img.props.src} alt="flags" />
                <IonLabel>{field.label}</IonLabel>
            </IonRow>
        </div>
    );
};

export default LanguageButton;