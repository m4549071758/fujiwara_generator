const execButton = document.getElementById("exec")

execButton.addEventListener("click", () => {
    const input = document.getElementById("inputbox").value
    const outputBox = document.getElementById("outputbox")
    input.value = ""
    outputBox.value = ""

    let output = ""

    if (!/^[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}ー!！?？]*$/u.test(input)) {
        alert("日本語だけだよ！");
        return;
    }

    Array.from(input).forEach(char => {
        let normalized = char.normalize("NFD")[0];
        normalized += "゛"
        output += normalized
    });

    outputBox.value = output
});