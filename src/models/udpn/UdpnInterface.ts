/**
 * Interface for the udpn settings
 * @interface UdpnInterface
 */
export interface UdpnInterface {
  /** 
   * Send WLED broadcast (UDP sync) packet on state change
   */
  recv: boolean;
  /**
   * Receive broadcast packets
   */
  send: boolean;
}