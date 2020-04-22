import moment from 'moment';

const isToday = (date: string) => moment().isSame(moment(date), 'day');

export default isToday;
