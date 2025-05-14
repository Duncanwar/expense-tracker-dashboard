import { Router } from "express";
import {} from "../services/federated.service";
// import { generateAccessToken } from "../services/token-service";
import { OauthProfile, FederatedProvider } from "../types";
import { profileEnd } from "console";

const router = Router();

router.all("/:provider/callback", async (ctx) => {
  const profile: OauthProfile = ctx.state?.grant?.response?.profile;
  if (!profile) {
    ctx.status = 401;
    ctx.body = "Unauthorized";
    return;
  }
  try {
    const user = await authenticate(
      profile.sub,
      profile.email,
      FederatedProvider.GOOGLE,
      profile.given_name || profile.name,
      profile.picture
    );
    const accessToken = generateAccessToken(user);
    ctx.status = 200;
    ctx.body = JSON.stringify({ accessToken });
  } catch (error) {
    console.error({ error });
    ctx.body = "Unauthorized";
  }
});

export default router;
