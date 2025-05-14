import prisma from "../client";
import { FederatedIdentity, EProvider, Maybe } from "../types";

export default class OauthProfile {
  static async findUserIdentity(
    providerId: string,
    provider: EProvider
  ): Promise<Maybe<FederatedIdentity>> {
    try {
      const result = await prisma.federated_Identity.findFirst({
        where: { provider, provider_id: providerId },
      });
      return result;
    } catch (error) {
      console.error("Error finding user identity:", error);
      throw new Error("Failed to find user identity");
    }
  }

  static async addUserIdentity(
    userIdentity: Omit<FederatedIdentity, "createdAt">
  ): Promise<FederatedIdentity> {
    try {
      console.log(userIdentity);
      const result = await prisma.federated_Identity.create({
        data: {
          provider_id: userIdentity.provider_id,
          provider: userIdentity.provider,
          user_id: userIdentity.user_id,
        },
      });
      return result;
    } catch (error) {
      console.error("Error adding user identity:", error);
      throw new Error("Failed to add user identity");
    }
  }
}
