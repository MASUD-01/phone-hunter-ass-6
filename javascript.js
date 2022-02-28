const loadData = () => {
    const inputValue = document.getElementById('input-text')
    const inputValueText = inputValue.value
    inputValue.value = '';
    fetch(`https://openapi.programming-hero.com/api/phones?search=${inputValueText}`)
        .then(res => res.json())
        .then(data => displayPhones(data.data))
}

const displayPhones = (phones) => {
    const sectionDiv = document.getElementById('section-phone')
    sectionDiv.innerHTML = ''
    phones.forEach(element => {
        console.log(element)
        const displayDiv = document.createElement('div')
        displayDiv.classList.add('col-md-4')
        displayDiv.classList.add('mb-5')
        displayDiv.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${element.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="">${element.phone_name}</h5>
                <p class="card-text">${element.brand}</p>
                <button class="btn btn-primary">Know Details</button>
            </div>
        </div>`
        sectionDiv.appendChild(displayDiv)


    });
}