function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
  const [from, to] = getParsed(fromInput, toInput);
  fillSlider(fromInput, toInput, "#B3C8DB", "#09295A", controlSlider);
  if (from > to) {
    fromSlider.value = to;
    fromInput.value = to;
  } else {
    fromSlider.value = from;
  }
}

function controlToInput(toSlider, fromInput, toInput, controlSlider) {
  const [from, to] = getParsed(fromInput, toInput);
  fillSlider(fromInput, toInput, "#B3C8DB", "#09295A", controlSlider);
  setToggleAccessible(toInput);
  if (from <= to) {
    toSlider.value = to;
    toInput.value = to;
  } else {
    toInput.value = from;
  }
}

function controlFromSlider(fromSlider, toSlider, fromInput) {
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, "#B3C8DB", "#09295A", toSlider);
  if (from > to) {
    fromSlider.value = to;
    fromInput.value = to;
  } else {
    fromInput.value = from;
  }
}

function controlToSlider(fromSlider, toSlider, toInput) {
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, "#B3C8DB", "#09295A", toSlider);
  setToggleAccessible(toSlider);
  if (from <= to) {
    toSlider.value = to;
    toInput.value = to;
  } else {
    toInput.value = from;
    toSlider.value = from;
  }
}

function getParsed(currentFrom, currentTo) {
  const from = parseInt(currentFrom.value, 10);
  const to = parseInt(currentTo.value, 10);
  return [from, to];
}

function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
  const rangeDistance = to.max - to.min;
  const fromPosition = from.value - to.min;
  const toPosition = to.value - to.min;
  controlSlider.style.background = `linear-gradient(
    to right,
    ${sliderColor} 0%,
    ${sliderColor} ${(fromPosition / rangeDistance) * 100}%,
    ${rangeColor} ${(fromPosition / rangeDistance) * 100}%,
    ${rangeColor} ${(toPosition / rangeDistance) * 100}%, 
    ${sliderColor} ${(toPosition / rangeDistance) * 100}%, 
    ${sliderColor} 100%)`;
}

function setToggleAccessible(currentTarget) {
  const toSlider = document.querySelector("#toSliderDB");
  if (Number(currentTarget.value) <= 0) {
    toSlider.style.zIndex = 2;
  } else {
    toSlider.style.zIndex = 0;
  }
}

const fromSliderDB = document.querySelector("#fromSliderDB");
const toSliderDB = document.querySelector("#toSliderDB");
const fromInputDB = document.querySelector("#fromInputDB");
const toInputDB = document.querySelector("#toInputDB");
fillSlider(fromSliderDB, toSliderDB, "#B3C8DB", "#09295A", toSliderDB);
setToggleAccessible(toSliderDB);

fromSliderDB.oninput = () =>
  controlFromSlider(fromSliderDB, toSliderDB, fromInputDB);
toSliderDB.oninput = () => controlToSlider(fromSliderDB, toSliderDB, toInputDB);
fromInputDB.oninput = () =>
  controlFromInput(fromSliderDB, fromInputDB, toInputDB, toSliderDB);
toInputDB.oninput = () =>
  controlToInput(toSliderDB, fromInputDB, toInputDB, toSliderDB);

const fromSliderGB = document.querySelector("#fromSliderGB");
const toSliderGB = document.querySelector("#toSliderGB");
const fromInputGB = document.querySelector("#fromInputGB");
const toInputGB = document.querySelector("#toInputGB");
fillSlider(fromSliderGB, toSliderGB, "#B3C8DB", "#09295A", toSliderGB);
setToggleAccessible(toSliderGB);

fromSliderGB.oninput = () =>
  controlFromSlider(fromSliderGB, toSliderGB, fromInputGB);
toSliderGB.oninput = () => controlToSlider(fromSliderGB, toSliderGB, toInputGB);
fromInputGB.oninput = () =>
  controlFromInput(fromSliderGB, fromInputGB, toInputGB, toSliderGB);
toInputGB.oninput = () =>
  controlToInput(toSliderGB, fromInputGB, toInputGB, toSliderGB);

const fromSliderDBS = document.querySelector("#fromSliderDBS");
const toSliderDBS = document.querySelector("#toSliderDBS");
const fromInputDBS = document.querySelector("#fromInputDBS");
const toInputDBS = document.querySelector("#toInputDBS");
fillSlider(fromSliderDBS, toSliderDBS, "#B3C8DB", "#09295A", toSliderDBS);
setToggleAccessible(toSliderDBS);

fromSliderDBS.oninput = () =>
  controlFromSlider(fromSliderDBS, toSliderDBS, fromInputDBS);
toSliderDBS.oninput = () =>
  controlToSlider(fromSliderDBS, toSliderDBS, toInputDBS);
fromInputDBS.oninput = () =>
  controlFromInput(fromSliderDBS, fromInputDBS, toInputDBS, toSliderDBS);
toInputDBS.oninput = () =>
  controlToInput(toSliderDBS, fromInputDBS, toInputDBS, toSliderDBS);

const fromSliderPC = document.querySelector("#fromSliderPC");
const toSliderPC = document.querySelector("#toSliderPC");
const fromInputPC = document.querySelector("#fromInputPC");
const toInputPC = document.querySelector("#toInputPC");
fillSlider(fromSliderPC, toSliderPC, "#B3C8DB", "#09295A", toSliderPC);
setToggleAccessible(toSliderPC);

fromSliderPC.oninput = () =>
  controlFromSlider(fromSliderPC, toSliderPC, fromInputPC);
toSliderPC.oninput = () => controlToSlider(fromSliderPC, toSliderPC, toInputPC);
fromInputPC.oninput = () =>
  controlFromInput(fromSliderPC, fromInputPC, toInputPC, toSliderPC);
toInputPC.oninput = () =>
  controlToInput(toSliderPC, fromInputPC, toInputPC, toSliderPC);

const fromSliderDC = document.querySelector("#fromSliderDC");
const toSliderDC = document.querySelector("#toSliderDC");
const fromInputDC = document.querySelector("#fromInputDC");
const toInputDC = document.querySelector("#toInputDC");
fillSlider(fromSliderDC, toSliderDC, "#B3C8DB", "#09295A", toSliderDC);
setToggleAccessible(toSliderDC);

fromSliderDC.oninput = () =>
  controlFromSlider(fromSliderDC, toSliderDC, fromInputDC);
toSliderDC.oninput = () => controlToSlider(fromSliderDC, toSliderDC, toInputDC);
fromInputDC.oninput = () =>
  controlFromInput(fromSliderDC, fromInputDC, toInputDC, toSliderDC);
toInputDC.oninput = () =>
  controlToInput(toSliderDC, fromInputDC, toInputDC, toSliderDC);

const fromSliderDrillingdiameter = document.querySelector(
  "#fromSliderDrillingdiameter"
);
const toSliderDrillingdiameter = document.querySelector(
  "#toSliderDrillingdiameter"
);
const fromInputDrillingdiameter = document.querySelector(
  "#fromInputDrillingdiameter"
);
const toInputDrillingdiameter = document.querySelector(
  "#toInputDrillingdiameter"
);
fillSlider(
  fromSliderDrillingdiameter,
  toSliderDrillingdiameter,
  "#B3C8DB",
  "#09295A",
  toSliderDrillingdiameter
);
setToggleAccessible(toSliderDrillingdiameter);

fromSliderDrillingdiameter.oninput = () =>
  controlFromSlider(
    fromSliderDrillingdiameter,
    toSliderDrillingdiameter,
    fromInputDrillingdiameter
  );
toSliderDrillingdiameter.oninput = () =>
  controlToSlider(
    fromSliderDrillingdiameter,
    toSliderDrillingdiameter,
    toInputDrillingdiameter
  );
fromInputDrillingdiameter.oninput = () =>
  controlFromInput(
    fromSliderDrillingdiameter,
    fromInputDrillingdiameter,
    toInputDrillingdiameter,
    toSliderDrillingdiameter
  );
toInputDrillingdiameter.oninput = () =>
  controlToInput(
    toSliderDrillingdiameter,
    fromInputDrillingdiameter,
    toInputDrillingdiameter,
    toSliderDrillingdiameter
  );

const fromSliderDiameter = document.querySelector("#fromSliderDiameter");
const toSliderDiameter = document.querySelector("#toSliderDiameter");
const fromInputDiameter = document.querySelector("#fromInputDiameter");
const toInputDiameter = document.querySelector("#toInputDiameter");
fillSlider(
  fromSliderDiameter,
  toSliderDiameter,
  "#B3C8DB",
  "#09295A",
  toSliderDiameter
);
setToggleAccessible(toSliderDiameter);

fromSliderDiameter.oninput = () =>
  controlFromSlider(fromSliderDiameter, toSliderDiameter, fromInputDiameter);
toSliderDiameter.oninput = () =>
  controlToSlider(fromSliderDiameter, toSliderDiameter, toInputDiameter);
fromInputDiameter.oninput = () =>
  controlFromInput(
    fromSliderDiameter,
    fromInputDiameter,
    toInputDiameter,
    toSliderDiameter
  );
toInputDiameter.oninput = () =>
  controlToInput(
    toSliderDiameter,
    fromInputDiameter,
    toInputDiameter,
    toSliderDiameter
  );

const fromSliderPower = document.querySelector("#fromSliderPower");
const toSliderPower = document.querySelector("#toSliderPower");
const fromInputPower = document.querySelector("#fromInputPower");
const toInputPower = document.querySelector("#toInputPower");
fillSlider(fromSliderPower, toSliderPower, "#B3C8DB", "#09295A", toSliderPower);
setToggleAccessible(toSliderPower);

fromSliderPower.oninput = () =>
  controlFromSlider(fromSliderPower, toSliderPower, fromInputPower);
toSliderPower.oninput = () =>
  controlToSlider(fromSliderPower, toSliderPower, toInputPower);
fromInputPower.oninput = () =>
  controlFromInput(
    fromSliderPower,
    fromInputPower,
    toInputPower,
    toSliderPower
  );
toInputPower.oninput = () =>
  controlToInput(toSliderPower, fromInputPower, toInputPower, toSliderPower);
