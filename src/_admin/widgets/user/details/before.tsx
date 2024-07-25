import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>user.details.before</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "user.details.before",
})

export default Widget