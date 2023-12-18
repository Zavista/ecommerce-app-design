import africaImage from "./assets/africa.png"
import asiaImage from "./assets/asiapacific.png"
import centralImage from "./assets/centralamerica.png"
import middleImage from "./assets/middleeast.png"
import southImage from "./assets/southamerica.png"


export const sliderItems = [
    {
        id: 1,
        img: "https://iili.io/H8Y7WEg.webp",
        title: "Summer Sips",
        desc: "Sip into Summer! Get 30% Off on Your Coffee Cravings.",
        bg: "#f5fafd",
    },
    {
        id: 2,
        img: "https://iili.io/H8Y7r4s.webp",
        title: "Harvest Brews",
        desc: "Fall for Flavor! Enjoy a Special 30% Discount on Fall Flavors.",
        bg: "#fcf1ed",
    },
    {
        id: 3,
        img: "https://iili.io/H8Y7Opp.webp",
        title: "Frosty Deals",
        desc: "Chill Out in Style! Enjoy a Special 30% Discount on Winter Flavors.",
        bg: "#fbf0f4",
    },
]

export const categories = [
    {
        id: 1,
        img: centralImage,
        title: "Central America",
    },
    {
        id: 2,
        img: southImage,
        title: "South America",
    },
    {
        id: 3,
        img: africaImage,
        title: "Africa",
    },
    {
        id: 4,
        img: asiaImage,
        title: "Asia Pacific",
    },
    {
        id: 5,
        img: middleImage,
        title: "Middle East",
    },
]

export const popularItems =  fetch("https://fake-coffee-api.vercel.app/api?limit=10").then((res) => res.json());