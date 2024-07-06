import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WastageServiceBase } from "./base/wastage.service.base";

@Injectable()
export class WastageService extends WastageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
