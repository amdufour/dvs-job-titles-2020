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
  if (data_original.field_viz === '1') { jobTitleInfo.fields.push('field_viz'); }
  if (data_original.field_ds === '1') { jobTitleInfo.fields.push('field_ds'); }
  if (data_original.field_it === '1') { jobTitleInfo.fields.push('field_it'); }
  if (data_original.field_science === '1') { jobTitleInfo.fields.push('field_science'); }
  if (data_original.field_art === '1') { jobTitleInfo.fields.push('field_art'); }
  if (data_original.field_design === '1') { jobTitleInfo.fields.push('field_design'); }
  if (data_original.field_communications === '1') { jobTitleInfo.fields.push('field_communications'); }
  if (data_original.field_finance === '1') { jobTitleInfo.fields.push('field_finance'); }
  if (data_original.field_business === '1') { jobTitleInfo.fields.push('field_business'); }
  if (data_original.field_economy === '1') { jobTitleInfo.fields.push('field_economy'); }
  if (data_original.field_student === '1') { jobTitleInfo.fields.push('field_student'); }
  if (data_original.field_teacher === '1') { jobTitleInfo.fields.push('field_teacher'); }
  if (data_original.field_research === '1') { jobTitleInfo.fields.push('field_research'); }
  if (data_original.field_unknown === '1') { jobTitleInfo.fields.push('field_unknown'); }
  group.titles.push(jobTitleInfo);

  if (data_original.pos_senior !== '') { group.sumSeniors += parseInt(data_original.pos_senior); }
  if (data_original.pos_lead !== '') { group.sumLeaders += parseInt(data_original.pos_lead); }
  if (data_original.pos_freelance !== '') { group.sumFreelancers += parseInt(data_original.pos_freelance); }
  
});
console.log(data);