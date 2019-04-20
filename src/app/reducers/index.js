/**
 * @Name: app reducers
 * @Description:
 * @author RiSusss
 * @date 2019-04-20
 */
import { createReducer } from "Utils";
import { updateNotification } from "./notificationReducer";

const handlersMap = {
  UPDATE_NOTIFICATION: updateNotification
};

export default createReducer(handlersMap, {notification:{}});
