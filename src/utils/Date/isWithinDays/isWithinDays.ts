import moment from 'moment';

const isWithinDays = (date: string, allowedDifference: number) =>
  Math.abs(moment(date).diff(moment(), 'days')) <= allowedDifference;

export default isWithinDays;
