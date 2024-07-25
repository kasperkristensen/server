import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>login.before</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "login.before",
})

export default Widget