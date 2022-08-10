import { Button, FormControl, Input, Text, Center, Flex } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import context from "./context";

export default function RetrieveExample() {
  const { exampleState, setExampleState } = useContext(context);
  const [ newState, setNewState ] = useState("");

  return (
    <Flex justify="center" align="center" flexDirection="column">
      <Text fontSize="xl">{exampleState}</Text>
      <FormControl>
        <Input
          value={newState}
          onChange={(e) => setNewState(e.target.value)}
          placeholder="Type something..."
        />
      </FormControl>
      <Button onClick={() => setExampleState(newState)}>Update</Button>
    </Flex>
  );
}

// just use in the App.jsx file if need some remembering of how to handle contextAPI
