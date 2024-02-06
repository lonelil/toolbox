import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MainLayout from "../components/layout/main";
import { getTimedGreeting } from "../lib/utils";
import { useSettingsStore } from "../stores/settings";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { tools } from "./Tool";

export default function Home() {
  const { name } = useSettingsStore();

  return (
    <MainLayout className="p-8">
      <h1 className="mb-6 text-2xl font-semibold">
        {getTimedGreeting()}
        {name && `, ${name}`}.
      </h1>
      <div>
        <h2 className="mb-2 text-lg font-semibold">Popular Tools</h2>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {tools.map((tool, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <Link to={`/tool/${tool.id}`}>
                  <Card>
                    <CardHeader>
                      <CardTitle>{tool.name}</CardTitle>
                      <CardDescription>{tool.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </MainLayout>
  );
}
