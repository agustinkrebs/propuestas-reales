import * as d3 from 'd3'

function wrap(text, width) {
  text.each(function() {
    var text = d3.select(this),
      words = text
        .text()
        .split(/\s+/)
        .reverse(),
      word,
      line = [],
      lineNumber = 0,
      lineHeight = 1.1, // ems
      y = text.attr('y'),
      dy = parseFloat(text.attr('dy')),
      tspan = text
        .text(null)
        .append('tspan')
        .attr('x', 0)
        .attr('y', y)
        .attr('dy', dy + 'em')
    while ((word = words.pop())) {
      line.push(word)
      tspan.text(line.join(' '))
      if (tspan.node().getComputedTextLength() > width) {
        line.pop()
        tspan.text(line.join(' '))
        line = [word]
        tspan = text
          .append('tspan')
          .attr('x', 0)
          .attr('y', y)
          .attr('dy', ++lineNumber * lineHeight + dy + 'em')
          .text(word)
      }
    }
  })
}

export function drawTypeChart(types) {
  const data = types
  data.sort((a, b) => b.value - a.value)
  const maxValue = types[0].value

  const margin = { top: 20, right: 20, bottom: 20, left: 120 }
  const width = window.innerWidth / 2 - margin.left - margin.right
  const height = 350 - margin.top - margin.bottom

  const svg = d3
    .select('#type-chart')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

  // Add X axis
  var x = d3
    .scaleLinear()
    .domain([0, maxValue])
    .range([0, width])
  svg
    .append('g')
    .attr('transform', 'translate(0,' + height + ')')
    .call(d3.axisBottom(x))
    .selectAll('text')
    .attr('transform', 'translate(-10,0)rotate(-45)')
    .style('text-anchor', 'end')

  // Y axis
  var y = d3
    .scaleBand()
    .range([0, height])
    .domain(data.map(d => d.key))
    .padding(0.1)
  svg
    .append('g')
    .call(d3.axisLeft(y))
    .selectAll('text')
    .attr('transform', 'translate(-10,0)')
    .call(wrap, 120)

  svg
    .selectAll('myRect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', x(0) + 1)
    .attr('y', d => y(d.key))
    .attr('height', y.bandwidth())
    .attr('fill', '#69b3a2')
    .transition()
    .duration(800)
    .attr('width', d => x(d.value))
    .delay((d, i) => i * 50)
}

export function drawMinistryChart(ministries) {
  const data = ministries
  data.sort((a, b) => b.value - a.value)
  const maxValue = data[0].value

  const margin = { top: 20, right: 20, bottom: 20, left: 120 }
  const width = window.innerWidth / 2 - margin.left - margin.right
  const height = 750 - margin.top - margin.bottom

  const svg = d3
    .select('#ministry-chart')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

  // Add X axis
  var x = d3
    .scaleLinear()
    .domain([0, maxValue])
    .range([0, width])
  svg
    .append('g')
    .attr('transform', 'translate(0,' + height + ')')
    .call(d3.axisBottom(x))
    .selectAll('text')
    .attr('transform', 'translate(-10,0)rotate(-45)')
    .style('text-anchor', 'end')

  // Y axis
  var y = d3
    .scaleBand()
    .range([0, height])
    .domain(data.map(d => d.key))
    .padding(0.1)
  svg
    .append('g')
    .call(d3.axisLeft(y))
    .selectAll('text')
    .attr('transform', 'translate(-10,0)')
    .call(wrap, 100)

  svg
    .selectAll('myRect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', x(0) + 1)
    .attr('y', d => y(d.key))
    .attr('fill', '#69b3a2')
    .attr('height', y.bandwidth())
    .transition()
    .duration(800)
    .attr('width', d => x(d.value))
    .delay((d, i) => i * 50)
}
