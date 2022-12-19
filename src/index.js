import './css/styles.css';
import getRefs from './get-refs';
import fetchCountry from './api-service';
import render from './rendering';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

Notiflix.Notify.init({
  position: 'center-top',
  timeout: 2000,
});

const DEBOUNCE_DELAY = 300;
const refs = getRefs();

let searchQuery = '';

refs.searchInput.addEventListener(
  'input',
  debounce(onSearchInput, DEBOUNCE_DELAY)
);

function onSearchInput(event) {
  searchQuery = event.target.value;

  fetchCountry(searchQuery)
    .then(countries => {
      refs.countryList.innerHTML = '';
      refs.countryInfo.innerHTML = '';

      if (!event.target.value) {
        return;
      }

      if (countries.length >= 10) {
        Notiflix.Notify.success(
          'Too many matches found. Please enter a more specific name.'
        );
      } else if (countries.length === 1) {
        refs.countryInfo.innerHTML = render.renderCountryCard(countries);
      } else {
        refs.countryList.insertAdjacentHTML(
          'beforeend',
          render.renderCountryList(countries)
        );
      }
    })
    .catch(error => {
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}
