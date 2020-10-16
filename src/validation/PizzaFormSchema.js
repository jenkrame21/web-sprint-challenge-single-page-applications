import * as yup from "yup";

export default yup.object().shape({
    name: yup
        .string()
        .required("Name is required")
        .min(3, "Name must be at least 3 characters"),
    pizzaSize: yup
        .string()
        .oneOf(["small", "medium", "large", "x-large"], "Pizza size is required"),
    sauce: yup
        .string()
        .oneOf(["original marinara", "garlic ranch", 'bbq sauce', 'spinach alfredo'], "Choice of sauce is required"),
    pepperoni: yup.boolean(),
    mushroom: yup.boolean(),
    bacon: yup.boolean(),
    spinach: yup.boolean(),
    ham: yup.boolean(),
    bbqChicken: yup.boolean(),
    onion: yup.boolean(),
    brocolli: yup.boolean(),
    anchovies: yup.boolean(),
    extraCheese: yup.boolean(),
    tomatoes: yup.boolean(),
    sausage: yup.boolean(),
    olives: yup.boolean(),
    pineapple: yup.boolean(),
    garlic: yup.boolean(),
});