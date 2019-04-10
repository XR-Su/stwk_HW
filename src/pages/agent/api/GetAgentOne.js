/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-04-10
 */

export default id => new Promise(resolve => {
    fetch(`http://localhost:3001/agents/${id}`, {
        method: "get"
    })
        .then(res => res.json())
        .then(data => {
            resolve([data])
        });
});
