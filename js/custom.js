! function(i){
    function e() {
        this.$body = i("body"), this.charts = []
    }
    e.prototype.initMain = function() {
        for (var s = [], n = 10; 1 <= n; n--) s.push(n + " min ago");
        a = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
        (o = i("#views-min").data("colors")) && (a = o.split(","));
        r = {
            chart: {
                height: 150,
                type: "bar",
                stacked: !0
            },
            plotOptions: {
                bar: {
                    horizontal: !1,
                    endingShape: "rounded",
                    columnWidth: "22%",
                    dataLabels: {
                        position: "top"
                    }
                }
            },
            dataLabels: {
                enabled: !0,
                offsetY: -24,
                style: {
                    fontSize: "12px",
                    colors: ["#98a6ad"]
                }
            },
            series: [{
                name: "Views",
                data: function(e) {
                    for (var t = [], a = 0; a < e; a++) t.push(Math.floor(90 * Math.random()) + 10);
                    return t
                }(10)
            }],
            zoom: {
                enabled: !1
            },
            legend: {
                show: !1
            },
            colors: a,
            xaxis: {
                categories: s,
                labels: {
                    show: !1
                },
                axisTicks: {
                    show: !1
                },
                axisBorder: {
                    show: !1
                }
            },
            yaxis: {
                labels: {
                    show: !1
                }
            },
            fill: {
                type: "gradient",
                gradient: {
                    inverseColors: !0,
                    shade: "light",
                    type: "horizontal",
                    shadeIntensity: .25,
                    gradientToColors: void 0,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100, 100, 100]
                }
            },
            tooltip: {
                y: {
                    formatter: function(e) {
                        return e
                    }
                }
            }
        };
        //render
        new ApexCharts(document.querySelector("#views-min"), r).render();
    }, e.prototype.init = function() {
        this.initMain()
    }, i.AnalyticsDashboard = new e, i.AnalyticsDashboard.Constructor = e

}(window.jQuery),
function() {
    "use strict";
    window.jQuery.AnalyticsDashboard.init()
}();