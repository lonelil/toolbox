import MainLayout from "@/components/layout/main";
import Base64 from "@/components/tools/Base64";
import DiffViewer from "@/components/tools/DiffViewer";
import Hash from "@/components/tools/Hash";
import UUID from "@/components/tools/UUID";
import UrlEncode from "@/components/tools/UrlEncode";
import { useParams } from "react-router-dom";

export const tools = [
  {
    id: "base64",
    name: "Base64",
    description: "Base64 Encode/Decode",
    component: <Base64 />,
  },
  {
    id: "diff-viewer",
    name: "Diff Viewer",
    description: "Compare two versions of code or text files.",
    component: <DiffViewer />,
  },
  {
    id: "uuid",
    name: "UUID Generator",
    description: "UUID Generator",
    component: <UUID />,
  },
  {
    id: "hash",
    name: "Hash Generator",
    description: "Hash Generator",
    component: <Hash />,
  },
  {
    id: "url",
    name: "Url Encode",
    description: "Url Encode/Decode",
    component: <UrlEncode />,
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
        <h2 className="mb-4 text-sm text-muted-foreground">
          {tool.description}
        </h2>
        {ToolComponent}
      </MainLayout>
    );
}
