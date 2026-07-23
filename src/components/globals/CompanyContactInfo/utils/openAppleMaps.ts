/**
 * Abre o Apple Maps com rota partindo da localização atual do usuário
 * até o endereço de destino informado.
 *
 * - Se a geolocalização estiver disponível e for autorizada, passa as
 *   coordenadas exatas como origem (saddr).
 * - Caso contrário, abre apenas com o destino (daddr).
 *
 * @param destinoEndereco - Endereço de destino em texto (ex: "Av. Arlindo Massaro 395, Uberlândia, MG")
 */
export function openAppleMaps(destinoEndereco: string): void {
  const destinoEncoded = encodeURIComponent(destinoEndereco);

  // Verifica se o navegador suporta geolocalização
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        // Passa as coordenadas exatas na origem (saddr)
        const url = `https://maps.apple.com/?saddr=${lat},${lng}&daddr=${destinoEncoded}&dirflg=d`;
        window.open(url, "_blank");
      },
      (error) => {
        // Se o usuário recusar a localização, abre só com o destino
        console.warn("Geolocalização recusada ou indisponível:", error);
        const url = `https://maps.apple.com/?daddr=${destinoEncoded}&dirflg=d`;
        window.open(url, "_blank");
      }
    );
  } else {
    // Fallback se o navegador for muito antigo
    const url = `https://maps.apple.com/?daddr=${destinoEncoded}&dirflg=d`;
    window.open(url, "_blank");
  }
}
