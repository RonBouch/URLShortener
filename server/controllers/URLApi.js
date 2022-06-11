// import { v4 as uuid } from 'uuid';

let urls = [];

export const deleteURL = (req, res) => {
    urls = urls.slice().filter((url) => url.shortenerURL !== req.params.url);
    res.send("URL Deleted!");
}

export const getURLs = (req, res) => {
    res.send(urls)
}

// export const getURL = (req, res) => {
//     const getUrl = urls.filter((url) => url === req.params);
//     res.send(getUrl);
// }

export const addURL = (req, res) => {
    const urlDetails = req.body;
    console.log("🚀 ~ file: URLApi.js ~ line 21 ~ addURL ~ req.body", urls)
    console.log("🚀 ~ file: URLApi.js ~ line 21 ~ addURL ~ urlDetails", urlDetails)
    if (urlDetails) {
        if (urls.filter(url => url.shortenerURL === urlDetails.shortenerURL).length > 0) {
            // res.send("URL already exists");
            res.send({ msg: 'URL already exists', errCode: -1 });
        } else {
            urls.push(urlDetails);
            res.send({ msg: "URL Added successfully" });

            // res.send("URL Added successfully");
        }
    } else {
        res.send("URL Added successfully");
    }

}
