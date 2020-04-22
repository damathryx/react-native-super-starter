import moment from 'moment';

const isThisMonth = (date: string) => moment().isSame(moment(date), 'month');

export default isThisMonth;
