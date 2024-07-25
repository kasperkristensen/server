import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>price_list.list.before</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "price_list.list.before",
})

export default Widget