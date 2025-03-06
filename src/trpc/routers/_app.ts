import { createTRPCRouter } from "../init";
import { studioRouter } from "@/modules/studio/server/procedures";
import { categoriesRouter } from "@/modules/auth/categories/server/procedures";
import { videosRouter } from "@/modules/videos/server/procedures";

export const appRouter = createTRPCRouter({
    categories: categoriesRouter,
    studio: studioRouter,
    videos: videosRouter,
});

export type AppRouter = typeof appRouter;
