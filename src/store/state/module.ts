import { Module, MutationTree, ActionTree, GetterTree } from 'vuex';

import { MutationType, RootStateInterface, StateStateInterface } from '@/models/store';

import { initialStateState } from './initialState';

import { StateInterface } from '@/models/state';
import apiClient from '@/api-client';

/**
 * @name mutations
 * @description
 * Vuex State mutations
 */
export const mutations: MutationTree<StateStateInterface> = {
  loadingState(state: StateStateInterface) {
    state.loading = true;
  },
  loadedState(state: StateStateInterface, payload: StateInterface) {
    state.state = payload;
    state.loading = false;
  },
};

/**
 * @name actions
 * @description
 * Vuex Items actions
 */
export const actions: ActionTree<StateStateInterface, RootStateInterface> = {
  async loadState({ commit }) {
    try {
      commit(MutationType.state.loadingState);
      const data = await apiClient.state.fetchState();
      commit(MutationType.state.loadedState, data);
    } catch (error) {
      commit(MutationType.state.loadedState, {});
    }
  },
};


/**
 * @name getters
 * @description
 * Vuex State getters
 */
export const getters: GetterTree<StateStateInterface, RootStateInterface> = {};

// create our State store instance
const namespaced = true;
const state: StateStateInterface = initialStateState;

/**
 * @name stateState
 * @description
 * Vuex State store
 */
export const stateState: Module<StateStateInterface, RootStateInterface> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
