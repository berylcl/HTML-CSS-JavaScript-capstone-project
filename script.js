const hamburger = document.getElementById('hamburger-btn');
const mobMenu = document.getElementById('mobile-menu');

function myFunction(x) {
  x.classList.toggle('change');
  if (mobMenu.style.visibility === 'visible') {
    mobMenu.style.visibility = 'hidden';
    mobMenu.style.height = '0';
    mobMenu.style.overflowY = 'hidden';
  } else {
    mobMenu.style.visibility = 'visible';
    mobMenu.style.height = '100vh';
    mobMenu.style.overflowY = 'auto';
  }
}

hamburger.addEventListener('click', myFunction);

const speakers = [
  {
    name: 'ALH. Aminat Ajao',
    profession: 'Islamic musician',
    description: 'Won the award of Best Female Islamic Artiste of the Year',
    img: 'images/Aminat Ajao Obirere.png',
  },
  {
    name: 'Malama Khadija',
    profession: 'Social activist',
    description: 'Islamic studies teacher and founder of the Muslim Women Peace Forum.',
    img: 'images/Malama Khadija Gambo Hawaja.png',
  },
  {
    name: 'Sheikh Ahmad Abubakar Gumi',
    profession: 'Islamic cleric',
    description: 'Mufti and mufassir at the Kaduna central mosque Sultan Bello.',
    img: 'images/Sheikh Ahmad Abubakar Gumi.png',
  },
  {
    name: 'Sheikh Sajid Umar',
    profession: ' Mufti and Judge,',
    description: 'Director of Islamic Development since 2010 and  played an integral part in the start-up of the New Muslim Academy ',
    img: 'images/sajid-umer.png',
  },
  {
    name: 'Sheikh Muyideen Ajani Bello',
    profession: 'Islamic scholar',
    description: ' Chairman, Northern States’ Council Missioners of the Ansar Ud Deen Society of Nigeria',
    img: 'images/Shelkh-Muyideen-Ajani-Bello.png',
  },
  {
    name: 'Sheikh Ahmad Alkurdy',
    profession: 'Seminary Instructor',
    description: 'He serves the community in multiple capacities and has been a regular guest speaker and lecturer at numerous Islamic Centers, colleges and events',
    img: 'images/ahmad alkurdy.png',
  },
];

const referencePosition = document.getElementById('main-program');

const createspeakerStructureHTML = () => {
  referencePosition.insertAdjacentHTML('afterend',
    `<section class="speakers" id="featured-speakers">
     <div class="section-title"><h2>Featured Speakers</h2></div>
     <span class="red-under"></span>
     <ul class="speakers-container"></ul></section>`);
};

const createspeakerCard = () => {
  speakers.forEach((speaker) => {
    const speakersGrid = document.querySelector('.speakers-container');

    speakersGrid.insertAdjacentHTML('beforeend',
      `<li class="card" id = "speakers">
         <div class="speaker-image">
         <img src="${speaker.img}" alt="speaker photo"></div>
        <div class="speaker__dsc">
        <h3>${speaker.name}</h3>
        <p class="dsc-1">${speaker.profession}</p>
        <span></span>
        <p class="dsc-2">${speaker.description}</p>
        </div>
        </li>`);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  createspeakerStructureHTML();

  createspeakerCard();
});
