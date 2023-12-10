/** 接口数据 */
export type IResponse = IResponseItem[] | null;

/** 红包数据项 */
export interface IResponseItem {
  /** 红包金额 */
  money?: number;
  /** 标题 */
  title?: string;
  /** 副标题 */
  description?: string;
  /** 有效期: [begin, end] */
  time?: [number, number];
  /** 倒计时剩余时间，单位:s */
  restTime?: number;
  /** 红包金额 */
  status?: string;
}
