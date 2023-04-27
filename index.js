const teachers = {
  heading: 'Our Teachers',
  title: 'SehYeong Noh',
  description: 'Director of Frontend department and member of University board.',
  descriptionn: 'SehYeong Noh has attended his Masters and Phd degree in this university and He was amongest the best achiveres and he is currently Teaching in this university.',
  img: './img/teach.png',
  alt: 'teacher'
}

const menuIcon = document.querySelector('#menu-icon');
const menuToggle = document.querySelector('#menu-toggle');
const menuSection = document.querySelector('#menu-section');

const generateTeacherDom = () => {
  const proContainer = document.querySelector('.teachers');
  const heading = document.createElement('h2');
  heading.setAttribute('class', 'teacher-heading');
  heading.textContent = teachers.heading;
  proContainer.appendChild(heading);

  const under = document.createElement('div');
  under.setAttribute('class', 'teacher-under');
  proContainer.appendChild(under);

  const teachersContainer = document.createElement('div');
  teachersContainer.setAttribute('class', 'teachers-container');
  proContainer.appendChild(teachersContainer);

  const teacher1 = document.createElement('div');
  teacher1.setAttribute('class', 'teacher1');
  teachersContainer.appendChild(teacher1);

  for (let i = 0; i < 3; i = i + 1) {
      const teacherBody = document.createElement('div');
      teacherBody.setAttribute('class', 'teacher-body');
      teacher1.appendChild(teacherBody);

      const imgContainer = document.createElement('div');
      imgContainer.setAttribute('class', 'teacher-img-container');
      teacherBody.appendChild(imgContainer);

      const teacherImage = document.createElement('img');
      teacherImage.setAttribute('class', 'teacher-img');
      teacherImage.setAttribute('src', teachers.img);
      teacherImage.setAttribute('alt', teachers.alt);
      imgContainer.appendChild(teacherImage);

      const teacherDisc = document.createElement('div');
      teacherDisc.setAttribute('class', 'teacher-disc-body');
      teacherBody.appendChild(teacherDisc);

      const teacherTitle = document.createElement('h2');
      teacherTitle.setAttribute('class', 'teacher-title');
      teacherTitle.textContent = teachers.title;
      teacherDisc.appendChild(teacherTitle);

      const teacherdisc = document.createElement('p');
      teacherdisc.setAttribute('class', 'teacher-disc');
      teacherdisc.textContent = teachers.description;
      teacherDisc.appendChild(teacherdisc);

      const teacherdiscc = document.createElement('p');
      teacherdiscc.setAttribute('class', 'teacher-disc2');
      teacherdiscc.textContent = teachers.descriptionn;
      teacherDisc.appendChild(teacherdiscc);
  }

  const teacher2 = document.createElement('div');
  teacher2.setAttribute('class', 'teacher2');
  teachersContainer.appendChild(teacher2);

  for (let i = 0; i < 3; i = i + 1) {
      const teacherBody = document.createElement('div');
      teacherBody.setAttribute('class', 'teacher-body');
      teacher2.appendChild(teacherBody);

      const imgContainer = document.createElement('div');
      imgContainer.setAttribute('class', 'teacher-img-container');
      teacherBody.appendChild(imgContainer);

      const teacherImage = document.createElement('img');
      teacherImage.setAttribute('class', 'teacher-img');
      teacherImage.setAttribute('src', teachers.img);
      teacherImage.setAttribute('alt', teachers.alt);
      imgContainer.appendChild(teacherImage);

      const teacherDisc = document.createElement('div');
      teacherDisc.setAttribute('class', 'teacher-disc-body');
      teacherBody.appendChild(teacherDisc);

      const teacherTitle = document.createElement('h2');
      teacherTitle.setAttribute('class', 'teacher-title');
      teacherTitle.textContent = teachers.title;
      teacherDisc.appendChild(teacherTitle);

      const teacherdisc = document.createElement('p');
      teacherdisc.setAttribute('class', 'teacher-disc');
      teacherdisc.textContent = teachers.description;
      teacherDisc.appendChild(teacherdisc);

      const teacherdiscc = document.createElement('p');
      teacherdiscc.setAttribute('class', 'teacher-disc2');
      teacherdiscc.textContent = teachers.descriptionn;
      teacherDisc.appendChild(teacherdiscc);

  }
}

generateTeacherDom();

  menuIcon.addEventListener('click', () => {
  menuSection.classList.add('menu-section-active');
});

menuToggle.addEventListener('click', () => {
  menuSection.classList.remove('menu-section-active');
});

document.querySelectorAll('.menu-item a').forEach((item) => {
  item.addEventListener('click', () => {
    menuSection.classList.remove('menu-section-active');
  });
});