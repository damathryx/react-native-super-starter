import moment from 'moment';

const isPast = (date: string) => moment(date).diff(moment(), 'days') <= 0;

export default isPast;
