import { food_list } from "../../Client/assets/assets";
import { Employees } from "../assets/assets";
const initialState = {
    produits:food_list,
    Employees:Employees
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return { ...state, produits: [...state.produits,action.payload] };
  
        case 'DELETE_PRODUCT':
            return {
                ...state,
                produits: state.produits.filter((product) => product._id !== action.payload),
            };

        case 'UPDATE_PRODUCT':
            return {
                ...state,
                produits: state.produits.map((product) =>
                    Number(product._id) === Number(action.payload.id ) ? { ...product, ...action.payload.newProduit } : product
                ),
            };

        case 'ADD_Employee':
            return { ...state, Employees: [...state.Employees,action.payload] };

        case 'DELETE_Employee':
            return {
                ...state,
                Employees: state.Employees.filter((Employee) => Employee.Id_Employee !== action.payload),
            };
    
        case 'UPDATE_Employee':
            return {
                ...state,
                Employees: state.Employees.map((Employee) =>
                    Number(Employee.Id_Employee) === Number(action.payload.id ) ? { ...Employee, ...action.payload.newEmployee } : Employee
                ),
            };
    
        default:
            return state;
    }
};

export default reducer; // ✅ Ensure export default