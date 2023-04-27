const teachers = {
  title: 'SehYeong Noh',
  description: 'Director of Frontend department and member of University board.',
  descriptionn: 'SehYeong Noh has attended his Masters and Phd degree in this university and He was amongest the best achiveres and he is currently Teaching in this university.',
  img: './img/teach.png'
}

const menuIcon = document.querySelector('#menu-icon');
const menuToggle = document.querySelector('#menu-toggle');
const menuSection = document.querySelector('#menu-section');

{/* <h2 class="teacher-heading">Out Teachers</h2>
    <div class="teacher-under"></div>
    <div class="teachers-container">
      <div class="teacher1">
        <div class="teacher-body">
          <div class="teacher-img-container"><img src="./img/teach.png" alt="teacher" class="teacher-img"></div>
          <div class="teacher-disc-body">
          <h2 class="teacher-title">SohYeong Noh</h2>
          <p class="teacher-disc">Director of Frontend department and member of University board.</p>
          <p class="teacher-disc2">SehYeong Noh has attended his Masters and Phd degree in this university and He was amongest the best achiveres and he is currently Teaching in this university.</p>
        </div>
        </div>
        <div class="teacher-body">
          <div class="teacher-img-container"><img src="./img/teach.png" alt="teacher" class="teacher-img"></div>
          <div class="teacher-disc-body">
          <h2 class="teacher-title">SohYeong Noh</h2>
          <p class="teacher-disc">Director of Frontend department and member of University board.</p>
          <p class="teacher-disc2">SehYeong Noh has attended his Masters and Phd degree in this university and He was amongest the best achiveres and he is currently Teaching in this university.</p>
        </div>
        </div>
        <div class="teacher-body">
          <div class="teacher-img-container"><img src="./img/teach.png" alt="teacher" class="teacher-img"></div>
          <div class="teacher-disc-body">
          <h2 class="teacher-title">SohYeong Noh</h2>
          <p class="teacher-disc">Director of Frontend department and member of University board.</p>
          <p class="teacher-disc2">SehYeong Noh has attended his Masters and Phd degree in this university and He was amongest the best achiveres and he is currently Teaching in this university.</p>
        </div>
        </div>
      </div>
      <div class="teacher2">
        <div class="teacher-body">
          <div class="teacher-img-container"><img src="./img/teach.png" alt="teacher" class="teacher-img"></div>
          <div class="teacher-disc-body">
          <h2 class="teacher-title">SohYeong Noh</h2>
          <p class="teacher-disc">Director of Frontend department and member of University board.</p>
          <p class="teacher-disc2">SehYeong Noh has attended his Masters and Phd degree in this university and He was amongest the best achiveres and he is currently Teaching in this university.</p>
        </div>
        </div>
        <div class="teacher-body">
          <div class="teacher-img-container"><img src="./img/teach.png" alt="teacher" class="teacher-img"></div>
          <div class="teacher-disc-body">
          <h2 class="teacher-title">SohYeong Noh</h2>
          <p class="teacher-disc">Director of Frontend department and member of University board.</p>
          <p class="teacher-disc2">SehYeong Noh has attended his Masters and Phd degree in this university and He was amongest the best achiveres and he is currently Teaching in this university.</p>
        </div>
        </div>
        <div class="teacher-body">
          <div class="teacher-img-container"><img src="./img/teach.png" alt="teacher" class="teacher-img"></div>
          <div class="teacher-disc-body">
          <h2 class="teacher-title">SohYeong Noh</h2>
          <p class="teacher-disc">Director of Frontend department and member of University board.</p>
          <p class="teacher-disc2">SehYeong Noh has attended his Masters and Phd degree in this university and He was amongest the best achiveres and he is currently Teaching in this university.</p>
        </div>
        </div>
      </div>
    </div> */}

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