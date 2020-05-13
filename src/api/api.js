export default {
  //反馈接口
  userFeedBack: () => `/api/dc/v2/userFeedBack`,
  // 邀请码兑换接口
  exchangeInviteCode: () => `/api/portalCore/invite`,
  // 获取用户活动信息
  getActivities: () => `/api/activity/getActivities`,
  // 领取活动奖励
  receiveActivityReward: () => `/api/activity/receiveActivityReward`,
  // 已领取奖励信息
  getActivityRewardInfo: () => `/api/activity/getActivityRewardInfo`,
  // 好友推荐
  addFriendRecommend: () => `/api/activity/addFriendRecommend`,
  // 查询订单信息
  getOrderInfo: () => `/api/dealer/getOrderInfo`,
  // 填写订单页-创建经销商订单
  createDealerOrder: () => `/api/dealer/createOrder`,
  // 获取验证码
  getCode: () => `/api/pay/getVerifyImage`,
  // 创建套餐支付订单
  createOrder: () => `/api/portalCore/package/createOrder`,
  // 完成套餐支付
  executePayment: () => `/api/portalCore/package/executePayment`,
  // 获取支付模式
  getPaymentMode: () => `/api/portalCore/package/getPaymentMode`,
  // 获取支付平台
  getPaymentInfo: () => `/api/portalCore/package/getPaymentInfo`,
  // 获取地址信息
  getIPInfoAndEmail: () => `/api/portalCore/package/getIPInfoAndEmail`,
  // 查询套餐列表
  getPackageCustomization: () => `/api/portalCore/package/getPackageCustomizationWeb`,
  // 向后台传递浏览器参数
  passBrowserInfo: () => `/api/pay/report`,
  // 兼容V2.7的反馈接口
  feedBack: () => `/api/portalCore/package/feedBackReport`,
  // 重置密码
  resetPwd: () => `/api/portalCore/v3/resetPwd`,
  // 绑定邮箱
  bindEmail: () => `/api/portalCore/confirmBindEmail`,
  // 验证用户是否合法，如果合法返回套餐信息
  checkUser: () => `/api/pay/v2/scanJump`,
  // 获取下发帮助中心文案
  getHelpDoc: () => '/api/help/appHelp',
  // 手机app-我的会员
  getPlans: () => '/api/portalCore/getPlans',
  // 查询所有优惠券
  queryCoupon: () => '/api/portalCore/queryCoupon',
  // V3.1 好友推荐 - 满3人，点击礼盒进行领取
  getInviteReward: () => '/api/portalCore/getInviteReward',
  // 好友推荐 - 邀请记录
  queryInviteRecord: () => '/api/portalCore/queryInviteRecord',
  // 好友推荐 - 奖励记录
  queryInviteReward: () => '/api/portalCore/queryInviteReward',
  // 好友推荐 - 输入邀请码 - 领取奖励
  getInvitedReward: () => '/api/portalCore/getInvitedReward',
  // 好友推荐 - 点击“立即邀请好友” - 生成邀请码
  getInviteCode: () => '/api/portalCore/getInviteCode',
  // 选择巴西信用卡支付方式，点击【立即购买】需判断当前用户是否在24小时内已创建过巴西信用卡订单
  getCardOrderCounts: () => '/api/portalCore/package/getCardOrderCounts',
  // 统计分享链接页面 打开/下载按钮点击次数
  countClickTimes: () => '/api/web/downloadButton'
}