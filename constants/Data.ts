import { categoriesDataTyp, itemsDataType } from "../Types";
import images from "./Images";

export const categoriesData: categoriesDataTyp = [
    {
        id : "1",
        title: "All",
        selected: true
    },
    {
        id: "2",
        title: "Fashion",
        selected: false
    },
{
        id: "3",
        title: "Electronics",
        selected: false
    },
{
        id: "4",
        title: "Games",
        selected: false
    },
{
        id: "5",
        title: "Foods",
        selected: false
    },
{
        id: "6",
        title: "Stationery",
        selected: false
    },
]
export const sliderData = [
    {
        image: images.sliders[1]
    },
    {
        image: images.sliders[0]
    },
    {
        image: images.sliders[2]
    }
]

export const itemsData: itemsDataType =[
    {
        id: "1",
        title: "Buggy Jeans the ehe eh",
        text: "description of the item and the problem is that",
        image: images.items[3],
        price: 33
    },
{
        id: "2",
        title: "Jeans top",
        text: "description of the item",
        image: images.items[1],
        price: 344
    },
{
        id: "3",
        title: "Jeans top",
        text: "description of the item",
        image: images.items[2],
        price: 344
    },
{
        id: "4",
        title: "Jeans top",
        text: "description of the item",
        image: images.items[4],
        price: 344
    },
{
        id: "5",
        title: "Jeans top",
        text: "description of the item",
        image: images.items[5],
        price: 344
    },
{
        id: "6",
        title: "Jeans top",
        text: "description of the item",
        image: images.items[0],
        price: 344
    },
]