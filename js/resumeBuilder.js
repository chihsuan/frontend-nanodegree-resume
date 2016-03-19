(function(window) {

  window.inName = inName;
  var windowHeight = $(window).height();
  var bio = {
    name: "Chi-Hsuan Huang",
    role: "Web Developer",
    contacts: {
      mobile: "+886 972-796-XXX",
      email: "chihsuan.tw@gmail.com",
      github: "chihsuan",
      twitter: "chisuan_haung",
      location: "Tainan, Taiwan"
    },
    welcomeMessage: "“Practice makes perfect.”",
    skills: ["html", "css", "javascript"],
    biopic: "https://avatars2.githubusercontent.com/u/4344253?v=3&s=460"
  };

  var work = {
    jobs: [{
      employer: "TEDxTainan",
      title: "web develper",
      location: "Tainan, Taiwan",
      dates: "2012-2015",
      description: "Initial Official Website Creator and the Organizer of IT Department"
    }]
  };

  var projects = {
    projects: [{
      title: "Taiwanstat",
      dates: "2015~2016",
      description: "organizer",
      images: [
        "http://real.taiwanstat.com/images/assert/background.png"
      ]
    },{
      title: 'Instants',
      dates: '2015',
      description: 'creator',
      images: 'http://i.imgur.com/5CfBh8Y.png'
    }]
  };

  var education = {
    schools: [{
      name: "National Cheng Kung University",
      location: "Tainan, Taiwan",
      degree: "Bachelor",
      majors: "Computer Science",
      dates: 2015,
      url: "http://web.ncku.edu.tw/bin/home.php"
    }],
    onlineCourses: [{
      title: "Data Visualization and D3.js",
      school: "Udacity",
      date: "2016",
      url: "https://www.udacity.com/"
    },
    {
      title: 'Website Performance Optimization',
      school: 'Udacity',
      date: "2016",
      url: "https://www.udacity.com/courses/web-development"
    }]
  };

  window.bio = bio;
  window.education = education;
  window.work = work;

  bio.display = function() {

    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);

    $('#header').prepend(formattedRole);
    $('#header').prepend(formattedName);

    // contacts
    for(var contactMethod in bio.contacts) {
      var formattedContact = HTMLcontactGeneric
        .replace('%contact%', contactMethod)
        .replace('%data%', bio.contacts[contactMethod]);
      $('#topContacts').append(formattedContact);
      $('#footerContacts').append(formattedContact);
    }

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);

    $('#header').append(formattedWelcomeMsg);
    $('#header').append(formattedBioPic);

    // skills
    $('#header').append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {
      var formattedSkills = HTMLskills.replace('%data%', skill);
      $('#skills').append(formattedSkills);
    });
  };

  work.display = function() {
    work.jobs.forEach(function(job) {

      $('#workExperience').append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
      var formattedWorkTitle = HTMLworkTitle.replace('%data%', job.title);
      var formattedWorkDates = HTMLworkDates.replace('%data%', job.dates);
      var formattedWorkLocation = HTMLworkLocation.replace('%data%', job.location);
      var formattedWorkDescription = HTMLworkDescription.replace('%data%', job.description);

      $('.work-entry:last').append(formattedEmployer);
      $('.work-entry:last').append(formattedWorkTitle);
      $('.work-entry:last').append(formattedWorkDates);
      $('.work-entry:last').append(formattedWorkLocation);
      $('.work-entry:last').append(formattedWorkDescription);
    });

  };

  projects.display = function() {
    projects.projects.forEach(function(project) {
      $('#projects').append(HTMLprojectStart);

      var formattedPorjTtitle = HTMLprojectTitle.replace('%data%', project.title);
      var formattedPorjDates = HTMLprojectDates.replace('%data%', project.dates);
      var formattedPorjDesc = HTMLprojectDescription.replace('%data%', project.description);
      var formattedPorjImage = HTMLprojectImage.replace('%data%', project.images);

      $('.project-entry:last').append(formattedPorjTtitle);
      $('.project-entry:last').append(formattedPorjDates);
      $('.project-entry:last').append(formattedPorjDesc);
      $('.project-entry:last').append(formattedPorjImage);
    });
  };

  education.display = function() {
    education.schools.forEach(function(school) {
      $('#education').append(HTMLschoolStart);

      var formattedSchoolName = HTMLschoolName.replace('%data%', school.name);
      var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', school.degree);
      var formattedSchoolDates = HTMLschoolDates.replace('%data%', school.dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', school.location);
      var formattedSchoolMajors = HTMLschoolMajor.replace('%data%', school.majors);

      $('.education-entry:last').append(formattedSchoolName);
      $('.education-entry:last').append(formattedSchoolDegree);
      $('.education-entry:last').append(formattedSchoolDates);
      $('.education-entry:last').append(formattedSchoolLocation);
      $('.education-entry:last').append(formattedSchoolMajors);
    });

    $('#education').append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(onlineCourse) {
      $('#education').append(HTMLschoolStart);

      var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', onlineCourse.title);
      var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', onlineCourse.school);
      var formattedOnlineDates =  HTMLonlineDates.replace('%data%', onlineCourse.date);
      var formattedOnlineURL = HTMLonlineURL.replace('%data%', onlineCourse.url);

      $('.education-entry:last').append(formattedOnlineTitle);
      $('.education-entry:last').append(formattedOnlineSchool);
      $('.education-entry:last').append(formattedOnlineDates);
      $('.education-entry:last').append(formattedOnlineURL);
    });
  };

  bio.display();
  work.display();
  projects.display();
  education.display();
  $('#mapDiv').append(googleMap);
  $('#main').append(internationalizeButton);

  function inName(name) {
    var nameArray = name.trim().split(' ');
    name = nameArray[0].slice(0, 1).toUpperCase() +
      nameArray[0].slice(1).toLowerCase() + " " +
      nameArray[1].toUpperCase();

    return name;
  }

  // fade in project-entry when on scroll project element
  $(window).scroll(function() {
    var elementTop = $('#projects').offset().top,
       elementHeight = $('#projects').outerHeight(),
       windowTop = $(this).scrollTop();

     if (windowTop > (elementTop+elementHeight-windowHeight)){
       $('.project-entry').show(300);
     }
  });

})(window);
