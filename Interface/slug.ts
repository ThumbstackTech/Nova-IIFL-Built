export interface APIKitPage {
    data: APIKitPageData;
    meta: Meta;
}

export interface APIKitPageData {
    id:                 number;
    title:              string;
    cardTag:            string;
    subTag:             string;
    subTitle:           string;
    shortDesc:          string;
    description:        string;
    cardType:           string;
    slug:               string;
    seoTitle:           string;
    seoMetaDescription: string;
    avatar:             Avatar;
    topRightCornerImg:  Avatar;
    rating:             Rating;
    response:           Response;
    success:            Success;
    aboutApiKit:        AboutAPIKit;
    integrationSupport: IntegrationSupport;
    buildGuide:         AboutAPIKit;
    api_pages:          APIPage[];
}

export interface AboutAPIKit {
    id:       number;
    title:    string;
    subTitle: string;
    bg?:      Bg;
}

export interface Bg {
    data: BgData;
}

export interface BgData {
    id:         number;
    attributes: Attributes;
}

export interface Attributes {
    url: string;
}

export interface APIPage {
    id:          number;
    title:       string;
    apiType:     string;
    apiLang:     string;
    description: string;
    api:         API;
    success:     Success;
    response:    Response;
}

export interface API {
    id:          number;
    title:       string;
    apiCallsAvg: string;
}

export interface Response {
    id:    number;
    title: string;
    tag:   string;
}

export interface Success {
    id:          number;
    title:       string;
    successRate: number;
}

export interface Avatar {
    id:  number;
    url: string;
}

export interface IntegrationSupport {
    id:    number;
    title: string;
    kits:  Kit[];
}

export interface Kit {
    id:    number;
    title: string;
    icon:  Bg;
}

export interface Rating {
    id:          number;
    title:       string;
    ratingCount: string;
    rating:      number;
}

export interface Meta {
}
