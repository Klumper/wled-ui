import { EffectType } from '@/models/effect';

/**
 * @name EffectStateInterface
 * @description
 * Interface for the Effect state
 */
export interface EffectStateInterface {
  loading: boolean;
  effects: EffectType[];
}