let generatedCode = "";

function register() {
  generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
  document.getElementById("generatedCode").innerText = generatedCode;

  document.getElementById("loginSection").classList.add("hidden");
  document.getElementById("codeSection").classList.remove("hidden");
}

function verifyCode() {
  const input = document.getElementById("codeInput").value;

  if (input === generatedCode) {
    document.getElementById("codeSection").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
  } else {
    alert("Code incorrect");
  }
}
