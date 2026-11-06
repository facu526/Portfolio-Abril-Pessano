import { getImageProps } from "next/image";

/**
 * Devuelve el mismo poster pasado por el optimizador de Next, para que el
 * atributo `poster` del <video> no descargue el JPG 1080x1920 original.
 */
export function optimizedPoster(src: string) {
  return getImageProps({ src, alt: "", width: 384, height: 683 }).props.src;
}
