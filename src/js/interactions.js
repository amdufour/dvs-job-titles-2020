// Mouse over arch
function handleMouseOver(event, d) {
  // Find location of the mouse on the page
  const mouseX = event.pageX - 30;
  const mouseY = event.pageY + 20;

  // Update text in tooltip
  d3.select('.tooltip .job-title').text(d.job_title);
  d3.select('.tooltip .num-people').text(`(${d.num_people})`);

  d3.select('.tooltip')
    .style('top', mouseY + 'px')
    .style('left', mouseX + 'px')
    .classed('visible', true);
}

// Mouse leaves arch
function handleMouseOut(d) {
  d3.select('.tooltip')
    .style('top', '-100vh')
    .style('left', '-100vw')
    .classed('visible', false);
}
