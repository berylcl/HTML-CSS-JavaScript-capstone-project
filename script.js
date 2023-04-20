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
const createspeakerStructureHTML = () => {
  const speakersSection = document.createElement('section');
  speakersSection.classList.add('speakers');
  speakersSection.setAttribute('id', 'featured-speakers');

  const sectionTitle = document.createElement('div');
  sectionTitle.classList.add('section-title');
  const titleHeading = document.createElement('h2');
  titleHeading.textContent = 'Featured Speakers';
  sectionTitle.appendChild(titleHeading);

  const redUnderline = document.createElement('span');
  redUnderline.classList.add('red-under');

  const speakersList = document.createElement('ul');
  speakersList.classList.add('speakers-container');

  speakersSection.appendChild(sectionTitle);
  speakersSection.appendChild(redUnderline);
  speakersSection.appendChild(speakersList);

  const speakersSectionContainer = document.getElementById('speakers-section');

  speakersSectionContainer.appendChild(speakersSection);
};

const createspeakerCard = () => {
  const speakersGrid = document.querySelector('.speakers-container');
  speakers.forEach((speaker) => {
    const speakerCard = document.createElement('li');
    speakerCard.classList.add('card');
    speakerCard.setAttribute('id', 'speakers');

    const speakerImage = document.createElement('div');
    speakerImage.classList.add('speaker-image');
    const image = document.createElement('img');
    image.setAttribute('src', speaker.img);
    image.setAttribute('alt', 'speaker photo');
    speakerImage.appendChild(image);

    const speakerDescription = document.createElement('div');
    speakerDescription.classList.add('speaker__dsc');
    const nameHeading = document.createElement('h3');
    nameHeading.textContent = speaker.name;
    const professionPara = document.createElement('p');
    professionPara.classList.add('dsc-1');
    professionPara.textContent = speaker.profession;
    const descriptionPara = document.createElement('p');
    descriptionPara.classList.add('dsc-2');
    descriptionPara.textContent = speaker.description;

    speakerDescription.appendChild(nameHeading);
    speakerDescription.appendChild(professionPara);
    speakerDescription.appendChild(document.createElement('span'));
    speakerDescription.appendChild(descriptionPara);

    speakerCard.appendChild(speakerImage);
    speakerCard.appendChild(speakerDescription);

    speakersGrid.appendChild(speakerCard);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  createspeakerStructureHTML();
  createspeakerCard();
});
