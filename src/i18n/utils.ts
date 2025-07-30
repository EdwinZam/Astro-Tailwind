import en from './en.json';
import es from './es.json';

const LANG = {
	en,
	es
};

export const getI18N = ({ currentLocale = 'en' }) => {
	if (!Object.keys(LANG).includes(currentLocale)) {
		return LANG.en;
	}

	return LANG[currentLocale];
}