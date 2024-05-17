import { TMeta } from "@/types";
import { dateFormatter } from "@/utils/dateFormatter";

import { Box, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

import dayjs from "dayjs";
const DoctorScheduleTable = ({
  doctorSchedules,
  meta,
}: {
  doctorSchedules: any;
  meta: TMeta;
}) => {
  const [updatedDoctorSchedules, setUpdatedDoctorSchedules] = useState<any>([]);

  useEffect(() => {
    const updatedData = doctorSchedules?.map(
      (doctorSchedule: any, index: number) => {
        return {
          sl: index + 1,
          id: doctorSchedule?.doctorId,
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
  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid rows={updatedDoctorSchedules ?? []} columns={columns} />
    </div>
  );
};

export default DoctorScheduleTable;
