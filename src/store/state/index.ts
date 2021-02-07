import { rootStore, dispatchModuleAction } from '../root';
import { StoreModuleNames, StateStateInterface } from '@/models/store';

/**
 * @name infoStore
 * @description
 * The info store wrapper that returns the infoState and exposes a generic action<T> method
 */
const stateStore = {
  get state(): StateStateInterface {
    return rootStore.state.stateState;
  },
  action<T>(actionName: string, params?: T): void {
    dispatchModuleAction(StoreModuleNames.stateState, actionName, params);
  },
};
// export our wrapper using the composition API convention (i.e. useXYZ)
export const useStateStore = () => {
  return stateStore;
};