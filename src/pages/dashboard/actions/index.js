/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-04-20
 */

export const getDashboardList = () => dispatch => {
  return new Promise(resolve => {
    setTimeout(() => {
      dispatch({
        type: "GET_DASHBOARD_LIST"
      });
      resolve();
    }, 3000);
  });
};
