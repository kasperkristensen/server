import { MedusaRequest, MedusaResponse } from "@medusajs/medusa";
import {
  ContainerRegistrationKeys,
  remoteQueryObjectFromString,
} from "@medusajs/utils";
import BrandService from "../../../modules/brand/service";

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
  const brandService: BrandService = req.scope.resolve("brandModuleService");

  const { name } = req.body as { name: string };

  const created = await brandService.createBrands([{ name }]);

  res.json({ brand: created });
};

export const GET = async (req, res) => {
  const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY);

  const queryObject = remoteQueryObjectFromString({
    entryPoint: "brand",
    fields: ["id", "name", "description"],
  });

  const result = await remoteQuery(queryObject);

  res.json({
    brands: result,
  });
};
