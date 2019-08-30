import moment from "moment";
import "moment/locale/ru";
moment.locale("ru");

export const getUserFullName = user => `${user.lastName} ${user.firstName}`;

export const formatDate = date => moment(date).format("Do MMMM YYYY HH:mm");
