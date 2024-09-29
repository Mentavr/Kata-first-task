export const burger = () => {
    const burgerMenu = document.querySelector("#burger-menu");
    const burgerMenuButton = document.querySelector("#burger-button");

    const asd = document.querySelector(".closet")

    console.log(burgerMenuButton)

    burgerMenuButton.addEventListener("click", ({ target }) => {
        burgerMenu.classList.remove('menu-container_close');
        burgerMenu.classList.add('menu-container_open');
        console.log(burgerMenu.classList.contains("menu-container-open"))
    })
    console.log('work!');
    console.log(burger);

    asd.addEventListener("click", () => {
        burgerMenu.classList.remove('menu-container_open');
        burgerMenu.classList.add('menu-container_close');
        console.log('close')
    })
}