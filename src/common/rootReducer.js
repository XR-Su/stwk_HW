/**
 * @Name: reducer register
 * @Description:
 * @author RiSusss
 * @date 2019-04-20
 */
import { combineReducers } from "redux";
import dashboard from "Pages/dashboard/reducers";
import app from "App/reducers";

const handlersMap = {
  app,
  dashboard
};
export default combineReducers(handlersMap);
