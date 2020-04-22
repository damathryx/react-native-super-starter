import moment from 'moment';

const isThisWeek = (date: string) => moment().isSame(moment(date), 'week');

export default isThisWeek;
