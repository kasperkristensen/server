import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>shipping_profile.details.before</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "shipping_profile.details.before",
})

export default Widget