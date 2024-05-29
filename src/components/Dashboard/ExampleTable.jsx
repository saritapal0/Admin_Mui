import React from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";

const products = [
  {
    id: 1,
    name: "Product A",
    post: "Description of Product A",
    pname: "Product A Name",
    pbg: "#FF5733",
    priority: "High",
    budget: 1000,
  },
  {
    id: 2,
    name: "Product B",
    post: "Description of Product B",
    pname: "Product B Name",
    pbg: "#33FF57",
    priority: "Medium",
    budget: 1500,
  },
  {
    id: 3,
    name: "Product C",
    post: "Description of Product C",
    pname: "Product C Name",
    pbg: "#5733FF",
    priority: "Low",
    budget: 800,
  },
  {
    id: 3,
    name: "Product C",
    post: "Description of Product C",
    pname: "Product C Name",
    pbg: "#5733FF",
    priority: "Low",
    budget: 800,
  },
  {
    id: 3,
    name: "Product C",
    post: "Description of Product C",
    pname: "Product C Name",
    pbg: "#5733FF",
    priority: "Low",
    budget: 800,
  },
  {
    id: 3,
    name: "Product C",
    post: "Description of Product C",
    pname: "Product C Name",
    pbg: "#5733FF",
    priority: "Low",
    budget: 800,
  },
  {
    id: 3,
    name: "Product C",
    post: "Description of Product C",
    pname: "Product C Name",
    pbg: "#5733FF",
    priority: "Low",
    budget: 800,
  },
  {
    id: 3,
    name: "Product C",
    post: "Description of Product C",
    pname: "Product C Name",
    pbg: "#5733FF",
    priority: "Low",
    budget: 800,
  },
  // Add more products as needed
];

const ExampleTable = () => {



  return (
    <Table
      aria-label="simple table"
      sx={{
        mt: 3,
        whiteSpace: "nowrap",
      }}
    >
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography color="textDanger" variant="h6">
              Id
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Assigned
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Name
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Priority
            </Typography>
          </TableCell>
          <TableCell align="right">
            <Typography color="textSecondary" variant="h6">
              Budget
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                {product.id}
              </Typography>
            </TableCell>
            <TableCell>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "600",
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    sx={{
                      fontSize: "13px",
                    }}
                  >
                    {product.post}
                  </Typography>
                </Box>
              </Box>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                {product.pname}
              </Typography>
            </TableCell>
            <TableCell>
              <Chip
                sx={{
                  pl: "4px",
                  pr: "4px",
                  backgroundColor: product.pbg,
                  color: "#fff",
                }}
                size="small"
                label={product.priority}
              ></Chip>
            </TableCell>
            <TableCell align="right">
              <Typography variant="h6">₹ {product.budget}</Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ExampleTable;
