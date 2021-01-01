// Load data
let data = [];
const sections = [
  { sct_id: 'data_science_sct', groups: ['data_specialist', 'bi', 'analyst', 'analytics', 'librarian', 'geo', 'dataviz'] },
];

sections.forEach(sct => {
  let currentSct = {};
  currentSct.sct_id = sct.sct_id;
  currentSct.groups = [];

  sct.groups.forEach(group => {
    let currentGroup = {};
    currentGroup.group_id = group;
    currentGroup.sumPeople = 0;
    currentGroup.titles = [];
    currentGroup.sumSeniors = 0;
    currentGroup.sumLeaders = 0;
    currentGroup.sumFreelancers = 0;

    currentSct.groups.push(currentGroup);
  });

  data.push(currentSct);
});

d3.csv('../data/data_job_titles.csv', (data_original) => {
  const section = data.find(sct => sct.sct_id === data_original.section);
  const group = section.groups.find(group => group.group_id === data_original.group);
  let jobTitleInfo = {};
  jobTitleInfo.num_char = parseInt(data_original.num_char);
  jobTitleInfo.job_title = data_original.job_title;
  jobTitleInfo.num_people = parseInt(data_original.num_people);
  group.sumPeople += jobTitleInfo.num_people;

  jobTitleInfo.fields = [];
  fields.forEach(field => {
    if (data_original[field.field_id] === '1') { jobTitleInfo.fields.push(field.field_id); }
  });
  group.titles.push(jobTitleInfo);
  
  jobTitleInfo.color = jobTitleInfo.fields.length === 1
    ? fields.find(field => field.field_id === jobTitleInfo.fields[0]).field_color
    : mixColors(jobTitleInfo.fields);

  if (data_original.pos_senior !== '') { group.sumSeniors += parseInt(data_original.pos_senior); }
  if (data_original.pos_lead !== '') { group.sumLeaders += parseInt(data_original.pos_lead); }
  if (data_original.pos_freelance !== '') { group.sumFreelancers += parseInt(data_original.pos_freelance); }
  
});
console.log(data);
