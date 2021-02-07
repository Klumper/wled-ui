import { EffectType } from '@/models/effect';

/**
 * @Name EffectpiClientInterface
 * @description
 * Interface for the Effect api client module
 */
export interface EffectApiClientInterface {
  fetchEffect: () => Promise<EffectType[]>;
}