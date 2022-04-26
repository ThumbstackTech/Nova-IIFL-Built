export interface data {
    title: string;
    section_data?: (SectionDataEntity)[] | null;
    api_kits_cards?: (ApiKitsCardsEntity)[] | null;
  }
  export interface SectionDataEntity {
    title: string;
    api_kits_cards?: (ApiKitsCardsEntity1)[] | null;
  }
  export interface ApiKitsCardsEntity1 {
    title: string;
    subTitle?: string | null;
    cardTag?: null;
    subTag?: string | null;
    desc?: null;
    filterTag?: null;
    avatar?: null;
    descImg: IconOrDescImg;
    bgSvg?: null;
    topRightCornerImg?: null;
    points?: (PointsEntity | null)[] | null;
    api_info?: null;
    investment_info?: null;
    rating_info?: null;
    return_info?: null;
    links?: (LinksEntity)[] | null;
    response_info?: null;
    success_info?: null;
  }
  export interface IconOrDescImg {
    url: string;
  }
  export interface PointsEntity {
    title: string;
    tag?: null;
    sortDesc?: null;
    bg?: null;
    bgSvg?: null;
    icon: IconOrDescImg;
  }
  export interface LinksEntity {
    title: string;
    href?: null;
    icon?: null;
  }
  export interface ApiKitsCardsEntity {
    title: string;
    subTitle: string;
    cardTag?: null;
    subTag?: null;
    desc?: null;
    filterTag?: null;
    avatar?: null;
    descImg: IconOrDescImg;
    bgSvg?: null;
    topRightCornerImg?: null;
    points?: (null)[] | null;
    api_info?: null;
    investment_info?: null;
    rating_info?: null;
    return_info?: null;
    response_info?: null;
    success_info?: null;
    links?: (null)[] | null;
  }
  