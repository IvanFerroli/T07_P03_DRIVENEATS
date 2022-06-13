let main = null;
let mainPriceTag = null;
let beverage = null;
let beveragePriceTag = null;
let dessert = null;
let dessertPriceTag = null;

let selectionCounter = 0;

function selectMainMeal(option, title, price) {
  uncheckPreviousSelection("main");

  option.classList.add("selected");
  main = title;
  mainPriceTag = price;
  selectionCounter = selectionCounter + 1;
    console.log(selectionCounter)
  checkoutEnable();
}

function selectBeverage(option, title, price) {
    uncheckPreviousSelection("beverage");
  
    option.classList.add("selected");
    beverage = title;
    beveragePriceTag = price;
    selectionCounter = selectionCounter + 1;
    console.log(selectionCounter)
    checkoutEnable();
  }

  function selectDessert(option, title, price) {
    uncheckPreviousSelection("dessert");
  
    option.classList.add("selected");
    dessert = title;
    dessertPriceTag = price;
    selectionCounter = selectionCounter + 1;
    console.log(selectionCounter)
    checkoutEnable();
  }

function uncheckPreviousSelection(optionSelected) {
  const selectedOption = document.querySelector(`.${optionSelected} .selected`);

  if (selectedOption !== null) {
    selectedOption.classList.remove("selected");
    selectionCounter = selectionCounter -1;
  }
}

function doubleCheckOrder() {
  document.querySelector(".confirm").classList.remove("hidden");

  document.querySelector(".chosenMainMeal").innerHTML = main;
  document.querySelector(
    ".chosenMainMealPrice"
  ).innerHTML = `R$ ${mainPriceTag.toFixed(2)}`;

  document.querySelector(".chosenBeverage").innerHTML = beverage;
  document.querySelector(
    ".chosenBeveragePrice"
  ).innerHTML = `R$ ${beveragePriceTag.toFixed(2)}`;

  document.querySelector(".chosenDessert").innerHTML = dessert;
  document.querySelector(
    ".chosenDessertPrice"
  ).innerHTML = `R$ ${dessertPriceTag.toFixed(2)}`;

  document.querySelector(".total").innerHTML = `R$ ${(
    mainPriceTag +
    beveragePriceTag +
    dessertPriceTag
  ).toFixed(2)}`;
}

function checkoutEnable() {
  const checkoutButton = document.querySelector("footer button");
  if (selectionCounter === 3) {
    checkoutButton.disabled = false;
    checkoutButton.innerHTML = "Fechar pedido";
    checkoutButton.classList.add("button-enabled");
  } else {
    checkoutButton.disabled = true;
    checkoutButton.innerHTML = "Selecione 3 itens para fechar o pedido";
    checkoutButton.classList.remove("button-enabled");
  }
}

function checkout() {
  window.open(whatsappMessage(), "_blank").focus();
}

function checkout() {
  const messageUrl = whatsappMessage();
  window.open(messageUrl, "_blank").focus();
}

function whatsappMessage() {
  const phone = "5583986748048";
  const total = (mainPriceTag + beveragePriceTag + dessertPriceTag).toFixed(
    2
  );

  let message = `Olá, gostaria de fazer o pedido:
    - Prato: ${main}
    - Bebida: ${beverage}
    - Sobremesa: ${dessert}
    Total: R$ ${total}
  `;

  message = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${message}`;
}

function orderReDo() {
  document.querySelector(".confirm").classList.add("hidden");
}
