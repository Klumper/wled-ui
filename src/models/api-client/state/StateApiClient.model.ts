import { HttpClient, HttpRequestParamsInterface } from '@/models/http-client';

import { StateApiClientUrlsInterface } from './StateApiClientUrls.interface';
import { StateApiClientInterface } from './StateApiClient.interface';
import { StateInterface } from '@/models/state';

/**
 * @Name ItemsApiClientModel
 * @description
 * Implements the ItemsApiClientInterface interface
 */
export class StateApiClientModel implements StateApiClientInterface {
  private readonly urls!: StateApiClientUrlsInterface

  constructor(urls: StateApiClientUrlsInterface) {
    this.urls = urls;
  }

  fetchState (): Promise<StateInterface> {
    const getParameters: HttpRequestParamsInterface = {
      url: this.urls.fetchState,
      requiresToken: false,
    };

    return HttpClient.get<StateInterface>(getParameters);
  }
}