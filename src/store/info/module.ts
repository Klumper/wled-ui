import { Module, MutationTree, ActionTree, GetterTree } from 'vuex';

import { MutationType, RootStateInterface, InfoStateInterface } from '@/models/store';

import { initialInfoState } from './initialState';

import { InfoInterface } from '@/models/info';
import apiClient from '@/api-client';

/**
 * @name mutations
 * @description
 * Vuex Info mutations
 */
export const mutations: MutationTree<InfoStateInterface> = {
  loadingInfo(state: InfoStateInterface) {
    state.loading = true;
  },
  loadedInfo(state: InfoStateInterface, info: InfoInterface) {
    state.info = info;
    state.loading = false;
  },
};

/**
 * @name actions
 * @description
 * Vuex Items actions
 */
export const actions: ActionTree<InfoStateInterface, RootStateInterface> = {
  async loadInfo({ commit }) {
    try {
      commit(MutationType.info.loadingItems);
      const data = await apiClient.info.fetchInfo();
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
export const getters: GetterTree<InfoStateInterface, RootStateInterface> = {};

// create our Info store instance
const namespaced = true;
const state: InfoStateInterface = initialInfoState;

/**
 * @name infoState
 * @description
 * Vuex Info store
 */
export const infoState: Module<InfoStateInterface, RootStateInterface> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
