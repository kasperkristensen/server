import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>store.details.after</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "store.details.after",
})

export default Widget