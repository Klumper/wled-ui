import { ColorEnum } from '../color';

/**
 * Interface for the segments
 * @interface SegmentInterface
 */
export interface SegmentInterface {
  /**
   * Sets the individual segment brightness (available since 0.10.0)
   */
  bri: number;
  /**
   * Array that has up to 3 color arrays as elements, the primary, secondary (background) and tertiary colors of the segment.
   * Each color is an array of 3 or 4 bytes, which represent an RGB(W) color.
   */
  col: ColorEnum[];
  /**
   * ID of the effect.
   */
  fx: number;
  /** UNKNOWN */
  grp: number;
  /**
   * Zero-indexed ID of the segment. 
   * May be omitted,in that case the ID will be inferred from the order of the segment objects in the seg array.
   * As such, not included in state response.
   */
  id: number;
  /**
   * Effect intensity
   */
  ix: number;
  /**
   * Length of the segment (stop - start). stop has preference, so if it is included, len is ignored.
   */
  len: number;
  /**
   * Mirrors the segment (available since 0.10.2)
   */
  mi: boolean;
  /**
   * Turns on and off the individual segment. (available since 0.10.0)
   */
  on: boolean;
  /**
   * ID of the color palette
   */
  pal: number;
  /**
   * Flips the segment, causing animations to change direction.
   */
  rev: boolean;
  /**
   * true if the segment is selected. 
   * Selected segments will have their state (color/FX) updated by APIs that don't support segments (currently any API except this JSON API).
   * If no segment is selected, the first segment (id:0) will behave as if selected. 
   * WLED will report the state of the first (lowest id) segment that is selected to APIs (UDP sync, HTTP, MQTT, Blynk...).
   */
  sel: boolean;
  /** UNKNOWN */
  spc: number;
  /**
   * LED the segment starts at.
   */
  start: number;
  /**
   * LED the segment stops at, not included in range.
   * If stop is set to a lower or equal value than start (setting to 0 is recommended), the segment is invalidated and deleted.
   */
  stop: number;
  /**
   * Relative effect speed
   */
  sx: number;
}
