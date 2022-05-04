export const getLocaltime = (date: Date) => {
  return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric", hour12: true });
};

export const getAvailableTime = (startTime: string, endTime: string): string => {
  const start = getLocaltime(new Date(startTime));
  const end = getLocaltime(new Date(endTime));
  return `${start} - ${end}`;
};
