import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export default function FileList() {
  const fileData = [
    { id: 1, filename: "document1.pdf", type: "PDF", size: "1.2 MB" },
    { id: 2, filename: "spreadsheet.xlsx", type: "Excel", size: "800 KB" },
    {
      id: 3,
      filename: "presentation.pptx",
      type: "PowerPoint",
      size: "3.5 MB",
    },
  ];

  return (
    <div className="p-4">
      <TableContainer component={Paper} className="shadow-md rounded-lg">
        <Table>
          <TableHead>
            <TableRow className="bg-gray-200">
              <TableCell className="font-bold">Filename</TableCell>
              <TableCell className="font-bold">Type</TableCell>
              <TableCell className="font-bold">Size</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fileData.map((file) => (
              <TableRow key={file.id} className="hover:bg-gray-100">
                <TableCell>{file.filename}</TableCell>
                <TableCell>{file.type}</TableCell>
                <TableCell>{file.size}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
