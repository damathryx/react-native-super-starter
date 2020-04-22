import moment from 'moment';

const isThisYear = (date: string) => moment().isSame(moment(date), 'year');

export default isThisYear;
