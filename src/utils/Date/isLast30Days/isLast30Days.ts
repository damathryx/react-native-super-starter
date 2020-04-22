import moment from 'moment';

const isLast30Days = (date: string) =>
  moment(date).diff(moment(), 'days') <= 30;

export default isLast30Days;
