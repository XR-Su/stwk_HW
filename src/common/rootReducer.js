/**
 * @Name: reducer register
 * @Description:
 * @author RiSusss
 * @date 2019-04-20
 */
import { combineReducers } from "redux";
import dashboard from "Pages/dashboard/reducers";

const reducerMap = {
  dashboard
};
export default combineReducers(reducerMap);
