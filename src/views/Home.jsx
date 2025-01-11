import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Home = () => {
  const aidHistory = [
    {
      title: "Emergency Relief",
      details: "Financial assistance for medical expenses",
      datetime: "2024-03-15 14:30",
      status: "Completed",
      type: "Cash Assistance",
    },
    {
      title: "Food Package",
      details: "Monthly food supplies",
      datetime: "2024-03-01 09:15",
      status: "Delivered",
      type: "Goods",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">History of Ayuda</h2>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Details</TableHead>
                <TableHead>Date/Time</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Type of Aid</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {aidHistory.map((aid, index) => (
                <TableRow key={index}>
                  <TableCell>{aid.title}</TableCell>
                  <TableCell>{aid.details}</TableCell>
                  <TableCell>{aid.datetime}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        aid.status.toLowerCase() === "completed"
                          ? "success"
                          : "secondary"
                      }
                    >
                      {aid.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{aid.type}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
