import MainLayout from "@/components/layout/main";
import Base64Tool from "@/components/tools/Base64Tool";
import { useParams } from "react-router-dom";

const tools = [
  {
    id: "base64",
    name: "Base64",
    description: "Base64 Encode/Decode",
    component: <Base64Tool />,
  },
];

export default function Tool() {
  const { toolId } = useParams();
  const tool = tools.find((t) => t.id === toolId);

  if (!tool) return <MainLayout>Tool not found</MainLayout>;

  const ToolComponent = tool.component;

  if (ToolComponent)
    return (
      <MainLayout className="p-8">
        <h1 className="text-2xl font-semibold">{tool.name}</h1>
        <h2 className="text-sm text-muted-foreground mb-4">{tool.description}</h2>
        {ToolComponent}
      </MainLayout>
    );
}
