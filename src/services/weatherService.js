
var weatherService = { endpoint: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline" };

weatherService.getByZip = (zip) => {
    const config = {
        method: "GET",
        url: `${weatherService.endpoint}/${zip}/?key=${"EEUQXXFU9AUMCBX7ED5XUPF89"}`,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };
    return axios(config)
    .then((response) => { return response})
};

weatherService.getBySearch = (payload) => {
    const config = {
        method: "GET",
        url: `${weatherService.endpoint}/${payload}/?key=${"EEUQXXFU9AUMCBX7ED5XUPF89"}`,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };
    return axios(config)
    .then((response) => { return response})
};

weatherService.getByDate = (payload, date1, date2) => {
    const config = {
        method: "GET",
        url: `${weatherService.endpoint}/${payload}/${date1}/${date2}/?key=${"EEUQXXFU9AUMCBX7ED5XUPF89"}`,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };
    return axios(config)
    .then((response) => { return response})
} // date format needs to be YYYY-MM-DD // Will need a calendar format for this


