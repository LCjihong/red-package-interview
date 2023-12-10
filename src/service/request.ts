import { autoFetch } from ".";

export const getModuleData = () => {
  return autoFetch({
    api: 'https://systemjs.1688.com/krump/schema/1352.json',
    data: {},
  })
}
