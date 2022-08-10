import { Link, useColorModeValue } from "@chakra-ui/react";

export default function NavLink({ children, ...props }) {
  return (
    <Link
        isExternal
        _hover={{
          color: useColorModeValue("gray.700", "gray.200"),
          bg: useColorModeValue("gray.200", "gray.700"),
          borderColor: useColorModeValue("gray.700", "gray.200"),
          transform: "translateY(-1px)",
          transition: "all 0.2s ease-in-out",
        }}
        transition="all 0.2s ease-in-out"
        color={useColorModeValue("gray.800", "gray.200")}
        borderWidth="2px"
        rounded="lg"
        px={2}
        py={1}
        fontSize="md"
        display="flex"
      {...props}
    >
      {children}
    </Link>
  );
}