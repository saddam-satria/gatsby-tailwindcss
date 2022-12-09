import { DECREASE, INCREASE } from "../types";




export const counter = (action = true) => {
    if (action) {
        return {
            type: INCREASE,
        }
    }


    return {
        type: DECREASE,
    }

}

