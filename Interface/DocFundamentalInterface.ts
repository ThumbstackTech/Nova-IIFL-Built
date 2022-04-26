import {
  APIInfo,
  BgSVG,
  InvestmentInfo,
  RatingInfo,
  ResponseInfo,
  ReturnInfo,
  SuccessInfo,
} from "./HomeInterface";

export interface DocFundamental {
  data: any;
  page: any;
  title: string;
  subTag: string;
  cardTag: string;
  section_data: SectionDatum[];
  links: Link[];
  paras: Para[];
  points: Point[];
  api_kits_cards: APIKitsCard[];
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
  points: Point[];
  api_info: APIInfo;
  investment_info: InvestmentInfo;
  rating_info: RatingInfo;
  return_info: ReturnInfo;
  links: Link[];
  response_info: ResponseInfo;
  success_info: SuccessInfo;
}

export interface Point {
  description: string;
  title: string;
  tag: null | string;
  sortDesc: null;
  bg: null;
  bgSvg: null;
  icon: BgSVG;
}
export interface Link {
  title: string;
  href: string;
  icon: BgSVG;
}
