/*-------Realizar la función STATS------*/
const statistics = (link) => {
    const total = link.length;
    const unique = new Set(link.map(ele => ele.href)).size;
    return `Total: ${total} \nUnique: ${unique}`
}

const brokenLinks = (link) => {
    const broken = link.filter(ele=> ele.status !== 200).length;
    return `\nBroken: ${broken} `
}

module.exports = {statistics, brokenLinks};