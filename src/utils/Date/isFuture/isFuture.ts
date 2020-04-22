import moment from 'moment';

const isFuture = (date: string) => moment(date).isAfter(moment());

export default isFuture;
