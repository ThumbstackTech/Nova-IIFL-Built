export interface system {
    title: string;
    section_data?: (SectionDataEntity)[] | null;
  }
  export interface SectionDataEntity {
    title: string;
    api_kits_cards?: (ApiKitsCardsEntity | null)[] | null;
  }
  export interface ApiKitsCardsEntity {
    title: string;
    subTitle: string;
    cardTag?: string | null;
    subTag?: string | null;
    desc?: null;
    filterTag?: null;
    slug?: string | null;
    seotitle?: string | null;
    seometaDescription?: string | null;
    avatar?: (AvatarEntityOrTopRightCornerImgOrBgOrIcon)[] | null;
    descImg?: null;
    bg?: AvatarEntityOrTopRightCornerImgOrBgOrIcon1 | null;
    bgSvg?: null;
    topRightCornerImg?: AvatarEntityOrTopRightCornerImgOrBgOrIcon2 | null;
    points?: (PointsEntity | null)[] | null;
    api_info?: ApiInfo | null;
    investment_info?: null;
    rating_info?: RatingInfo | null;
    return_info?: null;
    links?: (null)[] | null;
    response_info?: null;
    success_info?: SuccessInfo | null;
    api_products?: (ApiProductsEntity | null)[] | null;
  }
  export interface AvatarEntityOrTopRightCornerImgOrBgOrIcon {
    url: string;
  }
  export interface AvatarEntityOrTopRightCornerImgOrBgOrIcon1 {
    url: string;
  }
  export interface AvatarEntityOrTopRightCornerImgOrBgOrIcon2 {
    url: string;
  }
  export interface PointsEntity {
    title: string;
    tag?: string | null;
    sortDesc?: null;
    bg?: null;
    bgSvg?: null;
    icon?: AvatarEntityOrTopRightCornerImgOrBgOrIcon3 | null;
  }
  export interface AvatarEntityOrTopRightCornerImgOrBgOrIcon3 {
    url: string;
  }
  export interface ApiInfo {
    title: string;
    tag?: null;
    titleTag: string;
    api: number;
    apiCallsAvg: number;
    icon?: null;
  }
  export interface RatingInfo {
    title: string;
    tag?: null;
    ratingTag?: null;
    ratingCount: string;
    rating: string;
    icon?: null;
  }
  export interface SuccessInfo {
    title: string;
    tag?: null;
    successRate: number;
    icon?: null;
  }
  export interface ApiProductsEntity {
    title: string;
    apiFormat: string;
    apiType?: null;
    desc: string;
    subTitle?: null;
    cardTag: string;
    subTag?: null;
  }
  