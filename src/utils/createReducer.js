/**
 * @Name: reducer creator
 * @Description:
 * @author RiSusss
 * @date 2019-04-20
 */
import _get from "lodash/get";

const createReducer = (handlers, initialState = {}) => (
  state = initialState,
  action
) => {
  if (!action || typeof action.type !== "string") {
    return state;
  }
  const handler = _get(handlers, action.type);
  if (handler instanceof Function) {
    return handler(state, action);
  }
  return state;
};

export default createReducer;
