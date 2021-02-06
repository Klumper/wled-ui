import { ApiClientInterface } from '@/models/api-client/ApiClient.interface';
import infoApiClient from './info';

// create an instance of our main ApiClient that wraps the live child clients
const apiLiveClient: ApiClientInterface = {
  info: infoApiClient,
};
// export our instance
export default apiLiveClient;