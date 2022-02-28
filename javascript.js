//Global variable
const errorMessage = document.getElementById("error")
const sectionDiv = document.getElementById('section-phone')
const showIndivisualInfo = document.getElementById('indivisual-image')

//when users search phones then data is load this function
const loadData = () => {
    const inputValue = document.getElementById('input-text')
    const inputValueText = inputValue.value
    inputValue.value = '';
    fetch(`https://openapi.programming-hero.com/api/phones?search=${inputValueText}`)
        .then(res => res.json())
        .then(data => displayPhones(data.data.slice(0, 20)))
}

const displayPhones = (phones) => {
    //consition is when products is not found the storage,the message will show
    if (phones.length === 0) {
        errorMessage.innerText = "no product found "
        sectionDiv.innerHTML = ''
        showIndivisualInfo.innerHTML = ''
    }
    else {
        showIndivisualInfo.innerHTML = ''
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

//indivisual id pass this function
const knowDisplay = (info) => {
    fetch(`https://openapi.programming-hero.com/api/phone/${info}`)
        .then(res => res.json())
        .then(data => indivisualPhone(data.data))

}
const indivisualPhone = (phone) => {
    if (phone.releaseDate === '') {
        showIndivisualInfo.innerHTML = ''
        const singaldiv = document.createElement('div')
        singaldiv.classList.add('col-md-12')
        singaldiv.innerHTML = `
        <img width='400px' src='${phone.image}'/>
        <h2>${phone.name}</h2>
        <h2>${phone.releaseDate.innerText = 'No ReleaseDate found'}</h2>
        `
        showIndivisualInfo.appendChild(singaldiv)
    }
    else {
        showIndivisualInfo.innerHTML = ''
        const singaldiv = document.createElement('div')
        singaldiv.classList.add('col-md-12')
        singaldiv.innerHTML = `
        <img width='400px' src='${phone.image}'/>
        <h2>${phone.name}</h2>
        <h2> ${phone.releaseDate}</h2>
        `
        showIndivisualInfo.appendChild(singaldiv)
    }
}