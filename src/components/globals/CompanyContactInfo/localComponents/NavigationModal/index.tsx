import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useMapOptions } from "./hooks/useMapOptions";

interface NavigationModalProps {
  address: string;
  googleMapsLink?: string;
  wazeLink?: string;
  /** @deprecated Use onAppleMapsClick para geolocalização dinâmica */
  appleMapsLink?: string;
  onAppleMapsClick?: () => void;
}

export function NavigationModal({
  address,
  googleMapsLink,
  wazeLink,
  appleMapsLink,
  onAppleMapsClick,
}: NavigationModalProps) {
  const mapOptions = useMapOptions({
    googleMapsLink,
    wazeLink,
    appleMapsLink,
    onAppleMapsClick,
  });

  const sharedClassName =
    "flex min-h-14 flex-col cursor-pointer items-center justify-center gap-1 rounded-md border border-border p-1.5 text-[10px] font-medium transition-colors hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring xs:min-h-16 xs:gap-1 xs:p-2 xs:text-[11px] smm:min-h-[72px] smm:gap-1.5 smm:p-2 smm:text-xs sm:min-h-24 sm:gap-2 sm:p-3 sm:text-sm";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="cursor-pointer text-left text-zinc-400 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E51515] focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
        >
          {address}
        </button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Como deseja navegar?</DialogTitle>
          <DialogDescription>
            Escolha o aplicativo para traçar a rota.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-3 gap-3">
          {mapOptions.map(({ name, href, onClick, iconSrc }) =>
            onClick ? (
              <button
                key={name}
                type="button"
                onClick={onClick}
                className={sharedClassName}
              >
                <img
                  src={iconSrc}
                  alt=""
                  aria-hidden="true"
                  className="size-8 object-contain xs:size-8 smm:size-8 sm:size-8"
                />
                <span className="text-center">{name}</span>
              </button>
            ) : (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={sharedClassName}
              >
                <img
                  src={iconSrc}
                  alt=""
                  aria-hidden="true"
                  className="size-8 object-contain xs:size-8 smm:size-8 sm:size-8"
                />
                <span className="text-center">{name}</span>
              </a>
            )
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
