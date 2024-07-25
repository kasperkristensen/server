import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>tax.details.after</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "tax.details.after",
})

export default Widget