import { InfoApiClientUrlsInterface } from '@/models/api-client/info';
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

  items: {
    apiUrls: InfoApiClientUrlsInterface;
  };
}