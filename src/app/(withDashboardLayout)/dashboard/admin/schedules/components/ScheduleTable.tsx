import { TMeta, TSchedule } from "@/types";
import { dateFormatter } from "@/utils/dateFormatter";
import { timeFormatter } from "@/utils/timeFormatter";
import { Box, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";
import dayjs from "dayjs";
const ScheduleTable = ({
  schedules,
  meta,
}: {
  schedules: TSchedule[];
  meta: TMeta;
}) => {
  const [updatedSchedules, setUpdatedSchedules] = useState<any>([]);

  useEffect(() => {
    const updatedData = schedules?.map((schedule: TSchedule, index: number) => {
      return {
        sl: index + 1,
        id: schedule.id,
        startDate: dateFormatter(schedule.startDateTime),
        endDate: dateFormatter(schedule.endDateTime),
        startTime: dayjs(schedule.startDateTime).format("hh:mm a"),
        endTime: dayjs(schedule.endDateTime).format("hh:mm a"),
      };
    });
    setUpdatedSchedules(updatedData);
  }, [schedules]);
  const columns: GridColDef[] = [
    { field: "sl", headerName: "SL", flex: 1 },
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
            <Link href={`/dashboard/admin/schedules/edit/${row.id}`}>
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
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid rows={updatedSchedules} columns={columns} />
    </div>
  );
};

export default ScheduleTable;
