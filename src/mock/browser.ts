import { setupWorker } from "msw/browser";
import { addReview, reviewForMain, reviewsById } from "./review";
import { bestBooks } from "./books";
import { Banners } from "./banner";

const handlers = [reviewsById, addReview, reviewForMain, bestBooks, Banners];

export const worker = setupWorker(...handlers);
