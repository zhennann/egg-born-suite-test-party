const require3 = require('require3');
const extend = require3('@zhennann/extend');

module.exports = ctx => {
  // const moduleInfo = ctx.app.meta.mockUtil.parseInfoFromPackage(__dirname);
  class EventBean {
    async execute(context, next) {
      const data = context.data;
      const info = data.info;
      info.config = extend(true, info.config, {
        modules: {},
      });
      // next
      await next();
    }
  }

  return EventBean;
};
