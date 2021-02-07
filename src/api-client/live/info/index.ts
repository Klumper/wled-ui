import {
  InfoApiClientUrlsInterface,
  InfoApiClientInterface,
  InfoApiClientModel,
} from '@/models/api-client/info';

import { config } from '@/config';

// urls for this API client
const urls: InfoApiClientUrlsInterface = config.info.apiUrls;

// instantiate the ItemsApiClient pointing at the url that returns static json mock data
const infoApiClient: InfoApiClientInterface = new InfoApiClientModel(urls);
// export our instance
export default infoApiClient;