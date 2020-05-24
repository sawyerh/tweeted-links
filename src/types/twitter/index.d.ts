declare module "twitter" {
  export = Twitter;

  declare class Twitter {
    constructor(options: Options);

    get(path: string, params?: any): Promise<Tweet[]>;
  }

  declare namespace Twitter {
    type Link = string;

    interface Options {
      consumer_key: string;
      consumer_secret: string;
      access_token_key: string;
      access_token_secret: string;
    }

    interface URLEntity {
      // URL pasted/typed into Tweet (e.g. bit.ly/2so49n2)
      display_url: string;
      // Expanded version of display_url (e.g. http://bit.ly/2so49n2)
      expanded_url: string;
    }

    interface Tweet {
      id: number;
      entities: {
        urls: URLEntity[];
      };
      user: {
        name: string;
        profile_background_color: string; // hex without #
        profile_image_url_https: Link;
        screen_name: string;
      };
      text: string;
    }

    interface Media {
      media_url_https: Link;
      sizes: {
        thumb: MediaSizeEntry;
      };
      type: "photo" | string;
    }

    interface MediaSizeEntry {
      w: number;
      h: number;
      resize: "crop" | "fit";
    }
  }
}
