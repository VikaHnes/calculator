const amountInput = document.getElementById("amount");
const termInput = document.getElementById("term");
const rateInput = document.getElementById("rate");
const calculateBtn = document.getElementById("calculateBtn");

const monthlyPaymentOutput = document.getElementById("monthlyPayment");
const totalPaymentOutput = document.getElementById("totalPayment");
const overpaymentOutput = document.getElementById("overpayment");

function formatMoney(value) {
  return value.toLocaleString("uk-UA", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }) + " грн";
}

calculateBtn.addEventListener("click", function () {
  const amount = parseFloat(amountInput.value);
  const term = parseInt(termInput.value);
  const annualRate = parseFloat(rateInput.value);

  if (isNaN(amount) || isNaN(term) || isNaN(annualRate) || amount <= 0 || term <= 0 || annualRate < 0) {
    alert("Будь ласка, введіть коректні дані.");
    return;
  }

  const monthlyRate = annualRate / 100 / 12;

  let monthlyPayment;

  if (monthlyRate === 0) {
    monthlyPayment = amount / term;
  } else {
    monthlyPayment =
      (amount * monthlyRate * Math.pow(1 + monthlyRate, term)) /
      (Math.pow(1 + monthlyRate, term) - 1);
  }

  const totalPayment = monthlyPayment * term;
  const overpayment = totalPayment - amount;

  monthlyPaymentOutput.textContent = formatMoney(monthlyPayment);
  totalPaymentOutput.textContent = formatMoney(totalPayment);
  overpaymentOutput.textContent = formatMoney(overpayment);
});
