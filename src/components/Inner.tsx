type InnerProps = {
    children: React.ReactNode
}


export const Inner = (props: InnerProps) => {
    return (
        <div>{props.children}</div>
    )
}