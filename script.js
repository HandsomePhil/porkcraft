function calculate() {
  const gold = parseInt(document.getElementById('gold').value) || 0;
  const silver = parseInt(document.getElementById('silver').value) || 0;
  const copper = parseInt(document.getElementById('copper').value) || 0;

  const multiplier = parseFloat(document.querySelector('input[name="multiplier"]:checked').value);

  const totalCopper = gold * 10000 + silver * 100 + copper;
  const resultCopper = totalCopper * multiplier;

  const finalGold = Math.floor(resultCopper / 10000);
  const finalSilver = Math.floor((resultCopper % 10000) / 100);
  const finalCopper = Math.floor(resultCopper % 100);

  document.getElementById('result').textContent = `${finalGold}g ${finalSilver}s ${finalCopper}c`;
  document.getElementById('result-header').style.display = 'block';

  // ** RESET BUTTON FUNCTIONALITY **
  // const btn = document.getElementById("calcBtn");
  // btn.textContent = "Reset";
  // btn.onclick = reset;
}

function reset() {
  document.getElementById('gold').value = " ";
  document.getElementById('silver').value = " ";
  document.getElementById('copper').value = " ";
  document.getElementById('result').textContent = "";
  document.getElementById('result-header').style.display = 'none';

  const btn = document.getElementById("calcBtn");
  btn.textContent = "Calculate";
  btn.onclick = calculate;
}