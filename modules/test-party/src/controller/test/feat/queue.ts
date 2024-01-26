import { BeanBase, Controller, Use } from '@cabloy/core';
import { ScopeModuleTestParty } from '../index.js';
import assert from 'assert';

@Controller()
export class ControllerTestFeatQueue extends BeanBase {
  @Use()
  scope: ScopeModuleTestParty;

  async pushAsync() {
    const res = await this.ctx.meta.util.queuePushAsync({
      module: 'test-party',
      queueName: 'queueTest',
      data: { a: 1, b: 2 },
    });
    assert.equal(res, 3);
    this.ctx.success();
  }

  async push() {
    this.ctx.meta.util.queuePush({
      module: 'test-party',
      queueName: 'queueTest',
      data: { a: 1, b: 2 },
    });
    this.ctx.success();
  }
}
