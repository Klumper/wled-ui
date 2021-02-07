import { StateStateInterface } from '@/models/store';

/**
 * @name initialStateState
 * @description
 * The State state instance with the initial default values
 */
export const initialStateState: StateStateInterface = {
  loading: false,
  state: {
    on: false,
    bri: 0,
    transition: 0,
    ps: 0,
    pss: 0,
    pl: 0,
    ccnf: {
      min: 0,
      max: 0,
      time: 0,
    },
    nl: {
      on: false,
      dur: 0,
      fade: false,
      mode: 1,
      tbri: 0,
    },
    udpn: {
      send: false,
      recv: false
    },
    lor: 0,
    mainseg: 0,
    seg: [{
      id: 0,
      start: 0,
      stop: 0,
      len: 0,
      grp: 0,
      spc: 0,
      on: false,
      bri: 0,
      col: [
        [ 0, 0, 0 ],
      ],
      fx: 0,
      sx: 0,
      ix: 0,
      pal: 0,
      sel: true,
      rev: false,
      mi: false
    }],
  },
};

