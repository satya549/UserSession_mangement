import { TypeOf, object, string } from "zod";

export const createUserSchema = object({
  body: object({
    name: string({
      required_error: "Name is required",
    }),
    password: string({
      required_error: " Password is required",
    }).min(6, "Password too short - should be 6 chars minimum"),
    passwordConformation: string({
      required_error: "PasswordConfirmation is required",
    }),
    email: string({
      required_error: "Email is requred",
    }).email("Email not valid"),
  }).refine((data) => data.password === data.passwordConformation, {
    message: "Password do not match",
    path: ["passwordConfirmation"],
  }),
});

export type CreateUserInput = Omit<
  TypeOf<typeof createUserSchema>,
  "body.passwordConfirmation"
>;
