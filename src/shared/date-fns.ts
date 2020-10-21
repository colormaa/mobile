export function addDays(date: Date, days: number) {
  // https://stackoverflow.com/questions/563406/add-days-to-javascript-date
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function hoursSinceEpoch(date: Date) {
  return date.getTime() / (1000 * 3600);
}

export function periodSinceEpoch(date: Date, hoursPerPeriod: number) {
  return Math.floor(date.getTime() / (1000 * 3600 * hoursPerPeriod));
}

export function daysFromNow(date: Date) {
  // todo: remove when LastCheckedDisplay is removed
  const currentTime = Date.now();
  const oneDayMs = 1000 * 60 * 60 * 24;
  return Math.round((currentTime - date.getTime()) / oneDayMs);
}

export function hoursFromNow(date: Date) {
  const currentTime = Date.now();
  const oneHourMs = 1000 * 60 * 60;
  return Math.round((currentTime - date.getTime()) / oneHourMs);
}

export function minutesFromNow(date: Date) {
  const currentTime = Date.now();
  const oneMinuteMs = 1000 * 60;
  return Math.round((currentTime - date.getTime()) / oneMinuteMs);
}

export function minutesBetween(date1: Date, date2: Date): number {
  const oneMinuteMs = 1000 * 60;
  return (date2.getTime() - date1.getTime()) / oneMinuteMs;
}

export function daysBetween(date1: Date, date2: Date): number {
  const startDate1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const startDate2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
  return (startDate2.getTime() - startDate1.getTime()) / (1000 * 3600 * 24);
}

export function daysBetweenUTC(date1: Date, date2: Date): number {
  const startDate1 = new Date(date1.getUTCFullYear(), date1.getUTCMonth(), date1.getUTCDate());
  const startDate2 = new Date(date2.getUTCFullYear(), date2.getUTCMonth(), date2.getUTCDate());
  return (startDate2.getTime() - startDate1.getTime()) / (1000 * 3600 * 24);
}

export function getCurrentDate(): Date {
  return new Date('2020-10-23');
}

export function getMillisSinceUTCEpoch() {
  return getCurrentDate().getTime();
}

export function getUploadDaysLeft(cycleEndsAt: number) {
  // cycleEndsAt = cycleEndsAtDate.getTime();
  const uploadDaysLeft = Math.round(daysBetween(getCurrentDate(), new Date(cycleEndsAt))) - 1;
  if (uploadDaysLeft < 0) {
    return 0;
  }
  return uploadDaysLeft;
}
