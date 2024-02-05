import MainLayout from "../components/layout/main";
//import { useSettingsStore } from "../stores/settings";

export default function Settings() {
  //const { name, setName } = useSettingsStore();

  return (
    <MainLayout className="space-y-4 p-6">
      <h1 className="text-2xl font-semibold">Settings</h1>

      {/*}      <Label htmlFor="name">Name:</Label>
      <Input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
  />*/}
    </MainLayout>
  );
}
