import { InfoApiClientUrlsInterface } from '@/models/api-client/info';
import { StateApiClientUrlsInterface } from '@/models/api-client/state';
import { LocaleInfoInterface } from '@/models/localization/LocaleInfo.interface';

interface ThemeInfoInterface {
  id: string;
  name: string;
  icon: string;
  selected: boolean;
}

/**
 * @Name ConfigInterface
 * @description
 *
 */
export interface ConfigInterface {
  global: {
    // ... things that are not specific to a single app domain
  };

  locales: LocaleInfoInterface[];

  themes: ThemeInfoInterface[];

  httpClient: {
    tokenKey: string;
  };

  apiClient: {
    type: string;
  };

  info: {
    apiUrls: InfoApiClientUrlsInterface;
  };
  state: {
    apiUrls: StateApiClientUrlsInterface;
  };
  effect: {
    apiUrls: EffectApiClientUrlsInterface;
  };
  palette: {
    apiUrls: PaletteApiClientUrlsInterface;
  };
}