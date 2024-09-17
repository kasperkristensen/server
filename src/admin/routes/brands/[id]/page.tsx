import { defineRouteConfig } from "@medusajs/admin-sdk";
import { useQueryClient } from "@tanstack/react-query";

const PageTwo = () => {
  const queryClient = useQueryClient();

  return (
    <div>
      {queryClient
        ? "QueryClient is available"
        : "QueryClient is not available"}
    </div>
  );
};

export const config = defineRouteConfig({
  label: "Custom Page",
});

export default PageTwo;
