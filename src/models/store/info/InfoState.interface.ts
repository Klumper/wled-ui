import { InfoInterface } from '@/models/info';

/**
 * @name InfoStateInterface
 * @description
 * Interface for the Items state
 */
export interface InfoStateInterface {
  loading: boolean;
  info: InfoInterface;
}