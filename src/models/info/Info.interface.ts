import { LedInterface } from '../led';
import { WifiInterface } from '../wifi';

/**
 * Interface for general information about the device. 
 * @interface InfoInterface
 */
export interface InfoInterface {
  /**
   * Name of the platform.
   */
  arch: string;
  /**
   * The producer/vendor of the light.
   * Always WLED for standard installations.
   */
  brand: string;
  /**
   * Version of the underlying (Arduino core) SDK.  
   */
  core: string;
  /**
   * Bytes of heap memory (RAM) currently available.
   * Problematic if <10k.
   */
  freeheap: number;
  /**
   * Number of effects included.
   */
  fxcount: number;
  /**
   * Contains info about the LED setup.
   */
  leds: LedInterface;
  /**
   * Realtime data source IP address
   */
  lip: string;
  /**
   * If true, the software is currently receiving realtime data via UDP or E1.31.
   */
  live: boolean;
  /**
   * Info about the realtime data source
   */
  lm: string;
  /** UNKNOWN */
  lwip: number;
  /**
   * The hexadecimal hardware MAC address of the light, lowercase and without colons.
   */
  mac: string;
  /**
   * Friendly name of the light.
   * Intended for display in lists and titles.
   */
  name: string;
  /**
   * Used for debugging purposes only.
   */
  opt: number;
  /** 
   * Number of palettes configured.
   */
  palcount: number;
  /**
   * The product name. Always FOSS for standard installations.
   */
  product: string;
  /**
   * If true, an UI with only a single button for toggling sync should toggle receive+send, otherwise send only
   */
  str: boolean;
  /**
   * The UDP port for realtime packets and WLED broadcast.
   */
  udpport: number;
  /**
   * Time since the last boot/reset in seconds.
   */
  uptime: number;
  /**
   * Version name.
   */
  ver: string;
  /**
   * Build ID (YYMMDDB, B = daily build index).
   */
  vid: number;
  /**
   * Info about current signal strength
   */
  wifi: WifiInterface;
  /**
   * Number of currently connected WebSockets clients.
   * -1 indicates that WS is unsupported in this build.
   */
  ws: number;
}
