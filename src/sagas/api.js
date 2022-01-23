// const url = "https://jsonplaceholder.typicode.com/users";
const url = "http://localhost:8000/api/staffs";
const urlpost = "http://localhost:8000/api/staffs";
const urlDelete = "http://localhost:8000/api/staffs";

const fetchGetStaffs = () => {
    return fetch(url, {
        method: "GET",
    })
        .then((response) => response.json())
        .catch((error) => {
            throw error;
        });
};

const insertNewStaff = (staff) => {
    return fetch(urlpost, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            code: staff.code,
            name: staff.name,
            age: staff.age,
            address: staff.address,
            positions: staff.positions,
        })
    })
        .then((response) => response.json())
        .catch((error) => {
            throw error;
        });
};

const deleteStaff = (staffId) => {
    const url = `${urlDelete}/${staffId}`;
    return fetch(url, {
        method: "DELETE",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .catch((error) => {
            throw error;
        });
};

export const Api = {
    fetchGetStaffs,
    insertNewStaff,
    deleteStaff
}