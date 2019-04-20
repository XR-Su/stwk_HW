/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-04-20
 */

export const updateNotification = (state, action) => {
  const { title = "", content = "", type = "normal" } = action.notification;
  return {
    ...state,
    notification: {
      title,
      content,
      type
    }
  };
};
