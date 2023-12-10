import { useMemo } from 'react';
import { IResponseItem } from '../../types/response';
import Tips from '../Tips';
import styles from './index.module.css';

interface IProps {
  data: IResponseItem;
}

const RedPackage = ({ data }: IProps) => {

  const {
    money = '',
    title = '',
    description: subTitle,
    status: btnText,
  } = data;

  // 金额数字过长时缩小字号
  const priceFontSize = useMemo(() => {
    if (String(money).length > 3) {
      return 'calc(100vw / 950)';
    }
    return 'calc(100vw / 750)'
  }, [money]);

  return (
    <div className={styles.packageWrapper}>
      <div className={styles.mainBox}>
        <div className={styles.priceBox} style={{fontSize: priceFontSize}}>
          <span className={styles.price}>{money}</span>
          <span className={styles.priceUnit}>元</span>
        </div>
        <div className={styles.content}>
          <p className={styles.title}>{title}</p>
          <p className={styles.subTitle}>{subTitle}</p>
          <Tips data={data} />
        </div>
      </div>
      <div className={styles.buttonBox}>
        <p className={styles.button}>{btnText}</p>
      </div>
    </div>
  )
}

export default RedPackage;