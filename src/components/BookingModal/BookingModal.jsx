// import {
//   Modal,
//   Typography,
//   Box,
//   TextField,
//   Button,
//   Stack,
// } from "@mui/material";
// import { useState } from "react";
// import { format } from "date-fns";

// export default function BookingModal({
//   setOpen,
//   open,
//   bookingDetails,
//   showSuccessMessage,
// }) {
//   const [email, setEmail] = useState("");

//   const handleBooking = (e) => {
//     e.preventDefault();
//     triggerEvent();

//     const bookings = localStorage.getItem("bookings") || "[]";

//     const oldBookings = JSON.parse(bookings);

//     localStorage.setItem(
//       "bookings",
//       JSON.stringify([
//         ...oldBookings,
//         { ...bookingDetails, bookingEmail: email },
//       ])
//     );
//     showSuccessMessage(true);
//     setEmail("");
//     setOpen(false);
//   };

//   const triggerEvent = () => {
//     // Ensure dataLayer is defined
//     window.dataLayer = window.dataLayer || [];

//     // Function to push the first_visit event to the dataLayer
//     function triggerFirstVisitEvent() {
//       window.dataLayer.push({
//         event: "first_visit",
//         eventDate: new Date().toISOString(), // Optional: track the exact time of the event
//       });
//     }

//     triggerFirstVisitEvent();
//   };

//   const formatDate = (day) => {
//     if (day) {
//       const date = new Date(day);
//       return format(date, "E, d LLL");
//     } else {
//       return null;
//     }
//   };

//   return (
//     <Modal open={open} onClose={() => setOpen(false)}>
//       <Box
//         sx={{
//           width: "95%",
//           maxWidth: 600,
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           boxShadow: 24,
//           p: { xs: 3, md: 4 },
//           outline: 0,
//           bgcolor: "#fff",
//           borderRadius: 2,
//         }}
//       >
//         <Typography component="h3" variant="h3">
//           Confirm booking
//         </Typography>
//         <Typography fontSize={14} mb={3}>
//           <Box component="span">
//             Please enter your email to confirm booking for{" "}
//           </Box>
//           <Box component="span" fontWeight={600}>
//             {`${bookingDetails.bookingTime} on ${formatDate(
//               bookingDetails.bookingDate
//             )}`}
//           </Box>
//         </Typography>
//         <form onSubmit={handleBooking}>
//           <Stack alignItems="flex-start" spacing={2}>
//             <TextField
//               type="email"
//               label="Enter your email"
//               variant="outlined"
//               fullWidth
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <Stack direction="row" spacing={1}>
//               <Button
//                 type="submit"
//                 variant="contained"
//                 size="large"
//                 disableElevation
//               >
//                 Confirm
//               </Button>
//               <Button
//                 variant="outlined"
//                 size="large"
//                 disableElevation
//                 onClick={() => setOpen(false)}
//               >
//                 Cancel
//               </Button>
//             </Stack>
//           </Stack>
//         </form>
//       </Box>
//     </Modal>
//   );
// }

import { useState } from "react";
import {
  Modal,
  Typography,
  Box,
  TextField,
  Button,
  Stack,
  Divider,
  Chip,
} from "@mui/material";
import { format } from "date-fns";
import DaySelector from "../Calendar/DaySelector/DaySelector";

export default function BookingModal({
  open,
  setOpen,
  bookingDetails,
  showSuccessMessage,
}) {
  const [email, setEmail] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");

  const availableSlots = {
    morning: ["11:30 AM"],
    afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  };

  const allSlots = [...availableSlots.morning, ...availableSlots.afternoon, ...availableSlots.evening];

  const handleBooking = (e) => {
    e.preventDefault();
    if (!selectedTime) {
      alert("Please select a time slot");
      return;
    }

    const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");

    localStorage.setItem(
      "bookings",
      JSON.stringify([
        ...bookings,
        {
          ...bookingDetails,
          bookingEmail: email,
          bookingDate: selectedDate,
          bookingTime: selectedTime,
        },
      ])
    );

    showSuccessMessage(true);
    setEmail("");
    setSelectedTime("");
    setOpen(false);
  };

  const formatDate = (day) => {
    if (!day) return null;
    return format(new Date(day), "E, d LLL");
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box
        sx={{
          width: "95%",
          maxWidth: 600,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: 24,
          p: { xs: 3, md: 4 },
          outline: 0,
          bgcolor: "#fff",
          borderRadius: 2,
        }}
      >
        <Typography component="h3" variant="h3" mb={2}>
          Confirm booking
        </Typography>
        <Typography fontSize={14} mb={3}>
          Booking for:{" "}
          <Box component="span" fontWeight={600}>
            {bookingDetails["Hospital Name"]}
          </Box>
        </Typography>

        {/* Day Selector */}
        <DaySelector
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          totalSlots={allSlots.length}
        />

     {/* Time Slot Selection */}
{Object.keys(availableSlots).map((session) => (
  <Box key={session} mb={2}>
    <Typography
      fontWeight={600}
      fontSize={16}
      color="#1B3C74"
      mb={1}
      textTransform="capitalize"
    >
      {session}
    </Typography>

    <Stack direction="row" flexWrap="wrap" spacing={1}>
      {availableSlots[session].map((slot, idx) => (
        <Chip
          key={idx}
          label={slot}
          clickable
          color={selectedTime === slot ? "primary" : "default"}
          onClick={() => setSelectedTime(slot)}
        />
      ))}
    </Stack>
  </Box>
))}


        <Divider sx={{ mb: 2 }} />

        <form onSubmit={handleBooking}>
          <Stack spacing={2}>
            <TextField
              type="email"
              label="Enter your email"
              variant="outlined"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Stack direction="row" spacing={1}>
              <Button type="submit" variant="contained" size="large" disableElevation>
                Confirm
              </Button>
              <Button
                variant="outlined"
                size="large"
                disableElevation
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>

        {/* Summary */}
        {selectedDate && selectedTime && (
          <Typography mt={2} fontSize={14}>
            Selected: {formatDate(selectedDate)} at {selectedTime}
          </Typography>
        )}
      </Box>
    </Modal>
  );
}
