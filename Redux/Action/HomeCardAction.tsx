import Axios from "axios";
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
} from "../Constant/HomeCardConstant";

export const listCards =
  () => async (dispatch: (arg0: { type: string; payload?: any }) => void) => {
    dispatch({
      type: CARD_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        "https://backend-nova.herokuapp.com/api/api-kits-cards?populate=*"
      );
      console.log(data);
      dispatch({ type: CARD_LIST_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({ type: CARD_LIST_FAIL, payload: error.message });
    }
  };

export const detailsCard =
  (id: any) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch({ type: CARD_DETAILS_REQUEST, payload: id });
    try {
      const { data } = await Axios.get(
        `https://backend-nova.herokuapp.com/api/sections/${id}?populate=*`
      );
      dispatch({ type: CARD_DETAILS_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: CARD_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const FooterList =
  () => async (dispatch: (arg0: { type: string; payload?: any }) => void) => {
    dispatch({ type: FOOTER_LIST_REQUEST });
    try {
      const { data } = await Axios.get(
        `https://backend-nova.herokuapp.com/api/footers?populate=*`
      );
      dispatch({ type: FOOTER_LIST_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: FOOTER_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const SidebarList =
  () => async (dispatch: (arg0: { type: string; payload?: any }) => void) => {
    dispatch({ type: SIDEBAR_LIST_REQUEST });
    try {
      const { data } = await Axios.get(
        `https://backend-nova.herokuapp.com/api/sidebar-collections?populate=*`
      );
      dispatch({ type: SIDEBAR_LIST_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: SIDEBAR_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
