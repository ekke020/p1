$('.name-change').mouseover((e) => (e.target.innerText = 'PETA'));
$('.name-change').mouseleave((e) => (e.target.innerText = 'name'));

const birdButton = $('#birdButton');
birdButton.click((e) => {
  $('.content').find('.hidden').toggle();
  let text = birdButton.text();
  birdButton.text(text === 'View more' ? 'View less' : 'View more');
});
