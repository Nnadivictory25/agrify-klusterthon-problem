import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}


export const africanCountries = [
	{ name: 'Algeria', code: 'DZ' },
	{ name: 'Angola', code: 'AO' },
	{ name: 'Benin', code: 'BJ' },
	{ name: 'Botswana', code: 'BW' },
	{ name: 'Burkina Faso', code: 'BF' },
	{ name: 'Burundi', code: 'BI' },
	{ name: 'Cabo Verde', code: 'CV' },
	{ name: 'Cameroon', code: 'CM' },
	{ name: 'Central African Republic', code: 'CF' },
	{ name: 'Chad', code: 'TD' },
	{ name: 'Comoros', code: 'KM' },
	{ name: 'Congo (Congo-Brazzaville)', code: 'CG' },
	{ name: 'Côte d\'Ivoire', code: 'CI' },
	{ name: 'Djibouti', code: 'DJ' },
	{ name: 'Egypt', code: 'EG' },
	{ name: 'Equatorial Guinea', code: 'GQ' },
	{ name: 'Eritrea', code: 'ER' },
	{ name: 'Eswatini', code: 'SZ' },
	{ name: 'Ethiopia', code: 'ET' },
	{ name: 'Gabon', code: 'GA' },
	{ name: 'Gambia', code: 'GM' },
	{ name: 'Ghana', code: 'GH' },
	{ name: 'Guinea', code: 'GN' },
	{ name: 'Guinea-Bissau', code: 'GW' },
	{ name: 'Kenya', code: 'KE' },
	{ name: 'Lesotho', code: 'LS' },
	{ name: 'Liberia', code: 'LR' },
	{ name: 'Libya', code: 'LY' },
	{ name: 'Madagascar', code: 'MG' },
	{ name: 'Malawi', code: 'MW' },
	{ name: 'Mali', code: 'ML' },
	{ name: 'Mauritania', code: 'MR' },
	{ name: 'Mauritius', code: 'MU' },
	{ name: 'Morocco', code: 'MA' },
	{ name: 'Mozambique', code: 'MZ' },
	{ name: 'Namibia', code: 'NA' },
	{ name: 'Niger', code: 'NE' },
	{ name: 'Nigeria', code: 'NG' },
	{ name: 'Rwanda', code: 'RW' },
	{ name: 'Sao Tome and Principe', code: 'ST' },
	{ name: 'Senegal', code: 'SN' },
	{ name: 'Seychelles', code: 'SC' },
	{ name: 'Sierra Leone', code: 'SL' },
	{ name: 'Somalia', code: 'SO' },
	{ name: 'South Africa', code: 'ZA' },
	{ name: 'South Sudan', code: 'SS' },
	{ name: 'Sudan', code: 'SD' },
	{ name: 'Tanzania', code: 'TZ' },
	{ name: 'Togo', code: 'TG' },
	{ name: 'Tunisia', code: 'TN' },
	{ name: 'Uganda', code: 'UG' },
	{ name: 'Zambia', code: 'ZM' },
	{ name: 'Zimbabwe', code: 'ZW' }
  ];
  
  export const searchCountryCodeByName = (countryName: string) => {
	const country = africanCountries.find(c => c.name.toLowerCase() === countryName.toLowerCase());
	return country ? country.code : null;
  };