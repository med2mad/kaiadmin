import Chart from 'chart.js/auto';

export function initializeCharts() {
    // Get canvas contexts
    const lineChart = document.getElementById("lineChart").getContext("2d");
    const barChart = document.getElementById("barChart").getContext("2d");
    const pieChart = document.getElementById("pieChart").getContext("2d");
    const doughnutChart = document.getElementById("doughnutChart").getContext("2d");
    const radarChart = document.getElementById("radarChart").getContext("2d");
    const bubbleChart = document.getElementById("bubbleChart").getContext("2d");
    const multipleLineChart = document.getElementById("multipleLineChart").getContext("2d");
    const multipleBarChart = document.getElementById("multipleBarChart").getContext("2d");
    const htmlLegendsChart = document.getElementById("htmlLegendsChart").getContext("2d");

    // Line Chart
    const myLineChart = new Chart(lineChart, {
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                label: "Active Users",
                borderColor: "#1d7af3",
                pointBorderColor: "#FFF",
                pointBackgroundColor: "#1d7af3",
                pointBorderWidth: 2,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 1,
                pointRadius: 4,
                backgroundColor: "transparent",
                fill: true,
                borderWidth: 2,
                data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 900],
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        padding: 10,
                        color: "#1d7af3",
                    },
                },
                tooltip: {
                    bodySpacing: 4,
                    mode: "nearest",
                    intersect: false,
                    position: "nearest",
                    padding: 10,
                    caretPadding: 10,
                },
            },
            layout: {
                padding: { left: 15, right: 15, top: 15, bottom: 15 },
            },
        },
    });

    // Bar Chart
    const myBarChart = new Chart(barChart, {
        type: "bar",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                label: "Sales",
                backgroundColor: "rgb(23, 125, 255)",
                borderColor: "rgb(23, 125, 255)",
                data: [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4],
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });

    // Pie Chart
    const myPieChart = new Chart(pieChart, {
        type: "pie",
        data: {
            datasets: [{
                data: [50, 35, 15],
                backgroundColor: ["#1d7af3", "#f3545d", "#fdaf4b"],
                borderWidth: 0,
            }],
            labels: ["New Visitors", "Subscribers", "Active Users"],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        color: "rgb(154, 154, 154)",
                        font: {
                            size: 11,
                        },
                        usePointStyle: true,
                        padding: 20,
                    },
                },
                tooltip: {
                    enabled: false,
                },
            },
            layout: {
                padding: {
                    left: 20,
                    right: 20,
                    top: 20,
                    bottom: 20,
                },
            },
        },
    });

    // Doughnut Chart
    const myDoughnutChart = new Chart(doughnutChart, {
        type: "doughnut",
        data: {
            datasets: [{
                data: [10, 20, 30],
                backgroundColor: ["#f3545d", "#fdaf4b", "#1d7af3"],
            }],
            labels: ["Red", "Yellow", "Blue"],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: "bottom",
                },
            },
            layout: {
                padding: {
                    left: 20,
                    right: 20,
                    top: 20,
                    bottom: 20,
                },
            },
        },
    });

    // Radar Chart
    const myRadarChart = new Chart(radarChart, {
        type: "radar",
        data: {
            labels: ["Running", "Swimming", "Eating", "Cycling", "Jumping"],
            datasets: [
                {
                    data: [20, 10, 30, 2, 30],
                    borderColor: "#1d7af3",
                    backgroundColor: "rgba(29, 122, 243, 0.25)",
                    pointBackgroundColor: "#1d7af3",
                    pointHoverRadius: 4,
                    pointRadius: 3,
                    label: "Team 1",
                },
                {
                    data: [10, 20, 15, 30, 22],
                    borderColor: "#716aca",
                    backgroundColor: "rgba(113, 106, 202, 0.25)",
                    pointBackgroundColor: "#716aca",
                    pointHoverRadius: 4,
                    pointRadius: 3,
                    label: "Team 2",
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: "bottom",
                },
            },
        },
    });

    // Bubble Chart
    const myBubbleChart = new Chart(bubbleChart, {
        type: "bubble",
        data: {
            datasets: [
                {
                    label: "Car",
                    data: [
                        { x: 25, y: 17, r: 25 },
                        { x: 30, y: 25, r: 28 },
                        { x: 35, y: 30, r: 8 },
                    ],
                    backgroundColor: "#716aca",
                },
                {
                    label: "Motorcycles",
                    data: [
                        { x: 10, y: 17, r: 20 },
                        { x: 30, y: 10, r: 7 },
                        { x: 35, y: 20, r: 10 },
                    ],
                    backgroundColor: "#1d7af3",
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: "bottom",
                },
            },
            scales: {
                y: {
                    beginAtZero: true,
                },
                x: {
                    beginAtZero: true,
                },
            },
        },
    });

    // Multiple Line Chart
    const myMultipleLineChart = new Chart(multipleLineChart, {
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
                {
                    label: "Python",
                    borderColor: "#1d7af3",
                    pointBorderColor: "#FFF",
                    pointBackgroundColor: "#1d7af3",
                    pointBorderWidth: 2,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 1,
                    pointRadius: 4,
                    backgroundColor: "transparent",
                    fill: true,
                    borderWidth: 2,
                    data: [30, 45, 45, 68, 69, 90, 100, 158, 177, 200, 245, 256],
                },
                {
                    label: "PHP",
                    borderColor: "#59d05d",
                    pointBorderColor: "#FFF",
                    pointBackgroundColor: "#59d05d",
                    pointBorderWidth: 2,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 1,
                    pointRadius: 4,
                    backgroundColor: "transparent",
                    fill: true,
                    borderWidth: 2,
                    data: [10, 20, 55, 75, 80, 48, 59, 55, 23, 107, 60, 87],
                },
                {
                    label: "Ruby",
                    borderColor: "#f3545d",
                    pointBorderColor: "#FFF",
                    pointBackgroundColor: "#f3545d",
                    pointBorderWidth: 2,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 1,
                    pointRadius: 4,
                    backgroundColor: "transparent",
                    fill: true,
                    borderWidth: 2,
                    data: [10, 30, 58, 79, 90, 105, 117, 160, 185, 210, 185, 194],
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: "top",
                },
                tooltip: {
                    bodySpacing: 4,
                    mode: "nearest",
                    intersect: false,
                    position: "nearest",
                    padding: 10,
                    caretPadding: 10,
                },
            },
            layout: {
                padding: { left: 15, right: 15, top: 15, bottom: 15 },
            },
        },
    });

    // Multiple Bar Chart
    const myMultipleBarChart = new Chart(multipleBarChart, {
        type: "bar",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
                {
                    label: "First time visitors",
                    backgroundColor: "#59d05d",
                    borderColor: "#59d05d",
                    data: [95, 100, 112, 101, 144, 159, 178, 156, 188, 190, 210, 245],
                },
                {
                    label: "Visitors",
                    backgroundColor: "#fdaf4b",
                    borderColor: "#fdaf4b",
                    data: [145, 256, 244, 233, 210, 279, 287, 253, 287, 299, 312, 356],
                },
                {
                    label: "Pageview",
                    backgroundColor: "#177dff",
                    borderColor: "#177dff",
                    data: [185, 279, 273, 287, 234, 312, 322, 286, 301, 320, 346, 399],
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: "bottom",
                },
                title: {
                    display: true,
                    text: "Traffic Stats",
                },
                tooltip: {
                    mode: "index",
                    intersect: false,
                },
            },
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true,
                },
            },
        },
    });

    // Chart with HTML Legends
    const gradientStroke = htmlLegendsChart.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#177dff");
    gradientStroke.addColorStop(1, "#80b6f4");

    const gradientFill = htmlLegendsChart.createLinearGradient(500, 0, 100, 0);
    gradientFill.addColorStop(0, "rgba(23, 125, 255, 0.7)");
    gradientFill.addColorStop(1, "rgba(128, 182, 244, 0.3)");

    const gradientStroke2 = htmlLegendsChart.createLinearGradient(500, 0, 100, 0);
    gradientStroke2.addColorStop(0, "#f3545d");
    gradientStroke2.addColorStop(1, "#ff8990");

    const gradientFill2 = htmlLegendsChart.createLinearGradient(500, 0, 100, 0);
    gradientFill2.addColorStop(0, "rgba(243, 84, 93, 0.7)");
    gradientFill2.addColorStop(1, "rgba(255, 137, 144, 0.3)");

    const gradientStroke3 = htmlLegendsChart.createLinearGradient(500, 0, 100, 0);
    gradientStroke3.addColorStop(0, "#fdaf4b");
    gradientStroke3.addColorStop(1, "#ffc478");

    const gradientFill3 = htmlLegendsChart.createLinearGradient(500, 0, 100, 0);
    gradientFill3.addColorStop(0, "rgba(253, 175, 75, 0.7)");
    gradientFill3.addColorStop(1, "rgba(255, 196, 120, 0.3)");

    const myHtmlLegendsChart = new Chart(htmlLegendsChart, {
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
                {
                    label: "Subscribers",
                    borderColor: gradientStroke2,
                    pointBackgroundColor: gradientStroke2,
                    pointRadius: 0,
                    backgroundColor: gradientFill2,
                    legendColor: "#f3545d",
                    fill: true,
                    borderWidth: 1,
                    data: [154, 184, 175, 203, 210, 231, 240, 278, 252, 312, 320, 374],
                },
                {
                    label: "New Visitors",
                    borderColor: gradientStroke3,
                    pointBackgroundColor: gradientStroke3,
                    pointRadius: 0,
                    backgroundColor: gradientFill3,
                    legendColor: "#fdaf4b",
                    fill: true,
                    borderWidth: 1,
                    data: [256, 230, 245, 287, 240, 250, 230, 295, 331, 431, 456, 521],
                },
                {
                    label: "Active Users",
                    borderColor: gradientStroke,
                    pointBackgroundColor: gradientStroke,
                    pointRadius: 0,
                    backgroundColor: gradientFill,
                    legendColor: "#177dff",
                    fill: true,
                    borderWidth: 1,
                    data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 900],
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    bodySpacing: 4,
                    mode: "nearest",
                    intersect: false,
                    position: "nearest",
                    padding: 10,
                    caretPadding: 10,
                },
            },
            layout: {
                padding: { left: 15, right: 15, top: 15, bottom: 15 },
            },
            scales: {
                y: {
                    ticks: {
                        color: "rgba(0,0,0,0.5)",
                        font: {
                            weight: 'bold'
                        },
                        beginAtZero: false,
                        maxTicksLimit: 5,
                        padding: 20,
                    },
                    grid: {
                        drawTicks: false,
                        display: false,
                    },
                },
                x: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        padding: 20,
                        color: "rgba(0,0,0,0.5)",
                        font: {
                            weight: 'bold'
                        },
                    },
                },
            },
        },
    });

    // Generate HTML legend
    const myLegendContainer = document.getElementById("myChartLegend");
    if (myLegendContainer) {
        myLegendContainer.innerHTML = generateLegend(myHtmlLegendsChart);

        // Bind click events to legend items
        const legendItems = myLegendContainer.getElementsByTagName("li");
        for (let i = 0; i < legendItems.length; i++) {
            legendItems[i].addEventListener("click", (event) => legendClickCallback(event, myHtmlLegendsChart, i), false);
        }
    }

    // Return chart instances for cleanup
    return {
        myLineChart,
        myBarChart,
        myPieChart,
        myDoughnutChart,
        myRadarChart,
        myBubbleChart,
        myMultipleLineChart,
        myMultipleBarChart,
        myHtmlLegendsChart
    };
}

// Helper function to generate legend HTML
function generateLegend(chart) {
    const text = [];
    text.push('<ul class="html-legend">');
    for (let i = 0; i < chart.data.datasets.length; i++) {
        text.push(
            `<li><span style="background-color:${chart.data.datasets[i].legendColor}"></span>`
        );
        if (chart.data.datasets[i].label) {
            text.push(chart.data.datasets[i].label);
        }
        text.push("</li>");
    }
    text.push("</ul>");
    return text.join("");
}

// Legend click callback function
function legendClickCallback(event, chart, datasetIndex) {
    event.preventDefault();
    const meta = chart.getDatasetMeta(datasetIndex);
    meta.hidden = meta.hidden === null ? !chart.data.datasets[datasetIndex].hidden : null;
    chart.update();
}

// Cleanup function
export function cleanupCharts(charts) {
    if (!charts) return;

    Object.values(charts).forEach(chart => {
        if (chart && typeof chart.destroy === 'function') {
            chart.destroy();
        }
    });
}