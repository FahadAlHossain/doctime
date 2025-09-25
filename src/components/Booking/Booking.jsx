import React, { useContext } from "react";
import { BookingContext } from "../../context/BookingContext";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
          ${x + width / 2},${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height}
          ${x + width},${y + height}
          Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Booking = () => {
  const { bookings, cancelBooking } = useContext(BookingContext);

  const chartData = bookings.map((doc) => ({
    name: doc.name,
    fee: doc.fee,
  }));

  return (
    <div className="text-black">
      {bookings.length === 0 ? (
        <div className="bg-white lg:container md:w-[90%] w-[90%] mx-auto p-8 rounded-3xl shadow-sm my-5">
          <h1 className="text-5xl font-bold text-center">No bookings yet</h1>
          <p className="text-center font-semibold text-lg text-slate-500 my-3">
            Get Your Appointments now
          </p>
        </div>
      ) : (
        <div>
          <div className="text-center w-[90%] mx-auto">
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold mt-8">
              My Today Appointments
            </h1>
            <p className="lg:text-lg md:text-lg text-sm my-2">
              Our platform connects you with verified, experienced doctors
              across various specialties — all at your convenience.
            </p>
          </div>

          <div className="bg-white lg:container md:w-[90%] w-[90%] mx-auto p-8 rounded-3xl shadow-sm my-5">
            <h2 className="text-xl font-bold mb-4">Consultation Fees</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar
                  dataKey="fee"
                  shape={<TriangleBar />}
                  label={{ position: "top" }}
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={colors[index % colors.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>

          </div>
          {bookings.map((doc) => (
            <div
              key={doc.regNo}
              className="bg-white h-fit lg:container md:w-[90%] w-[90%] py-6 mx-auto my-10 rounded-3xl shadow-sm"
            >
              <div className="flex items-center justify-between w-[80%] mx-auto">
                <div className="mb-2">
                  <h1 className="lg:text-2xl md:text-xl text-lg font-bold">
                    {doc.name}
                  </h1>
                  <p className="lg:text-lg text-sm">{doc.qualification}</p>
                </div>
                <div>
                  <p className="lg:text-lg md:text-sm text-xs text-slate-500">
                    Appointment Fee: {doc.fee} Taka + Vat
                  </p>
                </div>
              </div>
              <div className="border-b-2 border-dashed border-slate-500 w-[85%] mx-auto my-3"></div>
              <div className="w-[85%] mx-auto">
                <button
                  onClick={() => cancelBooking(doc.regNo)}
                  className="border-2 border-red-400 w-full rounded-3xl font-bold text-red-400 lg:text-lg md:text-lg text-sm p-2 my-5 cursor-pointer"
                >
                  Cancel Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Booking;
