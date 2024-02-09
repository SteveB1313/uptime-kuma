const { MonitorType } = require("./monitor-type");
const { UP } = require("../../src/util");
const dayjs = require("dayjs");
const { checkNCPA } = require("../util-server");

class NCPAMonitorType extends MonitorType {
    
    name = "ncpa";

    /**
     * @inheritdoc
     */
    async check(monitor, heartbeat, _server) {
        let startTime = dayjs().valueOf();
        console.log(monitor.url);
        checkNCPA(monitor.url);
    }
}

module.exports = {
    NCPAMonitorType,
};