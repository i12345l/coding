const settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://solved.ac/api/v3/user/show",
  "method": "GET",
  "headers": {
    "Content-Type": "application/json"
  }
};

$.ajax(settings).done(function (response) {
  console.log(response);
});