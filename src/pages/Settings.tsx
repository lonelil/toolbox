import { Label } from "@/components/ui/label";
import MainLayout from "../components/layout/main";
import { useSettingsStore } from "../stores/settings";
import { Input } from "@/components/ui/input";

export default function Settings() {
  const { name, setName } = useSettingsStore();

  return (
    <MainLayout className="flex flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold">Settings</h1>

      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
      </div>
    </MainLayout>
  );
}
