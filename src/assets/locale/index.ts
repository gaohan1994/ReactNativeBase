import { default as zh } from './zh';
import { default as en } from './en';

export declare namespace LocaleInterface {
  interface InterfaceMethod {
    greeting: string;
  }
}

const locales: { [key: string]: LocaleInterface.InterfaceMethod } = {
  zh: zh,
  en: en,
};

export default locales;
