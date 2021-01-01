function appendViz() {
  // Scales
  const groupSumPeopleScale = d3.scaleLinear()
    .domain([0, d3.max(groupsSumPeople)])
    .range([50, 200]);
  const numCharScale = d3.scaleLinear()
    .domain([0, d3.max(numChar)])
    .range([0, 200]);
  const titleNumPeopleScale = d3.scaleLinear()
    .domain([1, d3.max(numPeopleWithJobTitle)])
    .range([3, 20]);

  // Append SVG
  const titlesViz = d3.select('#titles-viz').append('svg')
    .attr('width', vizWidth)
    .attr('height', vizHeight);
  
  // Append main axis
  const mainAxis = titlesViz.append('g')
    .attr('class', 'main-axis-wrapper')
    .append('line')
      .attr('x1', mainAxisX)
      .attr('y1', 0)
      .attr('x2', mainAxisX)
      .attr('y2', vizHeight)
      .attr('stroke', 'black');
  
  // Append arches
  const arches = titlesViz.append('g')
    .attr('class', 'arches')
    .attr('fill-opacity', 0.35)
    .attr('stroke', 'none');

  let yPos = 0;
  data.forEach(section => {
    console.log(section);
    const arches_sct = arches.append('g')
      .attr('class', section.sct_id);

    section.groups.forEach(group => {
      const arches_group = arches_sct.append('g')
        .attr('class', `group_${group.group_id}`);

      const arch_y2 = yPos + Math.ceil(groupSumPeopleScale(group.sumPeople));
      const archMidHeight = ((arch_y2 - yPos) / 2) + yPos;

      arches_group.selectAll('path')
        .data(group.titles)
        .join('path')
        .attr('d', d => {
          const archLength = Math.ceil(numCharScale(d.num_char));
          const archThickness = Math.ceil(titleNumPeopleScale(d.num_people));
          'M0,0 C126.666667,26.6666667 190,60 190,100 C190,140 126.666667,173.333333 0,200 C140,173.333333 210,140 210,100 C210,60 140,26.6666667 0,0 Z'
          return `M${mainAxisX},${yPos} C${archLength / 1.5 + mainAxisX},${((arch_y2 - yPos) / 8) + yPos} ${archLength - archThickness/2 + mainAxisX},${archMidHeight - archCurve} ${archLength - archThickness/2 + mainAxisX},${archMidHeight} C${archLength - archThickness/2 + mainAxisX},${archMidHeight + archCurve} ${archLength / 1.5 + mainAxisX},${(7 * (arch_y2 - yPos) / 8) + yPos} ${mainAxisX},${arch_y2} ${archLength / 1.4 + mainAxisX},${(7 * (arch_y2 - yPos) / 8) + yPos} ${archLength + archThickness/2 + mainAxisX},${archMidHeight + archCurve} ${archLength + archThickness/2 + mainAxisX},${archMidHeight} C${archLength + archThickness/2 + mainAxisX},${archMidHeight - archCurve} ${archLength / 1.4 + mainAxisX},${((arch_y2 - yPos) / 8) + yPos} ${mainAxisX},${yPos} Z`;
        })
        .attr('fill', d => d.color);

      yPos = arch_y2;
    });
    yPos += 50;
  });
}


