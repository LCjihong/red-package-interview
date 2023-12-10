import useCountdown from '../../hooks/useCountdown';
import { IResponseItem } from '../../types/response';
import { getTimeLimitTips } from '../../utils';
import styles from './index.module.css';

interface IProps {
  /** 红包接口数据项 */
  data: IResponseItem;
}

const Tips = ({ data }: IProps) => {
  const {
    restTime = 0,
    time = [0, 0],
  } = data;
  const {h, m, s} = useCountdown(restTime);
  const timeLimitTips = getTimeLimitTips(time);
  const isCountdown = restTime > 0;
  const tipsHead = isCountdown ? '距结束 ' : '有效期：';

  const Countdown = () => (
    <div className={styles.countdown}>
      <span className={styles.cdNumber}>{h}</span>:
      <span className={styles.cdNumber}>{m}</span>:
      <span className={styles.cdNumber}>{s}</span>
    </div>
  )
  return (
    <div className={styles.tipsWrapper}>
      <p className={styles.tipsHead}>{tipsHead}</p>
      {
        isCountdown ?
        <Countdown /> :
        <p className={styles.timeLimitTips}>{timeLimitTips}</p>
      }
    </div>
  )
}

export default Tips;