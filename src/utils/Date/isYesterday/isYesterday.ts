import moment from 'moment';

const isYesterday = (date: string) =>
  moment()
    .subtract(1, 'days')
    .startOf('day')
    .isSame(moment(date), 'week');

export default isYesterday;
