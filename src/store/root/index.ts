import { createStore, StoreOptions } from 'vuex';
import { RootStateInterface, RootStoreModel } from '@/models/store';

import { initialRootState } from './initialState';

import { infoState } from '@/store/info/module';
import { localesState } from '@/store/locales/module';
import { stateState } from '@/store/state/module';
import { paletteState } from '@/store/palette/module';
import { effectState } from '@/store/effect/module';

/**
 * @name storeOptions
 * @description
 * Vuex store options to build our modularized namespaced store
 */
const storeOptions: StoreOptions<RootStateInterface> = {
  state: initialRootState,

  modules: {
    infoState,
    localesState,
    stateState,
    paletteState,
    effectState,
  },
};

// Vuex Root store instance
// eslint-disable-next-line @typescript-eslint/consistent-type-assertions, @typescript-eslint/no-explicit-any 
export const rootStore: RootStoreModel<RootStateInterface> = <any>createStore(storeOptions);

/**
 * @name dispatchModuleAction
 * @description
 * Private helper to dispatch an action to a Vuex module from one place
 * So we keep the string interpolation for `${moduleName}/${actionName}` in one place only
 * and be able to dispatch action with less code in a strongly-type way
 * @param moduleName
 * @param actionName
 * @param params
 */
export function dispatchModuleAction<T>(moduleName: string, actionName: string, params?: T): void {
  rootStore.dispatch(`${moduleName}/${actionName}`, params);
}