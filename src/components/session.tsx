import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import SessionProps from "@/types/sessionProps"

export default function SessionEntry({ title, description, duration, date }: SessionProps) {
  return (
    <div>
      <Card>
        <CardHeader >
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent >
          <p>Duration: {duration} </p>
          <p>Date: {date?.toDateString() ?? "bruh"}</p>
        </CardContent>
      </Card>
    </div >
  )
}
