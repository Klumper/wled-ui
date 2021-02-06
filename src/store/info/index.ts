import { rootStore, dispatchModuleAction } from '../root';
import { StoreModuleNames, InfoStateInterface } from '@/models/store';

/**
 * @name infoStore
 * @description
 * The info store wrapper that returns the infoState and exposes a generic action<T> method
 */
const infoStore = {
  get state(): InfoStateInterface {
    return rootStore.state.infoState;
  },
  action<T>(actionName: string, params?: T): void {
    dispatchModuleAction(StoreModuleNames.infoState, actionName, params);
  },
};
// export our wrapper using the composition API convention (i.e. useXYZ)
export const useInfoStore = () => {
  return infoStore;
};