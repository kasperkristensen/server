import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
            <pre>promotion.details.side.before</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "promotion.details.side.before",
})

export default Widget