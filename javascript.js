const loadData = () => {
    const inputValue = document.getElementById('input-text')
    const inputValueText = inputValue.value
    inputValue.value = '';
    fetch(`https://openapi.programming-hero.com/api/phones?search=${inputValueText}`)
        .then(res => res.json())
        .then(data => displayPhones(data))
}

const displayPhones = (phone) => {
    console.log(phone)
}