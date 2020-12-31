// Load data
let data = [];
d3.csv('../data/data_job_titles.csv', (data_original) => {
  data.push(data_original);
});
console.log(data);