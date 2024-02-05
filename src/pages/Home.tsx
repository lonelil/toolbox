import { Card, CardHeader } from "@/components/ui/card";
import MainLayout from "../components/layout/main";
import { getTimedGreeting } from "../lib/utils";
import { useSettingsStore } from "../stores/settings";

export default function Home() {
  const { name } = useSettingsStore();

  return (
    <MainLayout className="p-6">
      <h1 className="mb-2 text-2xl font-semibold">
        {getTimedGreeting()}
        {name && `, ${name}`}.
      </h1>
      <div>
        <h2 className="mb-2 text-lg font-semibold">Popular Tools</h2>
        <div className="flex flex-wrap gap-4">
          {new Array(100).fill("").map((_, i) => (
            <Card key={i}>
              <CardHeader>Base64 Decode</CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
