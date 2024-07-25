import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>region.list.after</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "region.list.after",
})

export default Widget