

$(function() {
	//fetch all data first
	var inforArr=new Array()
	var traceArr=new Array()
	var debugArr=new Array()
	
	//pie related info
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	var cw = canvas.width;
	var ch = canvas.height;

	ctx.lineWidth = 2;
	ctx.font = '12px verdana';

	var PI2 = Math.PI * 2;
	var myColor = ["blue", "red", "green"];
	var total = inforArr.length+traceArr.length+debugArr.length;

	var myLabels = ["A", "B", "C"];
	var cx = 100;
	var cy = 150;
	var radius = 80;
	
	
	$.ajax({
		type : "GET",
		url : "/SpringRestExample/rest/logs",
		// The key needs to match your method's input parameter
		// (case-sensitive).
		// data : JSON.stringify(markers),
		contentType : "application/json; charset=utf-8",
		dataType : "json",
		success : function(data) {
			var count = 0;
			$.each(data, function(i, n) {
				switch(n.LogLevel)
				{
				case "INFO":
					count = inforArr.length;
					inforArr[count] = n;
				  break;
				case "TRACE":
					count = traceArr.length;
					traceArr[count] = n;
				  break;
				case "DEBUG":
					count = debugArr.length;
					debugArr[count] = n;
					break;
				default:
				  
				}
			});
			//start to draw pie
			var myData = [inforArr.length, traceArr.length, debugArr.length];
			pieChart(myData, myColor, myLabels);
			
			//start to draw line chart
		},
		failure : function(errMsg) {
			alert(errMsg);
		}
	});
	


	

	function pieChart(data, colors, myLabels) {

	   var total = 0;
	   for (var i = 0; i < data.length; i++) {
	      total += data[i];
	   }

	   var sweeps = []
	   for (var i = 0; i < data.length; i++) {
	      sweeps.push(data[i] / total * PI2);
	   }

	   var accumAngle = 0;
	   for (var i = 0; i < sweeps.length; i++) {
	      drawWedge(accumAngle, accumAngle + sweeps[i], colors[i], data[i], myLabels[i]);
	      accumAngle += sweeps[i];
	   }

	}

	function drawWedge(startAngle, endAngle, fill, label, letter) {

	   // draw the wedge
	   ctx.beginPath();
	   ctx.moveTo(cx, cy);
	   ctx.arc(cx, cy, radius, startAngle, endAngle, false);
	   ctx.closePath();
	   ctx.fillStyle = fill;
	   ctx.strokeStyle = 'black';
	   ctx.fill();
	   ctx.stroke();

	   // draw the label in middle of sector
	   var midAngle = startAngle + (endAngle - startAngle) / 2;
	   var labelRadius = radius * 0.5;
	   var x = cx + (labelRadius) * Math.cos(midAngle);
	   var y = cy + (labelRadius) * Math.sin(midAngle);
	   ctx.fillStyle = 'black';
	   ctx.fillText(label, x, y);
	   /*
	   // draw the label in middle of arc on exterior
	   var midAngle = startAngle + (endAngle - startAngle) / 2;
	   var labelRadius = radius * 1.25;
	   var x = cx + (labelRadius) * Math.cos(midAngle);
	   var y = cy + (labelRadius) * Math.sin(midAngle);
	   ctx.fillStyle = 'black';
	   ctx.fillText(label, x, y);

	   // draw the the label at start of sector
	   var midAngle = startAngle;
	   var labelRadius = radius * 1.25;
	   var x = cx + (labelRadius) * Math.cos(midAngle);
	   var y = cy + (labelRadius) * Math.sin(midAngle);
	   ctx.fillStyle = 'red';
	   ctx.fillText(label, x, y);

	   // draw the the label at end of sector
	   var midAngle = endAngle;
	   var labelRadius = radius * 1.5;
	   var x = cx + (labelRadius) * Math.cos(midAngle);
	   var y = cy + (labelRadius) * Math.sin(midAngle);
	   ctx.fillStyle = 'blue';
	   ctx.fillText(letter, x, y);
	*/
	}
	
    var chart = new CanvasJS.Chart("chartContainer",
    {
      
      title:{
        text: "Logs Over Time"
      },
      legend: {
    	     horizontalAlign: "center", // left, center ,right 
    	     verticalAlign: "top",  // top, center, bottom
    	   },
      animationEnabled: true,
      axisX: {
        valueFormatString: "DD/M/YYYY",
        
      },
      axisY:{
        includeZero: true,
        interval:0.5
        
      },
      //due to logs.json contains duplicate value, it will not be able to generate the report, hence let's populate some dummy data
      data: [
      {        
        type: "line",
        //lineThickness: 3,         	
		showInLegend: true,           
		name: "TRACE", 
        dataPoints: [
        { x: new Date(2015, 04, 21), y: 1 },
        { x: new Date(2015, 04, 22), y: 2},
        { x: new Date(2015, 05, 11), y: 1}
        
        ]
      },
      {        
          type: "line",
          //lineThickness: 3,         	
  		showInLegend: true,           
  		name: "INFO", 
          dataPoints: [
              { x: new Date(2015, 04, 21), y: 3 },
              { x: new Date(2015, 04, 22), y: 0.5},
              { x: new Date(2015, 05, 11), y: 1.5}
          
          ]
        },
		{        
			type: "line",
			showInLegend: true,           
			name: "DEBUG",        
			dataPoints: [
		        { x: new Date(2015, 04, 21), y: 1.5},
		        { x: new Date(2015, 04, 22), y: 2.5},
		        { x: new Date(2015, 05, 11), y: 1}

			]
		}
      
      ]
    });

	chart.render();
});


