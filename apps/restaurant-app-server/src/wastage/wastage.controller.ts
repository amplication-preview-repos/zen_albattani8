import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WastageService } from "./wastage.service";
import { WastageControllerBase } from "./base/wastage.controller.base";

@swagger.ApiTags("wastages")
@common.Controller("wastages")
export class WastageController extends WastageControllerBase {
  constructor(
    protected readonly service: WastageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
