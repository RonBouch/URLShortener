let urls = [];

//DELETE
export const deleteURL = (req, res) => {
    urls = urls.slice().filter((url) => url.shortenerURL !== req.params.url);
    res.send("URL Deleted!");
}


//GET 
export const getURLs = (req, res) => {
    res.send(urls)
}

export const getURL = (req, res) => {
    const getUrl = urls.filter((url) => url.shortenerURL === req.params.url);
    res.send(getUrl[0]);
}

//POST
export const addURL = (req, res) => {
    const urlDetails = req.body;
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

export const setCount = (req, res) => {
    const url = req.body.url;
    console.log("🚀 ~ file: URLApi.js ~ line 43 ~ setCount ~ url", url)
    let getCounter = urls.find(u => u.shortenerURL === url)
    console.log("🚀 ~ file: URLApi.js ~ line 45 ~ getCounter ~ getCounter", getCounter)
    if (getCounter) {
        getCounter.count = getCounter.count + 1
        console.log(urls)
        res.send(`${url} - count: ${getCounter.count}`);

    } else {
        res.send("URL is not found");
    }


}