import { PaletteType } from '@/models/palette';

/**
 * @Name PaletteApiClientInterface
 * @description
 * Interface for the Palette api client module
 */
export interface PaletteApiClientInterface {
  fetchPalette: () => Promise<PaletteType[]>;
}