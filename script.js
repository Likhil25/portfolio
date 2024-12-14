const body = document.querySelector("body");
const scrollPage = (id) => {
    const currentEle = document.getElementById(id)
    currentEle.scrollIntoView({behavior:"smooth"})
}