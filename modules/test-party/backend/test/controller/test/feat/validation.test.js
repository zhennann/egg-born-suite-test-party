const { app, mockUrl, mockInfo, assert } = require('egg-born-mock')(__dirname);

describe('test/controller/test/feat/validation.test.js', () => {
  it('action:validation:success', async () => {
    const data = {
      groupInfo: {
        username: 'zhennann',
      },
      groupExtra: {
        panelExtra: {
          groupInfo: {
            mobile: '123',
            sex: 1,
            language: 'en-us',
          },
        },
      },
    };

    // ctx
    const ctx = await app.mockCtx();
    await ctx.meta.util.performAction({
      innerAccess: false,
      method: 'post',
      url: mockUrl('test/feat/validation/success', false),
      body: {
        data,
      },
    });
  });

  it('action:validation:fail', async () => {
    const data = {
      groupInfo: {
        username: '', // Not empty
      },
      groupExtra: {
        panelExtra: {
          groupInfo: {
            mobile: '', // Not empty
            sex: 1,
            language: 'en-us',
          },
        },
      },
    };

    // ctx
    try {
      const ctx = await app.mockCtx();
      await ctx.meta.util.performAction({
        innerAccess: false,
        method: 'post',
        url: mockUrl('test/feat/validation/fail', false),
        body: {
          data,
        },
      });
    } catch (err) {
      assert.equal(err.code, 422);
    }
  });

  it('action:validation:schema', async () => {
    const data = {
      panelExtra: {
        groupInfo: {
          mobile: '123',
          sex: 1,
          language: 'en-us',
        },
      },
    };

    // ctx
    const ctx = await app.mockCtx();
    await ctx.meta.util.performAction({
      innerAccess: false,
      method: 'post',
      url: mockUrl('test/feat/validation/schema', false),
      body: {
        data,
      },
    });
  });
});
