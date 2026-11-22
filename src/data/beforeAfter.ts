export interface BeforeAfterConfig {
  hasRealPhotos: boolean;
  beforeImage?: string;
  afterImage?: string;
}

// Set to true once authentic Bangalore job photos have been captured and authorized
export const beforeAfterConfig: BeforeAfterConfig = {
  hasRealPhotos: false,
  beforeImage: "/images/gallery/sangeetha-before-balcony-installation.webp",
  afterImage: "/images/main-images/sangeetha-balcony-invisible-grills-bangalore.webp",
};

