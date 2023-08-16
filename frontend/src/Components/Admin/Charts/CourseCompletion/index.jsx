import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const CourseCompletionChart = ({ data }) => {
	const chartRef = useRef(null);
	const margin = { top: 20, right: 20, bottom: 40, left: 100 };
	const width = 850 - margin.left - margin.right;
	const height = data.length * 40 + margin.top + margin.bottom;

	useEffect(() => {
		if (data.length > 0) {
			const svg = d3
				.select(chartRef.current)
				.append("svg")
				.attr("width", width + margin.left + margin.right)
				.attr("height", height + margin.top + margin.bottom)
				.append("g")
				.attr("transform", `translate(${margin.left},${margin.top})`);
	
			const g = svg
				.append("g")
				.attr("transform", `translate(${margin.left},${margin.top})`);
	
			const y = d3
				.scaleBand()
				.domain(data.map((d) => d.course))
				.range([0, height - margin.top - margin.bottom])
				.padding(0.1);
	
			const x = d3.scaleLinear().domain([0, 100]).range([0, width-100]);
	
			g.selectAll(".bar")
				.data(data)
				.enter()
				.append("rect")
				.attr("class", "bar")
				.attr("y", (d) => y(d.course))
				.attr("height", y.bandwidth())
				.attr("x", 0)
				.attr("width", (d) => x(d.analytics.course_completion));

			g.selectAll(".label")
				.data(data)
				.enter()
				.append("text")
				.attr("class", "label")
				.attr("x", (d) => x(d.analytics.course_completion) + 5)
				.attr("y", (d) => y(d.course) + y.bandwidth() / 2)
				.attr("dy", "0.35em")
				.text((d) => `${d.analytics.course_completion.toFixed(2)}%`);
	
			g.append("g")
				.attr("class", "axis-x")
				.attr("transform", `translate(0,${height - margin.top - margin.bottom})`)
				.call(d3.axisBottom(x));
	
			g.append("g").attr("class", "axis-y").call(d3.axisLeft(y));
		}
	}, [data, height, width]);
	

	return (
		<div className="chart-container">
			<h2 className="chart-title">Course Completion</h2>
			<div ref={chartRef} className="chart"></div>
		</div>
	);
};

export default CourseCompletionChart;
