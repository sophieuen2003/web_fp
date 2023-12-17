function calculateProfitLoss(){


  // alert("歡迎使用hoya狼幫您估算損益");
  const stockNo = Number(document.getElementById("stockNo").value);
  const buyPrice = Number(document.getElementById("buyPrice").value);
  const amount = Number(document.getElementById("amount").value);
  let sellPrice = Number(26.45)

  console.log(buyPrice, sellPrice , amount,);


  const totalCost = buyPrice * amount;
  const totalRevenue = sellPrice * amount;

  const ProfitLoss = totalRevenue - totalCost;
  console.log('profit',ProfitLoss)

  document.getElementById("profit").style.display = "block";
  document.getElementById(
    "profit"
  ).innerHTML = `若現在全部賣出，您的損益為:： ${ProfitLoss}  元`;
}


