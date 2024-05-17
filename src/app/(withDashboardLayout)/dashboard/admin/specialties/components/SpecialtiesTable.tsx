import { useDeleteSpecialtyMutation } from "@/redux/api/specialtiesApi";
import { TSpecialty } from "@/types";
import { Box, IconButton } from "@mui/material";
import { DataGrid, GridColDef, GridDeleteIcon } from "@mui/x-data-grid";
import Image from "next/image";
import { toast } from "sonner";
const SpecialtiesTable = ({ data }: { data: TSpecialty[] }) => {
  const [deleteSpecialty] = useDeleteSpecialtyMutation();
  const handleDelete = async (id: string) => {
    try {
      const res = await deleteSpecialty(id).unwrap();
      if (res?.id) {
        toast.success("Specialty deleted successfully");
      } else {
        toast.error(res.message);
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };
  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 400 },
    {
      field: "icon",
      headerName: "Icon",
      flex: 1,

      renderCell: ({ row }) => {
        return (
          <Box
            sx={{
              mt: "8px",
            }}
          >
            <Image src={row?.icon} alt="icon" width={30} height={30} />
          </Box>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton onClick={() => handleDelete(row?.id)} aria-label="delete">
            <GridDeleteIcon />
          </IconButton>
        );
      },
    },
  ];
  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid rows={data} columns={columns} hideFooter={true} />
    </div>
  );
};

export default SpecialtiesTable;
