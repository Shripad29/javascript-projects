const input = document.querySelector("input");

const upperCaseOutput = document.querySelector("#upperCase span");
const lowerCaseOutput = document.querySelector("#lowerCase span");
const camelCaseOutput = document.querySelector("#camelCase span");
const pascalCaseOutput = document.querySelector("#pascalCase span");
const snakeCaseOutput = document.querySelector("#snakeCase span");
const kebabCaseOutput = document.querySelector("#kebabCase span");
const trimOutput = document.querySelector("#trim span");


function capitalizedString(str) {
    if(!str ) return str 
   return  str[0].toUpperCase() + str.slice(1, str.length);
}



function camelCase(str) {
    const lowerCaseString = str.toLowerCase()
    const wordsArray = lowerCaseString.split(' ')
   const finalArray =  wordsArray.map((word, index)=>{
        if(index === 0) return word
        return capitalizedString(word)
    })
return finalArray.join('')
}


function pascalCase(str) {
    const lowerCaseString = str.toLowerCase()
    const wordsArray = lowerCaseString.split(' ')
   const finalArray =  wordsArray.map((word)=>{
      
        return capitalizedString(word)
    })
return finalArray.join('')
}


function snakeCase(str) {
    
return str.replaceAll(' ', '_')
}


function kebabCase(str) {
    
return str.replaceAll(' ', '-')
}

function trim(str) {
    
return str.replaceAll(' ', '')
}




function updateScreen(){
    lowerCaseOutput.innerText = input.value.trim().toLowerCase();
    upperCaseOutput.innerText = input.value.trim().toUpperCase();
    camelCaseOutput.innerText = camelCase(input.value.trim())
    pascalCaseOutput.innerText = pascalCase(input.value.trim())
    snakeCaseOutput.innerText = snakeCase(input.value.trim())
    kebabCaseOutput.innerText = kebabCase(input.value.trim())
    trimOutput.innerText = trim(input.value.trim())
}

updateScreen()


input.addEventListener("input", ()=>{
    updateScreen();
});
