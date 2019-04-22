/**
 * @Name: app reducers
 * @Description:
 * @author RiSusss
 * @date 2019-04-20
 */
import { createReducer } from "Utils";
import { updateNewsboard } from "./newsboardReducer";

const handlersMap = {
  UPDATE_NEWSBOARD: updateNewsboard
};

export default createReducer(handlersMap, { newsboard: {} });
