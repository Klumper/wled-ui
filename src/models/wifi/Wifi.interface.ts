/**
 * Interface for the current signal strength
 * @interface WifiInterface
 */
export interface WifiInterface {
  /**
   * The BSSID of the currently connected network.
   */
  bssid: string;
  /**
   * The current WiFi channel.
   */
  channel: number;
  /** UNKNOWN */
  rssi: number;
  /**
   * Relative signal quality of the current connection.
   */
  signal: number;
};