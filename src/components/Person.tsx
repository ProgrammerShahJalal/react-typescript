import { PersonProps } from "./Person.types"

export const Person = (props: PersonProps) => {
    return (
        <div>
            <h2>{props.name.first} {props.name.last}</h2>
        </div>
    )
}