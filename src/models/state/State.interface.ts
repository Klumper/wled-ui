import { SegmentInterface } from '../segment';
import { NightlightInterface } from '../nightlight';
import { CcnfInterface } from '../ccnf';
import { UdpnInterface } from '../udpn';

/**
 * Interface for the current state of the light
 * @interface StateInterface
 */
export interface StateInterface {
  /**
   * Brightness of the light.
   * If on is false, contains last brightness when light was on (aka brightness when on is set to true).
   * Setting bri to 0 is supported but it is recommended to use the range 1-255 and use on: false to turn off. 
   * The state response will never have the value 0 for bri.
   */
  bri: number;
  /**
   * Live data override. 0 is off, 1 is override until live data ends, 2 is override until ESP reboot (available since 0.10.0)
   */
  lor: number;
  /**
   * Main Segment
   */
  mainseg: number;
  /**
   * On/Off state of the light
   */
  on: boolean;
  /**
   * ID of currently set playlist. For now, this sets the preset cycle feature, -1 is off and 0 is on.
   */
  pl: number;
  /**
   * ID of currently set preset.
   */
  ps: number;
  /**
   * Bitwise indication of preset slots (0 - vacant, 1 - written).
   * Always 0 in 0.11. Not changable. Deprecated, removal in 0.12.0
   */
  pss: number;
  /**
   * Duration of the crossfade between different colors/brightness levels.
   * One unit is 100ms, so a value of 4 results in a transition of 400ms.
   */
  transition: number;
  /** UNKNOWN */
  ccnf: CcnfInterface;
  /**
   * Nightlight settings
   */
  nl: NightlightInterface;
  /**
   * Segments are individual parts of the LED strip.
   * In 0.9.0 this will enables running different effects on different parts of the strip.
   */
  seg: SegmentInterface[];
  /**
   * UDPN settings
   */
  udpn: UdpnInterface;
};
