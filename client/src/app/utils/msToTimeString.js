const msToTimeString = function (ms) {

    const t = [0, 0, 0];
    const negative = ms < 0;
    let timeString = '';
    ms = Math.abs(ms);

    t[0] = Math.floor(ms / 1000 / 60 / 60);
    t[1] = Math.floor(ms / 1000 / 60) % 60;
    t[2] = (ms / 1000) % 60;

    timeString = (t[0] > 0 ? t[0] + ":" : "") + (t[1] < 10 ? "0" + t[1] : t[1]) + ":" + (t[2] < 10 ? "0" + t[2] : t[2]);

    if (negative)
        return "-" + timeString;

    return timeString;


}

export default msToTimeString;