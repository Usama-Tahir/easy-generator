import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import {
  UseFormReturn,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";

interface FormFieldProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  label: string;
  form: UseFormReturn<TFieldValues>;
  type?: string;
  isRequired?: boolean;
  rules?: RegisterOptions<TFieldValues, Path<TFieldValues>>;
}

function FormField<TFieldValues extends FieldValues>({
  name,
  label,
  form,
  type = "text",
  isRequired = false,
  rules,
}: FormFieldProps<TFieldValues>) {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <FormControl isInvalid={!!errors[name]} isRequired={isRequired}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input id={name} type={type} {...register(name, rules)} />
      <FormErrorMessage>
        {errors[name] && (errors[name]?.message as string)}
      </FormErrorMessage>
    </FormControl>
  );
}

export default FormField;
