import { HttpClient, HttpRequestParamsInterface } from '@/models/http-client';

import { EffectApiClientUrlsInterface } from './EffectApiClientUrls.interface';
import { EffectApiClientInterface } from './EffectApiClient.interface';
import { EffectType } from '@/models/effect';

/**
 * @Name ItemsApiClientModel
 * @description
 * Implements the ItemsApiClientInterface interface
 */
export class EffectApiClientModel implements EffectApiClientInterface {
  private readonly urls!: EffectApiClientUrlsInterface

  constructor(urls: EffectApiClientUrlsInterface) {
    this.urls = urls;
  }

  fetchEffect (): Promise<EffectType[]> {
    const getParameters: HttpRequestParamsInterface = {
      url: this.urls.fetchEffect,
      requiresToken: false,
    };

    return HttpClient.get<EffectType[]>(getParameters);
  }
}