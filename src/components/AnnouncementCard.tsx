
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AnnouncementCardProps {
  title: string;
  date: string;
  category: string;
  description: string;
}

const AnnouncementCard = ({ title, date, category, description }: AnnouncementCardProps) => {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Badge variant="outline" className="bg-school-blue/10 text-school-blue border-school-blue/30">
            {category}
          </Badge>
          <span className="text-xs text-gray-500">{date}</span>
        </div>
        <CardTitle className="mt-2 text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="pt-2">
        <a href="#" className="text-sm font-medium text-school-blue hover:text-school-light-blue transition-colors">
          Read More &rarr;
        </a>
      </CardFooter>
    </Card>
  );
};

export default AnnouncementCard;
