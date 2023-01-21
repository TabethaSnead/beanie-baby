export function renderBeanies(beanie) {
    const li = document.createElement('li');
    const titleDiv = document.createElement('div');
    const img = document.createElement('img');
    const zodiacDiv = document.createElement('div');
    const birthdayDiv = document.createElement('div');

    li.classList.add('beanie-card');

    titleDiv.textContent = beanie.title;
    zodiacDiv.textContent = beanie.astroSign;
    birthdayDiv.textContent = beanie.birthday;
    img.src = beanie.image;

    li.append(titleDiv, zodiacDiv, birthdayDiv, img);
    return li;
}

export function renderZodiacOption(zodiac) {
    const option = document.createElement('option');
    option.value = zodiac.name;
    option.textContent = zodiac.name;
    return option;
}
