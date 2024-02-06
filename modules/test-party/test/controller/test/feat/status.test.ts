// eslint-disable-next-line
import { app, mockUrl, mockInfo, assert } from 'egg-born-mock';

describe('test/controller/test/feat/status.test.js', () => {
  it('action:status', async () => {
    // ctx
    const ctx = await app.meta.mockUtil.mockCtx();
    await ctx.meta.util.performAction({
      innerAccess: false,
      method: 'post',
      url: mockUrl('test/feat/status', false),
    });
  });
});
