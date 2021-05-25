interface Food {
    id: number,
    name: string,
    price: number,
    type: string,     // drinks, pizza, deserts, topping
    category: string, // deluxe or standard
    img: string,
    quantity: number,
}

export default Food