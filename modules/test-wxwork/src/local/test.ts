import { BeanBase, Local } from '@cabloy/core';

@Local()
export class LocalTest extends BeanBase {
  async getMemberId({ user }: any) {
    const modelMember = this.ctx.model.module('a-wxwork').member;
    const member = await modelMember.get({ userId: user.id });
    return {
      memberId: member.memberId,
    };
  }

  async sendAppMessage({ message, user }: any) {
    const content = {
      userIds: [user.id],
      data: {
        msgtype: 'text',
        text: {
          content: message.text,
        },
      },
    };
    await this.ctx.bean.io.pushDirect({
      content,
      channel: { module: 'a-wxwork', name: 'app' },
    });
  }
}
