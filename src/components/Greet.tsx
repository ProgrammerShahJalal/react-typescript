type GreetProps = {
    name: string
}

export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>Alhamdulillah! {props.name} is learning typescript.</h2>
        </div>
    )

}
