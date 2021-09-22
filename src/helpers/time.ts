
export type TimeOfDayLabel = 'morning' | 'afternoon' | 'evening' | 'night';

export const getTimeLabelFromSunset = (now: Date, sunset: number): TimeOfDayLabel => {
  const hour = now.getHours();
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

export const getTimeLabelFromTime = (now: Date): TimeOfDayLabel => {
  const hour = now.getHours();
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
  getTimeLabel(sunset?: number): TimeOfDayLabel {
    const now = new Date();
    if (sunset) {
      return getTimeLabelFromSunset(now, sunset);
    }
    return getTimeLabelFromTime(now);
  }
}


