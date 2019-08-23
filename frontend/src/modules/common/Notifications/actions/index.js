import { createAction } from 'redux-actions';

export const successNotification = createAction('SUCCESS_NOTIFICATION');
export const errorNotification = createAction('ERROR_NOTIFICATION');

export const removeNotification = createAction('REMOVE_NOTIFICATION');
export const removeAllNotifications = createAction('REMOVE_ALL_NOTIFICATIONS');