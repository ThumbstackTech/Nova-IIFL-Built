export interface Home {
  bottomTag: any;
  button: any;
  subtitle: any;
  icon: any;
  title: string;
  section_data: SectionDatum[];
}

export interface SectionDatum {
  title: string;
  api_kits_cards: APIKitsCard[];
}

export interface APIKitsCard {
  rating: any;
  apiType: any;
  users: any;
  roi: any;
  investment: null;
  icon: any;
  attributes: any;
  url: any;
  title: string;
  subTitle: string;
  cardTag: string;
  subTag: string;
  desc: string;
  filterTag: string;
  avatar: BgSVG[];
  descImg: BgSVG;
  bgSvg: BgSVG;
  topRightCornerImg: BgSVG;
  points: Point[];
  api_info: APIInfo;
  downloads_info: DownloadsInfo;
  investment_info: InvestmentInfo;
  rating_info: RatingInfo;
  return_info: ReturnInfo;
  links: Link[];
  response_info: null;
  success_info: SuccessInfo;
}

export interface APIInfo {
  title: string;
  tag: string;
  titleTag: string;
  api: number;
  apiCallsAvg: number;
  icon: BgSVG;
}

export interface BgSVG {
  url: string;
}

export interface DownloadsInfo {
  title: string;
  tag: string;
  downloadTag: string;
  downloadsCount: number;
  icon: BgSVG;
}

export interface InvestmentInfo {
  title: string;
  tag: string;
  investmentTag: string;
  investmentAmount: string;
  icon: BgSVG;
}

export interface Link {
  title: string;
  href: string;
  icon: BgSVG;
}

export interface Point {
  title: string;
  tag: string;
  sortDesc: string;
  bg: BgSVG;
  bgSvg: BgSVG;
  icon: BgSVG;
}

export interface RatingInfo {
  title: string;
  tag: string;
  ratingTag: string;
  ratingCount: string;
  rating: string;
  icon: BgSVG;
}

export interface ReturnInfo {
  title: string;
  tag: string;
  percentageReturn: number;
}

export interface SuccessInfo {
  title: string;
  tag: string;
  successRate: number;
  icon: BgSVG;
}
export interface ResponseInfo {
  title: string;
  tag: string;
  icon: BgSVG[] | BgSVG;
}
