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
export const detailSliderData = [
    {
        image: images.items[0]
    },
    {
        image: images.items[1]
    },
    {
        image: images.items[2]
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
        id: "4",
        title: "Jeans top",
        text: "description of the item",
        image: images.items[4],
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

export const feedData = [
    {
        id: "1",
        storeName: "Rock Store",
        rating: 4
    },
    {
        id: "2",
        storeName: "God Grace",
        rating: 4
    },
    {
        id: "3",
        storeName: "Yame Ndae",
        rating: 3
    }
]

export const chartData = {
     labels: ["January", "February", "March", "April", "May", "June"],
     datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
}

export const chatData = [
    {
        id: "2",
        name: "name of the product",
        image: images.items[2],
        time: "3:40",
        number: 5,
        message: "description of the products"
    },
    {
        id: "3",
        name: "name of the product",
        image: images.items[1],
        time: "3:40",
        number: 3,
        message: "description of the products"
    },
    {
        id: "4",
        name: "name of the product",
        image: images.items[3],
        time: "3:40",
        number: 10,
        message: "description of the products"
    },
    {
        id: "5",
        name: "name of the product",
        image: images.items[4],
        time: "3:40",
        number: 2,
        message: "description of the products"
    },
]