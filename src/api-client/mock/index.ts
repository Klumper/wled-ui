import { ApiClientInterface } from '@/models/api-client/ApiClient.interface';
import infoApiClient from './info';

// create an instance of our main ApiClient that wraps the mock child clients
const apiMockClient: ApiClientInterface = {
  info: infoApiClient,
};
// export our instance
export default apiMockClient;