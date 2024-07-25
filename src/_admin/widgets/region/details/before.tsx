import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>region.details.before</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "region.details.before",
})

export default Widget