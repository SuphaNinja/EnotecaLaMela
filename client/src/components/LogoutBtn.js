import { googleLogout } from "@react-oauth/google";
import { toast } from "./ui/use-toast";
import { useTranslation } from "react-i18next";

export default function LogoutBtn () {
    const { t } = useTranslation();

    const onSuccess = (res) => {
        toast(t("logout.success"));
    };

    const onError = (res) => {
        toast(t("logout.error"));
    };

    return (
        <div>
            <googleLogout
                clientId={process.env.GOOGLE.CLIENT.ID}
                buttonText="text"
                onSuccess={onSuccess}
                onError={onError}
            />
        </div>
    )
}