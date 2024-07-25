import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
            <pre>product.details.side.before</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "product.details.side.before",
})

export default Widget