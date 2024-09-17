import { defineRouteConfig } from "@medusajs/admin-sdk";
import { Tag } from "@medusajs/icons";
import { Button, Container, Heading } from "@medusajs/ui";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const useListBrands = () => {
  return useQuery({
    queryKey: ["brands", "list"],
    queryFn: async () => {
      const res = await fetch("http://localhost:9000/admin/brands", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      return res.json() as Promise<{ brands: { name: string; id: string }[] }>;
    },
  });
};

const BrandList = () => {
    const queryClient = useQueryClient();

  const { data } = useListBrands();
  const brands = data?.brands;

  const payload = {
    name: "Brand Name",
  }

    const createBrand = async () => {
        const res = await fetch("http://localhost:9000/admin/brands", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(payload),
        });
        const data = await res.json();
        console.log(data);
        queryClient.invalidateQueries({
            queryKey: ["brands", "list"],
        });

    };

  return (
    <Container>
      <div className="flex items-center justify-between">
        <Heading>Branding</Heading>
        <Button size="small" onClick={createBrand}>Create</Button>
      </div>
      <ul>
        {!brands?.length ? (
          <li>No brands in store</li>
        ) : (
          brands.map((brand) => <li key={brand.id}>
            <p>{brand.name}</p>
            <p>{brand.id}</p>
          </li>)
        )}
      </ul>
    </Container>
  );
};

export const config = defineRouteConfig({
  label: "Brand!",
  icon: Tag,
});

export default BrandList;
