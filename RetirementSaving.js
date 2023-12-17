function calculateSaving() {
  alert("退休對你來說太遠嗎？不如就趁現在讓Hoya狼幫你提前做規劃吧");
  age = Number(document.getElementById("age").value);
  retirementAge = Number(document.getElementById("retirementAge").value);
  lifeYear = Number(document.getElementById("lifeYear").value);
  assets = Number(document.getElementById("assets").value);
  income = Number(document.getElementById("income").value);
  expense = Number(document.getElementById("expense").value);

  retireMonthCost = Number(document.getElementById("retireMonthCost").value);
  inRate = Number(document.getElementById("inRate").value);

  timeToRetirement = retirementAge - age;

  saving = (income - expense) * 12 * (inRate * 0.01) * timeToRetirement;
  totalSaving = saving + assets;

  totalCost = (lifeYear - retirementAge) * retireMonthCost * 12;

  monthlyReserves = ((totalCost - totalSaving) / timeToRetirement / 12).toFixed(
    2
  );

  document.getElementById("reserves").style.display = "block";
  document.getElementById(
    "reserves"
  ).innerHTML = `每月至少應再投入： ${monthlyReserves}  元`;
}
