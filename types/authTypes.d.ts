import type { DefaultUser } from "next-auth";

declare module "next-auth" {
    interface session {
        user?: DefaultUser & {
            id: string
        }
    }
}