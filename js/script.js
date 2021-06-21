'use strict';

let main = document.createElement('main');
main.classList.add('page');
document.body.append(main);

let pageTitle = document.createElement('h1');
pageTitle.classList.add('page__title');
pageTitle.innerText = 'Mobile shop';
main.append(pageTitle);

let pageFormCreatedGoods = document.createElement('form');
pageFormCreatedGoods.classList.add('page__form-created-goods');
pageFormCreatedGoods.classList.add('form-created-goods');
main.append(pageFormCreatedGoods);

let formCreatedGoodsMainInfo = document.createElement('div');
formCreatedGoodsMainInfo.classList.add('form-created-goods__main-info');
formCreatedGoodsMainInfo.classList.add('main-info');
pageFormCreatedGoods.append(formCreatedGoodsMainInfo);

let mainInfoBlockInputName = document.createElement('div');
mainInfoBlockInputName.classList.add('main-info__block-input');
mainInfoBlockInputName.classList.add('block-input');
formCreatedGoodsMainInfo.append(mainInfoBlockInputName);

let blockInputName = document.createElement('input');
blockInputName.type = 'text';
blockInputName.id = 'nameGoods';
blockInputName.classList.add('block-input__input');

let blockInputLabelName = document.createElement('label');
blockInputLabelName.innerText = 'Name';
blockInputLabelName.classList.add('block-input__label');
mainInfoBlockInputName.append(blockInputName, blockInputLabelName);

let mainInfoBlockInputArticle = document.createElement('div');
mainInfoBlockInputArticle.classList.add('main-info__block-input');
mainInfoBlockInputArticle.classList.add('block-input');
formCreatedGoodsMainInfo.append(mainInfoBlockInputArticle);

let blockInputArticle = document.createElement('input');
blockInputArticle.type = 'text';
blockInputArticle.id = 'articleGoods';
blockInputArticle.classList.add('block-input__input');

let blockInputLabelArticle = document.createElement('label');
blockInputLabelArticle.innerText = 'Article';
blockInputLabelArticle.classList.add('block-input__label');
mainInfoBlockInputArticle.append(blockInputArticle, blockInputLabelArticle);

let mainInfoBlockInputCount = document.createElement('div');
mainInfoBlockInputCount.classList.add('main-info__block-input');
mainInfoBlockInputCount.classList.add('block-input');
formCreatedGoodsMainInfo.append(mainInfoBlockInputCount);

let blockInputCount = document.createElement('input');
blockInputCount.type = 'number';
blockInputCount.id = 'countGoods';
blockInputCount.classList.add('block-input__input');

let blockInputLabelCount = document.createElement('label');
blockInputLabelCount.innerText = 'Count';
blockInputLabelCount.classList.add('block-input__label');
mainInfoBlockInputCount.append(blockInputCount, blockInputLabelCount);

let mainInfoBlockInputPrice = document.createElement('div');
mainInfoBlockInputPrice.classList.add('main-info__block-input');
mainInfoBlockInputPrice.classList.add('block-input');
formCreatedGoodsMainInfo.append(mainInfoBlockInputPrice);

let blockInputPrice = document.createElement('input');
blockInputPrice.type = 'number';
blockInputPrice.id = 'priceGoods';
blockInputPrice.classList.add('block-input__input');

let blockInputLabelPrice = document.createElement('label');
blockInputLabelPrice.innerText = 'Price, $';
blockInputLabelPrice.classList.add('block-input__label');
mainInfoBlockInputPrice.append(blockInputPrice, blockInputLabelPrice);

let mainInfoBlockInputDate = document.createElement('div');
mainInfoBlockInputDate.classList.add('main-info__block-input');
mainInfoBlockInputDate.classList.add('block-input');
formCreatedGoodsMainInfo.append(mainInfoBlockInputDate);

let blockInputDate = document.createElement('input');
blockInputDate.type = 'date';
blockInputDate.id = 'dateAdd';
blockInputDate.classList.add('block-input__date');

let blockInputLabelDate = document.createElement('label');
blockInputLabelDate.innerText = 'Creation date';
blockInputLabelDate.classList.add('block-input__label');
mainInfoBlockInputDate.append(blockInputDate, blockInputLabelDate);


let formCreatedGoodsPriceSegment = document.createElement('div');
formCreatedGoodsPriceSegment.classList.add('form-created-goods__price-segment');
pageFormCreatedGoods.append(formCreatedGoodsPriceSegment);

let priceSegmentCheapLabel = document.createElement('label');
priceSegmentCheapLabel.innerText = 'Cheap';
let priceSegmentCheapInput = document.createElement('input');
priceSegmentCheapInput.type = 'radio';
priceSegmentCheapInput.name = 'price';
priceSegmentCheapInput.style.marginLeft = '15px';
priceSegmentCheapInput.style.transform = 'scale(1.5)';
priceSegmentCheapLabel.append(priceSegmentCheapInput);

let priceSegmentOptiomalLabel = document.createElement('label');
priceSegmentOptiomalLabel.innerText = 'Optiomal';
let priceSegmentOptiomalInput = document.createElement('input');
priceSegmentOptiomalInput.type = 'radio';
priceSegmentOptiomalInput.name = 'price';
priceSegmentOptiomalInput.style.marginLeft = '15px';
priceSegmentOptiomalInput.style.transform = 'scale(1.5)';
priceSegmentOptiomalLabel.append(priceSegmentOptiomalInput);

let priceSegmentPremiumLabel = document.createElement('label');

let priceSegmentPremiumInput = document.createElement('input');
priceSegmentPremiumInput.type = 'radio';
priceSegmentPremiumInput.name = 'price';
priceSegmentPremiumInput.style.marginLeft = '15px';
priceSegmentPremiumInput.style.transform = 'scale(1.5)';
priceSegmentPremiumLabel.innerText = 'Premium';
priceSegmentPremiumLabel.append(priceSegmentPremiumInput);

formCreatedGoodsPriceSegment.append(priceSegmentCheapLabel, priceSegmentOptiomalLabel, priceSegmentPremiumLabel);


let formCreatedGoodsSecondaryInfomation = document.createElement('div');
formCreatedGoodsSecondaryInfomation.classList.add('form-created-goods__secondary-infomation');
formCreatedGoodsSecondaryInfomation.classList.add('secondary-infomation');
pageFormCreatedGoods.append(formCreatedGoodsSecondaryInfomation);

let secondaryInfomationBlockInput = document.createElement('div');
secondaryInfomationBlockInput.classList.add('secondary-infomation__block-input');
secondaryInfomationBlockInput.classList.add('block-input');
formCreatedGoodsSecondaryInfomation.append(secondaryInfomationBlockInput);

let blockInputImage = document.createElement('input');
blockInputImage.classList.add('block-input__input');
blockInputImage.type = 'text';

let blockInputLabelImage = document.createElement('label');
blockInputLabelImage.classList.add('block-input__label');
blockInputLabelImage.innerText = 'Picture';

secondaryInfomationBlockInput.append(blockInputImage, blockInputLabelImage);

let secondaryInfomationDescription = document.createElement('div');
secondaryInfomationDescription.classList.add('secondary-infomation__description');

let secondaryInfomationDescriptionLabel = document.createElement('label');
secondaryInfomationDescriptionLabel.innerText = 'Description';
secondaryInfomationDescriptionLabel.style.margin = '20px 0';
let secondaryInfomationDescriptionTextArea = document.createElement('textarea')
secondaryInfomationDescriptionTextArea.cols = '30';
secondaryInfomationDescriptionTextArea.style.fontSize = '1.2em'
secondaryInfomationDescriptionTextArea.style.border = 'solid 1px black'
secondaryInfomationDescriptionTextArea.style.marginBottom = '20px'
secondaryInfomationDescription.append(secondaryInfomationDescriptionLabel, secondaryInfomationDescriptionTextArea);

formCreatedGoodsSecondaryInfomation.append(secondaryInfomationDescription);

let formCreatedGoodsBtn = document.createElement('div');
formCreatedGoodsBtn.classList.add('form-created-goods__btn');
formCreatedGoodsBtn.id = 'btn';
formCreatedGoodsBtn.innerText = 'Submit';
formCreatedGoodsBtn.addEventListener('mouseover', () => {
	formCreatedGoodsBtn.style.backgroundColor = '#000';
})
formCreatedGoodsBtn.addEventListener('mouseout', () => {
	formCreatedGoodsBtn.style.backgroundColor = 'yellowgreen';
})
pageFormCreatedGoods.append(formCreatedGoodsBtn);


let pageSearch = document.createElement('form');
pageSearch.classList.add('page__search');
pageSearch.classList.add('search');
main.append(pageSearch);

let searchContainer = document.createElement('div');
searchContainer.classList.add('container-search__block');
searchContainer.classList.add('container-search');
pageSearch.append(searchContainer);

let containerSearchBlock = document.createElement('div')
containerSearchBlock.classList.add('container-search__block');
searchContainer.append(containerSearchBlock);

let containerSearchInput = document.createElement('input');
containerSearchInput.classList.add('container-search__input');
containerSearchInput.id = 'search';

let containerSearchLabel = document.createElement('label');
containerSearchLabel.classList.add('container-search__label');

let iconSearch = document.createElement('i');
iconSearch.classList.add('fas');
iconSearch.classList.add('fa-search');
iconSearch.classList.add('fa-2x');
containerSearchLabel.append(iconSearch);

containerSearchBlock.append(containerSearchInput, containerSearchLabel);

let searchPriceSegment = document.createElement('div');
searchPriceSegment.classList.add('search__price-segment');
searchPriceSegment.classList.add('price-segment');
pageSearch.append(searchPriceSegment);

let searchPriceSegmentCheapLabel = document.createElement('label');
searchPriceSegmentCheapLabel.innerText = 'Cheap';
let searchPriceSegmentCheapInput = document.createElement('input');
searchPriceSegmentCheapInput.type = 'radio';
searchPriceSegmentCheapInput.name = 'price';
searchPriceSegmentCheapInput.style.marginLeft = '15px';
searchPriceSegmentCheapInput.style.transform = 'scale(1.5)';
searchPriceSegmentCheapLabel.append(searchPriceSegmentCheapInput);

let searchPriceSegmentOptiomalLabel = document.createElement('label');
searchPriceSegmentOptiomalLabel.innerText = 'Optiomal';
let searchPriceSegmentOptiomalInput = document.createElement('input');
searchPriceSegmentOptiomalInput.type = 'radio';
searchPriceSegmentOptiomalInput.name = 'price';
searchPriceSegmentOptiomalInput.style.marginLeft = '15px';
searchPriceSegmentOptiomalInput.style.transform = 'scale(1.5)';
searchPriceSegmentOptiomalLabel.append(searchPriceSegmentOptiomalInput);

let searchPriceSegmentPremiumLabel = document.createElement('label');

let searchPriceSegmentPremiumInput = document.createElement('input');
searchPriceSegmentPremiumInput.type = 'radio';
searchPriceSegmentPremiumInput.name = 'price';
searchPriceSegmentPremiumInput.style.marginLeft = '15px';
searchPriceSegmentPremiumInput.style.transform = 'scale(1.5)';
searchPriceSegmentPremiumLabel.innerText = 'Premium';
searchPriceSegmentPremiumLabel.append(searchPriceSegmentPremiumInput);

searchPriceSegment.append(searchPriceSegmentCheapLabel, searchPriceSegmentOptiomalLabel, searchPriceSegmentPremiumLabel);


let pageGallary = document.createElement('section');
pageGallary.classList.add('page__gallary');
pageGallary.classList.add('gallary');
main.append(pageGallary);

let gallaryTitle = document.createElement('h2');
gallaryTitle.classList.add('gallary__title');
gallaryTitle.innerText = 'Gallary';
pageGallary.append(gallaryTitle);

let gallaryCarts = document.createElement('div');
gallaryCarts.classList.add('gallary__carts');
gallaryCarts.classList.add('carts');
pageGallary.append(gallaryCarts);


// btn.addEventListener('click', () => {
// 	let cart = document.createElement('div');
// 	cart.classList.add('carts__cart');
// 	cart.classList.add('cart');

// 	let cartImg = document.createElement('img');
// 	cartImg.classList.add('cart__img');
// 	cartImg.src = `${}`
// })



