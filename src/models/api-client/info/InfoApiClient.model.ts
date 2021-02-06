import { HttpClient, HttpRequestParamsInterface } from '@/models/http-client';

import { InfoApiClientUrlsInterface } from './InfoApiClientUrls.interface';
import { InfoApiClientInterface } from './InfoApiClient.interface';
import { InfoInterface } from '@/models/info';

/**
 * @Name ItemsApiClientModel
 * @description
 * Implements the ItemsApiClientInterface interface
 */
export class InfoApiClientModel implements InfoApiClientInterface {
  private readonly urls!: InfoApiClientUrlsInterface

  constructor(urls: InfoApiClientUrlsInterface) {
    this.urls = urls;
  }

  fetchInfo (): Promise<InfoInterface> {
    const getParameters: HttpRequestParamsInterface = {
      url: this.urls.fetchInfo,
      requiresToken: false,
    };

    return HttpClient.get<InfoInterface>(getParameters);
  }
}