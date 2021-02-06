// group our constants in a namespace
// GEN-IMPORTS
import { InfoMutationType } from '../info/InfoMutationType';
import { LocalesMutationType } from '../locales/LocalesMutationType';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace MutationType {
  // GEN-NAMESPACE-CONSTS
  export const info = InfoMutationType;
  export const locales = LocalesMutationType;
  // as you add more domain-specific mutation types, add them here following the same convention
}