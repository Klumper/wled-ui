import { InfoApiClientInterface } from './info';
import { StateApiClientInterface } from './state';
import { EffectApiClientInterface } from './effect';
import { PaletteApiClientInterface } from './palette';
/**
 * @Name ApiClientInterface
 * @description
 * Interface wraps all api client modules into one places for keeping code organized.
 */
export interface ApiClientInterface {
  info: InfoApiClientInterface;
  state: StateApiClientInterface;
  effect: EffectApiClientInterface;
  palette: PaletteApiClientInterface;
}
