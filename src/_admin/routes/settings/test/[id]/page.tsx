import { useParams } from "react-router-dom"

const Page = () => {
    const { id } = useParams()

    return (
        <div>ID Page {id}</div>
    )
}

export default Page