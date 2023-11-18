const parseDate = (date) => {
    const [den, mesic, rok] = date.split(".")
    const datum = {
        den: Number(den),
        mesic: Number(mesic),
        rok: Number(rok),}
    
    document.body.innerHTML += `<p> den: ${datum.den}<br> měsíc: ${datum.mesic}<br> rok: ${datum.rok}</p>`}

parseDate('15.01.2024')


