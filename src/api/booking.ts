import axios, { AxiosError } from "axios";
import { Booking } from "../../common/types";

export async function createBooking(booking: Booking) {
  try {
    const response = await axios.post(`/api/booking`, booking, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error((err?.response?.data as any).message);
  }
}

export async function confirmBooking(intent: string) {
  try {
    const response = await axios.post(
      `/api/payment/paymentConfirm`,
      { intent: intent },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error((err?.response?.data as any).message);
  }
}

export async function getAllBookingsByDress(dressId: string) {
  try {
    const response = await axios.request({
      url: `/api/booking?dressId=${dressId}`,
      method: "GET",
    });

    return response;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error((err?.response?.data as any).message);
  }
}

export async function getAllBookings() {
  try {
    const response = await axios.request({
      url: `/api/booking`,
      method: "GET",
    });

    return response;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error((err?.response?.data as any).message);
  }
}
