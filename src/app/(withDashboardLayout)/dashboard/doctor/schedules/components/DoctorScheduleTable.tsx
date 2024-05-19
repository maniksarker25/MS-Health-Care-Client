import { TDoctorSchedule, TMeta } from "@/types";
import { dateFormatter } from "@/utils/dateFormatter";

import { Box, IconButton, Pagination } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

import dayjs from "dayjs";
const DoctorScheduleTable = ({
  doctorSchedules,
  meta,
  page,
  setPage,
  limit,
}: {
  doctorSchedules: TDoctorSchedule[];
  meta: TMeta;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
}) => {
  const [updatedDoctorSchedules, setUpdatedDoctorSchedules] = useState<any>([]);
  let pageCount: number;
  if (meta?.total) {
    pageCount = Math.ceil(meta.total / limit);
  }

  useEffect(() => {
    const updatedData = doctorSchedules?.map(
      (doctorSchedule: TDoctorSchedule, index: number) => {
        return {
          sl: index + 1,
          id: `${doctorSchedule.doctorId}-${index}`,
          startDate: dateFormatter(doctorSchedule?.schedule.startDateTime),
          endDate: dateFormatter(doctorSchedule?.schedule.endDateTime),
          startTime: dayjs(doctorSchedule?.schedule.startDateTime).format(
            "hh:mm a"
          ),
          endTime: dayjs(doctorSchedule?.schedule.endDateTime).format(
            "hh:mm a"
          ),
        };
      }
    );
    setUpdatedDoctorSchedules(updatedData);
  }, [doctorSchedules]);
  const columns: GridColDef[] = [
    { field: "sl", headerName: "SL" },
    { field: "startDate", headerName: "Start Date", flex: 1 },
    { field: "endDate", headerName: "End Date", flex: 1 },
    { field: "startTime", headerName: "Start Time", flex: 1 },
    { field: "endTime", headerName: "End Time", flex: 1 },

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
              //   onClick={() => handleDelete(row.id)}
              aria-label="delete"
            >
              <DeleteIcon sx={{ color: "red" }} />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  // handle pagination change
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <Box>
      <DataGrid
        rows={updatedDoctorSchedules ?? []}
        columns={columns}
        hideFooterPagination
        slots={{
          footer: () => {
            return (
              <Box
                sx={{
                  mb: 2,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Pagination
                  color="primary"
                  count={pageCount}
                  page={page}
                  onChange={handleChange}
                />
              </Box>
            );
          },
        }}
      />
    </Box>
  );
};

export default DoctorScheduleTable;
