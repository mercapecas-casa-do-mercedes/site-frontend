import { useMemo } from "react";

export interface MapOption {
  name: string;
  iconSrc: string;
  href?: string;
  onClick?: () => void;
}

interface UseMapOptionsParams {
  googleMapsLink?: string;
  wazeLink?: string;
  appleMapsLink?: string;
  onAppleMapsClick?: () => void;
}

export function useMapOptions({
  googleMapsLink,
  wazeLink,
  appleMapsLink,
  onAppleMapsClick,
}: UseMapOptionsParams): MapOption[] {
  return useMemo(
    () =>
      (
        [
          googleMapsLink
            ? {
                name: "Google Maps",
                href: googleMapsLink,
                iconSrc: "/assets/images/icons/google-maps-icon.png",
              }
            : undefined,
          wazeLink
            ? {
                name: "Waze",
                href: wazeLink,
                iconSrc: "/assets/images/icons/waze-icon.png",
              }
            : undefined,
          onAppleMapsClick || appleMapsLink
            ? {
                name: "Apple Maps",
                href: onAppleMapsClick ? undefined : appleMapsLink,
                onClick: onAppleMapsClick,
                iconSrc: "/assets/images/icons/apple-map-icon.png",
              }
            : undefined,
        ] as (MapOption | undefined)[]
      ).filter((option): option is MapOption => option !== undefined),
    [googleMapsLink, wazeLink, appleMapsLink, onAppleMapsClick]
  );
}
