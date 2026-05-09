const nameElem = document.querySelector('#name-input');
console.log(nameElem);

const spanElem = document.querySelector('#name-output');
console.log(spanElem);

// nameElem.addEventListener('input', handleInputElemInput)

// function handleInputElemInput() {
//    console.log(event.currentTarget.value)
//     const markup = event.currentTarget.value
//     spanElem.textContent = markup.trim()
// }


nameElem.addEventListener('input', event => {

    console.log(event.currentTarget.value)
    const markup = event.currentTarget.value.trim()

    markup === '' ? spanElem.textContent = 'Anonymous' : spanElem.textContent = markup

    // if (markup === '') {
    //     return spanElem.textContent = 'Anonymous'
    // } else {
    //     return spanElem.textContent = markup
    // }
})


