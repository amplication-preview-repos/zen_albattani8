import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WastageModuleBase } from "./base/wastage.module.base";
import { WastageService } from "./wastage.service";
import { WastageController } from "./wastage.controller";
import { WastageResolver } from "./wastage.resolver";

@Module({
  imports: [WastageModuleBase, forwardRef(() => AuthModule)],
  controllers: [WastageController],
  providers: [WastageService, WastageResolver],
  exports: [WastageService],
})
export class WastageModule {}
