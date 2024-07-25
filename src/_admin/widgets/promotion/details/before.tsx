import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>promotion.details.before</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "promotion.details.before",
})

export default Widget