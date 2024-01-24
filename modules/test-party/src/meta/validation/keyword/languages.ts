const keywords = {};
keywords.languages = {
  async: true,
  type: 'string',
  errors: true,
  compile(/* sch, parentSchema*/) {
    return async function (data) {
      const ctx = this;
      const locales = ctx.bean.base.locales();
      const index = locales.findIndex(item => item.value === data);
      if (index > -1) return true;
      const errors = [{ keyword: 'x-languages', params: [], message: ctx.text('NotExpectedValue') }];
      throw new module.meta.class.Ajv.ValidationError(errors);
    };
  },
};
module.exports = keywords;
