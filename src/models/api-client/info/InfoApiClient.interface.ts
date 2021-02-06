import { InfoInterface } from '@/models/info';

/**
 * @Name ItemsApiClientInterface
 * @description
 * Interface for the Items api client module
 */
export interface InfoApiClientInterface {
  fetchInfo: () => Promise<InfoInterface>;
}