# 面试题

## 实现以下需求
使用接口数据和切图资源，实现以下需求。
## UI 视觉
最终的 UI 视觉需求如下，相关视觉标注 和 细节 请点击 👉  [UI 视觉标注](https://systemjs.1688.com/krump/schema/1360.html)：

![](https://cdn.nlark.com/yuque/0/2021/png/86887/1637570798515-0628077f-7092-41a1-bbc3-825e9143da21.png?x-oss-process=image%2Fresize%2Cw_444%2Climit_0)
## 接口数据
接口的 URL 地址为：
https://systemjs.1688.com/krump/schema/1352.json
## 切图资源
背景图片为：
https://gw.alicdn.com/imgextra/i1/O1CN01SzXzZl1U46EOknhoB_!!6000000002463-2-tps-1380-362.png
## 必须满足以下要求(请详细阅读要求)
- 必须使用 React 实现
- 如果有 restTime 字段，请直接显示倒计时，单位为秒
  - 比如：restTime 为 3 * 3600 + 12 * 60 + 23 = 11543 为 3 小时，12 分钟，23 秒
  - ![](https://cdn.nlark.com/yuque/0/2021/png/86887/1637571681126-d7156219-704a-48b4-b124-fc9e8930d508.png)
  - 必须有 倒计时效果，不能是静态显示数字
- 要求 响应式布局，如果屏幕缩小后，直接错位的，如下图所示，直接不予通过。尽可能好地还原视觉 UI

  - ![](https://cdn.nlark.com/yuque/0/2021/png/86887/1639016651892-b96dc6b2-8d9f-4d0e-9975-58887591102c.png?x-oss-process=image%2Fresize%2Cw_365%2Climit_0)

代码要求(尽量考虑细节)：
- 代码结构清晰，代码有一定的健壮性，请注意函数、变量、样式的命名
  - 尽量不使用绝对定位，需要做到布局的自适应
  - 尽可能好地处理分支逻辑，比如：金额、数字处理等等
## 备注
- 可百度搜索，可查阅资料，不要求时间
- 可使用 VSCode 进行线下编码
  - 可使用压缩软件直接压缩代码传回面试官
  - 也可使用 github 等公开仓库管理后，发送 git 地址传回面试官
- 可使用在线编码（编写完成后，请记得及时保存代码）
https://codesandbox.io/s/admiring-swartz-vivnj?file=/src/App.js
## 笔试回复
如果为线下编码，请压缩编写好后的代码 或 git 公开仓库地址，然后回复到您的面试官邮箱即可。
如果为线上编码，则将线上地址回复到您的面试官邮箱即可。
