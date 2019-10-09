var formulaField = document.getElementById('formula')
const numberRegex = /((\(-1\)\*)?\d+(\.\d+)?(e-?\d+)?)$/

function applyFormula() {
    try {
        let result = eval(formulaField.textContent)
        document.getElementById('result').textContent = result
    } catch {
        alert("bad formula")
    }
}

function insertIntoFormula(id) {
    let char = document.getElementById(id).textContent
    formulaField.textContent += char.toLowerCase();
}

function insertOperator(id) {
    let match = numberRegex.exec(formulaField.textContent)
    if(match) {
        insertIntoFormula(id)
    }
}

function handleChangeSign() {
    let match = numberRegex.exec(formulaField.textContent)
    if(match) {
        let replacement
        if(match[1].startsWith('(-1)*')) {
            replacement = match[1].replace('(-1)*', "")
        } else {
            replacement = match[1].replace(/^/, '(-1)*')
        }
        formulaField.textContent = formulaField.textContent.replace(match[1],replacement)
    }
}

function deleteLastChar(){
    formulaField.textContent = formulaField.textContent.slice(0, -1);
}

function clearFormular(){
    formulaField.textContent=""
}