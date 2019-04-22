/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-04-20
 */

export const updateNewsboard = (state, action) => {
  const { title = "", content = "", type = "normal" } = action.news;
  return {
    ...state,
    newsboard: {
      title,
      content,
      type
    }
  };
};
