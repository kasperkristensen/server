import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
            <pre>price_list.details.side.before</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "price_list.details.side.before",
})

export default Widget