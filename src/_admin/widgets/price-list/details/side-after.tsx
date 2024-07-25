import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
            <pre>price_list.details.side.after</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "price_list.details.side.after",
})

export default Widget