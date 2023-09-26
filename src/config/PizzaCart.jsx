import { useEffect } from "react";

export default function PizzaCart() {

    useEffect(() => {
        const pizzaCart = {
            "products": []
        }

        if (!sessionStorage.hasOwnProperty('pizzaCart')) {
            sessionStorage.setItem('pizzaCart', JSON.stringify(pizzaCart))
        }
    }, []);

    return null;
}
