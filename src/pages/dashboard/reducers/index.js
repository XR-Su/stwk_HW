/**
 * @Name: dashboard reducer register
 * @Description:
 * @author RiSusss
 * @date 2019-04-20
 */
import { createReducer } from "Utils";
import { dashBoardListReducer } from "./dashBoardListReducer";

const handlesMap = {
  GET_DASHBOARD_LIST: dashBoardListReducer
};

export default createReducer(handlesMap, { list: [] });
