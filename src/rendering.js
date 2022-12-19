function renderCountryList(countries) {
  const markup = countries
    .map(country => {
      return `
            <li class='country-list-item'>
                <img class='country-list-img' src='${country.flags.png}' alt='${country.name.official}'>
                <p class='country-list-text'>${country.name.official}</p>
            </li>
            `;
    })
    .join('');
  return markup;
}

function renderCountryCard(country) {
  const markup = `
                <div class='country-info-title'>
                    <img class="country-info-img" src=${
                      country[0].flags.png
                    } alt=${country[0].name.official}>
                    <p class="country-info-name">${country[0].name.official}</p>
                </div>
                
                <p class="country-info-text">
                    <span class='country-info-text--bold'>Capital: </span>${
                      country[0].capital
                    }
                </p>
                <p class="country-info-text">
                    <span class='country-info-text--bold'>Population:</span> ${
                      country[0].population
                    }
                </p>
                <p class="country-info-text">
                    <span class='country-info-text--bold'>Languages: </span>${Object.values(
                      country[0].languages
                    )
                      .toString()
                      .split(',')
                      .join(', ')}
                </p>       
        `;
  //console.log(markup);
  return markup;
}

export default{
    renderCountryCard,
    renderCountryList,
}