import { z } from "zod";
import signInSchema from "./data/schema";

type SignInFormData = z.infer<typeof signInSchema>;

export type { SignInFormData };