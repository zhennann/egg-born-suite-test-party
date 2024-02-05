import { BeanScopeBase, Scope, TypeModuleResource } from '@cabloy/core';
import { IModuleLocal } from './locals.js';
import { IModuleModel } from './models.js';
import { config, Errors, locales, constants } from '../config/index.js';

@Scope()
export class ScopeModuleTestHostsimple extends BeanScopeBase {}

export interface ScopeModuleTestHostsimple
  extends TypeModuleResource<
    IModuleLocal,
    IModuleModel,
    typeof config,
    typeof Errors,
    typeof locales,
    typeof constants
  > {}

declare module '@cabloy/core' {
  export interface IBeanScopeRecord {
    'test-hostsimple': ScopeModuleTestHostsimple;
  }

  export interface IBeanScopeConfig {
    'test-hostsimple': ReturnType<typeof config>;
  }
}
