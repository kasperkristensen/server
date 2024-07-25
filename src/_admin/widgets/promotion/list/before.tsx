import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>promotion.list.before</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "promotion.list.before",
})

export default Widget