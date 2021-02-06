import { InfoStateInterface } from '@/models/store';

/**
 * @name initialInfoState
 * @description
 * The Items state instance with the initial default values
 */
export const initialInfoState: InfoStateInterface = {
  loading: false,
  info: {
    ver: '',
    vid: 0,
    leds: {
      count: 0,
      rgbw: false,
      wv: false,
      pin: [ 0 ],
      pwr: 0,
      maxpwr: 0,
      maxseg: 0,
      seglock: false,
    },
    str: false,
    name: '',
    udpport: 0,
    live: false,
    lm: '',
    lip: '',
    ws: 0,
    fxcount: 0,
    palcount: 0,
    wifi: {
      bssid: '',
      rssi: -68,
      signal: 64,
      channel: 6,
    },
    arch: '',
    core: '',
    lwip: 0,
    freeheap: 0,
    uptime: 0,
    opt: 0,
    brand: '',
    product: '',
    mac: '',
  },
};