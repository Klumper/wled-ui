import { StateInterface } from '@/models/state';

/**
 * @Name StateApiClientInterface
 * @description
 * Interface for the State api client module
 */
export interface StateApiClientInterface {
  fetchState: () => Promise<StateInterface>;
}