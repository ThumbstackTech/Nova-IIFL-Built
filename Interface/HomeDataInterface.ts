export interface HomeData {
  data: Data;
  meta: Meta;
}
export interface Data {
  id: number;
  title: string;
  how_to_use: HowToUse;
  languages: Languages;
  apiKit: ApiKit;
}
export interface HowToUse {
  id: number;
  title: string;
  subtitle: string;
  bottomCard?: (BottomCardEntity)[] | null;
}
export interface BottomCardEntity {
  id: number;
  __component: string;
  title: string;
  bottomTag?: string | null;
  topRightCornerImg?: IconOrTopRightCornerImgOrBgMediaOrBgOrAvatar | null;
  link: Link;
  icon?: (IconEntity)[] | null;
  subtitle?: string | null;
  bgMedia?: IconOrTopRightCornerImgOrBgMediaOrBgOrAvatar1 | null;
  bg?: IconOrTopRightCornerImgOrBgMediaOrBgOrAvatar2 | null;
}
export interface IconOrTopRightCornerImgOrBgMediaOrBgOrAvatar {
  data: Data1;
}
export interface Data1 {
  id: number;
  attributes: Attributes;
}
export interface Attributes {
  url: string;
}
export interface Link {
  id: number;
  button: string;
  href?: null;
}
export interface IconEntity {
  id: number;
  title: string;
  icon: IconOrTopRightCornerImgOrBgMediaOrBgOrAvatar3;
}
export interface IconOrTopRightCornerImgOrBgMediaOrBgOrAvatar3 {
  data: Data1;
}
export interface IconOrTopRightCornerImgOrBgMediaOrBgOrAvatar1 {
  data: Data1;
}
export interface IconOrTopRightCornerImgOrBgMediaOrBgOrAvatar2 {
  data: Data1;
}
export interface Languages {
  id: number;
  title: string;
  language_supports: LanguageSupports;
}
export interface LanguageSupports {
  map(arg0: (lang: any, idx: import("react").Key | null | undefined) => JSX.Element): import("react").ReactNode;
  attributes: any;
  data?: (DataEntity)[] | null;
}
export interface DataEntity {
  id: number;
  attributes: Attributes1;
}
export interface Attributes1 {
  title: string;
  bottomTag?: string | null;
  avatar: IconOrTopRightCornerImgOrBgMediaOrBgOrAvatar3;
}
export interface ApiKit {
  id: number;
  title: string;
  description: string;
  api_kit_cards: ApiKitCards;
}
export interface ApiKitCards {
  data?: (DataEntity1)[] | null;
}
export interface DataEntity1 {
  id: number;
  attributes: Attributes2;
}
export interface Attributes2 {
  title: string;
  cardTag?: string | null;
  subTag: string;
  subTitle: string;
  shortDesc?: string | null;
  description?: string | null;
  cardType?: string | null;
  slug?: string | null;
  seoTitle?: null;
  seoMetaDescription?: null;
  avatar: IconOrTopRightCornerImgOrBgMediaOrBgOrAvatar3;
  topRightCornerImg: IconOrTopRightCornerImgOrBgMediaOrBgOrAvatar3;
  rating?: Rating | null;
  success?: Success | null;
  api_pages: ApiPages;
}
export interface Rating {
  id: number;
  title?: string | null;
  ratingVal?: null;
  ratingCount?: number | null;
}
export interface Success {
  id: number;
  title: string;
  successRate: number;
}
export interface ApiPages {
  data?: (DataEntity2 | null)[] | null;
}
export interface DataEntity2 {
  id: number;
  attributes: Attributes3;
}
export interface Attributes3 {
  title: string;
}
export interface Meta {
}
