import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>api_key.list.after</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "api_key.list.after",
})

export default Widget