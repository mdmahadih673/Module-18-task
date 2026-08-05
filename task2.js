function buildProfileCard({name, title, company}) {
    let job = `${name} 
${title} at ${company}`
    return job
}
console.log(buildProfileCard({
  name: "Mahadi",
  title: "Developer",
  company: "Programming Hero"
}));


