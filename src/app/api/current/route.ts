import { env } from "~/env";

export async function GET(_req: Request) {
  return Response.json({
    url: env.NEXT_PUBLIC_APK_URL,
  });
}
