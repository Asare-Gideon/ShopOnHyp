import { categoriesDataTyp, itemsDataType } from "../Types";
import images from "./Images";

export const categoriesData: categoriesDataTyp = [
    {
        id : "1",
        title: "All"
    },
    {
        id: "2",
        title: "Fashion"
    },
{
        id: "3",
        title: "Electronics"
    },
{
        id: "4",
        title: "Games"
    },
{
        id: "5",
        title: "Foods"
    },
{
        id: "6",
        title: "Stationery"
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
        title: "Buggy Jeans",
        text: "description of the item",
        image: images.introScreen,
        price: 33
    },
{
        id: "2",
        title: "Jeans top",
        text: "description of the item",
        image: images.introScreen,
        price: 344
    }
]