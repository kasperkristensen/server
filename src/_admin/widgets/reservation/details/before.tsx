import { defineWidgetConfig } from "@medusajs/admin-shared";

const Widget = () => {
    return (
        <div className="bg-red-200">
           <pre>reservation.details.before</pre>
        </div>
    );
}

export const config = defineWidgetConfig({
    zone: "reservation.details.before",
})

export default Widget