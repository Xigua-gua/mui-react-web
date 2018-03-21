
const IconAppstore = require('../assets/icon-appstore.png')
const IconComputer = require('../assets/icon-computer.png')
const IconWechat = require('../assets/icon-wechat.png')
const IconPlatform = require('../assets/icon-platform.png')
const IconPro3 = require('../assets/pro3.png')
const IconPro2 = require('../assets/pro2.png')
const IconPro1 = require('../assets/pro1.png')
const IconPro4 = require('../assets/pro4.png')
const IconTalk = require('../assets/icon-talk.png')
const IconContract = require('../assets/icon-contract.png')
const IconAxure = require('../assets/icon-axure.png')
const IconCoding = require('../assets/icon-coding.png')
const IconTest = require('../assets/icon-test.png')
const IconFinish = require('../assets/icon-finish.png')
const IconBlog1 = require('../assets/blog1.png')
const IconBlog2 = require('../assets/blog2.png')
const IconBlog3 = require('../assets/blog3.png')
const IconBlog4 = require('../assets/blog4.png')
const IconBlog5 = require('../assets/blog5.png')
const IconBlog6 = require('../assets/blog6.png')
const IconLocation= require('../assets/icon-location.png')
const IconPhone = require('../assets/icon-phone.png')
const IconEmail = require('../assets/icon-email.png')

export const NAVS = [
  {
    name: '首页',
    key: 'home',
  },
  {
    name: '服务项目',
    key: 'service'
  },
  {
    name: '案例介绍',
    key: 'demo'
  },
  {
    name: '定制流程',
    key: 'process'
  },
  {
    name: '团队博客',
    key: 'blog'
  },
  {
    name: '联系我们',
    key: 'about'
  },
]
export const serviceTab = [
  {
    title: '移动应用',
    contents: '提供iOS应用、Android应用定制开发及H5的定制开发',
    img: IconAppstore,
  },
  {
    title: '企业信息化',
    contents: '提供企业网站建设、内部平台搭建及企业移动化整体解决方案',
    img: IconComputer,
  },
  {
    title: '微信开发',
    contents: '微信相关产品定制开发, 包括订阅号、服务号、企业号及小程序',
    img: IconWechat,
  },
  {
    title: '商业平台搭建',
    contents: '提供各类商业平台整体解决方案，涵盖商城交易系统、大数据分析、微社交等',
    img: IconPlatform,
  },
]
export const demoTab = [
  {
    title: '宠盟',
    contents: '专为爱宠人精心打造的宠友社区APP，在这里可以约遛宠友、分享圈子、领养宠物等，还能参加宠物公益活动，救助宠友、流浪狗，做最有爱的宠物社交，呼吁社会关爱宠物',
    img: IconPro3,
    uri: 'http://pet.yijunet.cc/',
  },
  {
    title: '物流管理',
    contents: '将物流线下调度转移到移动端，结合线上线下资源优势，提供高效的调度管理和服务，并依托于交易数据提供完整的跟踪、保险、金融等第四方物流服务。',
    img: IconPro2,
    uri: 'http://dc.meyoung.cn/download/bid.html',
  },
  {
    title: '米阳调度中心',
    contents: '调度系统管理平台，通过车辆、货物及第三方调度的线上管理，充分利用大数据分析，结合实际调度货运经验，在系统上建立了调度运费体系，解决了调度过程中车辆及货物资源匹配问题。',
    img: IconPro1,
    uri: 'http://dc.meyoung.cn/',
  },
  {
    title: '享客',
    contents: '享客除了上门美甲之外，我们还包含了上门美发，美睫，美容，造型 ......更多让生活的项目，目前还在飞速扩展中未来，你手指动动，你能想到的所有“专业技能”服务，立即来到你身边。',
    img: IconPro4,
    uri: 'http://xiangke.da56.com/static/',
  },
]
export const processTab = [
  {
    title: '需求洽谈',
    contents: '用户与产品经理面对面交流开发需求',
    img: IconTalk,
  },
  {
    title: '签订合同',
    contents: '双方按确认的产品需求签订开发合同',
    img: IconContract,
  },
  {
    title: '原型确定',
    contents: '按需求设计产品高保真原型，由客户签字确认',
    img: IconAxure,
  },
  {
    title: '定制开发',
    contents: '严格按照产品原型进行开发',
    img: IconCoding,
  },
  {
    title: '测试上线',
    contents: '客户验收后，负责产品上线',
    img: IconTest,
  },
  {
    title: '定制完成',
    contents: '完成定制，提供产品文献及开发文档',
    img: IconFinish,
  },
]
export const blogTab = [
  {
    title: 'ReactNative开发常用的三方组件',
    img: IconBlog1,
    uri: "http://jafeney.com/2017/03/29/2017-03-29-react-native/",
  },
  {
    title: 'ReactNative接入微信API',
    img: IconBlog2,
    uri: "http://jafeney.com/2016/11/18/2016-11-17-wechat/",
  },
  {
    title: 'ReactNative接入支付宝支付',
    img: IconBlog3,
    uri: "http://jafeney.com/2017/03/29/2017-03-29-react-native/",
  },
  {
    title: 'ReactNative坑点——Date对象正确使用',
    img: IconBlog4,
    uri: "http://jafeney.com/2016/11/16/2016-11-16-react-native/",
  },
  {
    title: '基于Redux的ReactNative项目开发总结',
    img: IconBlog5,
    uri: "http://jafeney.com/2016/09/20/2016-09-20-react-native/",
  },
  {
    title: 'JavaScript异步编程的终极演变',
    img: IconBlog6,
    uri: "http://jafeney.com/2016/08/15/2016-08-15-async/",
  },
]
export const aboutTab = [
  {
    title: '地址',
    contents: '浙江省杭州市滨江区国信嘉园87幢',
    img: IconLocation,
  },
  {
    title: '联系方式',
    contents: '0571-86635688',
    img: IconPhone,
  },
  {
    title: '邮箱',
    contents: 'support@yijunet.cc',
    img: IconEmail,
  },
]
export const imgSrc = ['banner1.png','banner2.png']
