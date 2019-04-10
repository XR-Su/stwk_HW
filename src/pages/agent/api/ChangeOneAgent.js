/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-04-10
 */
export default (id, body) =>
  new Promise(resolve => {
    fetch(`http://localhost:3001/agents/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(data => {
        resolve(data);
      });
  });
