//Global variable
const errorMessage = document.getElementById("error")
const sectionDiv = document.getElementById('section-phone')
const showIndivisualInfo = document.getElementById('indivisual-image')

//when users search phones then data is load this function
const loadData = () => {
    const inputValue = document.getElementById('input-text')
    const inputValueText = inputValue.value
    //validation except numbers
    if (inputValueText >= 0 || inputValueText <= 0) {
        errorMessage.innerText = "no product found "
    }
    else {
        inputValue.value = '';
        fetch(`https://openapi.programming-hero.com/api/phones?search=${inputValueText}`)
            .then(res => res.json())
            .then(data => displayPhones(data.data.slice(0, 20)))
    }

}

const displayPhones = (phones) => {
    //error handle, consition is when products is not found the storage,the message will show
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
            displayDiv.classList.add('col-md-6')
            displayDiv.classList.add('col-sm-12')
            displayDiv.classList.add('mb-5')
            displayDiv.innerHTML = `
            <div class="card text-center mx-auto" style="width: 18rem;">
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
    //the consition is,, if the release date is not found
    if (phone.releaseDate === '') {
        showIndivisualInfo.innerHTML = ''
        const singaldiv = document.createElement('div')
        singaldiv.classList.add('col-md-12')
        singaldiv.innerHTML = `
        <div class="card mx-auto" style="width: 18rem;">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h2>${phone.name}</h2>
                <h2> ${phone.releaseDate.innerText = 'No ReleaseDate found'}</h2>
                <p><h5>chipset:</h5> ${phone.mainFeatures.chipSet}
                <p><h5>displaySize:</h5> ${phone.mainFeatures.displaySize}
                <p><h5>memory:</h5> ${phone.mainFeatures.memory}
                <p><h5>storage:</h5> ${phone.mainFeatures.storage}
                <p><h5>sensor:</h5> ${phone.mainFeatures.sensors}
                <p><h4>others:</h4>
                <p><h5>Bluetooth:</h5></p>${phone.others.Bluetooth}
                <p><h5>GPS:</h5></p>${phone.others.GPS}
                <p><h5>NFC:</h5></p>${phone.others.NFC}
                <p><h5>Radio:</h5></p>${phone.others.Radio}
                <p><h5>USB:</h5></p>${phone.others.USB}
                <p><h5>WLAN:</h5></p>${phone.others.WLAN}
                </p>
            </div>
        </div>
        `
        showIndivisualInfo.appendChild(singaldiv)
    }
    else {
        showIndivisualInfo.innerHTML = ''
        const singaldiv = document.createElement('div')
        singaldiv.classList.add('col-md-12')
        singaldiv.innerHTML = `
        <div class="card mx-auto" style="width: 18rem;">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h2>${phone.name}</h2>
                <h2> ${phone.releaseDate}</h2>
                <p><h5>chipset:</h5> ${phone.mainFeatures.chipSet}
                <p><h5>displaySize:</h5> ${phone.mainFeatures.displaySize}
                <p><h5>memory:</h5> ${phone.mainFeatures.memory}
                <p><h5>storage:</h5> ${phone.mainFeatures.storage}
                <p><h5>sensor:</h5> ${phone.mainFeatures.sensors}
                <p><h4>others:</h4>
                <p><h5>Bluetooth:</h5></p>${phone.others.Bluetooth}
                <p><h5>GPS:</h5></p>${phone.others.GPS}
                <p><h5>NFC:</h5></p>${phone.others.NFC}
                <p><h5>Radio:</h5></p>${phone.others.Radio}
                <p><h5>USB:</h5></p>${phone.others.USB}
                <p><h5>WLAN:</h5></p>${phone.others.WLAN}
                </p>   
            </div>
        </div>
        `
        showIndivisualInfo.appendChild(singaldiv)
    }
}
