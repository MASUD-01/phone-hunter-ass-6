const loadData = () => {
    const inputValue = document.getElementById('input-text')
    const inputValueText = inputValue.value

    inputValue.value = '';
    fetch(`https://openapi.programming-hero.com/api/phones?search=${inputValueText}`)
        .then(res => res.json())
        .then(data => displayPhones(data.data))
}
const errorMessage = document.getElementById("error")
const sectionDiv = document.getElementById('section-phone')
const displayPhones = (phones) => {
    if (phones.length === 0) {
        errorMessage.innerText = "not found product"
        sectionDiv.innerHTML = ''
    }
    else {
        errorMessage.innerHTML = ''
        sectionDiv.innerHTML = ''
        phones.forEach(element => {
            const displayDiv = document.createElement('div')
            displayDiv.classList.add('col-md-4')
            displayDiv.classList.add('mb-5')
            displayDiv.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src="${element.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="">${element.phone_name}</h5>
                    <p class="card-text">${element.brand}</p>
                    <button onclick='knowDisplay("${element.slug}")' class="btn btn-primary">Know Details</button>
                </div>
            </div>`
            sectionDiv.appendChild(displayDiv)
        });
    }
}

const knowDisplay = (info) => {
    fetch(`https://openapi.programming-hero.com/api/phone/${info}`)
        .then(res => res.json())
        .then(data => indivisualPhone(data.data))

}
const indivisualPhone = (phone) => {
    const showIndivisualInfo = document.getElementById('indivisual-image')


    console.log(phone)
}