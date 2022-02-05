type GreetProps = {
    name: string
    messageCount: number
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    return (
        <div>
            {
                props.isLoggedIn ? <div><h2>Alhamdulillah! {props.name} is learning typescript.</h2>
                    <h3>You have {props.messageCount} unread message.</h3></div> : "Welcome Guest"
            }

        </div>
    )

}
