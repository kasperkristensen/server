import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>promotion.list.after</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "promotion.list.after",
})

export default Widget