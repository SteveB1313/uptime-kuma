const axios = require("axios");
axios.get("https://10.50.70.82:5693/api/cpu/percent?aggregate=avg&token=wrec_nagios_token")
        .then(function (response) {
            console.log(response.data.percent[0][0]);
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function() {
            console.log("Finished checking NCPA");
        });