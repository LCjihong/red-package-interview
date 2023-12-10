import { useEffect, useState } from "react"
import { ICountdownObj } from "../types";

/**
 * 处理倒计时剩余秒数为时分秒对象
 * @param restTime 倒计时剩余时间，单位：s
 * @returns 返回时分秒对象
 */
const formatRestTime = (restTime: number): ICountdownObj => {
  const h = (Math.floor(restTime / 3600)).toString().padStart(2, '0');
  const m = (Math.floor((restTime % 3600) / 60)).toString().padStart(2, '0');
  const s = (restTime % 60).toString().padStart(2, '0');
  // 返回时分秒对象
  return { h, m, s };
};


/** 创建倒计时，返回整理格式后的倒计时时分秒对象 */
const useCountdown = (restTime: number) => {
  const [countdown, setCountdown] = useState<number>(restTime);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(v => v - 1);
      if (countdown - 1 <= 0) {
        window.clearInterval(timer);
      }
    }, 1000)

    return () => {
      window.clearInterval(timer);
    }
  }, [])

  return formatRestTime(countdown);
}

export default useCountdown;