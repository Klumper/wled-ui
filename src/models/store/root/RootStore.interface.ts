import { EffectStateInterface } from '../effect/EffectState.interface';
import { InfoStateInterface } from '../info/InfoState.interface';
import { PaletteStateInterface } from '../palette/PaletteState.interface';
import { LocalesStateInterface } from '../locales/LocalesState.interface';
import { StateStateInterface } from '../state/StateState.interface';

/**
 * @name RootStoreInterface
 * @description
 * Wraps together each store module interface in one place
 */
export interface RootStoreInterface {
  // GEN-INTERFACE-PROPS
  effectState: EffectStateInterface;
  infoState: InfoStateInterface;
  paletteState: PaletteStateInterface;
  localesState: LocalesStateInterface;
  stateState: StateStateInterface;
}