(function($) {
	'use strict';
	$(function() {
	
		var supportTrackerData = {
			labels: ["10", "11", "12", "13", "14", "15", "16", "17", "18","19","20","21","22","23" ],
			datasets: [{
				label: 'Pilets',
				data: [200, 750, 500, 400, 1200, 650, 550, 450, 400,300 , 260, 450, 600, 100],
				backgroundColor: [
					'#464dee', '#464dee', '#464dee', '#464dee', '#464dee', '#464dee', '#464dee', '#464dee', '#464dee', '#464dee', '#464dee', '#464dee', '#464dee', '#464dee',
				],
				borderColor: [
					'#464dee', '#464dee', '#464dee', '#464dee',  '#464dee', '#464dee', '#464dee', '#464dee', '#464dee', '#464dee', '#464dee', '#464dee', '#464dee', '#464dee',
				],
				borderWidth: 1,
				fill: false
			},
			{
				label: 'Aerobics',
				data: [50, 10, 69, 100, 200, 5, 55, 45, 40, 200, 100 , 600, 100, 140],
				backgroundColor: [
					'#fe2c54', '#fe2c54', '#fe2c54', '#fe2c54', '#fe2c54', '#fe2c54', '#fe2c54', '#fe2c54', '#fe2c54', '#fe2c54', '#fe2c54', '#fe2c54', '#fe2c54', '#fe2c54', 
				],
				borderColor: [
					'#fe2c54', '#fe2c54', '#fe2c54', '#fe2c54',  '#fe2c54', '#fe2c54', '#fe2c54', '#fe2c54', '#fe2c54', '#fe2c54', '#fe2c54', '#fe2c54', '#fe2c54', '#fe2c54', 
				],
				borderWidth: 1,
				fill: false	
			},
			{
					label: 'Box',
					data: [800, 550, 700, 600, 1100, 650, 550, 650, 850,500, 200, 600, 450, 100],					
					backgroundColor: [
						'#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8',
					],
					borderColor: [
						'#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8',
					],
					borderWidth: 1,
					fill: false
			}
			]
		};
		var supportTrackerOptions = {
			scales: {
				xAxes: [{
				stacked: true,
				barPercentage: 0.3,
				position: 'bottom',
				display: true,
				gridLines: {
					display: false,
					drawBorder: false,
				},
				ticks: {
					display: true, //this will remove only the label
					stepSize: 300,
					
				}
				}],
				yAxes: [{
					stacked: true,
					display: true,
					gridLines: {
						drawBorder: false,
						display: true,
						color: "#f0f3f6",
						borderDash: [8,4],
					},
					ticks: {
						beginAtZero: true,
						values:[0,30,60,90,120,150],
						callback: function(value, index, values) {
						return '$' + value;
						}
					},
				}]
			},
			legend: {
				display: false
			},
			legendCallback: function(chart) {
				var text = [];
				text.push('<ul class="' + chart.id + '-legend">');
				for (var i = 0; i < chart.data.datasets.length; i++) {
					text.push('<li><span class="legend-box" style="background:' + chart.data.datasets[i].backgroundColor[i] + ';"></span><span class="legend-label text-dark">');
					if (chart.data.datasets[i].label) {
							text.push(chart.data.datasets[i].label);
					}
					text.push('</span></li>');
				}
				text.push('</ul>');
				return text.join("");
			},
			tooltips: {
				backgroundColor: 'rgba(0, 0, 0, 1)',
			},
			plugins: {
				datalabels: {
					display: false,
					align: 'center',
					anchor: 'center'
				}
			}				
		};
		if ($("#supportTracker").length) {
			var barChartCanvas = $("#supportTracker").get(0).getContext("2d");
			// This will get the first returned node in the jQuery collection.
			var barChart = new Chart(barChartCanvas, {
				type: 'bar',
				data: supportTrackerData,
				options: supportTrackerOptions
			});
			document.getElementById('support-tracker-legend').innerHTML = barChart.generateLegend();
		}
		var productorderGage = new JustGage({
			id: 'productorder-gage',
			value: 100,
			min: 0,
			max: 100,
			hideMinMax: true,
			symbol: '%',
			label: '',
			valueFontColor: "#001737",
			labelFontColor: "#001737",
			gaugeWidthScale: 0.3,
			counter: true,
			relativeGaugeSize: true,
			gaugeColor: "#f0f0f0",
			levelColors: [ "#fcd53b" ]
		});
		$("#productorder-gage").append('<div class="product-order"><div class="icon-inside-circle"><i class="mdi mdi-basket"></i></div></div>');

		// Remove pro banner on close
    document.querySelector('#bannerClose').addEventListener('click',function() {
			$('#pro-banner').slideUp();
    });
	});
})(jQuery);