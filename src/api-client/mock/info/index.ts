import {
  InfoApiClientUrlsInterface,
  InfoApiClientInterface,
  InfoApiClientModel,
} from '@/models/api-client/info';

import { config } from '@/config';

// urls for this API client
const urls: InfoApiClientUrlsInterface = config.items.apiUrls;

// instantiate the ItemsApiClient pointing at the url that returns static json mock data
const itemsApiClient: InfoApiClientInterface = new InfoApiClientModel(urls);
// export our instance
export default itemsApiClient;