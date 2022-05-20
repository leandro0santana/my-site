import { 
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
  Text,
  Box
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface TextareaProps extends ChakraTextareaProps {
  name: string;
  label?: string;
  error?: FieldError;
}

const TextareaBase: ForwardRefRenderFunction<HTMLTextAreaElement, TextareaProps> 
  = ({ name, label, error = null, ...rest }, ref) => {
    return (
      <Box>
        { !!label && <Text mb="8px">{label}</Text>}
        <ChakraTextarea
          id={name}
          name={name} 
          size="lg"
          rows={6}
          resize="vertical"
          borderColor="white"
          isInvalid={!!error}
          _hover={{
            borderColor: "black.900",
            bgColor: "white",
            color: "black.500",
            _placeholder: {
              color: "black.500"
            },
          }}
          ref={ref}
          {...rest}
        />
        { !!error && <Text mb="8px" color="red.300">{error.message}</Text> }
      </Box>
  )
}

export const Textarea = forwardRef(TextareaBase);