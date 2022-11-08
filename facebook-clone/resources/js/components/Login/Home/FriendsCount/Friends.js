import axios from "axios";

const countFriends = async ($user) => {
    return await axios.get(`/count_friends/${$user}`);
};

export {
    countFriends
};
