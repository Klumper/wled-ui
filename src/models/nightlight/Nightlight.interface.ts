/**
 * Interface for the Nightlight functionality
 * @interface NightlightInterface
 */
export interface NightlightInterface {
  /**
   * Duration of nightlight in minutes
   */
  dur: number;
  /**
   * If true, the light will gradually dim over the course of the nightlight duration.
   * If false, it will instantly turn to the target brightness once the duration has elapsed.
   * Deprecated, removal in 0.12.0 (use mode instead)
   */
  fade: boolean;
  /**
   * Nightlight mode (0: instant, 1: fade, 2: color fade, 3: sunrise) (available since 0.10.2)
   */
  mode: number;
  /**
   * Nightlight currently active
   */
  on: boolean;
  /**
   * Target brightness of nightlight feature
   */
  tbri: number;
}