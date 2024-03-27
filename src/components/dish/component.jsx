import { Counter } from "../counter/component";

export const Dish = ({ name }) => (
    <div>
    <span>{name}</span>
    <Counter key={name}/>
    </div>
)