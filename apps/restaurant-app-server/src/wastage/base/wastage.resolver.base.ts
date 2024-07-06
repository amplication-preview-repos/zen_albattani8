/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Wastage } from "./Wastage";
import { WastageCountArgs } from "./WastageCountArgs";
import { WastageFindManyArgs } from "./WastageFindManyArgs";
import { WastageFindUniqueArgs } from "./WastageFindUniqueArgs";
import { CreateWastageArgs } from "./CreateWastageArgs";
import { UpdateWastageArgs } from "./UpdateWastageArgs";
import { DeleteWastageArgs } from "./DeleteWastageArgs";
import { RawMaterial } from "../../rawMaterial/base/RawMaterial";
import { WastageService } from "../wastage.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Wastage)
export class WastageResolverBase {
  constructor(
    protected readonly service: WastageService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Wastage",
    action: "read",
    possession: "any",
  })
  async _wastagesMeta(
    @graphql.Args() args: WastageCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Wastage])
  @nestAccessControl.UseRoles({
    resource: "Wastage",
    action: "read",
    possession: "any",
  })
  async wastages(
    @graphql.Args() args: WastageFindManyArgs
  ): Promise<Wastage[]> {
    return this.service.wastages(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Wastage, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Wastage",
    action: "read",
    possession: "own",
  })
  async wastage(
    @graphql.Args() args: WastageFindUniqueArgs
  ): Promise<Wastage | null> {
    const result = await this.service.wastage(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Wastage)
  @nestAccessControl.UseRoles({
    resource: "Wastage",
    action: "create",
    possession: "any",
  })
  async createWastage(
    @graphql.Args() args: CreateWastageArgs
  ): Promise<Wastage> {
    return await this.service.createWastage({
      ...args,
      data: {
        ...args.data,

        rawMaterial: args.data.rawMaterial
          ? {
              connect: args.data.rawMaterial,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Wastage)
  @nestAccessControl.UseRoles({
    resource: "Wastage",
    action: "update",
    possession: "any",
  })
  async updateWastage(
    @graphql.Args() args: UpdateWastageArgs
  ): Promise<Wastage | null> {
    try {
      return await this.service.updateWastage({
        ...args,
        data: {
          ...args.data,

          rawMaterial: args.data.rawMaterial
            ? {
                connect: args.data.rawMaterial,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Wastage)
  @nestAccessControl.UseRoles({
    resource: "Wastage",
    action: "delete",
    possession: "any",
  })
  async deleteWastage(
    @graphql.Args() args: DeleteWastageArgs
  ): Promise<Wastage | null> {
    try {
      return await this.service.deleteWastage(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => RawMaterial, {
    nullable: true,
    name: "rawMaterial",
  })
  @nestAccessControl.UseRoles({
    resource: "RawMaterial",
    action: "read",
    possession: "any",
  })
  async getRawMaterial(
    @graphql.Parent() parent: Wastage
  ): Promise<RawMaterial | null> {
    const result = await this.service.getRawMaterial(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
