import { GoogleLogin } from "@react-oauth/google";
import { toast } from "./ui/use-toast";
import { useTranslation } from "react-i18next";

export default function LoginBtn () {
    const {t} = useTranslation();

    const onSuccess = (res) => {
        toast(t("login.success"));
        console.log("login success", res)
    };

    const onError = (res) => {
        toast(t("login.error"));
    };
    console.log("Google Client ID:", process.env.REACT_APP_GOOGLE_CLIENT_ID);
    return (
        <div>
            <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE.CLIENT.ID}
                buttonText="text"
                onSuccess={onSuccess}
                onError={onError}
                isSignedIn={true}
            />
        </div>
    )
}