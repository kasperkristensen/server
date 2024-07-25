import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>region.list.before</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "region.list.before",
})

export default Widget