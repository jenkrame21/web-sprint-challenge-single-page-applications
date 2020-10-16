import * as yup from "yup";

export default yup.object().shape({
    name: yup
        .string()
        .required("Name is required")
        .min(2, "Name must be at least 2 characters"),
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
});