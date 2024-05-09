import { IDoctor, TMeta } from "@/types";
import { Box, IconButton } from "@mui/material";
import { DataGrid, GridColDef, GridDeleteIcon } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";
import { toast } from "sonner";

const DoctorTable = ({
  doctors,
  meta,
}: {
  doctors: IDoctor[];
  meta: TMeta;
}) => {
  const handleDelete = async (id: string) => {
    // try {
    //   if (res?.id) {
    //     toast.success("Doctor deleted successfully");
    //   } else {
    //     toast.error(res.message);
    //   }
    // } catch (error: any) {
    //   console.error(error.message);
    // }
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "contactNumber", headerName: "Contact Number", flex: 1 },
    { field: "gender", headerName: "Gender", flex: 1 },
    { field: "appointmentFee", headerName: "Appointment Fee", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton
              onClick={() => handleDelete(row.id)}
              aria-label="delete"
            >
              <DeleteIcon sx={{ color: "red" }} />
            </IconButton>
            <Link href={`/dashboard/admin/doctors/edit/${row.id}`}>
              <IconButton aria-label="delete">
                <EditIcon />
              </IconButton>
            </Link>
          </Box>
        );
      },
    },
  ];
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={doctors} columns={columns} />
    </div>
  );
};

export default DoctorTable;
