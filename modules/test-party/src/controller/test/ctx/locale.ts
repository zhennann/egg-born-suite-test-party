import { BeanBase, Controller, Use } from '@cabloy/core';
import { ScopeModuleTestParty } from '../index.js';
import assert from 'assert';

@Controller()
export class ControllerTestCtxLocale extends BeanBase {
  @Use()
  scope: ScopeModuleTestParty;

  async enus() {
    const message = this.ctx.config.message;
    const data = {
      enus: this.ctx.text(message),
      zhcn: this.ctx.text.locale('zh-cn', message),
    };

    // done
    this.ctx.success(data);
  }

  async zhcn() {
    const message = this.ctx.config.message;
    const data = {
      zhcn: this.ctx.text(message),
      enus: this.ctx.text.locale('en-us', message),
    };

    // done
    this.ctx.success(data);
  }
}
