import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>shipping_profile.list.after</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "shipping_profile.list.after",
})

export default Widget