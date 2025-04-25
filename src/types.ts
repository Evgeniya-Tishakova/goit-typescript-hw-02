export interface Image {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
    full: string;
    thumb: string;
  };
  user: {
    name: string;
    username: string;
  };
}
