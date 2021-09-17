
export type TimeOfDayLabel = 'morning' | 'afternoon' | 'evening' | 'night';

const getTimeLabelFromSunset = (sunset: number) => {
  const hour = new Date().getHours();
  const hoursUntilSunset = (new Date(sunset).getHours()) - hour;
  if (hour < 5 || hoursUntilSunset < -1)
    return 'night';
  else if (hour < 12)
    return 'morning';
  else if (hoursUntilSunset < 2) {
    return 'evening';
  }
  return 'afternoon';
}

const getTimeLabelFromTime = (): TimeOfDayLabel => {
  const hour = new Date().getHours();
  switch (true) {
    case hour < 5:
      return 'night';
    case hour < 12:
      return 'morning';
    case hour < 17:
      return 'afternoon';
    case hour < 21:
      return 'evening';
    default:
      return 'night';
  }
};

export const Time = {
  getTimeLabel(sunset?: number) {
    if (sunset) {
      return getTimeLabelFromSunset(sunset);
    }
    return getTimeLabelFromTime();
  }
}


