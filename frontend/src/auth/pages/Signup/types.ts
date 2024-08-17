import { z } from "zod";
import signupSchema from "./data/schema";

type SignupFormData = z.infer<typeof signupSchema>;

export type { SignupFormData };