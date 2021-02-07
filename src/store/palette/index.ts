import { rootStore, dispatchModuleAction } from '../root';
import { StoreModuleNames, PaletteStateInterface } from '@/models/store';

/**
 * @name paletteStore
 * @description
 * The palette store wrapper that returns the paletteStore and exposes a generic action<T> method
 */
const paletteStore = {
  get state(): PaletteStateInterface {
    return rootStore.state.paletteState;
  },
  action<T>(actionName: string, params?: T): void {
    dispatchModuleAction(StoreModuleNames.paletteState, actionName, params);
  },
};
// export our wrapper using the composition API convention (i.e. useXYZ)
export const usePaletteStore = () => {
  return paletteStore;
};