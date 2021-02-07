import { Module, MutationTree, ActionTree, GetterTree } from 'vuex';

import { MutationType, RootStateInterface, EffectStateInterface } from '@/models/store';

import { initialEffectState } from './initialState';

import { EffectType } from '@/models/effect';
import apiClient from '@/api-client';

/**
 * @name mutations
 * @description
 * Vuex Info mutations
 */
export const mutations: MutationTree<EffectStateInterface> = {
  loadingEffects(state: EffectStateInterface) {
    state.loading = true;
  },
  loadedEffects(state: EffectStateInterface, effects: EffectType[]) {
    state.effects = effects;
    state.loading = false;
  },
};

/**
 * @name actions
 * @description
 * Vuex Items actions
 */
export const actions: ActionTree<EffectStateInterface, RootStateInterface> = {
  async loadEffects({ commit }) {
    try {
      commit(MutationType.effect.loadingEffects);
      const data = await apiClient.effect.fetchEffect();
      commit(MutationType.effect.loadedEffects, data);
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
export const getters: GetterTree<EffectStateInterface, RootStateInterface> = {};

// create our Info store instance
const namespaced = true;
const state: EffectStateInterface = initialEffectState;

/**
 * @name effectState
 * @description
 * Vuex Info store
 */
export const effectState: Module<EffectStateInterface, RootStateInterface> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
