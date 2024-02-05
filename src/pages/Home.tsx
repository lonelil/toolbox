import {
  Button,
  Caption1,
  Card,
  CardHeader,
  Text,
} from "@fluentui/react-components";
import MainLayout from "../components/layout/main";
import { getTimedGreeting } from "../lib/utils";
import { useSettingsStore } from "../stores/settings";
import { MoreHorizontal20Regular } from "@fluentui/react-icons";

export default function Home() {
  const { name } = useSettingsStore();

  return (
    <MainLayout className="p-6">
      <h1 className="text-2xl font-semibold mb-2">
        {getTimedGreeting()}
        {name && `, ${name}`}.
      </h1>
      <div>
        <h2 className="mb-2 text-lg font-semibold">Popular Tools</h2>
        <div className="flex flex-wrap gap-4">
          {new Array(100).fill("").map((_, i) => (
            <Card key={i}>
              <CardHeader
                header={<Text weight="semibold">Base64 Decode</Text>}
                description={<Caption1>Base64 Decode</Caption1>}
                action={
                  <Button
                    appearance="transparent"
                    icon={<MoreHorizontal20Regular />}
                    aria-label="More options"
                  />
                }
              />
              <p>Base64 Decode</p>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
