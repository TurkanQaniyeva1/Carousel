let carousel = document.querySelector(".carousel");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let data = [
    {
        img: "https://media.istockphoto.com/id/468640720/photo/merry-go-round.jpg?s=2048x2048&w=is&k=20&c=gzDF1Dv3jK9YYE72O9CwgdxVQWWluoLETiZtQfvVeDI="
    },
    {
        img: "https://media.istockphoto.com/id/1676541276/photo/brown-christmas-gift-boxes-on-rustic-wooden-table.jpg?s=2048x2048&w=is&k=20&c=_C5hL4m9rjYss1_jbvLYF78-OM9St0x6_f_jz1BSGj8="
    },
    {
        img: "https://media.istockphoto.com/id/623209324/photo/santa-claus-riding-on-sleigh-with-gift-box.jpg?s=2048x2048&w=is&k=20&c=CSBh7ywyqcMJ374BZQypHwDFmLeUm_HVoPoY17Zxv9s="
    },
    {
        img: "https://images.pexels.com/photos/735423/pexels-photo-735423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        img: "https://images.pexels.com/photos/29749124/pexels-photo-29749124/free-photo-of-festive-nutcracker-at-christmas-market-display.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
]

let firstElement = 0;
const lastElement = 4;


function visible(index) {
    carousel.innerHTML = "";
    for (let i = 0; i < lastElement; i++) {
        let itemIndex = (index + i) % data.length;
        carousel.innerHTML += `
        <div class="item">
        <img src="${data[itemIndex].img}" alt="">
        </div>
        `
    }
}
visible(firstElement)

next.addEventListener("click", () => {
    firstElement = (firstElement + 1) % data.length;
    visible(firstElement);
    console.log(firstElement);
})



prev.addEventListener("click", () => {
    firstElement = (firstElement - 1 + data.length) % data.length;
    visible(firstElement);
    console.log(firstElement);
})



