import {
  EffectApiClientUrlsInterface,
  EffectApiClientInterface,
  EffectApiClientModel,
} from '@/models/api-client/effect';

import { config } from '@/config';

// urls for this API client
const urls: EffectApiClientUrlsInterface = config.effect.apiUrls;

// instantiate the ItemsApiClient pointing at the url that returns static json mock data
const effectApiClient: EffectApiClientInterface = new EffectApiClientModel(urls);
// export our instance
export default effectApiClient;