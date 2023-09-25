import { useEffect } from "react";

export default function PizzaCart() {

    useEffect(() => {
        const pizzaCart = {
            "products": [],
            "discount": false,
            "subTotal": 0.00,
            "total": 0.00
        }

        if (!sessionStorage.hasOwnProperty('pizzaCart')) {
            sessionStorage.setItem('pizzaCart', JSON.stringify(pizzaCart))
        }
    }, []);

    return null;
}
