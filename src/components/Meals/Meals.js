import react, {Fragment} from "react"
import AvailableMeals from "./AvailableMeals"
import MealsSummary from "./MealSummary"
import Card from "../UI/Card"
const Meals = props => {
    return (
        <Fragment>
            <MealsSummary/>
            <Card>
                <AvailableMeals/>
            </Card>
        </Fragment>
    )
}
export default Meals