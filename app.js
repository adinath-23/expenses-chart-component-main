const data = [
    {
        "day": "mon",
        "amount": 17.45
    },
    {
        "day": "tue",
        "amount": 34.91
    },
    {
        "day": "wed",
        "amount": 52.36
    },
    {
        "day": "thu",
        "amount": 31.07
    },
    {
        "day": "fri",
        "amount": 23.39
    },
    {
        "day": "sat",
        "amount": 43.28
    },
    {
        "day": "sun",
        "amount": 25.48
    }
]

const bars = document.querySelector('.bars')

const maxAmount = Math.max(...data.map(item => item.amount))

console.log(maxAmount)


for (let barDetail of data) {
    const bar = document.createElement('div')
    bar.setAttribute('day', barDetail.day)
    bar.setAttribute('amount', `$${barDetail.amount}`)
    if (barDetail.amount === maxAmount) {
        bar.classList.add('max')
    }
    bar.classList.add('bar')
    bar.style.height = `${((barDetail.amount / maxAmount) * 100)}%`
    bars.append(bar)
}



