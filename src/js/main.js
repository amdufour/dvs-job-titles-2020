// Variables
const vizWidth = 315;
const vizHeight = 2000;
const mainAxisX = 10;

// Colors
const redDark = '#903227';
const redMedium = '#CC5A4B';
const redPale = '#DB8A80';

const greenDark = '#355F30';
const greenMedium = '#598235';
const greenPale = '#95AD5C';

const yellowGold = '#C88304';
const yellowMedium = '#FAA80F';
const yellowPale = '#FCC55F';

const blueDark = '#295266';
const blueMedium = '#407FA0';
const bluePale = '#6DA8C5';


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
const archLength = 200;
const archThickness = 20;
const arch_y1 = 0;
const arch_y2 = 200;
const archMidHeight = ((arch_y2 - arch_y1) / 2) + arch_y1;
const archCurve = 40;

const arches = titlesViz.append('g')
  .attr('class', 'arches')
  .attr('fill-opacity', 0.5)
  .attr('stroke', 'none');

const arches_sct_DS = arches.append('g')
  .attr('class', 'arches-sct-DS');

const arches_sct_DS_group_data = arches.append('g')
  .attr('class', 'arches-sct_DS-group_data');

arches_sct_DS_group_data.append('path')
  .attr('d', `M${mainAxisX},${arch_y1} C${archLength / 1.6 + mainAxisX},${((arch_y2 - arch_y1) / 8) + arch_y1} ${archLength - archThickness/2 + mainAxisX},${archMidHeight - archCurve + arch_y1} ${archLength - archThickness/2 + mainAxisX},${archMidHeight + arch_y1} C${archLength - archThickness/2 + mainAxisX},${archMidHeight + archCurve + arch_y1} ${archLength / 1.6 + mainAxisX},${(7 * (arch_y2 - arch_y1) / 8) + arch_y1} ${mainAxisX},${arch_y2 + arch_y1} ${archLength / 1.425 + mainAxisX},${(7 * (arch_y2 - arch_y1) / 8) + arch_y1} ${archLength + archThickness/2 + mainAxisX},${archMidHeight + archCurve + arch_y1} ${archLength + archThickness/2 + mainAxisX},${archMidHeight + arch_y1} C${archLength + archThickness/2 + mainAxisX},${archMidHeight - archCurve + arch_y1} ${archLength / 1.425 + mainAxisX},${((arch_y2 - arch_y1) / 8) + arch_y1} ${mainAxisX},${arch_y1} Z`);


