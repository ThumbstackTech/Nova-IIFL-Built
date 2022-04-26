import {
	APIInfo,
	BgSVG,
	InvestmentInfo,
	RatingInfo,
	ResponseInfo,
	ReturnInfo,
	SuccessInfo,
} from './HomeInterface';

export interface APIProduct {
	title: string;
	apiFormat: string;
	apiType: string;
	desc: string;
	subTitle: string;
	cardTag: string;
	subTag: string;
	section_data: SectionDatum[];
	api_info: APIInfo;
	success_info: SuccessInfo;
	headers_code: HeadersCode;
	res_code: Code;
	req_code: Code;
	links: Link[];
	paras: Para[];
}

export interface HeadersCode {
	title: string;
	documentation_codes: DocumentationCode[];
}

export interface DocumentationCode {
	title: string;
	key: string;
	field: string;
	mandatory: string | number;
	description: string;
	values: number | string;
	typeNameTag: string;
}

export interface Link {
	title: string;
	href: string;
}

export interface Para {
	title: string;
	desc: Desc[];
}

export interface Desc {
	id: number;
	__component: string;
	title: string;
	desc: string;
}

export interface Code {
	title: string;
}

export interface SectionDatum {
	title: string;
	api_kits_cards: APIKitsCard[];
}

export interface APIKitsCard {
	title: string;
	subTitle: string;
	cardTag: string;
	subTag: string;
	desc: string;
	filterTag: string;
	avatar: BgSVG;
	descImg: BgSVG;
	bgSvg: BgSVG;
	topRightCornerImg: BgSVG;
	points: any[];
	api_info: APIInfo;
	investment_info: InvestmentInfo;
	rating_info: RatingInfo;
	return_info: ReturnInfo;
	links: Link[];
	response_info: ResponseInfo;
	success_info: SuccessInfo;
}
