import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>store.details.before</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "store.details.before",
})

export default Widget