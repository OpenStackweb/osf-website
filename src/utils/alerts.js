import Swal from "sweetalert2";

import { doLogin } from 'openstack-uicore-foundation/lib/security/methods'
import URI from "urijs"


export const alertPopup = (title, html, confirmLabel, confirmAction, cancelLabel = 'Dismiss') => {
    Swal.fire({
            title,
            html,
            icon: 'question',
            iconHtml: '!',
            showCancelButton: true,
            cancelButtonText: cancelLabel,
            width: '400px',
            reverseButtons: true,
            customClass: {
                container: 'swal-wrapper',
                title: 'swal-title',
                icon: 'swal-icon',
                content: 'swal-body',
                confirmButton: 'swal-confirm',
                cancelButton: 'swal-cancel',
            }
        }
    ).then((result) => {
        if (result.value) {
            confirmAction();
        }
    })
};

export const needsLogin = (msg = null) => {
    const defaultMessage = "Please login in order to build your schedule and add activities during the event";

    const login = () => {
        let backUrl = window?.location?.href ?? '/a/profile';
        let encodedBackUrl = URI.encode(backUrl);
        return doLogin(encodedBackUrl);
    }

    alertPopup('Login', msg || defaultMessage, 'Login', login);
};
