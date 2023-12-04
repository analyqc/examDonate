var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "80",
        "ok": "80",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "247",
        "ok": "247",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1365",
        "ok": "1365",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "780",
        "ok": "780",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "304",
        "ok": "304",
        "ko": "-"
    },
    "percentiles1": {
        "total": "894",
        "ok": "894",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1017",
        "ok": "1017",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1136",
        "ok": "1136",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1307",
        "ok": "1307",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 37,
    "percentage": 46
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 40,
    "percentage": 50
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 3,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.714",
        "ok": "5.714",
        "ko": "-"
    }
},
contents: {
"req_open-donation-p-9b810": {
        type: "REQUEST",
        name: "Open donation page",
path: "Open donation page",
pathFormatted: "req_open-donation-p-9b810",
stats: {
    "name": "Open donation page",
    "numberOfRequests": {
        "total": "40",
        "ok": "40",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "919",
        "ok": "919",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1365",
        "ok": "1365",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1039",
        "ok": "1039",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "100",
        "ok": "100",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1019",
        "ok": "1019",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1075",
        "ok": "1075",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1283",
        "ok": "1283",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1337",
        "ok": "1337",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 37,
    "percentage": 93
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 3,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.857",
        "ok": "2.857",
        "ko": "-"
    }
}
    },"req_submit-donation-85588": {
        type: "REQUEST",
        name: "Submit donation",
path: "Submit donation",
pathFormatted: "req_submit-donation-85588",
stats: {
    "name": "Submit donation",
    "numberOfRequests": {
        "total": "40",
        "ok": "40",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "247",
        "ok": "247",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "868",
        "ok": "868",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "520",
        "ok": "520",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "201",
        "ok": "201",
        "ko": "-"
    },
    "percentiles1": {
        "total": "456",
        "ok": "456",
        "ko": "-"
    },
    "percentiles2": {
        "total": "731",
        "ok": "731",
        "ko": "-"
    },
    "percentiles3": {
        "total": "863",
        "ok": "863",
        "ko": "-"
    },
    "percentiles4": {
        "total": "867",
        "ok": "867",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 37,
    "percentage": 93
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 3,
    "percentage": 8
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.857",
        "ok": "2.857",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
