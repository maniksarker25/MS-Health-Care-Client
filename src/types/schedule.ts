import { IDoctor } from "./doctor";

export type TSchedule = {
  id: string;
  startDateTime: string;
  endDateTime: string;
  createdAt: string;
  updatedAt: string;
};

export type TDoctorSchedule = {
  doctorId: string;
  scheduleId: string;
  isBlocked: boolean;
  appointmentId?: string;
  doctor: IDoctor;
  schedule: TSchedule;
  appointment?: {};
};
