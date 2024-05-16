import { z } from "zod";
export const patientValidationSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(1, "Please enter your full name"),
  email: z
    .string({ required_error: "Email is required" })
    .email("Please enter a valid email address"),
  contactNumber: z
    .string({ required_error: "Contact Number is required" })
    .regex(/^\d{11}$/, "Please provide a valid contact number"),
  address: z.string({ required_error: "Address is required" }),
});
export const patientRegisterValidationSchema = z.object({
  password: z
    .string({ required_error: "Password is required" })
    .min(6, "Password must be at least 6 characters"),
  patient: patientValidationSchema,
});
