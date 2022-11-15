import View from './View';
import icons from '../../img/icons.svg';

class resultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes for qypour query, please try again!';
  _message = '';

  _generateMarkup() {
    return this._data.map(item => this._generateMarkupPreview(item)).join('');
  }

  _generateMarkupPreview(res) {
    return `<li class="preview">
    <a class="preview__link " href="#${res.id}">
    <figure class="preview__fig">
        <img src="${res.image}" alt="Test" />
    </figure>
    <div class="preview__data">
        <h4 class="preview__title">${res.title}</h4>
        <p class="preview__publisher">${res.publisher}</p>
        
    </div>
    </a>
</li>`;
  }
}

export default new resultsView();
