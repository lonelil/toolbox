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

  if (ToolComponent) return <MainLayout>{ToolComponent}</MainLayout>;
}
