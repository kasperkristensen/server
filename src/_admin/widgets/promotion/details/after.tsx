import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>promotion.details.after</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "promotion.details.after",
})

export default Widget