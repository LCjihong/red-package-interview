export interface IFetchParams {
  /** 接口地址 */
  api: string;
  /** 数据 */
  data: {[key: string]: any};
}

/**
 * 发送请求方法
 * @param params 接口参数
 * @returns 请求实体
 */
export const autoFetch = (params: IFetchParams) => {
  return fetch(params.api).then(res => res.json())
}