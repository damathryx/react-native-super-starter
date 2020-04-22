import moment from 'moment';

const isLive = (startDate: string, endDate: string) =>
  moment().isBetween(moment(startDate), moment(endDate));

export default isLive;
