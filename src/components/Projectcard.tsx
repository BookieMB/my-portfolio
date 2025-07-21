import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  demoLink?: string;
  repoLink?: string;
  tech?: string[];
}

export default function ProjectCard({
  title,
  description,
  image,
  demoLink,
  repoLink,
  tech,
}: ProjectCardProps) {
  return (
    <Card className="w-full max-w-md shadow-md transition hover:shadow-lg rounded-2xl">
      <img src={image} alt={title} className="rounded-t-2xl object-cover h-48 w-full" />
      <CardContent className="space-y-3 p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
        {tech && (
          <div className="flex flex-wrap gap-2 text-xs">
            {tech.map((item) => (
              <span
                key={item}
                className="bg-gray-200 text-gray-800 rounded-full px-2 py-1"
              >
                {item}
              </span>
            ))}
          </div>
        )}
        <div className="flex justify-end gap-2 pt-2">
          {demoLink && (
            <Button asChild variant="outline" size="sm">
              <a href={demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </Button>
          )}
          {repoLink && (
            <Button asChild variant="outline" size="sm">
              <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
