import React from "react";

import ModalDialog from "../../../common/ModalDialog";
import SignInForm from "../SignInForm";

const SignInModal = ({ modal, form }) => (
    <ModalDialog {...modal}>
        <SignInForm {...form} />
    </ModalDialog>
);

export default SignInModal;
