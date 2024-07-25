import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>user.details.after</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "user.details.after",
})

export default Widget