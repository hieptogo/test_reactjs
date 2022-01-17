// const url = "https://jsonplaceholder.typicode.com/users";
const url = "http://localhost:8000/api/staffs";

const fetchGetStaffs = () => {
    return fetch(url, {
        method: "GET",
    })
        .then((response) => response.json())
        .catch((error) => {
            throw error;
        });
};

export default fetchGetStaffs;