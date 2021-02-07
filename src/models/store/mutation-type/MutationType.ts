import { InfoMutationType } from '../info/InfoMutationType';
import { LocalesMutationType } from '../locales/LocalesMutationType';
import { StateMutationType } from '../state/StateMutationType';
import { EffectMutationType } from '../effect/EffectMutationType';
import { PaletteMutationType } from '../palette/PaletteMutationType';


// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace MutationType {
  export const info = InfoMutationType;
  export const locales = LocalesMutationType;
  export const state = StateMutationType;
  export const effect = EffectMutationType;
  export const palette = PaletteMutationType;
}