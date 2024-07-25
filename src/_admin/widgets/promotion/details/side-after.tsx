import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
            <pre>promotion.details.side.after</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "promotion.details.side.after",
})

export default Widget