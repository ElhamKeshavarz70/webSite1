const captchaText = document.getElementById("captcha-text");
const userInput = document.getElementById("user-input");
const submitButton = document.getElementById("submit-but");
const refreshButton = document.getElementById("refresh-but");

function f1()
{
    const char1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var cap = "";
    for (i = 0; i < 5; i++)
        cap = cap + char1.charAt(Math.floor(Math.random() * char1.length));
    captchaText.textContent = cap;
}

f1();

refreshButton.addEventListener("click", () =>
{
    f1();
    userInput.value = "";
});

userInput.addEventListener("keyup", () =>
{
    submitButton.disabled = userInput.value !== captchaText.textContent;
});

submitButton.addEventListener("click", () =>
{
    alert("Welcome");
})