const reviewSection = $('.review-section');
const submitButton = $('#submitButton');

const createReview = (title, name, text) => {
  const reviewDiv = $('<div/>').addClass('review');
  reviewDiv.append(createHeader(title));
  reviewDiv.append(createBody(text));
  reviewDiv.append(createFooter(name));
  reviewSection.prepend(reviewDiv);
  reviewSection.scrollLeft(0);
};

const createHeader = (title) => {
  const divHeader = $('<div/>').addClass('review-title');
  const h2 = $('<h2/>');
  divHeader.append(h2);
  h2.append(title);
  return divHeader;
};

const createBody = (text) => {
  const divBody = $('<div/>').addClass('review-body');
  const p = $('<p/>');
  p.append(text);
  divBody.append(p);
  return divBody;
};

const createFooter = (name) => {
  const divFooter = $('<div/>').addClass('review-footer');
  const pName = $('<p/>').addClass('name');
  const pDate = $('<p/>').addClass('date');
  pName.append(name);
  pDate.append(getDate());
  divFooter.append(pName, pDate);
  return divFooter;
};

const getDate = () => {
  const date = new Date();
  return `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;
};

submitButton.click((event) => {
  event.preventDefault();
  const title = $('#title').val();
  const name = $('#name').val();
  const text = $('#submitArea').val();
  if (isInputValid(title, name, text)) {
    createReview(title, name, text);
    $('form :input').val('');
  }
});

const isInputValid = (title, name, text) => {
  if (title.length < 1) return false;
  if (name.length < 1) return false;
  if (text.length < 1) return false;
  return true;
};
