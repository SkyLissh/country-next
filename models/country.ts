export default interface Country {
	name: string;
	nativeName: string;

	topLevelDomain: string;

	capital: string;
	population: number;

	continent: string;
	region: string;
	subregion: string;

	currencies?: Currency[];
	languages: Language[];

	borders?: string[];
	flags: Flag;
}

interface Currency {
	code: string;
	name: string;
	symbol: string;
}

interface Language {
	name: string;
	nativeName: string;

	iso639_1: string;
	iso639_2: string;
}

interface Flag {
	svg: string;
	png: string;
}
