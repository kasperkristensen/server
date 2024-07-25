import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>tax.list.after</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "tax.list.after",
})

export default Widget