import { Module, MutationTree, ActionTree, GetterTree } from 'vuex';

import { MutationType, RootStateInterface, PaletteStateInterface } from '@/models/store';

import { initialPaletteState } from './initialState';

import { PaletteType } from '@/models/palette';
import apiClient from '@/api-client';

/**
 * @name mutations
 * @description
 * Vuex Info mutations
 */
export const mutations: MutationTree<PaletteStateInterface> = {
  loadingPalettes(state: PaletteStateInterface) {
    state.loading = true;
  },
  loadedPalettes(state: PaletteStateInterface, palettes: PaletteType[]) {
    state.palettes = palettes;
    state.loading = false;
  },
};

/**
 * @name actions
 * @description
 * Vuex Items actions
 */
export const actions: ActionTree<PaletteStateInterface, RootStateInterface> = {
  async loadPalettes({ commit }) {
    try {
      commit(MutationType.info.loadingItems);
      const data = await apiClient.palette.fetchPalette();
      commit(MutationType.info.loadedItems, data);
    } catch (error) {
      commit(MutationType.info.loadedItems, {});
    }
  },
};


/**
 * @name getters
 * @description
 * Vuex Info getters
 */
export const getters: GetterTree<PaletteStateInterface, RootStateInterface> = {};

// create our Info store instance
const namespaced = true;
const state: PaletteStateInterface = initialPaletteState;

/**
 * @name paletteState
 * @description
 * Vuex Info store
 */
export const paletteState: Module<PaletteStateInterface, RootStateInterface> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
