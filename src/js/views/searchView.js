import View from './View';

class searchView {
  _parentEl = document.querySelector('.search');

  getQuery() {
    // console.log(this._parentEl.querySelector('.search__field').value);
    const query = this._parentEl.querySelector('.search__field').value;

    this._clearInput();
    return query;
  }
  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }
  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}
export default new searchView();
