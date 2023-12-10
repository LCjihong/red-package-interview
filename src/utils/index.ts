/**
 * 将时间戳格式化为MM.DD hh:mm格式
 * @param timestamp 时间戳
 * @returns MM.DD hh:mm
 */
const stampToMDhm = (timestamp: number): string => {
  if (!timestamp) return '--.-- --:--';
  const timeObj = new Date(timestamp);
  const month = (timeObj.getMonth() + 1).toString().padStart(2, '0');
  const day = (timeObj.getDate()).toString().padStart(2, '0');
  const hour = (timeObj.getHours()).toString().padStart(2, '0');
  const minutes = (timeObj.getMinutes()).toString().padStart(2, '0');
  return `${month}.${day} ${hour}:${minutes}`;
}

/**
 * 获取红包有效期Tips文案
 * @param time [开始时间戳，结束时间戳]
 * @returns 有效期tips文案
 */
export const getTimeLimitTips = (time: [number, number]): string => {
  const [begin = 0, end = 0] = time || [];
  const beginTime = stampToMDhm(begin);
  const endTime = stampToMDhm(end);
  return `${beginTime}-${endTime}`;
}
