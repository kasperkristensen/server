import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>login.after</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "login.after",
})

export default Widget