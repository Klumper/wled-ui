import { rootStore, dispatchModuleAction } from '../root';
import { StoreModuleNames, EffectStateInterface } from '@/models/store';

/**
 * @name effectStore
 * @description
 * The effect store wrapper that returns the effectStore and exposes a generic action<T> method
 */
const effectStore = {
  get state(): EffectStateInterface {
    return rootStore.state.effectState;
  },
  action<T>(actionName: string, params?: T): void {
    dispatchModuleAction(StoreModuleNames.effectState, actionName, params);
  },
};
// export our wrapper using the composition API convention (i.e. useXYZ)
export const useEffectStore = () => {
  return effectStore;
};