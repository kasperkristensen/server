import { defineRouteConfig } from "@medusajs/admin-shared"
import { useLocation } from "react-router-dom"

const Page = () => {
    const location = useLocation()

    return (
        <div>
            <h1>Test Page</h1>
            <pre>Code: {JSON.stringify(location, null, 2)}</pre>
        </div>
    )
}

export const config = defineRouteConfig({
    label: "Test Page",
})

export default Page