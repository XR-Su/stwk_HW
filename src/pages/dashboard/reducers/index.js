/**
 * @Name: dashboard reducer register
 * @Description:
 * @author RiSusss
 * @date 2019-04-20
 */
import { createReducer } from "Utils";
import getDashBoardList from "./getDashBoardList";

const handlesMap = {
  GET_DASHBOARD_LIST: getDashBoardList
};

export default createReducer(handlesMap, { list: [] });
