console.log("jejen");

const text = document.getElementById("i");
const button = document.getElementById("change-button");
const dateInput = document.getElementById("date");
const incomeInput = document.getElementById("penghasilan");
const result = document.getElementById("hello");
const asuransiDiv = document.getElementById("asuransi-options");

button.addEventListener("click", checkInsurance);

function checkInsurance() {
  const birthDate = new Date(dateInput.value);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  const income = Number(incomeInput.value);
  asuransiDiv.innerHTML = "";

  if (age > 20 && income > 7000000) {
    result.innerText = `Usia Anda ${age} tahun dan penghasilan Rp${income}. Anda bisa memilih asuransi:`;
    showInsuranceOptions();
  } else if (age < 35 && income > 7000000) {
    result.innerText = `Usia Anda ${age} tahun dan penghasilan Rp${income}. Anda juga bisa memilih asuransi:`;
    showInsuranceOptions();
  } else {
    result.innerText = "Maaf, Anda belum memenuhi syarat asuransi.";
  }
}

function showInsuranceOptions() {
  const select = document.createElement("select");
  select.name = "asuransi";
  select.id = "asuransi";

  const options = ["5 tahun", "10 tahun", "15 tahun"];
  options.forEach(opt => {
    const option = document.createElement("option");
    option.value = opt;
    option.text = opt;
    select.appendChild(option);
  });

  asuransiDiv.appendChild(select);

  const submitButton = document.createElement("button");
  submitButton.innerText = "Pilih Asuransi";
  submitButton.onclick = () => {
    const selected = select.value;
    alert(`Anda memilih asuransi ${selected}`);
  };

  asuransiDiv.appendChild(document.createElement("br"));
  asuransiDiv.appendChild(submitButton);
}
