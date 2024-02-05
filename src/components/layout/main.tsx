import React from "react";
import { Button } from "@fluentui/react-components";
import { Home24Regular, Settings24Regular } from "@fluentui/react-icons";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import { appWindow } from "@tauri-apps/api/window";

export default function MainLayout(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="flex">
      <div
        data-tauri-drag-region
        className="fixed z-50 top-0 w-screen flex justify-between bg-[#222222] h-6 items-center"
      >
        <div className="flex items-center space-x-1.5 pl-2">
          <img src="/app-icon.png" width={20} height={20} alt="Logo" className="rounded-md" />
          <h1 className="font-semibold">
            <Link to="/">Toolbox</Link>
          </h1>
        </div>
        <div className="space-x-2 pr-2">
          <Button
            onClick={() => void appWindow.minimize()}
            className="h-full min-w-[0!important]"
            appearance="subtle"
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAIAAADXZGvcAAABgmlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rw2Ecx1/biGaa4uDgsDRKjYZaXBy2GIXDNmW4bF/7ofbj2/e7peWqXFeUuPh14C/gqpyVIlJylDNxQV+f76Ym2efp+Tyv5/18Pp+e5/OANZJRsnqDF7K5ghYK+l3z0QVX0xN2nFjowxJTdHUmPBGhrr3fSqTYdb9Zq37cv9aynNAVsDQLjymqVhCeFJ5eLagmbwl3KOnYsvCJsEeTCwrfmHq8ys8mp6r8abIWCQXA2ibsSv3i+C9W0lpWWF6OO5spKj/3MV/iSOTmwrJ2y+xCJ0QQPy6mGCeAj0FGxfvoZ4gB2VEn31vJnyUvuYp4lRIaK6RIU8AjalGqJ2RNip6QkaFk9v9vX/Xk8FC1usMPjY+G8doDTZvwVTaMjwPD+DoE2wOc52r5+X0YeRO9XNPce+Bch9OLmhbfhrMN6LxXY1qsItlkWpNJeDmG1ii0X4F9sdqzn3OO7iCyJl91CTu70CvxzqVvKd9nyv0pfhoAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAVSURBVAiZY/z//z8DuYCJbJ0MDAwAaBUDAcKxLksAAAAASUVORK5CYII="
              alt="minimize"
              width={12}
            />
          </Button>
          <Button
            onClick={() => void appWindow.toggleMaximize()}
            className="h-full min-w-[0!important]"
            appearance="subtle"
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABgmlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rw2Ecx1/biGaa4uDgsDRKjYZaXBy2GIXDNmW4bF/7ofbj2/e7peWqXFeUuPh14C/gqpyVIlJylDNxQV+f76Ym2efp+Tyv5/18Pp+e5/OANZJRsnqDF7K5ghYK+l3z0QVX0xN2nFjowxJTdHUmPBGhrr3fSqTYdb9Zq37cv9aynNAVsDQLjymqVhCeFJ5eLagmbwl3KOnYsvCJsEeTCwrfmHq8ys8mp6r8abIWCQXA2ibsSv3i+C9W0lpWWF6OO5spKj/3MV/iSOTmwrJ2y+xCJ0QQPy6mGCeAj0FGxfvoZ4gB2VEn31vJnyUvuYp4lRIaK6RIU8AjalGqJ2RNip6QkaFk9v9vX/Xk8FC1usMPjY+G8doDTZvwVTaMjwPD+DoE2wOc52r5+X0YeRO9XNPce+Bch9OLmhbfhrMN6LxXY1qsItlkWpNJeDmG1ii0X4F9sdqzn3OO7iCyJl91CTu70CvxzqVvKd9nyv0pfhoAAAAJcEhZcwAADsQAAA7EAZUrDhsAAADUSURBVDiN7ZQxbsIwGEZt1AEFqeoGB+g1uAEcgXu0ZynKyEU4AkvX9gwgEMN7LE4UggIJZGDgTfZv6fnzb8sh1FAzIAe2XgE4AhvgGxjVPSXA8pqoQf4LfDZKb6FGdQIsgL+KtDlpW4Ax8J/CflV7tu9wxD2Qq1mSLlJ9E9LCXQB5asEkzY+hSAbM2/YPmBdJU+2j2CSUgw6cCWrzQbcruM1L+GRCddd3wlUv7xB4B37UrBSq8V5hlTf1EGMcqjN13VI4jTEG9XCx2MfnUN/t4e+ryglyqi+I6thflQAAAABJRU5ErkJggg=="
              alt="maximize"
              width={12}
            />
          </Button>
          <Button
            onClick={() => void appWindow.close()}
            className="h-full min-w-[0!important]"
            appearance="subtle"
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABgmlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rw2Ecx1/biGaa4uDgsDRKjYZaXBy2GIXDNmW4bF/7ofbj2/e7peWqXFeUuPh14C/gqpyVIlJylDNxQV+f76Ym2efp+Tyv5/18Pp+e5/OANZJRsnqDF7K5ghYK+l3z0QVX0xN2nFjowxJTdHUmPBGhrr3fSqTYdb9Zq37cv9aynNAVsDQLjymqVhCeFJ5eLagmbwl3KOnYsvCJsEeTCwrfmHq8ys8mp6r8abIWCQXA2ibsSv3i+C9W0lpWWF6OO5spKj/3MV/iSOTmwrJ2y+xCJ0QQPy6mGCeAj0FGxfvoZ4gB2VEn31vJnyUvuYp4lRIaK6RIU8AjalGqJ2RNip6QkaFk9v9vX/Xk8FC1usMPjY+G8doDTZvwVTaMjwPD+DoE2wOc52r5+X0YeRO9XNPce+Bch9OLmhbfhrMN6LxXY1qsItlkWpNJeDmG1ii0X4F9sdqzn3OO7iCyJl91CTu70CvxzqVvKd9nyv0pfhoAAAAJcEhZcwAADsQAAA7EAZUrDhsAAACdSURBVDiNrZXBEcMwCASRG1A9Sen+WzPuwS7ADYgTn/PDr8woiYzhzS2DgJMY6t6ghWQWZ5DMDboY6jZR0pFEXgbMHijJbMCcRN6UdFx01dWgbKrrHehXrQf6V3MHOpw7kni7m18C93v3hE+G14U+gvWgo7DJVckToS2HDiV0bUIXO/T0Qs0h3L4up/VfwAcUWsRQtwZdAr6AYqj7CRghR/2J9L5JAAAAAElFTkSuQmCC"
              alt="close"
              width={12}
            />
          </Button>
        </div>
      </div>
      <div className="fixed z-40 flex h-full max-h-screen w-16 flex-col items-center gap-4 p-3 bg-[#222222] mt-6">
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
          "relative w-full overflow-x-hidden ml-16 mt-6",
          props.className
        )}
      >
        {props.children}
      </div>
    </div>
  );
}
