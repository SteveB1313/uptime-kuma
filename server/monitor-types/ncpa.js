const { MonitorType } = require("./monitor-type");
const { UP } = require("../../src/util");
const dayjs = require("dayjs");
const axios = require("axios");

class NCPAMonitorType extends MonitorType {
    
    name = "ncpa";

    /**
     * @inheritdoc
     */
    async check(monitor, heartbeat, _server) {
        let startTime = dayjs().valueOf();
        heartbeat.ping = dayjs().valueOf() - startTime;
        let value;
        console.log(monitor.url);
        axios.get(monitor.url)
        .then(function (response) {
            console.log(response.data.percent[0][0]);
            value = response.data.percent[0][0]
            heartbeat.msg = value;
            heartbeat.status = UP;
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function() {
            console.log("Finished checking NCPA");
        });
        
    }
}

module.exports = {
    NCPAMonitorType,
};