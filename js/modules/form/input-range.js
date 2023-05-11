const range = document.querySelector('.input-range');
const rangeValue = range.querySelector('.input-range__value');
const inputRange = range.querySelector('.input-range__input');
const track = range.querySelector('.input-range__track--chosen');
const thumb = range.querySelector('.input-range__thumb');
const rangeMaxValue = inputRange.max;

const onPriceValueChange = () => {
  rangeValue.textContent = `${inputRange.value} ₽`;
}

const changeRange = () => {
  let percent = (inputRange.value / rangeMaxValue) * 100;

  onPriceValueChange();

  track.style.width = `${percent}%`;
  thumb.style.left = `${percent}%`;
  thumb.style.transform = `translateX(${-percent}%)`;
}

const initRange = () => {
  inputRange.addEventListener('change', changeRange);
}

const resetRange = () => {
  rangeValue.textContent = '0 ₽';
  track.style.width = '0';
  thumb.style.left = '0';
  thumb.style.transform = `translateX(0%)`;
}

export {initRange, resetRange};