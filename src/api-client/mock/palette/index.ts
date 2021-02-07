import {
  PaletteApiClientUrlsInterface,
  PaletteApiClientInterface,
  PaletteApiClientModel,
} from '@/models/api-client/palette';

import { config } from '@/config';

// urls for this API client
const urls: PaletteApiClientUrlsInterface = config.palette.apiUrls;

// instantiate the ItemsApiClient pointing at the url that returns static json mock data
const paletteApiClient: PaletteApiClientInterface = new PaletteApiClientModel(urls);
// export our instance
export default paletteApiClient;