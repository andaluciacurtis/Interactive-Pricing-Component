const slider = document.querySelector('.slider');
const price = document.querySelector('.price')
const viewAmnt = document.querySelector('.viewamnt')

slider.oninput = function() {
  let chosenPrice = this.value;
  price.innerHTML = `$${chosenPrice}.00`;
  // 10K pageviews / $8 per month
  // 50K pageviews / $12 per month
  // 100K pageviews / $16 per month
  // 500K pageviews / $24 per month
  // 1M pageviews / $36 per month

  if (chosenPrice > 35) {
    viewAmnt.innerHTML = "1M pageviews";
  } else if (chosenPrice >= 24) {
    viewAmnt.innerHTML = "500K pageviews";
  } else if (chosenPrice >= 16) {
    viewAmnt.innerHTML = "100K pageviews";
  } else if (chosenPrice >= 12) {
    viewAmnt.innerHTML = "50K pageviews";
  } else {
    viewAmnt.innerHTML = "10K pageviews";
  }
}