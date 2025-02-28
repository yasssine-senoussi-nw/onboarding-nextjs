import { ImageContainer, StyledImage } from "~components/authImage/AuthImage.style";

import type { StaticImport } from "next/dist/shared/lib/get-img-props";

interface AuthImageProps {
  src: StaticImport | string;
  alt?: string;
}

export default function AuthImage({ src, alt }: AuthImageProps): JSX.Element {
  return (
    <ImageContainer>
      <StyledImage src={src} alt={alt ?? ""} fill={true} />
    </ImageContainer>
  );
}
