import { useFormInput } from "./utils";
import { useTranslation } from "react-i18next";


export const useSignupFields = () => {
    const { t, i18n } = useTranslation('lang');

    return [
        {
            id: "username",
            label: "",
            required: true,
            input: {

                props: {

                    type: "text",
                    placeholder: t('signup.username')
                },
                state: useFormInput("")
            }
        },
        {
            id: "telephone",
            label: "",
            required: true,
            input: {

                props: {

                    type: "",
                    placeholder: t('signup.phone'),
                    pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}"
                },
                state: useFormInput("")
            }
        },
        {
            id: "create-password",
            label: "",
            required: true,
            input: {

                props: {

                    type: "password",
                    placeholder: t('signup.password')
                },
                state: useFormInput("")
            }
        },
        {
            id: "confirm-password",
            label: "",
            required: true,
            input: {

                props: {

                    type: "password",
                    placeholder: t('signup.cpassword')
                },
                state: useFormInput("")
            }
        },
        {
            id: "invite-code",
            label: "",
            required: false,
            input: {

                props: {

                    type: "text",
                    placeholder: t('signup.invitation')
                },
                state: useFormInput("")
            }
        }
    ];
}

export const useLoginFields = () => {
    const { t, i18n } = useTranslation('lang');

    return [

        {
            id: "telephone",
            label: "",
            required: true,
            input: {

                props: {
                    type: "tel",
                    placeholder: t('login.account'),
                    pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}"
                },
                state: useFormInput("")
            }
        },
        {
            id: "password",
            label: "",
            required: true,
            input: {

                props: {
                    type: "password",
                    placeholder: t('signup.password')
                },
                state: useFormInput("")
            }
        }
    ];
}

export const useConfirmFields = () => {
    const { t, i18n } = useTranslation('lang');

    return [

        {
            id: "old-passowrd",
            label: "",
            required: true,
            input: {

                props: {
                    type: "password",
                    placeholder: t('forgot.oldpwd'),
                },
                state: useFormInput("")
            }
        },
        {
            id: "new-password",
            label: "",
            required: true,
            input: {

                props: {
                    type: "password",
                    placeholder: t('forgot.newpwd')
                },
                state: useFormInput("")
            }
        },
        {
            id: "confirm-password",
            label: "",
            required: true,
            input: {

                props: {
                    type: "password",
                    placeholder: t('forgot.confirmpwd')
                },
                state: useFormInput("")
            }
        }
    ];
}

export const ShippingAddress = () => {
    const { t, i18n } = useTranslation('lang');

    return [

        {
            id: t('shipping.actual-name'),
            label: t('shipping.id-info'),
            required: true,
            input: {

                props: {
                    type: "text",
                    placeholder: t('shipping.actual-name'),
                },
                state: useFormInput("")
            }
        },
        {
            id: t('shipping.contact-details'),
            label: "",
            required: true,
            input: {

                props: {
                    type: "text",
                    placeholder: t('shipping.contact-details')
                },
                state: useFormInput("")
            }
        },
        {
            id: t('shipping.area'),
            label: t('shipping.add-info'),
            required: true,
            input: {

                props: {
                    type: "text",
                    placeholder: t('shipping.area')
                },
                state: useFormInput("")
            }
        },
        {
            id: t('shipping.address'),
            label: "",
            required: true,
            input: {

                props: {
                    type: "text",
                    placeholder: t('shipping.address')
                },
                state: useFormInput("")
            }
        }
    ];
}

export const BindBank = () => {
    const { t, i18n } = useTranslation('lang');

    return [

        {
            id: t('bank.actual-name'),
            label: t('bank.id-info'),
            required: true,
            input: {

                props: {
                    type: "text",
                    placeholder: t('bank.actual-name'),
                },
                state: useFormInput("")
            }
        },
        {
            id: t('bank.contact-details'),
            label: "",
            required: true,
            input: {

                props: {
                    type: "text",
                    placeholder: t('bank.contact-details')
                },
                state: useFormInput("")
            }
        },
        {
            id: t('bank.bank-name'),
            label: t('bank.card-info'),
            required: true,
            input: {

                props: {
                    type: "text",
                    placeholder: t('bank.bank-name')
                },
                state: useFormInput("")
            }
        },
        {
            id: "Wallet address",
            label: "",
            required: true,
            input: {

                props: {
                    type: "text",
                    placeholder: t('bank.wallet-address')
                },
                state: useFormInput("")
            }
        },
        {
            id: t('bank.email'),
            label: t('bank.other-info'),
            required: true,
            input: {

                props: {
                    type: "text",
                    placeholder: t('bank.email')
                },
                state: useFormInput("")
            }
        }
    ];
}

export const WithdrawField = () => {
    const { t, i18n } = useTranslation('lang');

    return [

        {
            id: "withdraw amount",
            label: t('withdraw.withdraw-amount'),
            required: true,
            input: {

                props: {
                    type: "text",
                    placeholder: t('withdraw.input'),
                },
                state: useFormInput("")
            }
        }
    ];
}

export const useLanguageBox = () => {
    const url = "/assets/flags/"

    return [
        {
            id: "en",
            label: "English",
            img: {
                props: {
                    src: url + "us.png",
                },
            }
        },
        {
            id: "ch",
            label: "简体中文",
            img: {
                props: {
                    src: url + "china.png",
                },
            }
        },
        {
            id: "id",
            label: "Bhs Indonesia",
            img: {
                props: {
                    src: url + "indo.png",
                },
            }
        },
        {
            id: "kh",
            label: "ខ្មែរ",
            img: {
                props: {
                    src: url + "khmer.png",
                },
            }
        },
        {
            id: "tw",
            label: "Tiếng Việt",
            img: {
                props: {
                    src: url + "taiwan.png",
                },
            }
        },
        {
            id: "jp",
            label: "日本語",
            img: {
                props: {
                    src: url + "japan.png",
                },
            }
        },

    ];
}