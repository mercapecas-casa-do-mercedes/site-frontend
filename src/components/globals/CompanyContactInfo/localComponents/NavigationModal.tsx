import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface NavigationModalProps {
  address: string;
  googleMapsLink?: string;
  wazeLink?: string;
  appleMapsLink?: string;
}

interface MapOption {
  name: string;
  href: string;
  iconSrc: string;
}


export function NavigationModal({
  address,
  googleMapsLink,
  wazeLink,
  appleMapsLink,
}: NavigationModalProps) {
  const mapOptions: MapOption[] = [
  googleMapsLink && {
    name: "Google Maps",
    href: googleMapsLink,
    iconSrc: "/assets/images/icons/google-maps-icon.png",
  },
  wazeLink && {
    name: "Waze",
    href: wazeLink,
    iconSrc: "/assets/images/icons/waze-icon.png",
  },
  appleMapsLink && {
    name: "Apple Maps",
    href: appleMapsLink,
    iconSrc: "/assets/images/icons/apple-map-icon.png",
  },
].filter((option): option is MapOption => Boolean(option));

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
            Escolha seu aplicativo de mapas para traçar a rota até nossa loja.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-3 gap-3">
          {mapOptions.map(({ name, href, iconSrc }) => (
  <a
    key={name}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-md border border-border p-1.5 text-[10px] font-medium transition-colors hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring xs:min-h-16 xs:gap-1 xs:p-2 xs:text-[11px] smm:min-h-[72px] smm:gap-1.5 smm:p-2 smm:text-xs sm:min-h-24 sm:gap-2 sm:p-3 sm:text-sm"
  >
    <img
      src={iconSrc}
      alt=""
      aria-hidden="true"
      className="size-5 object-contain xs:size-6 smm:size-6 sm:size-8"
    />
    <span className="text-center">{name}</span>
  </a>
))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
