const request = require("request-promise");


const doglist = {
    method: "GET",
    uri: "https://dog.ceo/api/breeds/list/all",
    headers: {
      Accept: "application/json",
      "User-Agent":
        "Practicing Javascript Actions on Github by getting a list of all dog breeds"
    },
    json: true
};


async function getDogList(){
    const res = await request(doglist);
    return res.dogbreed;
}

module.exports = getDogList;