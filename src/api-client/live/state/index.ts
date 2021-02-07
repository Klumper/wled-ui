import {
  StateApiClientUrlsInterface,
  StateApiClientInterface,
  StateApiClientModel,
} from '@/models/api-client/state';

import { config } from '@/config';

// urls for this API client
const urls: StateApiClientUrlsInterface = config.state.apiUrls;

// instantiate the ItemsApiClient pointing at the url that returns static json mock data
const stateApiClient: StateApiClientInterface = new StateApiClientModel(urls);
// export our instance
export default stateApiClient;