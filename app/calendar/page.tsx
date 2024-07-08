"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

const CalendarDemo = () =>{
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="flex justify-center pt-20 m-4">
      <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
    </div>
    
  )
}

export default CalendarDemo;
