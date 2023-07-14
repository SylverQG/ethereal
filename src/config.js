/**
 * 博客配置文件，没有说明的就是必填项
 * @type {Object}
 * @property {String} title         博客标题
 * @property {String} subtitle      博客副标题
 * @property {String} description   博客描述
 * @property {String} keywords      博客关键字
 * @property {String} favicon       博客图标 180x180
 * @property {String} favicon16     博客图标 16x16
 * @property {String} favicon32     博客图标 32x32
 * @property {String} createdTime   博客创建时间
 * @property {String} icp           ICP 备案号
 * @property {String} icpLink       ICP 备案链接
 * @property {String} beian         [选填] 公安备案号 '京公网安备 00000000000000号'
 * @property {String} beianLink     [选填] 公安备案链接 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=00000000000000'
 * @property {String} username      GitHub 用户名
 * @property {String} repository    GitHub 仓库名
 * @property {String} friendsRepo   友链仓库名
 * @property {String} author        博客作者
 * @property {String} email         博客作者邮箱
 * @property {String} link          个人链接
 * @property {String} github        GitHub 链接
 * @property {String} wechatQr      微信二维码
 * @property {String} wechatPayQr   微信支付二维码
 * @property {String} alipayQr      支付宝收款二维码
 * @property {String} bilibili      哔哩哔哩链接
 * @property {String} name          友链名称
 * @property {String} url           友链链接
 * @property {String} avatar        友链头像
 * @property {String} desc          友链描述
 * @property {String} pageSize      文章列表每页显示文章数
 * @property {String} defaultCover  文章默认封面图
 */
export default {
  // 博客基础配置
  title: 'wallleap',
  subtitle: 'ルー・ワン',
  description: 'Luwang\'s blog',
  keywords: 'Luwang, blog, wallleap',
  favicon: '/favicon.ico',
  favicon16: '/favicon.ico',
  favicon32: '/favicon.ico',
  createdTime: '2019-08-01',
  icp: '赣ICP备20000895号-1',
  icpLink: '//beian.miit.gov.cn/',
  beian: '',
  beianLink: '',
  // GitHub Issues 配置
  username: 'wallleap',
  repository: 'myblogs',
  friendsRepo: 'friends',
  // 您的信息
  author: 'Luwang',
  email: 'luwang@oicode.cn',
  link: '//luwang.info',
  github: '//github.com/wallleap',
  wechatQr: '//cdn.wallleap.cn/img/custom/wechat.jpg',
  wechatPayQr: '//cdn.wallleap.cn/img/custom/wechat.jpg',
  alipayQr: '//cdn.wallleap.cn/img/custom/alipay.jpg',
  bilibili: '//space.bilibili.com/123456',
  // 友链信息
  name: 'wallleap',
  url: '//myblog.wallleap.cn',
  avatar: '//cdn.wallleap.cn/img/custom/avatar.jpg',
  desc: 'Luwang\'s blog',
  // 文章相关
  pageSize: 12,
  defaultCover: '//cdn.wallleap.cn/img/post/1.jpg',
  // 评论配置
}
