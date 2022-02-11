import { func } from 'joi';
import {Platform} from 'react-native'
import * as RNLocalize from 'react-native-localize';
import {translationForLocale, Locales} from './messages'

function determineBestLocale(locale) {
    if (Locales[locale]) {
        return Locales[locale];
    }

    const subIdx = locale.lastIndexOf('_');
    if(subIdx > 0) {
        return determineBestLocale(locale.substring(0, subIdx));
    }

    return Locales.en;
}

function iosDeviceLocale() {
    const locale = RNLocalize.getLocales()[0].languageCode;

    if (locale.lastIndexOf('-') > 0) {
        return locale;
    }

    return (
        RNLocalize.getLocales()[0].languageCode +
        '_' +
        RNLocalize.getLocales()[0].countryCode
    )
}

function androidDeviceLocale() {
    return (
        RNLocalize.getLocales()[0].languageCode +
        '_' +
        RNLocalize.getLocales()[0].countryCode
    )
}

export function deviceLocale() {
    return Platform.select({
        ios: iosDeviceLocale(),
        android: androidDeviceLocale()
    })
}

function localized(loomkey, ...args) {
    const locale = deviceLocale();

    const appStrings = translationForLocale(determineBestLocale(locale));

    let result =
        appStrings[loomkey] || translationForLocale(Locales.en)[loomkey];

    if (result) {
        result = result.replace(/%s\d+/g, r => String(args[r.slice(2) - 1]));
    }
    return result
}

export default localized;