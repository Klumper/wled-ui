export interface LocaleInfoInterface {
  /**
   * Friendly name of the locale, i.e. USA
   */
  locale: string;
  /**
   * The 2 char code used to build the icon name
   */
  flag: string;
  /**
   * If this locale is currently selected
   */
  selected: boolean;
}