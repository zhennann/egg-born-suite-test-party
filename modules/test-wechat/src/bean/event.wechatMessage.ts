// const moduleInfo = module.info;
module.exports = class eventBean {
  async execute(context, next) {
    const { message } = context.data;
    if (message.MsgType === 'text') {
      context.result = {
        ToUserName: message.FromUserName,
        FromUserName: message.ToUserName,
        CreateTime: new Date().getTime(),
        MsgType: 'text',
        Content: `${this.ctx.text.locale('zh-cn', 'Reply')}: ${message.Content}`,
      };
      // break
      return;
    }
    // next
    await next();
  }
};