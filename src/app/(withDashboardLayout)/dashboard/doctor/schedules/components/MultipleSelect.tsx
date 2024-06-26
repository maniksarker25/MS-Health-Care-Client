import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { timeFormatter } from "@/utils/timeFormatter";
import dayjs from "dayjs";
import { TSchedule } from "@/types";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect({
  schedules,
  selectedScheduleIds,
  setSelectedScheduleIds,
}: any) {
  const theme = useTheme();

  const handleChange = (
    event: SelectChangeEvent<typeof selectedScheduleIds>
  ) => {
    const {
      target: { value },
    } = event;
    setSelectedScheduleIds(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={selectedScheduleIds}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value: any) => {
                const selectedSchedule = schedules.find(
                  (schedule: TSchedule) => schedule.id === value
                );
                if (!selectedSchedule) return null;

                const formattedTimeSlot = `${dayjs(
                  selectedSchedule.startDateTime
                ).format("hh:mm a")} - ${dayjs(
                  selectedSchedule.endDateTime
                ).format("hh:mm a")}`;

                return <Chip key={value} label={formattedTimeSlot} />;
              })}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {schedules?.map((schedule: TSchedule) => (
            <MenuItem
              key={schedule?.id}
              value={schedule?.id}
              style={getStyles(schedule.id, selectedScheduleIds, theme)}
            >
              {`${dayjs(schedule.startDateTime).format("hh:mm a")} - ${dayjs(
                schedule.endDateTime
              ).format("hh:mm a")}`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
