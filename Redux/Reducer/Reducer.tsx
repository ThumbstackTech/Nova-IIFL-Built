import {
  CARD_DETAILS_FAIL,
  CARD_DETAILS_REQUEST,
  CARD_DETAILS_SUCCESS,
  CARD_LIST_FAIL,
  CARD_LIST_REQUEST,
  CARD_LIST_SUCCESS,
  FOOTER_LIST_FAIL,
  FOOTER_LIST_REQUEST,
  FOOTER_LIST_SUCCESS,
  SIDEBAR_LIST_FAIL,
  SIDEBAR_LIST_REQUEST,
  SIDEBAR_LIST_SUCCESS,
  // @ts-ignore
} from "../Constant/HomeCardConstant";

export const CardListReducer = (
  state = { loading: true, data: [] },
  /** @type {{ type: any; payload: any; }} */ action: {
    type: any;
    payload: any;
  }
) => {
  switch (action.type) {
    case CARD_LIST_REQUEST:
      return { loading: true };
    case CARD_LIST_SUCCESS:
      return { loading: false, data: action.payload };
    case CARD_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const CardDetailsReducer = (
  state = { data: {}, loading: true },
  /** @type {{ type: any; payload: any; }} */ action: {
    type: any;
    payload: any;
  }
) => {
  switch (action.type) {
    case CARD_DETAILS_REQUEST:
      return { loading: true };
    case CARD_DETAILS_SUCCESS:
      return { loading: false, data: action.payload };
    case CARD_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const FooterListReducer = (
  state = { loading: true, data: [] },
  /** @type {{ type: any; payload: any; }} */ action: {
    type: any;
    payload: any;
  }
) => {
  switch (action.type) {
    case FOOTER_LIST_REQUEST:
      return { loading: true };
    case FOOTER_LIST_SUCCESS:
      return { loading: false, data: action.payload };
    case FOOTER_LIST_FAIL:
      return { loading: false, data: action.payload };
    default:
      return state;
  }
};
export const SidebarListReducer = (
  state = { loading: true, data: [] },
  /** @type {{ type: any; payload: any; }} */ action: {
    type: any;
    payload: any;
  }
) => {
  switch (action.type) {
    case SIDEBAR_LIST_REQUEST:
      return { loading: true };
    case SIDEBAR_LIST_SUCCESS:
      return { loading: false, data: action.payload };
    case SIDEBAR_LIST_FAIL:
      return { loading: false, data: action.payload };
    default:
      return state;
  }
};
