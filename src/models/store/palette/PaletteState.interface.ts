import { PaletteType } from '@/models/palette';

/**
 * @name PaletteStateInterface
 * @description
 * Interface for the Palette state
 */
export interface PaletteStateInterface {
  loading: boolean;
  palettes: PaletteType[];
}