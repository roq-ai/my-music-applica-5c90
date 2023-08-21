import { SongPlatformInterface } from 'interfaces/song-platform';
import { GetQueryInterface } from 'interfaces';

export interface PlatformInterface {
  id?: string;
  name: string;
  url: string;
  created_at?: any;
  updated_at?: any;
  song_platform?: SongPlatformInterface[];

  _count?: {
    song_platform?: number;
  };
}

export interface PlatformGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  url?: string;
}
