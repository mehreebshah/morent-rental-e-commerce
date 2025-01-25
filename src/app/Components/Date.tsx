"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Date = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  return (
    <div className="max-w-48 space-y-4">
      {/* Date Selector */}
      <div>
        <label className="block text-gray-700 font-bold text-2xl mb-2">
          Date
        </label>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          className="rounded-md"
          dateFormat="MMMM d, yyyy"
          placeholderText="Select a date"
        />
        {selectedDate && (
          <p className="text-sm text-gray-600 mt-2">
            You selected:{" "}
            <span className="font-bold">
              {selectedDate.toLocaleDateString()}
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Date;
