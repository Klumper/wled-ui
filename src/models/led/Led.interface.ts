/**
 * Interface for thhe info about the LED setup.
 * @interface LedInterface
 */
export interface LedInterface {
  /**
   * Total LED count.
   */
  count: number;
  /**
   * Maximum power budget in milliamps for the ABL. 0 if ABL is disabled.
   */
  maxpwr: number;
  /**
   * Maximum number of segments supported by this version.
   */
  maxseg: number;
  /**
   * LED strip pin(s). In 0.8.4, always one element.
   */
  pin: number[];
  /**
   * Current LED power usage in milliamps as determined by the ABL. 0 if ABL is disabled.
   */
  pwr: number;
  /**
   * true if LEDs are 4-channel (RGBW).
   */
  rgbw: boolean;
  /** UNKNOWN */
  seglock: boolean;
  /** UNKNOWN */
  wv: boolean;
}