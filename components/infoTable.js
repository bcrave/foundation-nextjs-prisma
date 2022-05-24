import { formatPhoneNumber } from "../lib/formatters";

import { Box } from "@chakra-ui/layout";
import { Table, Thead, Td, Tr, Th, Tbody, Text } from "@chakra-ui/react";

const InfoTable = ({ data, listType }) => {
  return (
    <Box marginTop="30px">
      <Table>
        <Thead>
          {listType === "organizations" ? (
            <Tr>
              <Th fontSize="med">#</Th>
              <Th fontSize="med">Name</Th>
              <Th fontSize="med">City</Th>
              <Th fontSize="med">State</Th>
              <Th fontSize="med">ID</Th>
              <Th fontSize="med">Status</Th>
            </Tr>
          ) : (
            <Tr>
              <Th fontSize="med">#</Th>
              <Th fontSize="med">Name</Th>
              <Th fontSize="med">Email</Th>
              <Th fontSize="med">Phone</Th>
              <Th fontSize="med">Org</Th>
              <Th fontSize="med">Role</Th>
              <Th fontSize="med">Status</Th>
            </Tr>
          )}
        </Thead>
        <Tbody>
          {data.map((item, i) => (
            <Tr key={item.id}>
              <Td>{i + 1}</Td>
              {listType === "organizations" ? (
                <>
                  <Td>{item.name}</Td>
                  <Td>{item.city}</Td>
                  <Td>{item.state}</Td>
                  <Td>{item.id}</Td>
                  <Td>{`${item.isActive ? "Active" : "Inactive"}`}</Td>
                </>
              ) : (
                <>
                  <Td>{`${item.firstName} ${item.lastName}`}</Td>
                  <Td>
                    <Box maxWidth="100px">
                      <Text noOfLines={1}>{item.email}</Text>
                    </Box>
                  </Td>
                  <Td>{formatPhoneNumber(item.phoneNumber)}</Td>
                  <Td>{item.organizationId}</Td>
                  <Td>{item.role}</Td>
                  <Td>{item.isActive ? "Active" : "Inactive"}</Td>
                </>
              )}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default InfoTable;
