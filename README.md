# 📊 KNIT-Result-Stats

## Objective:
This project aims to provide year-wise & cumulative result stats to the students of Kamla Nehru Institute Of Technology, by using the 
KNIT-Result-API code for the same can be found <a href = "https://github.com/ansi22/KNIT-Result-API">here</a> (API Credits: <a href = "https://github.com/karandeep09">karandeep09</a> )

## Quick-Setup

- Clone the repository **'KNIT-Result'** by clicking on the Clone button `https://github.com/ansi22/KNIT-Result.git`. Alternatively, download the repository.
- Navigate to the folder `$ cd KNIT-Result`
- Install all the required dependencies `$ npm i`
- Find following code in `App.js` file in root directory:
 ```jsx
const fetch_api = async () => {
        axios
          .get(`/api/cache?roll=${rollno}`, {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-type": "application/json; charset=UTF-8",
            },
          })
          .then((res) => {
            const resp = res.data;
            console.log(resp);
            setValue(resp);
          })
      };
```
- Remove prefix `/api` from
 ``` jsx
 axios.get(`/api/cache?roll=${rollno},...
 ```
- Remove file `_redirects` from public folder
- To run the application: `$ npm start`
- Inside your browser, navigate to the link `localhost:3000`

## Learning-Point
- Proxy-server works fine in the local development only.
- Refer to <a href = "https://create-react-app.dev/docs/proxying-api-requests-in-development/#invalid-host-header-errors-after-configuring-proxy">react docs</a> or 
<a href = "https://docs.netlify.com/routing/redirects/rewrites-proxies/">netlify docs</a> incase of
  Proxying API Requests in Development mode.
<hr/>
