import { z } from "zod";

const signupSchema = z.object({
  email: z.string().email("Invalid email address"),
  username: z.string().min(3, "Username must be at least 3 characters long"),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[a-zA-Z]/, "Password must contain at least 1 letter")
    .regex(/\d/, "Password must contain at least 1 number")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least 1 special character"
    ),
});

export default signupSchema;
