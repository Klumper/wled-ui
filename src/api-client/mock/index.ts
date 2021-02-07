import { ApiClientInterface } from '@/models/api-client/ApiClient.interface';
import infoApiClient from './info';
import stateApiClient from './state';
import effectApiClient from './effect';
import paletteApiClient from './palette';

// create an instance of our main ApiClient that wraps the mock child clients
const apiMockClient: ApiClientInterface = {
  info: infoApiClient,
  state: stateApiClient,
  effect: effectApiClient,
  palette: paletteApiClient,
};
// export our instance
export default apiMockClient;