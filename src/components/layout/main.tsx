import React from "react";
import { Button } from "@fluentui/react-components";
import { Home24Regular, Settings24Regular } from "@fluentui/react-icons";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

export default function MainLayout(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="flex">
      <div className="fixed z-40 hidden h-full max-h-screen w-16 flex-col items-center gap-4 p-3 lg:flex bg-[#222222]">
        {[
          {
            href: "/",
            icon: Home24Regular,
          },
          {
            href: "/settings",
            icon: Settings24Regular,
          },
        ].map((link, i) => (
          <Link to={link.href} key={i}>
            <Button className="min-w-[0!important]" appearance="subtle">
              <link.icon />
            </Button>
          </Link>
        ))}
      </div>
      <div
        className={cn(
          "relative w-full overflow-x-hidden lg:ml-16",
          props.className
        )}
      >
        {props.children}
      </div>
    </div>
  );
}
