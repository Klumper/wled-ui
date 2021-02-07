import { HttpClient, HttpRequestParamsInterface } from '@/models/http-client';

import { PaletteApiClientUrlsInterface } from './PaletteApiClientUrls.interface';
import { PaletteApiClientInterface } from './PaletteApiClient.interface';
import { PaletteType } from '@/models/palette';

/**
 * @Name PaletteApiClientModel
 * @description
 * Implements the PaletteApiClientInterface interface
 */
export class PaletteApiClientModel implements PaletteApiClientInterface {
  private readonly urls!: PaletteApiClientUrlsInterface

  constructor(urls: PaletteApiClientUrlsInterface) {
    this.urls = urls;
  }

  fetchPalette (): Promise<PaletteType[]> {
    const getParameters: HttpRequestParamsInterface = {
      url: this.urls.fetchPalette,
      requiresToken: false,
    };

    return HttpClient.get<PaletteType[]>(getParameters);
  }
}