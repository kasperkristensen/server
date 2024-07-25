import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>tax.list.before</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "tax.list.before",
})

export default Widget