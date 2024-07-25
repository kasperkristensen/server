import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>price_list.details.after</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "price_list.details.after",
})

export default Widget